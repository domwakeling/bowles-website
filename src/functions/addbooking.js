/*  eslint-disable no-unused-vars */

import newClient from "../lib/db";
import modes from "../lib/modes";
import nums from "../lib/racernums";

export async function handler(event, context) {
    // TODO: VALIDATE JWT?

    // retrieve info from body and validate
    const { userid, name, day, mode, prev } = JSON.parse(event.body);
    if (!/^\d{8}$/.test(day) || !userid || !name) {
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

        const maxRacers = mode == modes.FRIDAY ? (day == '21052021' ? nums.RACE : nums.FRIDAY ) : nums.TUESDAY;

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
            // if Friday, check they didn't book last week (and its weekend now)
            const today = new Date().getDay();
            if((today == 0 || today == 6) && mode == modes.FRIDAY) {
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
                                message: `That racer trained last Friday. In order to ensure all
                                    members get a chance to train, please wait until Monday before
                                    booking them in to this Friday's session.`,
                                status: 409
                            })
                        };
                }
            }
            // if Tuesday, check they didn't book last week (and its Weds/Thurs now)
            if ((today == 3 || today == 4) && mode == modes.TUESDAY) {
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
}
