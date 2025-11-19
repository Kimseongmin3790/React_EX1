const express = require('express')
const cors = require('cors') 

// const stuRouter = require("./routes/student")
const productRouter = require("./routes/product")
// const userRouter = require("./routes/user")

const app = express()
app.use(cors({
    origin : "*",
    credentials : true
}))
app.use(express.json());

// router 영역
// app.use("/student", stuRouter);
app.use("/product", productRouter);
// app.use("/user", userRouter);

app.listen(3010, ()=>{
    console.log("server start!");
})