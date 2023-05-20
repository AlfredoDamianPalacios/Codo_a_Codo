// INICIO-CARRUSEL 
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

// fin INICIO-CARRUSEL 

// RESEÑAS 

const {createApp} = Vue
const miAplicacion = createApp({
    // DATOS de la aplicacion
    data() {
        return { HTML_a_mostrar: ""}
    },

    methods: {
        // Esta función lee los datos remotos, usando fetch
        traerDatosAPI() {
            fetch('https://randomuser.me/api') // API a leer
                // Cuando ha finalizado la lectura
                // guardo en datos el texto leido:
                .then(datos => datos.json()) //res guarda el dato mediante el método .json()
                .then(datos => {
                    // Y luego copio ese texto en HTML_a_mostrar
                    this.HTML_a_mostrar +=
                        `<div class="tarjeta">
                 <img src = "${datos.results[0].picture.large}"</img><br>
                 Nombre: ${datos.results[0].name.last}, ${datos.results[0].name.first}<br>
                 User: ${datos.results[0].login.username}<br>
                 ${datos.results[0].email} <br>
                 Reseña: Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem nihil <br>
                  harum cum reprehenderit nulla consequuntur quisquam totae. Excepturi.
                 </div>`
                 this.registros++
                })
        }
    }

})
miAplicacion.mount("#reseñas")
