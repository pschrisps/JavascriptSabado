var cor = prompt("Digite os numeros relacionados as cores:\n1-Vermelho\n2-Azul\n3-Preto");

if(cor==1){
    document.body.style.backgroundColor="red";
}
else if(color==2){   
    document.body.style.backgroundColor="blue";
}
else if(color==3){   
    document.body.style.backgroundColor="black";
}    
else{
    document.body.style.backgroundColor="white";
    alert("O valor digitado não corresponde as cores especificadas");
} 
/*
//DRY -> Don´t Repeat Yourself ( Não se repita)
//Vamos refatorar o código acima(Refeactor)*/
var fundo = "white";
if(cor==1){
    fundo = "red"; 
}    
else if(cor==2){
        fundo = "blue";
    }    
else if(cor==1){
            fundo = "black";   
}  
        else{ 
            alert("O valor digitado não corresponde as cores especificadas");
}            