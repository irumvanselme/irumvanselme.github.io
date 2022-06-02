const url = "http://irumvanselme-apis.herokuapp.com/api/messages"

function onHeaderHover(element) {
    element.classList.add("animate__swing", "animate__animated")
    console.log($("#about-text").visible())
    setTimeout(() => {
        element.classList.remove("animate__swing")
    }, 1000)
}

function onAboutOnViewPort() {
    
    document.getElementById("about-text").classList.add("animate__fadeInUp", "animate__animated")
    setTimeout(() => {
        document.getElementById("about-text").classList.remove("animate__swing")
    }, 1000)
    
    
    document.getElementById("about-image").classList.add("animate__fadeInRight", "animate__animated")
    setTimeout(() => {
        document.getElementById("about-image").classList.remove("animate__swing")
    }, 1000)
    
}

function setErrorMessage(input, message) {
    input.children[0].classList.add("text-danger")
    input.children[1].classList.add("is-invalid")
    input.children[2].innerHTML = message;
}

function clean(input) {
    input.children[0].classList.remove("text-danger")
    input.children[1].classList.remove("is-invalid")
    input.children[2].innerHTML = "";
}

function contactAnselme(event) {
    event.preventDefault();
    
    
    // le me get the data
    
    let values = {
        first_name: document.getElementById("first_name").value,
        last_name: document.getElementById("last_name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    }
    
    let inputs = {
        first_name: document.getElementById("first_name_input"),
        last_name: document.getElementById("last_name_input"),
        email: document.getElementById("email_input"),
        message: document.getElementById("message_input"),
    }
    
    for (let input of Object.values(inputs)) clean(input)
    
    if (values.first_name === "") setErrorMessage(inputs.first_name, "First name is required");
    
    if (values.last_name === "") setErrorMessage(inputs.last_name, "Last name is required");
    
    if (values.email === "") setErrorMessage(inputs.email, "Email is required");
    
    if (values.message === "") setErrorMessage(inputs.message, "Message is required");
    
    if (values.first_name !== '' && values.last_name !== '' && values.email !== '' && values.message !== '') {
        let headers = {
            'app-consumer': 'irumvanselme-anselme@2003'
        }
        
        // let headers = new Headers();
        // headers.append("app-consumer", 'irumvanselme-anselme@2003')
        //
        // console.log(headers.get('app-consumer'))
        
        fetch('https://me-ecru-one.vercel.app/api/messages', {
            cache: "default", mode: 'no-cors', method: 'POST', headers: headers, body: JSON.stringify({
                names: values.first_name + ' ' + values.last_name, email: values.email, message: values.message
            }),
        }).then(res => {
            console.log(res.json().then(res => console.log(res)).catch(e => console.log(e)))
        }).catch(e => {
            console.log("Error," + e.response.data)
        })
    }
    
}