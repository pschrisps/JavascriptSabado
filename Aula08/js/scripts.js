// var cidades = ["São Paulo", "Curitiba", "Campinas"]
// for(let i = 0 ; i < cidades[i])
// console.log(cidades[i])

// cidades.forEach(function(dado, ix){
// console.log(dado);
// })
// function valor(dado, ix){
//    console.log(dado);
    


// cidades.forEach((valor, index)=>{
//     console.log(`dentro do foreach ${valor} e ${index}`)

// });
// cidades.map((dados)=>{
//     console.log(`map da cidade ${dados}`)
// })

// vamos construir um objeto em javascript
// var produto1 = {
//     nome:"Teclado",
//     descricao:"Sem fio",
//     preco:50,90,
//     quantidade:30
// };


// var produto2 = {
//     nome:"Mouse",
//     descricao:"Sem fio",
//     preco:30,50,
//     quantidade:10
//      };

//     var produto3 = {
//         nome:"Monitor",
//         descricao:"Monitor Dell",
//         preco:500,90,
//         quantidade:5
//     };

//     var lista = [produto1, produto2,produto3];

//     var  lstProduto = [
//         var produto1 = {
//             nome:"Teclado",
//             descricao:"Sem fio",
//             preco:50,90,
//             quantidade:30
//         },
        
        
//         var produto2 = {
//             nome:"Mouse",
//             descricao:"Sem fio",
//             preco:30,50,
//             quantidade:10
//              },
       //Para obter os dados relacionados aos filmes que veem da api themoviedb iremos utilizar uma url 
       // com o caminho onde os dados para essa requisicao aconteca, iremos usar uma funcao javascript
       // chamada fetch(buscar). o fetch  é uma funcao especial do javascript classificada
       // com promisse, ou seja, uma promessa de que ela ira conseguir buscar os dados 
       //Porém existe a possibilidade  de essa promessa falhar , portanto temos
       // a opcao de tratar essa falha 
       
       
//             var produto3 = {
//                 nome:"Monitor",
//                 descricao:"Monitor Dell",
//                 preco:500,90,
//                 quantidade:5
//             };
//     ]
//    lstProduto.map((item)=>{
//       item.fornecedores.map(fr)=>{
//           console.log(`Empresa: ${fr}`)
//       }
//        })
fetch("https://api.themoviedb.org/3/movie/popular?api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1")
.then((response)=>response.json())
.then((listaFilmes)=>{


// fazer  uma referencia ao body
   const body = window.document.body;
   const container = window.document.createElement("div");
   const header = window.document.createElement("header");
   const main = window.document.createElement("main");
   const h1 = window.document.createElement("h1");
   const item = window.document.createElement("div");
   const img = window.document.createElement("img");

   container.setAttribute("id","container");
   header.setAttribute("id","header");
   h1.innerHTML="Filmes";
   header.appendChild(h1);
   h1.innerHTML+=`pag.atual: ${listaFilmes.page};
   - Total de paginas: ${listaFilmes.total_pages}
   - Total de resultados: ${listaFilmes.total_results}`;


   main.setAttribute("id","main");

   listaFilmes.results.map((dado)=>{
       var item = window.document.createElement("div");
       var img = window.document.createElement("img");
       var h2 = window.document.createElement("h2");
       var pR = window.document.createElement("p");
       var pV = window.document.createElement("p");
       h2.innerHTML=dado.title;

pR.setAttribute("class","lancamento");
pR.innerHTML=dado.release_date;
pV.setAttribute("class","media");
pV.innerHTML =dado.vote_average;

       img.src=`https://image.tmdb.org/t/p/w500${dado.poster_path}`;
       item.appendChild(img);
       item.appendChild(h2);
       item.appendChild(pR)
       item.appendChild(pV)
       main.appendChild(item);


      
   })
  
   container.appendChild(header);
   container.appendChild(main);
   body.appendChild(container);

})
.catch((erro)=>console.error(`erro ao tentar caregar a api ${erro}`));
