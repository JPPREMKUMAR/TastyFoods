import db from "../config/db.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const generateJWT = async (payload) => {
    return jwt.sign(payload, process.env.JWT_SECRET)
}


export const userSignUp = async (req, res) => {
    try {


        const { username, password } = req.body
        //console.log(username, password)
        const hashedPassword = await bcrypt.hash(password, 10)

        const sqlUserQuery = `SELECT * FROM user WHERE username = ?;`;
        db.query(sqlUserQuery, [`${username}`], (error, success) => {
            if (error) {
                //console.log(error)
                return res.status(500).json({ error: error.message })


            } else {
                //console.log(success, success.length)
                if (success !== '[]' && success.length !== 0) {
                    return res.status(500).json({ message: "username already exists." })

                } else {

                    const sqlUserPostQuery = `                
                        INSERT INTO user(username, password)
                        VALUES(?,?);
                        `;

                    if (password.trim().length > 6) {

                        db.query(sqlUserPostQuery, [`${username}`, `${hashedPassword}`], (error, result) => {
                            if (error) {
                                res.json({ error: error.message })
                            } else {
                                res.status(200).json({ message: "user signup successfully" })

                            }
                        })



                    } else {
                        return res.status(500).json({ message: "password must be more than 6 characters." })
                    }

                }



            }
        })

    } catch (e) {
        return res.status(500).json({ error: e.message })
    }
}

export const userLogin = (req, res) => {

    try {

        const { username, password } = req.body

        const sqlUserQuery = `SELECT * FROM user WHERE username = ?;`;
        db.query(sqlUserQuery, [`${username}`], async (error, success) => {
            if (error) {
                return res.status(500).json({ error: error.message })
            }
            if (success.length !== 0 && success !== "[]") {
                const userItem = success[0]
                const isTruePassword = await bcrypt.compare(password, userItem.password)
                //console.log(isTruePassword)
                if (!isTruePassword) {
                    return res.status(500).json({ message: "please enter valid password." })
                }
                const payload = {
                    userId: userItem.id,
                    username: userItem.username
                }
                const jwtToken = await generateJWT(payload)
                //console.log(jwtToken)
                return res.status(200).json({ jwt_token: jwtToken })

            } else {
                return res.status(500).json({ message: "please enter valid username." })
            }



        })



    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}