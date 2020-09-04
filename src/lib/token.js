import jwt from "jsonwebtoken";
import newClient from "./db";

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

export default userToken;
