
// let name = prompt("ingresa tu nombre");
// let age = prompt("ingresa la edad");

// alert(`${name} ${age}`);

// console.log(`${name} ${age}`);

// document.write(`${name} ${age}`);



// ----------------------------------------------------------------- TIPOS DE DATOS ---------------------------------------------------------------------


// ** numerico

// let number = 17;


// ** string

// let name = "Gonza";


// ** array

// let days = ["lunes", "martes", "miercoles"];


// ** objetos

// let user = {
//     nombre: 'Gonza',
//     edad: 18,
//     color: 'black',
// }

// let user2 = {
//     nombre: 'Brayan',
//     edad: 26,
//     color: 'green'
// }

// ** boolean

// let boolean = true;
// let boolean = false;


// ------------------------------------------------------------------------ ARREGLOS --------------------------------------------------------------------


// ** array 
// ** dias.push() agrega al final de un arreglo
// ** dias.pop() elimina el ultimo arreglo 

// let dias = ["lunes", "martes", "miercoles"];

// const lastItem = dias.pop();
// console.log('dias =>', dias);


// ** concatenar arreglos

// let dias2 = ["jueves", "viernes"];
// let dias3 = dias.concat(dias2);


// ** agrega un separador

// document.write(dias3.join('-----'));


// ** ordenado alfabeticamente

// let abecedario = ['e', 'a', 'f', 'b', 'g', 'c', 'h', 'd'];
// let ordenar = abecedario.sort();
// console.log(ordenar);


// ** slice() - devuelve una copia de una parte del array dentro de uno nuevo

// let dias = ["lunes", "martes", "miercoles", "jueves"];
// let x = dias.slice(1, 3);
// console.log(x);


// ** shift() - elimina el primer elemento del array

// let dias = ["lunes", "martes", "miercoles", "jueves"];
// let firstElement = dias.shift()
// console.log(dias)


// ** unshift - agrega uno o mas elementos al inicio del array

// let dias = ["miercoles", "jueves"];
// dias.unshift("lunes", "martes");
// console.log(dias)


// ** splice - cambia el contenido de un arreglo eliminando o agregando nuevos arreglos

// let dias = ["lunes", "martes", "miercoles", "jueves", "jueves"];
// console.log('arreglo de dias mal hecho ---->', dias)
// dias.splice(4, 1, "viernes");
// console.log('eliminamos el jueves repetido por el viernes ---->', dias);
// dias.splice(5, 0, 'sabado');
// console.log('agregamos el dia sabado ---->', dias)



//     ------------------------------------------------------------------- CONDICIONALES -------------------------------------------------------------------//

    // let nombre = "Gonza",
    // edad = 17;


    // if (edad >= 18) {
    //     document.write("bienvenido")
    // } else if (nombre == "Gonza") {
    //     document.write("bienvenido Gonza")
    // } else {
    //     document.write("no eres bienvenido")
    // }

    // // -------------------------------------

    // let nombre = "Gonza"
    // // let nombre = "brayan"
    // let edad = 18

    // if (edad >= 18 && nombre == "brayan") {
    //     document.write("bienvenido brayan")
    // } else if (nombre == "Gonza") {
    //     document.write("bienvenido Gonza")
    // } else {
    //     document.write("no eres bienvenido")
    // }

    // // --------------------------------------

    // let nombre = prompt('ingresa tu nombre');

    // if (nombre == 'gonza') {
    //     console.log('bienvenido gonza')
    // } else {
    //     console.log(`no eres bienvenido ${nombre}`)
    // }

    // // ---------------------------------------

    // ** condicional SWITCH

    // let variable = prompt('cual es tu estacion favorita');


    // switch (variable) {
    //     case 'primavera':
    //         console.log('tu estacion favorita es la primavera');
    //         break;

    //     case 'verano':
    //         console.log('tu estacion favorita es el verano');
    //         break;

    //     case 'otono':
    //         console.log('tu estacion favorita es el otono')
    //         break;

    //     case 'invierno':
    //         console.log('tu estacion favorita es el invierno');
    //         break;

    //     default:
    //         console.log('no accediste a ninguna estacion');
    // }


//     ------------------------------------------------------------------ CICLOS ---------------------------------------------------------------------------//

    //     let numeroDeUsuarios = 10;

    // for (i = 1; i <= numeroDeUsuarios; i++) {
    //     document.write(i + "<br>")
    // }

    // // -----------------------------------------------

    // let dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

    // for (i = 0; i <= dias.length - 1; i++) {
    //     document.write(dias[i] + "<br><br>")
    // }

    // // ------------------------------------------------

    // let i = 0;

    // while (i <= 10) {
    //     console.log(i);
    //     i++;
    // }


//     ------------------------------------------------------------------------ FUNCIONES ------------------------------------------------------------------//


// function cambiarNombre(nuevoNombre) {
//     document.write(nuevoNombre)
// }

// cambiarNombre("gonza")

// // ------------------------------------------------

// function suma(num1, num2) {
//   return num1 + num2;
// }

// document.write(suma(10, 20));

// document.write("<br><br>");

// document.write(suma(40, 60));

// document.write("<br><br>");

// document.write(suma(30, 50));

// // ---------------------------------------------------

// let numeroMaximo = function (valor1, valor2) {
//     if (valor1 > valor2) {
//         return valor1;
//     } else {
//         return valor2;
//     }
// }
//     document.write(numeroMaximo(5, 1))

// // ----------------------------------------------------

    // function numeroMin(valor1, valor2) {
    //     if (valor1 < valor2) {
    //         return valor1;
    //     } else {
    //         return valor2;
    //     }
    // }
    // document.write(numeroMin(5, 1))


// //---------------------------------- ARROW FUNCTION -----------------------------------------------

// let suma = (num1, num2) => num1 + num2;
// console.log(suma(1524, 1252));

// // --------------------------------- FUNCION RECURSIVA ---------------------------------------------


// const numeros = (x) => {
//     if (x == 0) return
//     console.log(x);
//     return numeros(x - 1);
// }

// numeros(5);


// let factorial = (numero) => {
//     if (numero <= 1) {
//         return 1;
//     } else {
//         return numero * factorial(numero - 1);
//     }
// }

// alert(factorial(5));


// // ------------------------------------- FUNCION DE CALLBACK -----------------------------------------


    // function userName(callback) {
//     let name = prompt('Ingresa tu nombre');
//     callback(name)
// }

// function saludar(name) {
//     document.write(`${'Hola'} ${name}`);
// }

// userName(saludar);



//     ---------------------------------------------------------------------- SCOPE --------------------------------------------------------------------------// 


    // // ** global - podemos acceder a ellas desde cualquier parte del codigo
    // // ** local - variables creadas dentro de una funcion, solo pueden ser accedidas desde su propia funcion o una funcion anidada

    // let variableGlobal = "esta es global";

    // function mifuncion() {
    //     alert(variableGlobal);
    // }
    // mifuncion()


    // let mifuncion = function () {
    //     let variablelocal = "esta es local"
    //     alert(variablelocal)
    // }
    // mifuncion()


    // var mifuncion = function () {
    //     var variablelocal = "esta variable es local";


    //     var funcionLocal = function () {
    //         var variablelocal = "esta es una variable local, dentro de una funcion";
    //         alert(variablelocal);
    //     }

    //     funcionLocal();
    // }

    // mifuncion()



//     ---------------------------------------------------------- METODOS PARA CADENAS DE TEXTO ------------------------------------------------------------//


// .substring(3); - extrae los caracteres de una cadena

// .length - devuelve el numero de caracteres de una cadena

// .substr(8, 7); - devuelve los caracteres de una cadena que comienzan en una localizacion especificada

// .indexOf("z"); - nos devuelve la posicion de una letra en especifico buscando desde el inicio hasta el final de la cadena

// .lastIndexOf("z"); - nos devuelve la posicion de una letra en especifico buscando desde el final de la cadena hacia delante

// .toUpperCase(); - nos permite convertir nuestro texto a mayusculas

// .toLowerCase(); - nos permite convertir nuestro texto a minusculas

// .replace(texto que queremos cambiar, el texto nuevo) - nos permite reemplazar una cadena de texto por otra

//     let texto = "Gonzalo Salazar"
//     let nuevoTexto = texto.toLowerCase();
//     document.write(nuevoTexto)

//     let nombre = "Brayan salazar";
//     let nuevoNombre = nombre.replace("Brayan", "Gonzalo");
//     document.write(nuevoNombre)



// ------------------------------------------------------------------------------------------------------------------------------------------------------------



// // ** como editar un objeto utilizando una funcion

// let user = {
//     firstName: 'gonzalo',
//     lastName: 'salazar',
// }
// console.log('user before ----', user);


// function nombre(user, nuevoNombre) {
//     user.firstName = nuevoNombre;
// }

// function apellido(user, nuevoApellido) {
//     user.lastName = nuevoApellido;
// }

// function edad(user, nuevaEdad) {
//     user.age = nuevaEdad;
// }

// nombre(user, 'brayan');
// apellido(user, 'carvajal');
// edad(user, 26);
// console.log('user after----', user);


// // ----------------------------------------------------------------------------------

// ** metodo diferente


// function cambiarTodo(user, nuevoNombre, nuevoApellido, nuevaEdad) {
//   user.firstName = nuevoNombre;
//   user.age = nuevaEdad;
//   user.lastName = nuevoApellido;
// }

// cambiarTodo(user, 'brayan', 'carvajal', 26);

// function fullName(user) {
//     return `${user.firstName} ${user.lastName} ${user.age}`;
// }

// const nombreCompleto = fullName(user);
// console.log('nombre completo ----', nombreCompleto)






// ------------------ ARROW Function -----------------

// let suma = (num1, num2) => num1 + num2;
// console.log(suma(5, 10));

// ------------------ FOR EACH ----------------------

// let numeros = [2, 4, 6, 8];

// numeros.forEach((element, index, array) => {
//     console.log(element + 2);
// console.log(index);
// console.log(array);
// })

// ------------------ MAP ----------------------------

// let numeros = [2, 4, 6, 8];

// let resta = numeros.map(x => x - 10)
// console.log(resta);



// // --------------------------------------- ARRAY DE USUARIOS ---------------------------------------------------

// let user1 = { nombre: 'lebron', apellido: 'james', equipo: 'lakers', edad: 35 }

// let user2 = { nombre: 'stephen', apellido: 'curry', equipo: 'warriors', edad: 32 }

// let user3 = { nombre: 'kevin', apellido: 'durant', equipo: 'nets', edad: 31 }

// let user4 = { nombre: 'giannis', apellido: 'antetokounmpo', equipo: 'bucks', edad: 25 }

// let users = [user1, user2, user3, user4];


// // ------------------ nombre completo de todos los usuarios ------------------------------------

// let fullName = users.map(usuario => `${usuario.nombre} ${usuario.apellido}`);
// console.log(fullName);


// // ------------------ otra forma de obtener el nombre completo ---------------------------------

// let fullName = users.map(function (usuario) {
//     return `${usuario.nombre} ${usuario.apellido}`
// });
// console.log(fullName);



// // ------------------------- imprime a todos los usarios del array -------------------------------

// users.forEach(function (usuario) {
//     console.log(usuario);
// });




// // ------ ejemplo for each -----------

// let dias = ['lunes', 'martes', 'miercoles'];

// dias.forEach(function (x) {
//     console.log(x);
// })

// dias.forEach(x => {
//     console.log(x);
// })



















