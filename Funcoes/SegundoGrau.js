class SegundoGrau extends FuncaoAbstracao
{
  constructor(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY)
  {
    
    super(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY);

  }
  
  
  
  calcular_Y(X)
  {
    
    let Y = (this.sliders.A.value() * X **2) +
      this.sliders.B.value() * X +
      this.sliders.C.value();

    return Y;
  }
  
  
  
}