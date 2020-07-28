const express = require('express')
const app = express()
const port = 3000
const admin = (req,res)=>{
    return res.send("Admin panel")
}

const isAdmin = (req,res, next) => {
    console.log("isAdmin is running")
    next()
}

const isLoggedin = (req, res, next) =>{
    console.log("You are logged in!")
    next()
}

app.get('/',(req,res)=>
    {
        return res.send("Hello World")
    }
)

app.get('/admin', isLoggedin, isAdmin,admin)

app.get('/login',(req,res)=>
    {
        return res.send("You are logged in")
    }
)

app.get('/signup',(req,res)=>
    {
        return res.send("You are signed up")
    }
)

app.listen(port, ()=>{
    console.log(`Our server is up and running! on port ${port}`)
})

// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))