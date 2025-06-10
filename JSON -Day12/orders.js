const fs=require("fs")
const JSONdata=fs.readFileSync("orders.json")

const order=JSON.parse(JSONdata)
console.log("========ORDERS DETAILS========")
order.orders.forEach(element => {
    console.log(`Order Id: ${element.order_id}`);
    console.log(`Customer Name: ${element.customer}`);
    console.log(`Items Purchases: ${element.item.join(", ")}`);
    console.log(`Total Amount: ${element.total_amount}`);
    console.log(`Order Date: ${element.order_date}`);
    console.log(`Order Status: ${element.status}`);
    console.log("-------------------------------------------------")
});