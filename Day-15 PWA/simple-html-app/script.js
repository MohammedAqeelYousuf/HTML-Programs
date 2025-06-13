const views={
    home:
    `<h1>home</h1>
    <p>Welcome to Home Page!</p>`,
    about:
    `<h1>About</h1>
    <p>This is about page. Learn more about us here</p>`
}

function navigate(view){
    const container=document.getElementById('view-container')
    container.innerHTML=views(view)
}

window.onload=()=>navigate('home')