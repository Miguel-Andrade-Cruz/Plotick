class Graph extends GraphBase
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
    for(let point_x = CHECKBOARD_STARTS;
        point_x < CHECKBOARD_ENDS;
        point_x += this.userInterface.getResolution()
    ) {
      
      this.x = point_x;
      this.y = this.equation.calculateY(this.userInterface.getInputs(), this.x) * PLANE_CORRECTION;
      point(
        (this.x *PROPORTION),
        (this.y *PROPORTION)
      ); 
    }
    pop();
  }
}