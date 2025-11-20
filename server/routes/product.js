const express = require('express')
const router = express.Router()
const db = require("../db")

router.get('/', async (req, res) => {
    let { keyword } = req.query;
    try {
        let sql = "SELECT * FROM TBL_PRODUCT WHERE PRODUCTNAME LIKE ?";
        let [list] = await db.query(sql, [`%${keyword}%`]);

        res.json({
            result : "success",
            list : list
        });
    } catch (error) {
        console.log("에러 발생!");
    }
})

router.delete("/:productId", async (req, res) => {
    let { productId } = req.params;
    try {
        let sql = "DELETE FROM TBL_PRODUCT WHERE PRODUCTID = ?";
        let result = await db.query(sql, [productId]);

        res.json({
            result : result,
            msg : "삭제 완료"          
        });
    } catch (error) {
        console.log("에러 발생!");
    }
})

router.post("/", async (req, res) => {
    let { productName, price } = req.body
    try {
        let sql = "INSERT INTO TBL_PRODUCT (PRODUCTNAME, PRICE) VALUES(?, ?)";
        let result = await db.query(sql, [productName, price]);

        res.json({
            result : result,
            msg : "success"
        });
    } catch (error) {
        console.log("에러 발생!");
    }
})

module.exports = router;