let time = 10000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;


function NextImage (){

    images[currentImageIndex].classList.remove('selected')

    currentImageIndex++

    if(currentImageIndex >= max)
    currentImageIndex = 0

    images[currentImageIndex].classList.add('selected')
}


function start (){
    setInterval(() => {
        NextImage()
    }, time)
}

window.addEventListener("load", start)