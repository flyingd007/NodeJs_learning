
const mongoose = require('mongoose')
const validator = require('validator')


mongoose.connect('mongodb://127.0.0.1:27017/PEP', {
 useNewUrlParser: true,
 useCreateIndex: true,
 useUnifiedTopology: true
})

const Employee = mongoose.model('Employee',{
    Email : {
        unique : true,
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        Validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Email format not correct')
            }
        }   
    },
    EID : {
        unique : true,
        type : String,
        required : true,
        trim : true,
    },
    Name :{
        type : String,
        trim : true
    },
    MobileNumber : {
        type : Number,
        trim : true
    },
    Designation : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
    },
    DateOfJoining : {
        type : Date,
        required : true
    },
    password : {
        type : String,
        trim : true,
        Validate(value){
            if(value.length<8)
            {
                throw new Error('Password cannot be less then 8 Characters!')
            }
        }
    }

})


const Self_Assesment_Form = mongoose.model('Self_Assesment_Form',{
    Date_Key : {
        type : String,
        required : true,
        unique : true,
    },
    Questions : {
        type : [{Question_no : Number,Question : String}]
    },
    ActiveTillDateTime : {
        type : Date,
        required : true
    }
})


const Relaions_Emp = mongoose.model('Relations_Employee',{
    R_Manager_Email : {
        unique : true,
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        Validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Manager Email format not correct')
            }
        }
    },
    R_Reportee_Email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        Validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Reportee Email format not correct')
            }
        }
    }
})

const Filled_Forms = mongoose.model('Filled_Forms',{
    EID_Date_Key : {
        type : String,
        required : true,
        unique : true,
    },
    Answers : {
        type : [{Answer_no : Number,Answer : String}]
    },
    checked : {
        type : Boolean,
        default : false,
    }
})

const Perf_Eval_Form = mongoose.model('Performance_Eval_Form',{
    Date_Key : {
        type : String,
        required : true,
        unique : true,
    },
    Questions : {
        type : [{Question_no : Number,Question : String}]
    },
})


const Filled_Eval_Forms = mongoose.model('Filled_Eval_Forms',{
    EID_Date_Key : {
        type : String,
        required : true,
        unique : true,
    },
    R_Manager_Email : {
        unique : true,
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        Validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Manager Email format not correct')
            }
        }
    },
    R_Reportee_Email : {
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        Validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Reportee Email format not correct')
            }
        }
    },
    Answers : {
        type : [{Answer_no : Number,Answer : String}]
    },
})


const Project = mongoose.model('Project',{
    Project_Id:{
        type : String,
        required : true,
        trim : true,
    },
   Name : {
        type : String,
        required : true,
        trim : true,
    },
    Description : {
        type : String,
        required : true,
        trim : true,
    }
})

const Project_Employee_Relation = mongoose.model('Project_Employee_Relation',{
    Project_Id:{
        type : String,
        required : true,
        trim : true,
    },
    Email : {
        unique : true,
        type : String,
        required : true,
        trim : true,
        lowercase : true,
        Validate(value){
            if(!validator.isEmail(value))
            {
                throw new Error('Email format not correct')
            }
        }   
    },
    DateTo : {
        type : Date,
        required : true
    },
    DateFrom : {
        type : Date,
        required : true
    },
    JobDescription : {
        type : String,
        required : true,
        trim : true,
    },
    Remarks : {
        type : String,
        trim : true,
    }
})

// const _2020Q4 = new Self_Assesment_Form({
//     Date_Key : "2020Q4",
//     Questions :[
//         {
//             Question_no : 1,
//             Question : "How well did you performed"
//         }
//     ],

//     ActiveTillDateTime : new Date()
// })

// _2020Q4.save().then(()=>{
//     console.log(_2020Q4);
// }).catch((error)=>{
//     console.log(error);
// })



// const vikash=new Employee({
//     Email : "vikashagarwal@nineleaps.com",
//     EID : "NLS1234",
//     Name : "Vikash Agarwal",
//     Designation: "Employee ",
//     DateOfJoining :new Date(),
// })

// vikash.save().then(()=>{
//     console.log(vikash);
// }).catch((error)=>{
//     console.log(error);
// })