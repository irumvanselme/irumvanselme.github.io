const url = "http://irumvanselme-apis.herokuapp.com/api/messages"

function onHeaderHover (element) {
    element.classList.add("animate__swing", "animate__animated")
    console.log($("#about-text").visible())
    setTimeout(() => {
        element.classList.remove("animate__swing")
    }, 1000)
}

function onAboutOnViewPort (){

    document.getElementById("about-text").classList.add("animate__fadeInUp", "animate__animated")
    setTimeout(() => {
        document.getElementById("about-text").classList.remove("animate__swing")
    }, 1000)

    
    document.getElementById("about-image").classList.add("animate__fadeInRight", "animate__animated")
    setTimeout(() => {
        document.getElementById("about-image").classList.remove("animate__swing")
    }, 1000)

}


function contactAnselme(event){
    event.preventDefault();

    // le me get the data 

    let message = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }

    fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(message)
    }).then(res => console.log(res))
    .catch(error => console.log(error))
}