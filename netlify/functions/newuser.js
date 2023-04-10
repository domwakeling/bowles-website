const isEmail = require("validator/lib/isEmail");
const { nanoid } = require("nanoid");
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


exports.handler = async function (event) {
    const clubSecret = process.env.CLUB_SECRET || "Club secret";

    const { email, password, secret } = JSON.parse(event.body);

    if (!isEmail(email)) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "The email you entered is invalid.",
                status: 400,
            }),
        };
    }

    // check secret is correct
    if (secret !== clubSecret) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: "The secret you have entered is incorrect.",
                status: 400,
            }),
        };
    }

    try {
        // connect to DB
        const client = newClient();
        const dbname = process.env.DB_NAME || "nextjsauth";
        await client.connect();

        // check whether the email already exists and if so error out
        const db = client.db(dbname);
        if ((await db.collection("users").countDocuments({ email })) > 0) {
            client.close();
            return {
                statusCode: 400,
                body: JSON.stringify({
                    message: "That email already exists",
                    status: 400,
                }),
            };
        }

        // insert user into database; catch if there's a DB error
        const user = await db
            .collection("users")
            .insertOne({
                _id: nanoid(12),
                email,
                password: bcrypt.hashSync(password, 10),
                racers: [],
            })
            .then(({ ops }) => ops[0])
            .catch(err => {
                client.close();
                return {
                    statusCode: 500,
                    body: JSON.stringify({ message: err.message, status: 500 }),
                };
            });

        client.close();
        const token = userToken.createToken(user._id);
        return {
            statusCode: 201,
            body: JSON.stringify({
                message: "Successfully signed up",
                user_id: user._id,
                status: 200,
            }),
            headers: {
                "Set-Cookie": `userToken=${token}; Max-Age=${
                    userToken.maxAge * 1000
                    }; httpOnly; SameSite=Strict`,
            },
        };

    } catch (err) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message }),
            status: 500,
        };
    }
};
