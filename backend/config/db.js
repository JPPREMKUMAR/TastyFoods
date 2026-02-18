import mysql2 from "mysql2"
import dotenv from "dotenv"
dotenv.config()


const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((err) => {
    if (err) {
        console.log('MYSQL database Connection error.', err)
        return
    } else {
        console.log('MYSQL Database connected')
    }
})


export default connection