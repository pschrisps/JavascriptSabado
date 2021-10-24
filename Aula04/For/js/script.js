function calculoCPF(){
    var cpf = prompt("Digite o seu CPF");

    var cpf9 = cpf.substring(0,9);

/*
A variavel cpf9 ira armazenas os 9 primeiros digitos do cpf para o 
calculo. Para capturar os 9 primeiros estamos usando a funcão 
substring e passando para ela 2 parametros , que sao a posicao inicial 
da captura de dados e a quantidade de dados que devem ser capturados.
*/

//String -> cadeia de caracteres( conjunto do tipo char->caracter)

var cpf9 = cpf.substring(0,9);
console.log(cpf9)

var peso10 = 10;
var peso11 = 11;

var resultado = 0;
var resto = 0;

for(var i = 0; i < 9; i++){
    
    resultado += cpf9[i]*peso10;
    peso10--;

}

console.log(resultado);


resto = resultado % 11;

if(resto < 2){
    cpf9+=0;

}
else{
    cpf9+=(11-resto); 
}

resultado = 0;

for(var i = 0; i < 10; i++){
    
    resultado += cpf9[i]*peso11;
    peso11--;

}

console.log(resultado);


resto = resultado % 11;

if(resto < 2){
    cpf9+=0;

}
else{
    cpf9+=(11-resto);

}

console.log(cpf9);

if(cpf !=cpf9){
    alert("CPF Invalido");
}

else{
   alert("CPF Valido");

}
 }
 