//----------------------------------------------------------------//
//--------------------BEM VINDO AO MI FUNCTION!-------------------//
//----------------------------------------------------------------//

//   Com este simples programa,
//   você poderá exercitar seu aprendizado
//   sobre funções de primeiro grau e compreeender
//   graficamente suas propriedades. Vamos lá?
//


//----  DESENHO DA FUNÇÃO  ------//
// Exemplo: f(x) = 2x + 3

// a = 2, b= 3, raiz_da_equacao = -1.5

let a = 2;
let b = 3;

let valor_de_x = 0;
let raiz_da_equacao = -1.5;


//----  DESENHO DO PONTO  ------//
let ponto_X = 1;
let ponto_Y = 5;


//---------------------------------------------------------//
//------------------------NÃO MEXER AQUI-------------------//
//---------------------------------------------------------//

//--------------------------------------------------------//
//----------------DESENHO DO PLANO CARTESIANO-------------//
//--------------------------------------------------------//

//Esse valor aqui em baixo é crucial para o funcionamento do código, então por favor, coloque números em dezenas.

//Ele diz o a quantidade de quadrados do quadriculado.

//No valor atual, é possível desenhar retas com valores que vão de -20 até 20 quadradados.

//!!IMPORTANTE!! Esse valor precisa ser divisível pelo tamanho da tela, senão o código irá quebrar.

const tamanhoDoQuadriculado = 40;
const tamanhoDaTela = 500;
const centralizado = tamanhoDaTela / 2;
const escala = tamanhoDaTela / tamanhoDoQuadriculado;

function desenharPlanoCartesiano(){
//Aqui você pode mudar a distribuição das células no plano, usando essas variáveis:
  let quantidadeDeCelulas = tamanhoDoQuadriculado;
  let tamanhoDasCelulas = tamanhoDaTela / quantidadeDeCelulas;


  corDaGrade = color(213, 213, 213);
  stroke(corDaGrade);
  strokeWeight(1);
  
  for(let proximaLinha = 0;
      proximaLinha != tamanhoDaTela;
      proximaLinha += tamanhoDasCelulas)
  {
    line(0, proximaLinha, tamanhoDaTela, proximaLinha);
    line(proximaLinha, 0, proximaLinha, tamanhoDaTela);
  }

  corDaGrade = color(0, 0, 0); 
  stroke(corDaGrade);

  strokeWeight(1);
  line(0, centralizado, tamanhoDaTela, centralizado);
  line(centralizado, 0, centralizado, tamanhoDaTela);  
}

//------------------------------------------------------//
//--------------------DESENHO DA RETA-------------------//
//------------------------------------------------------//

function desenhar_reta(a, b, valorX, raizX){
//Para desenhar a reta, será marcado um ponto de acordo com a função com 1 ducentésimo de distância, por isso o nome 'xFlutuante'.
  
  
  for(let xFlutuante = valorX -10; xFlutuante <= raizX + 10; xFlutuante += 0.005){
    
//Cáculo de cada ponto individualmente
//A posição em y em função do valor de x
    y = a * xFlutuante + b;
    
    coordenadaX = (xFlutuante * escala) + centralizado; 
    coordenadaY = ((y * escala) *(-1)) + centralizado;
  
    stroke(color(255, 0, 0));
    strokeWeight(2);
    point(coordenadaX, coordenadaY);
  }
}

//---------------------------------------------------------------//
//---------------  DESENHO DO PONTO  ----------------------------//
//---------------------------------------------------------------//

function marcar_pontos(X_ponto, Y_ponto, raiz_da_equacao){
  let size = 7;
  let x = (X_ponto * escala) + centralizado;
  let y = ((Y_ponto * escala)* (-1)) + centralizado;
  
  noStroke();
  fill("blue");
  circle(x, y, size);

}

//---------------------------------------------------------------//
//---------------------DESENHO PONTO DESLIZANTE-------------------//
//---------------------------------------------------------------//

function desenharPontoDeslizante(a, b){
//Cálculo do ponto deslizante
  
  let pontoX = (- centralizado + mouseX) / escala;
  let pontoY = -1 * (a * pontoX + b); 
  
  pontoX = pontoX * escala + centralizado;
  pontoY = pontoY * escala + centralizado;

  
//Correção de valores para o display  
  
  let coordenadaX = pontoX - centralizado;
  coordenadaX = coordenadaX.toFixed(2);
  
  let coordenadaY = -1 * (pontoY - centralizado);
  coordenadaY = coordenadaY.toFixed(2);
  
  let coordenadas = 'X:  ' + coordenadaX + '  Y:  ' + coordenadaY;
  
  
//Caixa de informação

  stroke(0, 0, 0);
  strokeWeight(2);
  fill(255, 255, 255)
  rectMode(CORNER);
  rect(10, 10, 150, 30);
  
  strokeWeight(1);
  fill(0, 0, 0);
  text(coordenadas,20, 30);
  
//Ponto deslizante  

  strokeWeight(8);
  point(pontoX, pontoY);
}

//---------------------------------------------------------------//
//-------------------------INÍCIAR CÓDIGO------------------------//
//---------------------------------------------------------------//

function setup() {
  createCanvas(tamanhoDaTela, tamanhoDaTela);
}

function draw() {
  background(255);
  desenharPlanoCartesiano();
  
  desenhar_reta(a, b, valor_de_x, raiz_da_equacao);
  
  marcar_pontos(ponto_X, ponto_Y, raiz_da_equacao); 
  
  desenharPontoDeslizante(a, b)
}