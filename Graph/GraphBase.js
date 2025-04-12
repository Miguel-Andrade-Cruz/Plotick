class GraphBase
{
  constructor(params, userInterface, equation)
  {
    this.params = params;
    this.userInterface = userInterface;
    this.equation = equation;
  }
  
  renderInputs()
  {
    return this.userInterface
      .renderInputs(this.equation.getCoefs(), this.params)
    ;
  }
  
  unrenderInputs()
  {
    this.userInterface.unrenderInputs();    
    return;
  }
  
  getLabel()
  { 
    return this.params.label;
  }
}