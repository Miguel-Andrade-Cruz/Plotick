//-------------------BEM VINDO AO MI FUNCTION!---------------------//
//  Aqui você pode visualizar as formas de onda plotadas em um gráfico de forma rápida e sem complicações!


//-----------------------DESENHO DA FUNÇÃO--------------------//

// A variável emabixo define a resolução da forma de onda. Fique atento: 
//um valor muito baixo deixará o programa lento devido a quantidade de operações.
let definicao = 0.1;

let a = 4;

let t = 2; 
let T = 3;

let gama = 5;

//Da fórmula y = a * cos(2 * PI * ( (t / T)  -  (x / gama) ))


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
//------------------------DESENHO DA FUNÇÃO----------------------//
//-----------------------------------------------------------------//

function desenharFuncao(){

   for(let xFlutuante = 0; xFlutuante <= tamanhoDaTela; xFlutuante += definicao){
      y = a * cos(2 * PI * ( (t / T)  -  (xFlutuante / gama) ));


      coordenada_x = xFlutuante * escala;
      coordenada_y = (y * escala) + centralizado;

      stroke(color(255, 0, 0));
      strokeWeight(2);
      point(coordenada_x, coordenada_y);
   }

}


//-----------------------------------------------------------------//
//--------------------DESENHO PONTO FLUTUANTE----------------------//
//-----------------------------------------------------------------//

function desenharPontoFlutuante(){
  let pontoX =  (- centralizado + mouseX) / escala; 
  let pontoY = a * cos(2 * PI * ( (t / T)  -  (pontoX / gama) ));

  pontoX = pontoX * escala + centralizado;
  pontoY = pontoY * escala + centralizado;
  
  let coordenadaX = pontoX;
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
  desenharFuncao();
  desenharPontoFlutuante();  
}

function mousePressed(){
  desenharFuncao();
  desenharPontoFlutuante();
}
