const mongodb= require('mongodb')
const mongodbClient = mongodb.MongoClient

const databaseUrl = 'mongodb://127.0.0.1:27017'
const databaseName = 'test-database'

mongodbClient.connect(databaseUrl,{useNewUrlParser : true, useUnifiedTopology: true },(error,client)=>{
    if(error)
    {
        return console.log("could not connect to the database")
    }

    console.log('connected correctly!');

    const db = client.db(databaseName)


    //for DELETING

    // db.collection('tasks').deleteOne({
    //     description : 'xyz'
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    //for UPDATING

    // db.collection('users').updateMany({
    //     age: 23
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result)=>{
    //     console.log(result);
    // }).catch((error)=>{
    //     console.log(error);
    // })

    //for READING

    // db.collection('users').findOne({name:'Deepak'},(error,user)=>{
    //     if(error)
    //     {
    //         return console.log('could not fetch');
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({age : 23}).toArray((error,users)=>{
    //     console.log(users);
    // })

    // db.collection('users').find({age : 23}).count((error,count)=>{
    //     console.log(count);
    // })


    // for INSERTING
    
    // db.collection('users').insertOne({
    //     name:'Deepak',
    //     age:23
    // },(error,result)=>{
    //     if(error)
    //     {
    //         return console.log("error occured while inserting");
    //     }
    //     console.log(result.ops);
    // })


    // db.collection('users').insertMany([
    //     {
    //         name:'saniya',
    //         age:23
    //     },
    //     {
    //         name:'jack',
    //         age:10
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('could not enter the records');
    //     }
    //     console.log(result.ops);
    // })

    // db.collection('tasks').insertMany([
    //     {
    //         description :"xyz",
    //         completed:true
    //     },
    //     {
    //         description :"abc",
    //         completed:true
    //     },
    //     {
    //         description :"xxxzz",
    //         completed:false
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('could not insert the records');
    //     }
    //     console.log(result.ops);
    // })
})
