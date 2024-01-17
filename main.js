//creamos la funcion Venta de Tickets
// Función de validación
function priceCost(numTickets, ticketPrice) {
    return numTickets > 0 && ticketPrice > 0;
  }
  
  // Función principal

function buyTicket() {
//generamos las constantes 

const priceTicket = 9.90;
//array con objetos

    const Peliculas = [
        { id: 1, Movie : "Space Jam", precio: 9.90 },
        { id: 2, Movie: "WWF Royal Rumble", precio: 9.90 },
        { id: 3, Movie: "AEW Revolution", precio: 9.90 },
        { id: 4, Movie: "WWF Royal Rumble", precio: 9.90 },
    ];
// preguntamos si quiere mirar la cartelera 

    let mirarCartelera = prompt("Do you want to look Cinema Billboard?");

//     if (mirarCartelera.toLowerCase() === "yes") {
// // bucle q recorra el array

//     let carteleraString = "Cartelera:\n";
//     for (const pelicula of Peliculas) {
//         carteleraString += `${pelicula.id}. ${pelicula.pelicula} - Price: $${pelicula.precio}\n`;
//     }
//     alert(carteleraString);
// };
if (mirarCartelera.toLowerCase() === "yes") {
    // Utilizamos map para generar el string de la cartelera
    const carteleraString = Peliculas.map(
      (pelicula) => `${pelicula.Movie} - Price:$${pelicula.precio}`
    ).join('\n');

    alert(`The Following Movies are: ${carteleraString}`);
  }

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
// Calculamos el costo
let totalCost = numbTicket * priceTicket;

// Utilizamos la función de validación
if (priceCost(numbTicket, priceTicket)) {
  alert(`Your cost for ${numbTicket} tickets: $ ${totalCost}`);
} else {
  alert("Please enter valid keys");
}
}

// Llamamos a la función principal
buyTicket();
// //calculamos el costo
// let totalCost = numbTicket * priceTicket;    
//  // crear un condicional para limitar el costo y la entrada
//  if (numbTicket && priceTicket > 0 ) {
//     alert (`Your cost for ${numbTicket} tickets : $ ${totalCost}`)
//  } 
//  else{
//     alert ("please enter valid keys");
//  }

// }
// buyTicket(); 


