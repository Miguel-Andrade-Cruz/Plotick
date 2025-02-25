const PRIMEIRO_GRAU = (X, funcao) => {
  
  let Y = funcao.valorCoef('A') * X + funcao.valorCoef('B') ; 
  return Y;
};



const SEGUNDO_GRAU = (X, funcao) => {
  
  let Y = funcao.valorCoef('A') * X **2 + funcao.valorCoef('B') * X + funcao.valorCoef('C') ;
  return Y;
};



const ZIG_ZAG = (X, funcao) => {
   
  let Y = X * X **2 * funcao.valorCoef('A') ;
  return Y;
};



const CRUZADO = (X, funcao) => {

  let Y = 1/X + funcao.valorCoef('A') ;
  return Y;
};



const LOGARITIMICA = (X, funcao) => {

  let Y = log(X) + funcao.valorCoef('A') ;
  return Y;
};


const SENOIDAL = (X, funcao) => {
  
  let Y = sin(X);
  return Y;
};

