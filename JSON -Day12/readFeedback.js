const fs=require("fs") //loading File System (fs) Module
const JSONdata=fs.readFileSync("feedback.json") //reading the file
const output=JSON.parse(JSONdata) //output contains JS object

console.log("========USER FEEDBACK========")
output.feedbacks.forEach(fb=>{                      //iterating all the records of the json file
    // console.log(`Id: ${fb.id}`);
    console.log(`Username: ${fb.username}`);
    console.log(`Rating: ${fb.rating}`);
    console.log(`Comment: ${fb.comment}`);
    console.log(`Submitted_ON: ${fb.submitted_on}`);
    console.log(`Category: ${fb.category}`);
    console.log("---------------------------------------")
}
)


