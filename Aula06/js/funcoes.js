function pares(valores){
    let lista = [];
    
    for(let i = 0; i < valores.length ; i++){
        if (valores[i]% 2 ==0 ){
            lista.push (valores[i]);
        }
    }
    return lista;
    }

 //Função anonima . Ela esta vinculada a alguma coisa : pode ser um botão, um elemento 
 // html ( relacionado a um evento ), uma variavel ou constante 
 //Abaixo a função anonima vinculada a uma constante 
 const anos = function (){

    let qtd = 0;
    let anosBissextos = []

    for(let i = 1950; i <= 2021 ; i++){
        if(i % 4 == 0){
            anosBissextos.push(i);
            qtd++;
        }
    }

   //  console.log(qtd)
   // console.log(anosBissextos);
   // return `${qtd} ${anosBissextos}´
   return [qtd, anosBissextos];
 }   

 const texto = (t)=>{
     return t.length;
 }
 

  
  