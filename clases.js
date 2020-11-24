// class user {
//     constructor() {
//         this.name = 'gonzalo salazar';
//         this.age = 18;
//     }
// }

// const gonza = new user();
// console.log(`mi nombre es ${gonza.name} y tengo ${gonza.age} años de edad`);


// class user2 {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     saludo(mensaje) {
//         return mensaje;
//     }
// }

// const brayan = new user2 ('brayan salazar', 26)
// console.log(brayan.saludo(`hola soy ${brayan.name}`));


// class user3 {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     mostrarinfo() {
//         return `
//             nombre: ${this.name}
        
//             edad: ${this.age}
//         `
//     }
        
// }

// const Gonzila = new user3 ('Gonzila', 25)
// console.log(`hola soy ${Gonzila.name} y tengo ${Gonzila.age} años de edad`);

// console.log(Gonzila.mostrarinfo())


// ----------------------------------------------------- programacion orientada a objetos --------------------------------------------------------------



// // ** herencia, polimorfismo, encapsulamiento y abstraccion



// class user4 {
//     constructor (name, age, mail) {
//         this.name = name;
//         this.age = age;
//         this.mail = mail
//     }
//     message() {
//         return 'hola Gonzalo'
//     }

//     info() {
//         return `${this.name} ${this.age} ${this.mail}`
//     }
// }

// const Gonzalo = new user4 ('Gonzalo Salazar', 18, 'gonzalosalazar1180@gmail.com');
// console.log(Gonzalo.message())
// console.log(Gonzalo.info())




// class student extends user4 {
//     constructor(name, age, mail, career) {
//         super(name, age, mail)
//         this.career = career
//     }

//     message() {
//         return 'hola Brayan'
//     }

//     info() {
//         return `nombre: ${this.name} ${this.age} ${this.mail} ${this.career}`
//     }

// }

// const brayan = new student('brayan salazar', 26, 'ejemplo@gmail.com', 'desarrollador web');
// console.log(brayan.info())



// class user5 extends user4 {
//     message() {
//         return 'hola Gonza';
//     }
// }

// const Gonza = new user5('Gonza', 18, 'hola@gmail.com');
// console.log(Gonza.message())






// function caja (ancho, largo, alto) {
//     function volumen (a, b, c) {
//         return a*b*c
//     }
//     this.volumenCaja = volumen(ancho, largo, alto)
// } 


// let contenedor = new caja (5,4,3) 

// console.log(contenedor.volumenCaja)






// let seguridad = function() {
//     var tarjeta = '1111-2222-3333';
    
//     return {
//         mostrarTarjeta: function () {
//             console.log(`su tarjeta es ${tarjeta}`);
//         }
//     };
// };

// let mostrar = seguridad();

// mostrar.mostrarTarjeta()


