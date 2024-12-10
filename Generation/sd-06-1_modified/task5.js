

// Type your code below this line!

// Constructor para FriendsList
function FriendsList() {
    this.names = [];
}

// Método para agregar amigos a la lista
FriendsList.prototype.addFriends = function(count) {
    for (let i = 0; i < count; i++) {
        const name = prompt(`Enter name ${i + 1}:`);
        this.names.push(name);
    }
};

// Método para imprimir la lista de amigos
FriendsList.prototype.printList = function() {
    console.log(this.names);
};

// Función principal
function main() {
    const friendsList = new FriendsList();

    // Pedir al usuario el número de amigos
    const count = parseInt(prompt("How many friends would you like to add?"), 10);

    // Validar la entrada
    if (isNaN(count) || count <= 0) {
        console.log("Please enter a valid number.");
        return;
    }

    // Llenar la lista de amigos
    friendsList.addFriends(count);

    // Imprimir la lista completa
    friendsList.printList();
}

// Ejecutar el programa
main();


// Type your code above this line!

