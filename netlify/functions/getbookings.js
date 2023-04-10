/*  eslint-disable no-unused-vars */
const{ MongoClient } = require('mongodb');

const newClient = () => {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
    return new MongoClient(uri, { useUnifiedTopology: true });
};

// TODO: validate JWT?

exports.handler = async function (event, context) {
    // get required days from path and verify 8-digits, return error if not found or verified
    const days = event.queryStringParameters;
    if (
        !days.fri ||
        !days.tue ||
        !/^\d{8}$/.test(days.fri) ||
        !/^\d{8}$/.test(days.tue)
    ) {
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
        return db
            .collection("bookings")
            .find({
                forWeek: { $in: [days.tue, days.fri] },
            })
            .toArray()
            .then(data => {
                // if data found, work through it
                if (data) {
                    let racers = [[], []];
                    for (const element of data) {
                        if (element.racers && element.racers.length > 0) {
                            if (element.forWeek == days.fri) {
                                racers[0] = JSON.parse(JSON.stringify(element.racers));
                            } else if (element.forWeek == days.tue) {
                                racers[1] = JSON.parse(JSON.stringify(element.racers));
                            }
                        }
                    }
                    return {
                        statusCode: 200,
                        body: JSON.stringify({ racers: racers }),
                    };
                } else {
                    // data found but not an error => noone signed up yet, return empty racers array
                    return {
                        statusCode: 200,
                        body: JSON.stringify({ racers: [[], []] }),
                    };
                }
            })
            .catch(err => {
                return {
                    statusCode: 400,
                    body: JSON.stringify({ message: err.message }),
                };
            })
            .finally(() => {
                client.close();
            });

    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message }),
            status: 500,
        };
    }
};
