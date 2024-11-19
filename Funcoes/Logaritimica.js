class Logaritimica extends FuncaoAbstracao
{

  constructor(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY)
  {
    
    super(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY);
  
  }

  
  calcular_Y(X)
  {
    let Y = log(X) + this.sliders.A.value();  
    return Y;
  }
}