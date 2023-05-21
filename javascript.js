  // ejercicio de IF: 

let helado = 150;
let topping;
let precio;
let precioFinal;

if (topping == "Oreo"){
precio= 10;} else
if (topping == "KitKat"){
precio= 15;} else
if (topping == "Kinder"){
precio= 25;}
else { console.log('No tenemos este Topping'); }


precioFinal = precio + helado;

console.log('El helado cuesta $' +precioFinal)

  // ejercicio de Switch: 

let menu = "Carne"
switch (menu) {
case "Carne":
console.log('Vino Tinto');
break;
case "Pescado":
console.log('Vino Blanco');
break;
case "Verdura" :
console.log('Agua');
break;
default:
console.log('Elija carne, pescado o verdura');
}

  // ejercicio de For:

let animales = ['cerdos', 'vacas', 'pollos'];

let count = animales.push('cerdos');
console.log(count);
console.log(animales);

animales.push('patos', 'caballos', 'gallinas');
console.log(animales);

  // ejercicio de While:

var count = 11;
while (count < 11) {
console.log("número es menor que 11");
count = count -1
}