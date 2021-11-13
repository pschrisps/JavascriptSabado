function array1(){
    var cidade = ["São Paulo, Curitiba, Salvador"]
    console.log(cidade[1]);
}

function array2(){
    var n = [12,4,5,30, 51, 30];
              
  for(let i = 0 ; i <n.length ; i++){
        console.log("Contei " +n[i]);
    }
}


document.getElementById("btn").onclick = function(){
array2();
 }

 function array3(){
     var n = [5,10,3];

     var rs = 0;

     do{
         rs+=n[i];
         i++;

     }while(i < n.length);

     console.log("Some dos valores é"+rs);
 }

 var colecao = [];

 function adicionar(){ 
 
 var entrada = prompt("Digite um numérico ou digite S para sair");
 while(entrada !="S" ){
 colecao.push(entrada) ;
 entrada = prompt("Digite um numérico ou digite S para sair");
 } 

 //realizar a soma dos numeros no array//

 var rs = 0;

 for(let i = 0; i < colecao.lenght; i++){
     rs+=parseInt(colecao[i]);
 
     console.log(rs);
}
 }
 // #55 33 77 / #5 3 7 / 0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F//

 var corHex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

 //var x = '7";//
 //var y = 7;//

 //alert(typeof(y.toString())); //



 function cor(){

    let ar = Math.parseInt(1+Math.random()*15);
    alert(ar);

    function cor(){

    let ar = parseInt(Math.random()*15);
    let ag = parseInt(Math.random()*15);
    let ab = parseInt(Math.random()*15);

     let r = corHex[ar];
     let g = corHex[ag];
     let b = corHex[ab];

     document.body.style.backgroundColor="#"+r+""+g+""+b;
     alert("#"+r+""+g+""+b);
 }
 
 }

 function tabelaCor(){

    let tabela = "<table>";

    for (let coluna = 0 ; linha <= 19 ; linha++){ 
        tabela+="</tr>";
        for(let coluna = 0 ; coluna <= 29 ; coluna++){ 

        let ar = parseInt(Math.random()*15);
        let ag = parseInt(Math.random()*15);
        let ab = parseInt(Math.random()*15);  

        let r = corHex[ar];
        let g = corHex[ag];
        let b = corHex[ab];

        tabela+="<td style=background-color:"+r+""+g+""+b+"></td>";
        
     }
     tabela+="</tr>";

     document.body.innerHtml = tabela;

}


document.getElementById("btn").onclick = function(){
    tabelaCor();
} }