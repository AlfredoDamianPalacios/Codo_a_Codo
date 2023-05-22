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


//navar

const toggle = document.querySelector('.toggle');
const navar = document.querySelector('.navar');

function toggleNavar() {
    if (navar.classList.contains("active")) {
        navar.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        navar.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

toggle.addEventListener('click', toggleNavar, false);
