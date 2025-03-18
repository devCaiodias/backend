import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;

const db = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: { rejectUnauthorized: false }
});

db.connect();

export const query = (text, params) => db.query(text, params);
