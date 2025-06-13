const Welcome = () =>{
    const username:string ="Aqeel";
    return <h2>Welcome , {username} </h2>
}

export default Welcome;

//() ------> Interpolation
// const Welcome(component name) ------> Funtional compnent
//  export ----> component visibility
// return -----> statement view

//username  ---> variable,property(in JS)
//          ---> State(in React)

// state    ---> Managete data inside component
// props    ---> Passing data to child