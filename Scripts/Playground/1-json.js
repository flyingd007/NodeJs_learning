const fs = require("fs")

const dataBuffer=fs.readFileSync("./1-json.json")
const jsonData=dataBuffer.toString()
const jsObj=JSON.parse(jsonData)

jsObj.name = "Deepak"
jsObj.age = 23

jsonData2=JSON.stringify(jsObj)
fs.writeFileSync("./1-json.json",jsonData2)
console.log(jsObj)