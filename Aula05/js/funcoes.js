function mensagem(){
    console.log("Minha funcão");
}

function mensagem2(){
    return "Minha função 2";
}

function executar(){ 
    alert(mensagem2());
    alert(mensagem());
}

function soma(n1,n2){
    return n1+n2;

}

function total(numeros){
    let rs = 0;

    for (let i = 0 ; i < numeros.lenght ; i++){
        rs += numeros[i];
    }
    let p = document.createElement("p");
    p.innerHTML = rs;
    document.body.appendChild(p);

}


//let n = [10,2,3,5]; 


//n = "Oi";


const n = [10,2,3,5];

n.push(20)


console.log(n)


//construir funções anonimas
document.getElementById("btn").onclick = function(){
    //alert("O resultado da soma entre 10 e 20 é :"+soma(10,20));
    //alert('o resultado da soma entre 10 e 20 é ${soma(10,20)´}');
            alert('Hoje é ${new Date().toDateString()} . Fizemos uma soma: ${soma(10,20)}');
} 




document.body.addEventListener("load",total(n));
