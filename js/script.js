// let nombre = prompt("Por favor, ingrese su nombre:");
// let talla = prompt("Cuál es tu talla?");
// alert("¡Bienvenido a Frontend Store tu tienda de Remeras IT " + nombre + "!");
// alert("Tenemos en stock varios modelos que se adaptan a ti");

// let lenguaje = prompt(
//   "¿Cuál es tu lenguaje de programación preferido? JavaScript, Java, Python, C, C++"
// );

// switch (lenguaje) {
//   case "JavaScript":
//     alert("Excelente lenguaje usado para Front y Backend");
//     break;
//   case "Java":
//     alert("Lenguaje Orientada a Objeto");
//     break;
//   case "Python":
//     alert("Lenguaje Fácil y Eficiente de aprender, muy usado actualmente");
//     break;
//   case "C":
//     alert("Lenguaje más complejo de aprender y de bajo nivel!");
//     break;
//   case "C++":
//     alert(
//       "Como C es complejo de aprender pero muy vérsatil y dinámico, muy demandado"
//     );
//     break;

//   default:
//     alert("¡No se ha podido determinar tu lenguaje de programación!");
//     break;
// }

const productos = [
  { nombre: "Camisa JS", precio: 20 },
  { nombre: "Camisa C++", precio: 15 },
  { nombre: "Camisa HTML", precio: 35 },
  { nombre: "Camisa Python", precio: 5 },
  { nombre: "Camisa C", precio: 10 },
];

let carrito = [];

let seleccion = prompt("Hola desea comprar algún producto si o no");

while (seleccion != "si" && seleccion != "no") {
  alert("por favor ingresa si o no");
  seleccion = prompt("Hola desea comprar algo si o no");
}

if (seleccion == "si") {
  alert("a continuación nuestra lista de productos");
  // UNA POSIBILIDAD HACIENDO UNA POR UNA SERIA LA SIGUIENTE:
  // for (let i = 0; i < productos.length; i++)
  //   alert(productos[i].nombre + " - " + productos[i].precio + " euros");
  let todoslosProductos = productos.map(
    (producto) => producto.nombre + " " + producto.precio + "$"
  );
  alert(todoslosProductos.join(" _ "));
} else if (seleccion == "no") {
  alert("Gracias por elegirnos, nos vemos otro día");
}

while (seleccion != "no") {
  let producto = prompt("agrega un producto a tu carrito");
  let precio = 0;
  if (
    producto == "camisa js" ||
    producto == "camisa c++" ||
    producto == "camisa HTML" ||
    producto == "camisa c+" ||
    producto == "camisa c" ||
    producto == "camisa Python"
  ) {
    switch (producto) {
      case "camisa js":
        precio = 20;
        break;
      case "camisa c++":
        precio = 15;
        break;
      case "camisa HTML":
        precio = 35;
        break;
      case "camisa c":
        precio = 10;
        break;
      case "camisa Python":
        precio = 5;
        break;
      default:
        break;
    }
    let unidades = parseInt(prompt("Cuántas unidades quiere llevar?"));

    carrito.push({ producto, unidades, precio });
  } else {
    alert("El producto no existe");
  }
  seleccion = prompt("desea seguir comprando?");

  while (seleccion === "no") {
    alert("Gracias por la compra! hasta luego");
    carrito.forEach((carritoFinal) => {
      console.log(
        `producto: ${carritoFinal.producto}, unidades: ${
          carritoFinal.unidades
        }, total a pagar por producto ${
          carritoFinal.unidades * carritoFinal.precio
        }`
      );
    });
    break;
  }
}
