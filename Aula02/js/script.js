
/* O comando abaixo será executado quando o usuário abrir uma página. será exibido uma janela (prompt) pedido de uma cor. De acordo com a cor selecionada o fundo da pagina muda.
Para essa execução, estamos usando o comando window( janela navegado). document ( o meu documento html).body( corpo da página). addEventListener( 
    adicionando um evento ao body para que ele preste atenção ao carregamento da página(load) e assim executar a função ()=>}{} com 
    todo o código do desvio de fluxo if....else if....else
    )
    */
    window.document.body.onload=()=>{
   let escolha = prompt 
   ("Digite:\n->1Amarelo\n->2Vermelho\n->3Azul");

if(escolha == 1)
   window.document.body.style.backgroundColor="yellow";
else if(escolha==2)
   window.document.body.style.backGroundColor="red";
else if(escolha==3)
   window.document.body.style.backGroundColor="blue";
   else
   window.alert("Valor inválido");
}         