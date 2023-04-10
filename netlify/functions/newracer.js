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


exports.handler =  async function (event) {
    const { id, name } = JSON.parse(event.body);
    // try to get token, verify and compare ids, and insert name
    try {
        const token = event.headers.cookie.match(
            /userToken=?([a-zA-Z0-9\-_.]+).*/
        )[1];
        const tokenId = await userToken.verifyToken(token);
        // if tokenId is null, or otherwise doesn't match request, error out
        if (tokenId != id) {
            return {
                statusCode: 500,
                body: JSON.stringify({
                    message: "token validation error",
                    status: 500,
                }),
            };
        }
        // token verified and id matches, so add racer to user ...

        // connect to DB
        const client = newClient();
        const dbname = process.env.DB_NAME || "nextjsauth";
        await client.connect();

        // check whether the email already exists and if so error out
        const db = client.db(dbname);
        const res = await db
            .collection("users")
            .updateOne({ _id: id }, { $addToSet: { racers: { name: name, club: "Bowles" } } });
        client.close();
        
        if (res.modifiedCount == 1) {
            return {
                statusCode: 200,
                body: JSON.stringify({
                    message: "Racer added",
                    status: 200,
                }),
            };
        } else {
            // no res, error?
            return {
                statusCode: 500,
                body: JSON.stringify({ message: "database error", status: 500 }),
            };
        }
    } catch (err) {
        // there was an error somewhere in the overall try above ...
        return {
            statusCode: 500,
            body: JSON.stringify({ message: err.message, status: 500 }),
        };
    }
};
