function resolver(cadena){
  let nuevaCadena ='';
  for (let i = 0; i < cadena.length; i++) {  
    const caracter = cadena[i];
     if (caracter === '?'){
        let suma = 0;

        if (i > 0) {
            suma += parseInt(cadena[i - 1]);
        }
        if (i < cadena.length - 1) {
            suma += parseInt(cadena[i + 1]);
        }
        nuevaCadena = suma.toString();
    }else{
        nuevaCadena += caracter;
    }
}
return nuevaCadena;
}
const valor = prompt("ingrese los numeros:");
const resultado = resolver(valor);
alert("Resultado: " + resultado);