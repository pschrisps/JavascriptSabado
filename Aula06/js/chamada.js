const numeros = [10,3,,78,10,16];
console.log(pares(numeros));
//Vamos criar um botao e 2 divs
const btn = document.createElement("button");
//Vamos adicionar um id no botao
btn.setAttribute("id" , "btn");
btn.innerHTML="Clique";

//Criar as divs para a quantidade de anos e os anos bissextos
const divQtd = document.createElement("div");
divQtd.setAttribute("id", "qtd");

const divAno = document.createElement("div");
divAno.setAttribute("id", "ano");

//adicionar os elementos criados ao body
document.body.appendChild(btn);
document.body.appendChild(divQtd);
document.body.appendChild(divAno);

//Vamos adicionar um evento ao botao btn.que sera o evento de click
//esse evento chama a constante ano que tem uma funcao rodando dentro dela
//btn.addEventListener("click",anos())
btn.onclick=function(){

    const a = anos();
    
    divQtd.innerHTML = a[0];

    for(let i = 0 ; i < a[0] ; i++){
    divAno.innerHTML+=`${a[1][i]} <br>`;
    }

}



const btn2 = document.createElement("button");
const divTexto = document.createElement("div");


btn2.innerHTML="Contar";
divTexto.setAttribute("class","formato");


document.body.appendChild(btn2);
document.body.appendChild(divTexto);

btn2.onclick = ()=>{

   divTexto.innerHTML=texto("Olá!Hoje é sábado");


}



