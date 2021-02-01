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