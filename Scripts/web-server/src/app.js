const path = require('path')
const  express = require('express')



const app=express()

const publicPathDir = path.join(__dirname,'../public');

app.set('view engine','hbs')
app.use(express.static(publicPathDir))

app.get('',(req,res) => {
    res.render('index',{
        title:'Email'
    })
})


app.get('/about',(req,res) => {
    res.render('about')
})

app.get('/help',(req,res)=>{
    res.render('help',{
        help1 : "Do this",
        help2 : "Do that",
        help3 : "Do what"
    })
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