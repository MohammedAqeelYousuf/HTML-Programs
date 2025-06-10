fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(res=>res.json())
// .then(post=>console.log(post))
.then(post=>console.log(post.title))
