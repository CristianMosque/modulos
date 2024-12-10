function Movie(nombre, yalavi, nveces) {
    this.nombre = String(nombre);
    this.yalavi = Boolean(yalavi);
    this.nveces = Number(nveces);

    // Crear un método que imprima info de la película
    this.info = function () {
        if (this.yalavi === true) {
            console.log("Ya vi " + this.nombre + " " + this.nveces + " veces");
        } else {
            console.log("No la he visto " + this.nombre);
        }
    };
}

// Crear una lista de varias películas
const peliculas = []; // Declarar correctamente el arreglo

// Crear una película y agregarla a la lista
const starWars = new Movie("Star Wars", true, 3);
peliculas.push(starWars); // Agregar starWars al arreglo

// Probar el método info
starWars.info(); // "Ya vi Star Wars 3 veces"
peliculas[0].info(); // También funciona porque starWars está en la lista

// Crear un nuevo objeto usando Object.create
const avatar = Object.create(starWars); // Hereda de starWars

// Redefinir propiedades de avatar
avatar.nombre = "Avatar 2";
avatar.yalavi = true;
avatar.nveces = 2;

// Agregar avatar a la lista de películas
peliculas.push(avatar); // Usar el nombre correcto del arreglo

// Probar el método info en avatar
avatar.info(); // "Ya vi Avatar 2 2 veces"

// Imprimir el objeto avatar
console.log(avatar);

// Intentar acceder a cars (corregido)
const cars = new Movie("Cars", false, 0); // Definir correctamente cars