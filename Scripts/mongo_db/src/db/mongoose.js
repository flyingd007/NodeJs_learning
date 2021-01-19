const mongoose = require('mongoose')
const validator = require('validator')

mongoose.connect('mongodb://127.0.0.1:27017/test-database',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User=mongoose.model('User',{
    name:{
        type : String,   
    },
    age:{
        type : Number,
    }
})

const me=new User({
    name:'Deepak',
    age:'23'
})

me.save().then(()=>{
    console.log(me);
}).catch((error)=>{
    console.log('Error! '+error);
})