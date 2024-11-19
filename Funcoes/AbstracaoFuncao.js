class FuncaoAbstracao
{
  constructor(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY)
  {
    this.Y = 0;
    
    
    this.cor = cor;
    this.resolucao = resolucao;
    
    this.coefs = coefs;
    
    this.sliders = [];
    this.posicaoSliderX = posicaoSliderX;
    this.posicaoSliderY = posicaoSliderY;
    
  }

  

  calcular_Y(X)
  {
  }
  
  
  nomearSliders()
  {
    
    let posicaoSliderY = this.posicaoSliderY;
    for ( let nomeCoef in this.coefs ) {
      
      textSize(14);
      textStyle(NORMAL);
      strokeWeight(0.5);
      text(nomeCoef, this.posicaoSliderX +90, posicaoSliderY +10);
      
      posicaoSliderY += 15;
      
    }
    
  }
  
  
  criarSliders()
  {
        
    let posicaoSliderY = this.posicaoSliderY;
    for ( let coef in this.coefs ) {
      
      let valorPadrao = this.coefs[coef];
      let coefSlider = createSlider(-PROPORCAO, PROPORCAO, valorPadrao);
      
      coefSlider.position(this.posicaoSliderX, posicaoSliderY);
      coefSlider.size(80);
      
      this.sliders[coef] = coefSlider;

      posicaoSliderY += 15;
    }

  }
  
  

  plotar(posicaoX, posicaoY)
  {
    stroke(this.cor);
    strokeWeight(3);
    
    for( 
      let pontoX = INICIO_TELA;
      pontoX < FIM_TELA;
      pontoX += this.resolucao
    ) {
      
      this.X = pontoX;
      this.Y = this.calcular_Y(pontoX) * CORRECAO_DE_PLANO;
      
      point(
        (this.X *PROPORCAO),
        (this.Y *PROPORCAO)
      );
      
    }
  
  }
  
}