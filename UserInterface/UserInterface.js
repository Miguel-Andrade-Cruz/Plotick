
class UserInterface
{
  constructor(input_y_coord_group)
  {
    this.graph_label = null;
    this.resolution_slider = null;
    this.inputs = [];
    this.checkbox = null;
    this.input_y_coord_group = input_y_coord_group; 
  }  
  
  renderInputs(coefs, params) // default values set on equation
  {
    
    push();   
    
    this.graph_label = createElement('h4', `${params.label}`)
      .position(CHECKBOARD_SIZE + 20, this.input_y_coord_group -35)
      .style('color', `${params._color}`)
    ;
    
    this.resolution_slider = createSlider(0.01, 1, params.resolution, 0.1)
      .position(CHECKBOARD_SIZE + 20, this.input_y_coord_group + 5)
      .size(100)
    
    let carry_y_coord = this.input_y_coord_group;
    coefs.forEach((coef, coef_key) => {    
      
      
      let y_coord = carry_y_coord + 30;

      this.inputs.push(
        {
          coef_label : coef.label,
          graph_color : params._color,
          coef_value : coef.value,
          graph_input : createInput(`${coef.value}`)
            .position(CHECKBOARD_SIZE + 20, y_coord)        
        }
      );
      carry_y_coord = y_coord;
      
    });
    pop();
    
    return this.inputs;  
  }
  
  unrenderInputs()
  {
    this.graph_label.remove();
    this.resolution_slider.remove();
    
    this.inputs.forEach((_input, graph_key) => {
      _input.graph_input.remove();
    });
  }


  getInputs()
  {
    let inputs = new Map();
    
    let ascii_code = 65;
    for (let _input of this.inputs) {
      
      let letter = String.fromCharCode(ascii_code);
      let value = Number(_input.graph_input.value());      
      
      inputs.set(letter, value);
      
      ascii_code += 1;
    }
    return inputs;
  }
  
  
  getResolution()
  {
    return this.resolution_slider.value();
  }
}