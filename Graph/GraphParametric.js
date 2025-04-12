class GraphParametric extends GraphBase
{
  constructor(params, userInterface, equation)
  {

    super(params, userInterface, equation);
  }
  
  plot()
  {
    stroke(this.params._color);
    strokeWeight(3);
    
    push();
    translate(CHECKBOARD_SIZE/2, CHECKBOARD_SIZE/2);
    for(let T = this.params.t_starts;
        T < this.params.t_ends;
        T += this.userInterface.getResolution()
    ) {

      
      this.x = this.equation.calculateX(this.userInterface.getInputs(), T);
      this.y = this.equation.calculateY(this.userInterface.getInputs(), T) * PLANE_CORRECTION;
      point(
        (this.x *PROPORTION),
        (this.y *PROPORTION)
      );
    }
    pop();
  }
}