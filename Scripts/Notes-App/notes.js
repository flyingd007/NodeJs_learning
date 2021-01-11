const { Console } = require("console")
const fs = require("fs")
const { array } = require("yargs")


const getNotes=function()
{
    return str
}

const addNotes=function(title,body)
{
    
    const notes = loadNotes()
   
    const duplicateNotes = notes.filter(function(note)
    {
        return note.title === title
    })

    if(duplicateNotes.length === 0)
    {
        notes.push({
            title : title,
            body : body
        })
        saveNotes(notes)
        console.log("Note saved Successfully")
        return    
    }
    console.log("Duplicate title found!!!")    
}

const removeNotes = function(title)
{
    const notes = loadNotes()

    for (let index = 0; index < notes.length; index++) {
        
        if(notes[index].title === title)
        {
            //delete notes[index]
            notes.splice(index,1)
            console.log("note removed succesfully")
            saveNotes(notes)
            return
        }
        
    }
    console.log("note "+title+" not found !!!")

}

const saveNotes =function(notes)
{
    const jsonObj=JSON.stringify(notes)
    fs.writeFileSync("./Notes.json",jsonObj)
}
const loadNotes= function()
{
    try 
    {
        const dataBuffer = fs.readFileSync("Notes.json")
        const jsonObj=dataBuffer.toString()
        return JSON.parse(jsonObj)

    } catch (error) {
        return []
    }
}
module.exports={
    getNotes : getNotes,
    addNotes : addNotes,
    removeNotes :removeNotes
}