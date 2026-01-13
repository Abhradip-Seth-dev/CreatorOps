import {Pool} from 'pg'

export const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: process.env.DATABASE_PASSWORD,
    database: "creatorops",
})