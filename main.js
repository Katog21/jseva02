//creamos la funcion Venta de Tickets

function buyTicket() {
//generamos las constantes 

const priceTicket = 9.99;
//array con objetos

    const Peliculas = [
        { id: 1, pelicula: "Space Jam", precio: 9.90 },
        { id: 2, pelicula: "WWF Royal Rumble", precio: 9.90 },
        { id: 3, pelicula: "AEW Revolution", precio: 9.90 },
        { id: 4, pelicula: "WWF Royal Rumble", precio: 9.90 },
    ];
// preguntamos si quiere mirar la cartelera 

    let mirarCartelera = prompt("Do you want to look the Cinema Billboard?");

    if (mirarCartelera.toLowerCase() === "yes") {
// bucle q recorra el array

    let carteleraString = "Cartelera:\n";
    for (const pelicula of Peliculas) {
        carteleraString += `${pelicula.id}. ${pelicula.pelicula} - Price: $${pelicula.precio}\n`;
    }
    alert(carteleraString);
};

//le pedimos cuantos tickets quiere comprar

let numbTicket = Number(prompt("How many Tickets :) ?"));
let nameTicket = prompt("do you want rename your tickets? Yes or No").toLowerCase();

//condicional para decidir si renonmbra el ticket

if (nameTicket === "yes"){
//bucle por cantidad de ticket ingresados se solicita el nombre
for ( let name = 1; name <= numbTicket; name++) {
    let nombre = prompt(`enter your Name for the ${name} ticket`);

    alert (`your ${name} ticket is assigned to ${nombre}`) 
}
}
//calculamos el costo
let totalCost = numbTicket * priceTicket;    
 // crear un condicional para limitar el costo y la entrada
 if (numbTicket && priceTicket > 0 ) {
    alert (`Your cost for ${numbTicket} tickets : $ ${totalCost}`)
 } 
 else{
    alert ("please enter valid keys");
 }

}
buyTicket(); 


