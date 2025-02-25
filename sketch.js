/*
    Bem vindo ao Plotick, um programa feito para
    visualizar funções de forma didática e simples.
    Basta alterar os valores dos coeficientes, ativar
    as linhas que deseja ver e clicar no botão de run
    logo acima. Caso esteja interessado e saiba programar
    em javascript, sinta-se livre para alterar e adicionar
    novas funções na aplicação.
    
    Para atualizar o gráfico, aperte 'r'.
    
    Link do repositório com documentação:
    https://github.com/Miguel-Andrade-Cruz/Plotick
    Feito por: Miguel A. da Cruz, da minuz.code.
*/
 

// ============================================================
// Inicializador do programa
// ============================================================
function keyPressed()
{
  if (key == 'r') {
    loop();
  }

  noLoop()
}



function setup()
{
  noLoop();
  
  if ( TELA % QUANTIDADE_QUADRADOS !== 0 ) {
    text(MSG_PROPORCAO_INCORRETA, 20, 20);
    return;
  }
  createCanvas(TELA, TELA);  
  frameRate(24);
    
  for ( let funcao of LISTA_DE_FUNCOES ) {
    funcao.criaInputs();
  }  
}


function draw()
{
  background(255); 
  Quadriculado();

  for ( let funcao of LISTA_DE_FUNCOES ) {
    funcao.nomeiaInputs();    
    funcao.plota();      
  }

}
// ========================================================
// ============================================================
