const express = require('express');
const cors = require('cors');
require('dotenv').config()
const PORT=process.env.port

const {connect}=require("./config/db");

const  {olxRoute} =require("./router/olx.router")



const app = express();
app.use(cors({
    origin:"*"
}))
app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use("/",olxRoute)



app.listen(PORT,async() => {
    try {
     await connect
     console.log('connected to database successfully');
    } catch (error) {
        console.log({"msg": "something went worng"})
        console.log(error)

    }
    console.log(`app listening on port ${PORT}`)
})