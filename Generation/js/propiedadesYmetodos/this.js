const objeto = {
    nombre: "hola",
    estoHaceAlgo(){
        console.log(this.nombre)
    }
}



// -------------------------------------------------

const auto = {
    marca: "Chevrolet",
    frenar (){
        console.log(" auto ${this.marca} esta frenando")
    }
}
auto.frenar();

//-----------------------------------------------------------
objeto.estoHaceAlgo();

//! Funcion Constructora 

function Person(p1, p2){
    this.nombre = p1
    this.apellido = p2
    this.NombreCompleto = function (){
        return this.nombre + " " + this.apellido
    }
}

const persona1 = new Person("Andri", "peña")
console.log(persona1.NombreCompleto());

const persona2 = new Person("Cristian", "Mosquera")
console.log(persona2.NombreCompleto());