let persona = {
    "primerNombre": "ana",
    "apellido": "Alvarado",
    "fullName" : function(){
        return persona.primerNombre + " " + persona.apellido
    }, 
    "edad":20,
    "contacto": {
        "email": {
            "personal":"hola@persona.com",
            "laboral":"hola@persona.com",
        }
    }
}

console.log(persona.primerNombre);
console.log(persona.fullName());
console.log(typeof(persona));
console.log(persona.contacto.email.personal);
