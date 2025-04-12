class Equation
{
  constructor(coefs_list)
  {
    this.coefs = new Map();
    
    let ascii_code = 65;
    for (let coef of coefs_list) {
      
      this.coefs.set(String.fromCharCode(ascii_code), coef);
      ascii_code += 1;
    }
  }
  
  getCoefs()
  {
    return this.coefs;
  
  }
}
