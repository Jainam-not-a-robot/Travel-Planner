import pkg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const {Pool}=pkg
const pool=new Pool({
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    name:process.env.DATABASE_NAME,
    host:process.env.DATABASE_HOST,
    port:process.env.DATABASE_PORT
})
export default pool