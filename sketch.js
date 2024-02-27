/*
Bem vindo ao Plotick, um programa feito para
visualizar funções de forma didática e simples.
Basta alterar os valores dos coeficientes, ativar as linhas que deseja ver e clicar no botão de run logo acima.
Caso esteja interessado e saiba programar em Javascript, sinta-se livre para alterar e adicionar novas funções na aplicação. Todo o código é baseado em POO para faciltar o manuseio e extensão do código com o mínimo de erros.


Feito por: Miguel A. da  Cruz, da Minuz code.
*/


// ====================================================
// UTILIZAÇÃO
// =====================================================
let ativar_azul = 1;
let coeficientes_azul = {"A": 2, "B": 3};


let ativar_vermelha = 1;
let coeficientes_vermelha = {"A": 1, "B": 1, "C": -6};




// ======================================================
// CONFIGURAÇÕES
// ======================================================
const TELA = 400;
const quantidade_quadrados = 20;
const proporcao = TELA / quantidade_quadrados;
const resolucao_reta = 0.05;
const resolucao_parabola = 0.015;
// -----------------------------------------------------
// ----------------------------------------------------



// ======================================================
// CONSTANTES
// ======================================================
const ORIGEM_X = TELA /2;
const ORIGEM_Y = TELA /2;
const X_INICIAL = -1* (TELA /2);
const X_FINAL = TELA /2;
const msg_proporcao_errada =
"O tamanho da tela não é compatível com a quantidade de quadrados, por favor insira outro valor.";
// ---------------------------------------------------
// ---------------------------------------------------






// ====================================================
// CLASSE MÃE DAS FUNÇÕES
// =====================================================
class Funcao
{
  
  constructor(X_inicial, X_final, resolucao, cor)
  {
    this.X_inicial = X_inicial;
    this.X_final = X_final;
    this.cor = cor;
    this.resolucao = resolucao;
  }
  
  calcular()
  {
  }
  
  plotar()
  {
    stroke(this.cor);
    strokeWeight(3);
    
    
    for(let ponto = this.X_inicial; ponto < this.X_final; ponto += this.resolucao){
      
      let X = ponto;
      let Y = -1* this.calcular(X); //Correção do plano padrão do p5.js
      
      // OTIMIZAÇÃO: Caso passar da tela, não desenhar.
      if(X + ORIGEM_X > TELA || X + ORIGEM_X < 0) { continue; }
      if(Y + ORIGEM_Y > TELA || Y + ORIGEM_Y < 0) { continue; }      
      
      point((X *proporcao) + ORIGEM_X, (Y *proporcao) + ORIGEM_Y);
    } 
  }
  
}
// ---------------------------------------------------------------
// ---------------------------------------------------------------



// ===============================================================
// FUNÇÃO DE PRIMEIRO GRAU
// ===============================================================
class PrimeiroGrau extends Funcao
{
  
  constructor(X_inicial, X_final, resolucao, cor, coef_A, coef_B)
  {
    super(X_inicial, X_final, resolucao, cor);
    this.coef_A = coef_A;
    this.coef_B = coef_B;
  }
  
  calcular(valor_de_X)
  {
   let  valor_de_Y = this.coef_A * valor_de_X + this.coef_B;
    return valor_de_Y; 
  }
  
}
// -------------------------------------------------------------
// -------------------------------------------------------------



// =============================================================
// FUNÇÃO DE SEGUNDO GRAU
// =============================================================
class SegundoGrau extends Funcao
{
  
  constructor(X_inicial, X_final, resolucao, cor, coef_A, coef_B, coef_C)
  {
    super(X_inicial, X_final, resolucao, cor);
    this.coef_A = coef_A;
    this.coef_B = coef_B;
    this.coef_C = coef_C;
  }
  
  calcular(valor_de_X)
  {
   let  valor_de_Y = 
   this.coef_A * (valor_de_X **2) + this.coef_B * valor_de_X + this.coef_C;
    return valor_de_Y;
  }
  
}
// --------------------------------------------------------------
// --------------------------------------------------------------




// ==============================================================
// FUNÇÃO SENOIDAL
// ==============================================================
class Senoidal extends Funcao
{
  constructor(X_inicial, X_final, resolucao, cor)
  {
    super(X_inicial, X_final, resolucao, cor);
  }
  
  calcular(valor_de_X)
  {
    let valor_de_Y = sin(valor_de_X);
    return valor_de_Y;
  }
}
// ---------------------------------------------------------------
// ---------------------------------------------------------------




// ==============================================================
// FUNÇÃO COSSENOIDAL
// ==============================================================
class Cossenoidal extends Funcao
{

  constructor(X_inicial, X_final, resolucao, cor)
  {
    super(X_inicial, X_final, resolucao, cor);
  }

  calcular(valor_de_X)
  {
    let valor_de_Y = cos(valor_de_X);
    return valor_de_Y;
  }
  
}
// -------------------------------------------------------------
// -------------------------------------------------------------




// ==============================================================
// FUNÇÃO TANGENCIAL
// ==============================================================
class Tangencial extends Funcao
{

  constructor(X_inicial, X_final, resolucao, cor)
  {
    super(X_inicial, X_final, resolucao, cor);
  }

  calcular(valor_de_X)
  {
    let valor_de_Y = tan(valor_de_X);
    return valor_de_Y;
  }  
  
}
// --------------------------------------------------------------
// --------------------------------------------------------------




// ==============================================================
// FUNÇÃO EXPONENCIAL
// ==============================================================
class Exponencial extends Funcao
{
  
  constructor(X_inicial, X_final, resolucao, cor, coef_A)
  {
    super(X_inicial, X_final, resolucao, cor);
    this.coef_A = coef_A;
  }
  
  calcular(valor_de_X)
  {
    let valor_de_Y = this.coef_A **valor_de_X;
    return valor_de_Y;
  }
  
}
// --------------------------------------------------------------
// --------------------------------------------------------------




// ==============================================================
// FUNÇÃO DO TERCEIRO GRAU
// ==============================================================
class TerceiroGrau extends Funcao
{
  
  constructor(X_inicial, X_final, resolucao, cor, coef_A)
  {
    super(X_inicial, X_final, resolucao, cor);
    this.coef_A = coef_A;
  }
  
  calcular(valor_de_X)
  {
    let valor_de_Y = valor_de_X **3;
    return valor_de_Y;
  }
  
}
// --------------------------------------------------------------
// --------------------------------------------------------------





// ==============================================================
// ESPAÇO PARA DECLARAR NOVAS FUNÇÕES
// ==============================================================

const linha_azul = new PrimeiroGrau(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = resolucao_reta,
  cor = "blue",
  coef_A = coeficientes_azul["A"],
  coef_B = coeficientes_azul["B"]
);


const linha_vermelha = new SegundoGrau(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = resolucao_parabola,
  cor = "red",
  coef_A = coeficientes_vermelha["A"],
  coef_B = coeficientes_vermelha["B"],
  coef_C = coeficientes_vermelha["C"]
);


const senoide = new Senoidal(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = 0.09,
  cor = "orange"
);


const cossenoide = new Cossenoidal(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = 0.09,
  cor = "lightblue"
);


const tangente = new Tangencial(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = 0.09,
  cor = "lightgreen"
);


const expoente = new Exponencial(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = 0.05,
  cor = "darkblue",
  coef_A = 2
);


const grau3 = new Grau3(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = 0.01,
  cor = "magenta"
);
// --------------------------------------------------------------
// --------------------------------------------------------------


// ==============================================================
// QUADRICULADO
// ==============================================================
function Quadriculado()
{
    strokeWeight(1);
    stroke(200);    
    
    for (let linha = 0; linha != TELA;
    linha += proporcao){
            
            //Linhas horizontais
            line(0, linha, TELA, linha);

            
            //Linhas vericais
            line(linha, 0, linha, TELA);
    }
  
    stroke(0);
    strokeWeight(1.5);
    line(0, ORIGEM_Y, TELA, ORIGEM_Y);
    line(ORIGEM_X, 0, ORIGEM_X, TELA);
    strokeWeight(5);
    point(ORIGEM_X, ORIGEM_Y);
  
}
// ------------------------------------------------------------
// -----------------------------------------------------------




function setup()
{
  createCanvas(TELA, TELA);
}



function draw()
{
  background(255);
  if(TELA % quantidade_quadrados !== 0){
    text(msg_proporcao_errada, 20, 20);
    return;
  }
  
  Quadriculado();
  
  
  if(ativar_azul){
    linha_azul.plotar();
  }
  
  if(ativar_vermelha){
    linha_vermelha.plotar();
  }
}