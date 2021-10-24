 var cor =prompt("Digite uma cor, que pode ser \nVermelho,Verde,Azul,AmareloPreto,Cinza,")

 var fundo ="";

 /*
 Para transformar os caracteres 
 */
cor = cor.toLowerCase();

switch(cor){ 
    case "Vermelho":
    fundo="red";
    break;
    case "Verde":
        fundo="green";
        break;
case "Azul":
    fundo="blue";
    break;
case "Amarelo":
    fundo="yellow";
    break;
case "Preto":
    fundo="black";
    break;
case "Cinza":
    fundo="gray";
    break;

 default: 
  fundo="white";
 break;   
}
document.body.style.backgroundColor=fundo;