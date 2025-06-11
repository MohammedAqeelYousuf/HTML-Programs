const url="http://localhost:3000/clothstore"

function fetchproduct()
{
    fetch(url)
    .then(res=>res.json())
    .then(data =>{
        console.log("Updated Product list:");
        data.forEach(product=>{
            console.log(`
                ID:${product.id}
                Name: ${product.name}
                Category: ${product.category}
                Size: ${product.size}
                Price: ${product.price}
                inStock: ${product.instock}`);
                console.log("-------------------------")
        })
    })
}
setInterval(fetchproduct,5000)
fetchproduct()