const jwt = require("jsonwebtoken");
const { MongoClient } = require('mongodb');

const newClient = () => {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017";
    return new MongoClient(uri, { useUnifiedTopology: true });
};

const max_age = 24 * 60 * 60;
const jwtsecret = process.env.JWT_SECRET || "a secret for local JWT testing";

const userToken = {
    maxAge: max_age,

    createToken: id => {
        return jwt.sign({ id }, jwtsecret, { expiresIn: max_age });
    },

    // validateTokenId is used to veridy a token AND check that the id is valid
    validateTokenId: async token => {
        try {
            const data = jwt.verify(token, jwtsecret);
            if (data.id) {
                const dbname = process.env.DB_NAME || "nextjsauth";
                const client = newClient();
                await client.connect();
                // look for item on the db
                const db = client.db(dbname);
                if (
                    (await db.collection("users").countDocuments({ _id: data.id })) > 0
                ) {
                    client.close();
                    return data.id;
                } else {
                    client.close();
                    return null;
                }
            } else {
                // there was no data.id
                return null;
            }
        } catch (err) {
            return null;
        }
    },

    // verifyToken is only used to verify that the token is signed and in-date; returns id or null
    verifyToken: token => {
        try {
            const data = jwt.verify(token, jwtsecret);
            if (data.id) {
                return data.id;
            } else {
                return null;
            }
        } catch (err) {
            return null;
        }
    },
};

exports.handler = async function (event) {
    try {
        const token = event.headers.cookie.match(
            /userToken=?([a-zA-Z0-9\-_.]+).*/
        )[1];
        const id = await userToken.validateTokenId(token);
        if (id) {
            // we know there's a token and racer id, see whether there are any racers ...
            const client = newClient();
            const dbname = process.env.DB_NAME || "nextjsauth";
            await client.connect();

            // look for user on the db to get their racers; we've already checked that id exists
            // and have validated the JWT ...
            const db = client.db(dbname);
            const user = await db.collection("users").findOne({ _id: id });

            return {
                statusCode: 200,
                body: JSON.stringify({ id, racers: user.racers }),
                status: 200,
            };
        } else {
            return {
                statusCode: 204,
            };
        }
    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message }),
            status: 500,
        };
    }
};
