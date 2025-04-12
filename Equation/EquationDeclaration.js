
class Sine extends Equation
{
  constructor(a)
  {
    super([a]);
  }
  
  calculateX(coefs, T)
  {
    return T;
  }
  
  calculateY(coefs, T)
  {
    return coefs.get('A') * 1 / sin(T);
  }
}


class FirstDegree extends Equation
{
  constructor(a, b)
  {
    super([a, b]);
  }
  
  calculateY(coefs, T)
  {
    
    return coefs.get('A') * T + coefs.get('B');
  }
}



class SecondDegree extends Equation
{
  constructor(f, g, h)
  {
    super([f, g, h]);
  }
  
  calculateY(coefs, x)
  {
    return coefs.get('A') * x **2 + coefs.get('B') * x + coefs.get('C');
  }
}



class Circle extends Equation
{
  constructor(h, k, r)
  {
    super([h, k, r]);
  }
  
  calculateX(coefs, T)
  {
    return coefs.get('B') + coefs.get('A') * cos(T);
  }
  
  calculateY(coefs, T)
  {
    return coefs.get('C') + coefs.get('A') * sin(T);  
  }
}