import db from "../config/db.js"

export const allRestaurants = async (req, res) => {

    try {

        const sqlQuery = `
        SELECT
        * 
        FROM 
        restaurants ;
        `;

        db.query(sqlQuery, (error, result) => {
            if (error) {
                //console.log(error)
                return res.status(500).json({ error: error.message })
            } else {
                //console.log(result)
                return res.status(200).json({ restaurants: result })

            }
        })


    } catch (e) {
        console.log(e)
        return (
            res.status(500).json({ error: e.message })
        )
    }
}