/*
    Bem vindo ao Plotick, um programa feito para
    visualizar funções de forma didática e simples.
    Basta alterar os valores dos coeficientes, ativar
    as linhas que deseja ver e clicar no botão de run
    logo acima. Caso esteja interessado e saiba programar
    em javascript, sinta-se livre para alterar e adicionar
    novas funções na aplicação.

  Feito por: Miguel A. da Cruz, da Minuz code.
*/
 


// ============================================================
// Espaço para criar funções
// ============================================================

let F_verde = new PrimeiroGrau(0.02, 'green',
  { 'A': 1, 'B': 2 },
  0, 480
);


let F_azul = new SegundoGrau(0.02, 'blue',
  {'A': 2,'B': 3, 'C': 4 },
  0, 0
);


let F_roxa = new MinhaFuncao(0.2, 'purple',
  {'A': 2,'B': 3 },
  -480, -480
);


let F_vermelha = new Logaritimica(0.05, 'red',
  {'A': 2},
  480, -480
);


// Coloque as funções na lista abaixo, como no exemplo
// =========================================

LISTA_DE_FUNCOES = [
  F_azul,
  F_verde
];

// ============================================================
// Inicializador do programa
// ============================================================

function setup()
{
  createCanvas(TELA, TELA);  
  frameRate(24);
    
  for ( let funcao in LISTA_DE_FUNCOES ) {

    funcao = LISTA_DE_FUNCOES[funcao];
    funcao.criarSliders();
    
  }
  
  
}


function draw()
{
  if(TELA % QUANTIDADE_QUADRADOS !== 0){
    text(MSG_PROPORCAO_INCORRETA, 20, 20);
    return;
  }

  background(255);
  
  quadriculado();
  
  
  for ( let funcaoIndice in LISTA_DE_FUNCOES ) {
    funcao = LISTA_DE_FUNCOES[funcaoIndice];
    
    funcao.nomearSliders();    
    
    push();
    translate(TELA/2, TELA/2);
    
    funcao.plotar();
    
    pop();

  }

}   // ========================================================
// ============================================================
