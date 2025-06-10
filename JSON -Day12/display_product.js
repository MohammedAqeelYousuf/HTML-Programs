const fs = require("fs");

const dataJSON = fs.readFileSync("product.json");
const data = JSON.parse(dataJSON);

data.products.forEach(product => {
    console.log(`Id: ${product.id}`);
    console.log(`Name: ${product.name}`);
    console.log(`Price: ${product.Price}`);
    console.log(" ")
})