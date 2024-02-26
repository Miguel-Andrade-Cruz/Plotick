// ======================================================
// CONFIGURAÇÕES
// ======================================================
const resolucao_reta = 0.5;
const resolucao_parabola = 0.5;
const TELA = 600;
const quantidade_quadrados = 20;
const proporcao = TELA / quantidade_quadrados;

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
    strokeWeight(2);
    
    
    for(let ponto = this.X_inicial; ponto < this.X_final; ponto += this.resolucao){
      
      let X = ponto;
      let Y = -1* this.calcular(X);
      
      if(X + ORIGEM_X > TELA || X + ORIGEM_X < 0)
      { continue; }

      
      if(Y + ORIGEM_Y > TELA || Y + ORIGEM_Y < 0)
      { continue; }      
      
      point(X + ORIGEM_X, Y + ORIGEM_Y);
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
    return valor_de_Y; // Correção do plano cartesiano padrão do p5.js 
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
    return valor_de_Y; // Correção do plano cartesiano padrão do p5.js 
  }
  
}
// --------------------------------------------------------------
// --------------------------------------------------------------




// =============================================================
// FUNÇÃO SENOIDAL
// =============================================================
class Senoidal extends Funcao
{
  constructor(X_inicial, X_final, resolucao, cor)
  {
    super(X_inicial, X_final, resolucao, cor);
  }
  
  calcular(valor_de_X)
  {
    let valor_de_Y = sin(valor_de_X * 0.1);
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
  coef_A = 2,
  coef_B = 2
);


const linha_vermelha = new SegundoGrau(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = resolucao_parabola,
  cor = "red",
  coef_A = -3,
  coef_B = 2,
  coef_C = 1
);



const senoide = new Senoidal(
  X_inicial = X_INICIAL,
  X_final = X_FINAL,
  resolucao = 0.5,
  cor = "orange"
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
    
    for (let linha = 0; linha != TELA; linha += proporcao){
    
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




function setup() {
  createCanvas(TELA, TELA);
}

function draw() {
  background(255);
  if(TELA % quantidade_quadrados !== 0){
    text(msg_proporcao_errada, 20, 20);
    return;
  }
  Quadriculado();
  linha_azul.plotar();
  linha_vermelha.plotar();
  senoide.plotar();

}
