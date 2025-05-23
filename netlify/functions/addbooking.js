/*  eslint-disable no-unused-vars */
const { MongoClient } = require('mongodb');

const newClient = () => {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
    return new MongoClient(uri, { useUnifiedTopology: true });
};

const modes = {
    FRIDAY: 0,
    TUESDAY: 1,
    WELCOME: 2,
    LOGGING_IN: 3,
    SIGNING_UP: 4,
    ADDING_RACER: 5,
};

const nums = {
    TUESDAY: 8,
    FRIDAY: 25,
    RACE: 45,
};

exports.handler = async function (event, context) {
    // TODO: VALIDATE JWT?

    // retrieve info from body and validate
    const { userid, name, day, mode, prev, club } = JSON.parse(event.body);
    if (!/^\d{8}$/.test(day) || !userid || !name || !club) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: "incorrect request format" }),
        };
    }

    try {
        // connect to DB
        const client = newClient();
        const dbname = process.env.DB_NAME || "nextjsauth";
        await client.connect();

        // retrieve bookings information with error catching
        const db = client.db(dbname);

        const bookings = await db.collection("bookings").findOne({
            forWeek: day,
        });

        let racersCount = 0;
        let racerFound = false;

        // if no booking was found set one up; expire after 30 days (minimise db size)
        if (!bookings) {
            await db.collection("bookings").insertOne({
                forWeek: day,
                racers: [],
                expireAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
            });
        } else {
            racersCount = bookings.racers.length;
            racerFound =
                bookings.racers.filter(r => r.userid == userid && r.name == name).length >
                0;
        }

        // also change in /src/components/booking/Bookings.jsx
        const nextRace = "18042025";
        const maxRacers = mode == modes.FRIDAY ? (day == nextRace ? nums.RACE : nums.FRIDAY ) : nums.TUESDAY;

        // no space and racer wasn't found
        if (racersCount >= maxRacers && !racerFound) {
            client.close();
            return {
                statusCode: 400,
                body: JSON.stringify({ message: "No places available", status: 400 }),
            };
        }

        // space and racer wasn't found
        if (racersCount < maxRacers && !racerFound) {
            const today = new Date();
            const weekday = today.getDay();
            const hour = today.getHours();
            // if it's a fun-race and they're not a Bowles racer, not allowed
            if (day == nextRace && club !='Bowles') {
                client.close();
                return {
                    statusCode: 409,
                    body: JSON.stringify({
                        message: `That racer represents another club at races. Unfortunately
                            they cannot take part in this week's fun race.`,
                        status: 409
                    })
                };
            }
            // if Friday, check whether they are a Bowles racer or not and its Friday night through Saturday
            if ((weekday == 0 || weekday == 6 || (weekday == 5 && hour > 17)) && mode == modes.FRIDAY) {
                if (club !== 'Bowles') {
                    client.close();
                    return {
                        statusCode: 409,
                        body: JSON.stringify({
                            message: `That racer represents another club at races. Please wait until
                                Monday before booking them in to this Friday's session.`,
                            status: 409
                        })
                    };
                }
            }
            // if Tuesday, check they didn't book last week/aren't Bowles (and its Tues night through Thursday now)
            if ((weekday == 3 || weekday == 4 || ( weekday == 2 && hour > 15)) && mode == modes.TUESDAY) {
                // look for previous week's booking
                const prevWeek = await db.collection("bookings").findOne({
                    forWeek: prev,
                });
                // check there is an entry and find out if this racer was booked in
                if (prevWeek &&
                    prevWeek.racers.filter(r => r.userid == userid && r.name == name).length > 0) {
                    client.close();
                    return {
                        statusCode: 409,
                        body: JSON.stringify({
                            message: `That racer trained last Tuesday. In order to ensure all
                                    members get a chance to train, please wait until Friday before
                                    booking them in to this Tuesday's session.`,
                            status: 409
                        })
                    };
                }
                // check they're a Bowles racer
                if (club !== 'Bowles') {
                    client.close();
                    return {
                        statusCode: 409,
                        body: JSON.stringify({
                            message: `That racer represents another club at races. Please wait until
                                Friday before booking them in to this Tuesday's session.`,
                            status: 409
                        })
                    };
                }
            }
            // it's not friday/weekend, or not tuesday/midweek, or they didn't train previous session
            await db
                .collection("bookings")
                .updateOne({ forWeek: day }, { $addToSet: { racers: { userid, name } } });
            client.close();
            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Booking confirmed", status: 200 }),
            };
        }

        // racer was found, omit them
        await db
            .collection("bookings")
            .updateOne({ forWeek: day }, { $pull: { racers: { userid, name } } });

        client.close();
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Booking cancelled", status: 200 }),
        };

    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message }),
            status: 500,
        };
    }
};
