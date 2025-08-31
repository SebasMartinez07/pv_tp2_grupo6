
let imput = prompt("Ingrese el primer numero entero");
let numero1 = parseInt (imput);
let imput2 = prompt("ingrese el segundo numero entero");
let numero2 = parseInt(imput2);
let imput3 = prompt("ingrece el tercer y ultimo numero entero");
let numero3 = parseInt(imput3);
let promedio = ((numero1 + numero2 + numero3) /3);

if(isNaN(numero1) || isNaN(numero2) || isNaN(numero3)){
    alert("eso no es un numero entero valido");

}
else {
    alert("el promedio de los tres numero es:" + promedio);
}