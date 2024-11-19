class MinhaFuncao extends FuncaoAbstracao
{
  constructor(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY)
  {
    
    super(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY);
  
  }


  calcular_Y(X)
  {
    let Y = sin(X) * this.sliders.A.value() ** this.sliders.B.value() + tan(X); 
  
    return Y;
  }
}