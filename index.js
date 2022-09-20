var images = document.querySelectorAll('.image img')
var close = document.querySelector('.close')
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')



var galleryInner = document.querySelector('.gallery__inner img')

var overlay = document.querySelector('.overlay')

function show() {
    if(currentIndex == 0 ) {

        prev.classList.add('hide')
    }
    else if(currentIndex == images.length - 1) {
        next.classList.add('hide')
    }
    else{
        prev.classList.remove('hide')
        next.classList.remove('hide')
    }

    galleryInner.src = images[currentIndex].src
    overlay.classList.add('show')
}
var currentIndex = 0
images.forEach((e, index)=> {
    
    e.onclick = () => {
        currentIndex = index
        
        show()
    }
})
close.onclick = function() {
    overlay.classList.remove('show')
}

prev.onclick = function (e) {
    if(currentIndex > 0 ) {
        currentIndex--
       show()
    }
}
next.onclick = function () {
    if(currentIndex < images.length -1  ) {
        currentIndex++
        show()
    }
}