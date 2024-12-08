class Funcao
{
  constructor(
    resolucao,
    cor,
    coefs,
    posicaoSliderX,
    posicaoSliderY,
    equacao
  ) {
    
    this.Y = 0;
    
    this.cor = cor;
    this.resolucao = resolucao;
    
    this.coefs = coefs;
    
    this.sliders = [];
    this.posicaoSliderX = posicaoSliderX;
    this.posicaoSliderY = posicaoSliderY;
      
      
    this.atribuiEquacao(equacao);
  }

  
  atribuiEquacao(equacao)
  {
  
    this.calcula_Y = equacao;
  }
  
  
  nomeiaSliders()
  {
    
    let posicaoSliderY = this.posicaoSliderY;
    for ( let nomeCoef in this.coefs ) {
      
      textSize(14);
      textStyle(NORMAL);
      strokeWeight(0.5);
      text(nomeCoef, this.posicaoSliderX +130, posicaoSliderY +13);
      
      posicaoSliderY += 15;
    } 
  }
  
  
  criaSliders()
  {
        
    let posicaoSliderY = this.posicaoSliderY;
    for ( let coef in this.coefs ) {
      
      let valorPadrao = this.coefs[coef];
      let coefSlider = createSlider(-PROPORCAO, PROPORCAO, valorPadrao, 0.1);
      
      coefSlider.position(this.posicaoSliderX, posicaoSliderY);
      coefSlider.size(120);
      
      this.sliders[coef] = coefSlider;

      posicaoSliderY += 15;
    }
  }
  
  

  plota(posicaoX, posicaoY)
  {
    
    stroke(this.cor);
    strokeWeight(3);
    
    push();
    translate(TELA/2, TELA/2);
    for( let pontoX = INICIO_TELA; pontoX < FIM_TELA; pontoX += this.resolucao ) {
      
      this.X = pontoX;
      try {
        this.Y = this.calcula_Y(pontoX, this) * CORRECAO_DE_PLANO;
      } catch (err) {
        return false;
      }
      point(
        (this.X *PROPORCAO),
        (this.Y *PROPORCAO)
      ); 
    }
    pop();
  }
  
}