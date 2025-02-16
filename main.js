// const fs=require("fs")
// console.log(fs)
// console.log("starting");
// fs.writeFile("harry2.text","harry is a good boy",()=>{
//     console.log("done");
//     fs.readFile("harry2.text",(error,data)=>{
//         console.log(error,data.toString())
//     })
// })
import  fs from  "fs/promises"
console.log("ending");
let a = await fs.readFile("harry2.text");      
console.log(a.toString())                                        