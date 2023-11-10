//-------------------BEM VINDO AO MI FUNCTION!---------------------//
//  Dessa vez você irá visualizar em um gráfico as propriedades de uma função do segundo grau.

//  Basta fornecer os valores de a, b, c, x' e x'' para que seja possível desenhar a parábola da função.

//Por fim, use as coordenadas dos  três pontos para desenhar até três pontos no gráfico, como exemplo as raízes da função e o vértice

//Mãos a obra e Boa aula!
//  Exemplo: x² + x - 6
//  a = 1, b = 1, c = -6
//  xLinha = -3, xDoisLinha = 2

//-----------------------DESENHO DA FUNÇÃO--------------------//

let a = 1;
let b = 1;
let c = -6;

let xLinha = -3;
let xDoisLinha = 2;

//------------------------DESENHO DO PONTO---------------------//

let xPonto1 = 1;
let yPonto1 = 0;

let xPonto2 = 0;
let yPonto2 = 0;

let xPonto3 = -1;
let yPonto3 = 0;

//-----------------------------------------------------------------//
//------CASO SEU INTUITO É O GRÁFICO, NÃO MEXA AQUI EMBAIXO--------//
//-----------------------------------------------------------------//

//-----------------------------------------------------------------//
//-----------------DESENHO DO PLANO CARTESIANO---------------------//
//-----------------------------------------------------------------//


//O valor  'tamanhoDoQuadriculado' aqui em baixo é crucial para o funcionamento do código, então por favor, coloque números em dezenas.

//Ele diz o a quantidade de quadrados do quadriculado.

//No valor atual, é possível desenhar com valores que vão de -20 até 20 (40 quadrados no total).

//!!IMPORTANTE!! Esse valor precisa ser divisível com o tamanho da tela, senão o código irá quebrar.

const tamanhoDoQuadriculado = 40;
const tamanhoDaTela = 500;
const centralizado = tamanhoDaTela / 2;
const escala = tamanhoDaTela / tamanhoDoQuadriculado;

function desenharPlanoCartesiano(){
  
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

//-----------------------------------------------------------------//
//------------------------DESENHO DA PARÁBOLA----------------------//
//-----------------------------------------------------------------//

function desenharParabola(a, b, c, xLinha, xDoisLinha){

// A variável 'xFlutuante' "desenha" a linha da parábola ao marcar o valor  de y correspondente a x a cada 1 ducentésimo de distância.


   for(let xFlutuante = xLinha - 10; xFlutuante <= xDoisLinha + 10; xFlutuante += 0.005){
      y = (a * (xFlutuante **2)) + (b * xFlutuante) + c;


      coordenada_x = xFlutuante * escala + centralizado;
      coordenada_y = (y * escala) *(-1) + centralizado;

      stroke(color(255, 0, 0));
      strokeWeight(2);
      point(coordenada_x, coordenada_y);
   }

}

//-----------------------------------------------------------------//
//-------------------------DESENHO DOS PONTOS------------------------//
//-----------------------------------------------------------------//

function desenharPonto(x1, y1, x2, y2, x3, y3){
//Aqui os valores não é adicionado direto pelas correções necessárias de escala e pontos de origem do p5.js
  
  let coordenadas = [{x: x1, y: y2}, {x: x2, y: y2}, {x: x3, y: y3}];
  for (let coordenada of coordenadas){
    coordenada.x = coordenada.x * escala + centralizado;
    coordenada.y = ((coordenada.y * escala) *(-1)) + centralizado;
    tamanho = 5;
  
    stroke(0, 0, 255);
    strokeWeight(tamanho);
  
    point(coordenada.x, coordenada.y);
  }
}


//-----------------------------------------------------------------//
//--------------------DESENHO PONTO FLUTUANTE----------------------//
//-----------------------------------------------------------------//

function desenharPontoFlutuante(a, b, c){
  let pontoX =  (- centralizado + mouseX) / escala; 
  let pontoY = (-1) * (a * (pontoX **2) + b * pontoX + c);

  pontoX = pontoX * escala + centralizado;
  pontoY = pontoY * escala + centralizado;
  
  let coordenadaX = pontoX - centralizado;
  coordenadaX = coordenadaX.toFixed(2);
  
  let coordenadaY = -1 * (pontoY - centralizado);
  coordenadaY = coordenadaY.toFixed(2);
  
  let coordenadas = 'X:  ' + coordenadaX + '  Y:  ' + coordenadaY;
  
//Caixa de informação

  rectMode(CORNER);
  color(255, 255, 255);
  strokeWeight(1);
  stroke(0, 0, 0);
  rect(10, 10, 150, 30);
  
  color(0, 0, 0);
  text(coordenadas,20, 30);

//Ponto deslizante  

  color(0, 0, 0);
  strokeWeight(8)
  point(pontoX, pontoY);
}

//-----------------------------------------------------------------//
//---------------------INICIALIZAÇÃO DO CÓDIGO---------------------//
//-----------------------------------------------------------------//

function setup() {
  createCanvas(tamanhoDaTela, tamanhoDaTela);
}

function draw() {
  background(255);
  desenharPlanoCartesiano();

  desenharPonto(xPonto1, yPonto1, xPonto2, yPonto2, xPonto3, yPonto3);
  
  desenharParabola(a, b, c, xLinha, xDoisLinha);
  
  desenharPontoFlutuante(a, b, c);
  
}
