//Fetch comments for a Post
fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
.then(res=>res.json())
// .then(comments=>console.log(comments))
.then(comments=>comments.forEach(c=>console.log(`Name: ${c.name} Email: ${c.email}`)))