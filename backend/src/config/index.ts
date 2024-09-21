import path from 'path'
import dotenv from 'dotenv'

// get environmental variables
dotenv.config({path:path.resolve(__dirname,"../../.env")})
// dotenv.config({path:path.resolve(__filename,".env")}) -> try this later

// strong type this later on...
export const sqlConfig = {
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME,
    server : process.env.DB_SERVER || 'localhost',
    pool : {
        min : 0,
        max : 10,
        idleTimeoutMillis : 30000,
    },
    options : {
        encrypt : false,
        trustServerCertificate: false
    }
}