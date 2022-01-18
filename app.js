const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 8000

const userRouter = require("./api/users/user.router");

app.use(express.json());
app.use("/api/users",userRouter);

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})