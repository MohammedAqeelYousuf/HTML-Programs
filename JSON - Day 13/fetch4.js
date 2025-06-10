//Fetch ToDOs

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res=>res.json())
.then(todos=>console.log(todos.slice(0,6)))