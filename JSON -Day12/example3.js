// const user=require("./user.json")
// console.log(user)
// const data=JSON.parse(user)
// console.log(data)

const fs=require("fs")
const dataJson=fs.readFileSync("user.json")
const data=JSON.parse(dataJson)
console.log(data)
console.log(data[0].name)
console.log(data[0].skills)
data.forEach(user => {
   console.log(`${user.name}'s age: ${user.age} skills: ${user.skills.join(", ")}`);

});