const PRIMEIRO_GRAU = (X, funcao) => {
  
  let Y = funcao.sliders.A.value() * X + funcao.sliders.B.value() ; 
  return Y;
};



const SEGUNDO_GRAU = (X, funcao) => {
  
  let Y = 
    funcao.sliders.A.value() * X **2  +
    funcao.sliders.B.value() * X      + 
    funcao.sliders.C.value()
  ;
  return Y;
};



const ZIG_ZAG = (X, funcao) => {
   
  let Y = X * X **2 * funcao.sliders.A.value() ;
  return Y;
};



const CRUZADO = (X, funcao) => {

  let Y = 1/X + funcao.sliders.A.value() ;
  return Y;
};



const LOGARITIMICA = (X, funcao) => {

  let Y = log(X) + funcao.sliders.A.value() ;
  return Y;
};

