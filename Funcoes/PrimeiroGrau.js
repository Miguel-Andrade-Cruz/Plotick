class PrimeiroGrau extends FuncaoAbstracao
{
  constructor(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY)
  {
    
    super(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY);
  
  }
  
  calcular_Y(X)
  {
    let Y = (this.sliders.A.value() * X) + this.sliders.B.value();
  
    return Y;
  }


}
