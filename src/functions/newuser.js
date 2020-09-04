import isEmail from "validator/lib/isEmail";
import newClient from "../lib/db";
import { nanoid } from "nanoid";
import bcrypt from "bcryptjs";
import userToken from "../lib/token";

export async function handler(event) {
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
}
