/* INICIO-CARRUSEL */
const carrusel = document.querySelector(".carrusel")
firstImg = document.querySelectorAll(".carrusel img")[0]
arrowIcons = document.querySelectorAll(".carrConteiner i")

let isDragStart = false, prevPageX, prevScrollLeft
let firstImgWidth = firstImg.clientWidth + 200 //(era 14 el margen pero se mueve muy lento xd asi que lo cambie) btengo el valor del ancho de la primera img y agrego el valor del margen izq (14)



arrowIcons.forEach(icon => { 
    icon.addEventListener("click", () => {
    //Si el icono clickeado es el izq, reduce el valor del ancho de la izq del carrusel, sino le añade
        carrusel.scrollLeft += icon.id == "left" ? - firstImgWidth : firstImgWidth
    })
})

const dragStart = (e) => {
    // actualizando el valor de las variables globales en el evento del mouse hacia abajo
    isDragStart = true
    prevPageX = e.pageX
    prevScrollLeft = carrusel.scrollLeft
}

const dragging = (e) => { 
    // desplazamiento de imágenes/carrusel a la izquierda según el puntero del mouse
    if (!isDragStart) return;
    e.preventDefault()
    carrusel.classList.add("dragging")
    let positionDiff = e.pageX - prevPageX
    carrusel.scrollLeft = prevScrollLeft - positionDiff
}

const dragStop = () => {
    isDragStart = false
    carrusel.classList.remove("dragging")
}

carrusel.addEventListener("mousedown", dragStart)
carrusel.addEventListener("mousemove", dragging)
carrusel.addEventListener("mouseup", dragStop)

/* fin INICIO-CARRUSEL */