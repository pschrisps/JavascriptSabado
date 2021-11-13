function movimenta(){
    let x=1;
document.getElementById("caixa1").style.marginLeft+=`${x}px`;
    x+=1;

}


document.getElementById("caixa1").onclick=()=>{
    document.getElementById("caixa1").style.backgroundColor="blue";
}

document.getElementById("caixa1").omousemove


window.setInterval(movimenta,100);


