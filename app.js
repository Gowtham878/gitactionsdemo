import express from 'express'


app = express()

app.use(json())
//hello

app.listen(process.env.PORT,(req,res)=>{
    console.log("App running dawg")
})