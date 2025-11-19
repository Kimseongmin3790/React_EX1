const express = require('express')
const router = express.Router()
const db = require("../db")

router.get('/', async (req, res) => {
    try {
        let sql = "SELECT * FROM TBL_PRODUCT";
        let [list] = await db.query(sql);

        res.json({
            result : "success",
            list : list
        });
    } catch (error) {
        console.log("에러 발생!");
    }
})

module.exports = router;