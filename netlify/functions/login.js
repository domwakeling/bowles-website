/* eslint-disable no-unreachable */
const bcrypt = require("bcryptjs");
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


// eslint-disable-next-line no-unused-vars
exports.handler = async function (event, context) {
    const { email, password } = JSON.parse(event.body);

    try {
        // connect to DB
        const client = newClient();
        const dbname = process.env.DB_NAME || "nextjsauth";
        await client.connect();

        // look for item on the db
        const db = client.db(dbname);
        const user = await db.collection("users").findOne({ email });
        client.close();
        if (user && bcrypt.compareSync(password, user.password)) {
            const token = userToken.createToken(user._id);
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "Successfully logged in",
                    user_id: user._id,
                    racers: user.racers,
                    status: 200,
                }),
                headers: {
                    "Set-Cookie": `userToken=${token}; Max-Age=${userToken.maxAge}; httpOnly; SameSite=Strict`,
                },
            };
        } else if (user) {
            return {
                statusCode: 401,
                body: JSON.stringify({
                    message: "Password incorrect",
                    status: 401,
                }),
            };
        } else {
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "That email address is not registered",
                    status: 400,
                }),
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
