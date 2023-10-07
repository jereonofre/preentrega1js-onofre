function saludar() {
    alert("Bienvenido a nuestra hamburguesería");
}

saludar();

const menu = [
    { nombre: "Hamburguesa Simple", precio: 1000 },
    { nombre: "Hamburguesa Doble", precio: 1500 },
    { nombre: "Hamburguesa Triple", precio: 2000 }
];

function mostrarVariedades() {
    alert("Te mostraremos nuestras variedades");

    let menuString = menu.map((item, index) => `${index + 1}. ${item.nombre}   $${item.precio}`).join("\n");
    alert(menuString);
}

mostrarVariedades();

let continuarComprando = true;
let compras = "";
let totalComprado = 0;

while (continuarComprando) {
    let hamburguesaSeleccionada = parseInt(prompt(`
        Ingrese el número correspondiente a la hamburguesa que desea comprar:
        ${menu.map((item, index) => `${index + 1}. ${item.nombre}   $${item.precio}`).join("\n")}
        Para salir, escriba "ESC"`));

    let hamburguesaElegida = menu[hamburguesaSeleccionada - 1];

    if (hamburguesaElegida) {
        compras += `${hamburguesaElegida.nombre}\n`;
        totalComprado += hamburguesaElegida.precio;
        alert(`${hamburguesaElegida.nombre} comprada`);
    } else if (hamburguesaSeleccionada === "ESC") {
        alert("Saliendo...");
        continuarComprando = false;
    } else {
        alert("Ingresó una opción incorrecta, vuelva a intentar.");
    }

    if (continuarComprando) {
        continuarComprando = confirm("¿Desea seguir comprando?");
    }
}

alert("Gracias por su compra!");
alert(`
Hamburguesas compradas:
${compras}
Total del pedido  
$${totalComprado}
`);
