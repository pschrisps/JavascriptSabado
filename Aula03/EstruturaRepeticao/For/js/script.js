function for1(){ 
for(var i = 1 ; i<= 10 ; i++ ){ 
    console.log(i);
 }  
}

function for2(){

    var numero=prompt("Digite um valor para a tabuada");

    for(var p = 1 ; p <= 10; p++){

        console.log(numero +" x "+ p +" = "+(numero*p))
                    
        
    }
}
function for3(){

}

//Vamos fazer uma referencia a tag body para criar 
//novos elementos html dentro dela//
var body = document.body;
// Vamos construir uma tag h1 e adiciona-la ao body//
var h1 = document.createElement("h1");
//vamos adicionar um texto ao h1//
h1.innerHTML = "Estrutura de Repeticao";

// adicionar o h1 ao body//
body.appendChild(h1);

for(var item = 1 ; item <= 20 ; item++){

    var div = document.createElement("div");
    
    //adicionar estilo de formatacao as divs//
    var canal = 11*item;
    div.style.backGroundColor="rgb(100,100,100" +canal+")";
    div.style.width="100px";
    div.style.height="100px";
    div.style.margin="10px";

    //adicionar a div ao body//
    body.appendChild(div);
}



2
//2x1=2
// 2x2=4
// 2x3=6