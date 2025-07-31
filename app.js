import express from 'express'


app = express()

app.use(json())
//hellosastt

app.listen(process.env.PORT,(req,res)=>{
    console.log("App running dawg")
    function login() {
        console.log("Login from feature branch");
    }

})