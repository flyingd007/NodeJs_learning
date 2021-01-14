const path = require('path')
const  express = require('express')



const app=express()

const publicPathDir = path.join(__dirname,'../public');
app.use(express.static(publicPathDir))

app.get('',(req,res) => {
    res.send("Hello World!")
})

app.get('/help',(req,res) => {
    res.send("Help Page")
})

app.get('/about',(req,res) => {
    res.send('<h1>About page<h1>')
})

app.get('/weather',(req,res) => {
    res.send({
        place_name:'New Delhi',
        temp:'20 c'
    })
})
app.listen(3000,() => {
    console.log("Server is up and running at port 3000");
})