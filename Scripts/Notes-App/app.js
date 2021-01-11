// const name=require("./utils.js")
const yargs =require("yargs")

const { addNotes } = require("./notes.js")
const { removeNotes } = require("./notes.js")

// console.log(name(5,2))

const getNotes=require("./notes.js")

yargs.command({
    command : "add",
    describe : "Add new Note",
    builder : {
        title : {
            describe : "Note Title",
            demandOption : true,
            type : String
        },
        body : {
            describe : "Body of Note",
            demandOption : true,
            type : String                
        }
    },
    handler : function(argv)
    {
        addNotes(argv.title,argv.body)
    }
})

yargs.command({
    command : "remove",
    describe : "remove a note",
    builder : {
        title : {
            describe : "title of the note",
            demandOption : true,
            type : String
        }
    },
    handler : function(argv)
    {
        removeNotes(argv.title)
    }
})

yargs.command({
    command : "List",
    describe : "Lists of notes",
    handler : function()
    {
        console.log("Listing out notes")
    }
})

yargs.command({
    command : "read",
    describe : "read a note",
    handler : function()
    {
        console.log("reading the note")
    }
})

yargs.parse()

//console.log(getNotes())
//console.log(yargs.argv)
//console.log(process.argv)