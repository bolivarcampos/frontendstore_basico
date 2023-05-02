let nombre = prompt("Por favor, ingrese su nombre:");
let talla = prompt("Cuál es tu talla?");
alert("¡Bienvenido a Frontend Store tu tienda de Remeras IT " + nombre + "!");
alert("Tenemos en stock varios modelos que se adaptan a ti");

let lenguaje = prompt(
  "¿Cuál es tu lenguaje de programación preferido? JavaScript, Java, Python, C, C++"
);

switch (lenguaje) {
  case "JavaScript":
    alert("Excelente lenguaje usado para Front y Backend");
    break;
  case "Java":
    alert("Lenguaje Orientada a Objeto");
    break;
  case "Python":
    alert("Lenguaje Fácil y Eficiente de aprender, muy usado actualmente");
    break;
  case "C":
    alert("Lenguaje más complejo de aprender y de bajo nivel!");
    break;
  case "C++":
    alert(
      "Como C es complejo de aprender pero muy vérsatil y dinámico, muy demandado"
    );
    break;

  default:
    alert("¡No se ha podido determinar tu lenguaje de programación!");
    break;
}
