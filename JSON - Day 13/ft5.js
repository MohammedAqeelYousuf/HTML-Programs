fetch('https://jsonplaceholder.typicode.com/albums')
  .then(res => res.json())
//   .then(albums => albums.forEach(album => console.log(album.title)))
.then(albums =>albums.slice(0,10).map(a=>console.log(a.title)))
