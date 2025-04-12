function checkboard()
{ 
    push();
    translate(CHECKBOARD_SIZE / 2, CHECKBOARD_SIZE / 2);
    strokeWeight(1);
    stroke(200);    
    
    for (let linha = -CHECKBOARD_SIZE; linha != CHECKBOARD_SIZE;
      linha += PROPORTION){
            
      //Horizontal Lines
      line(-CHECKBOARD_SIZE, linha, CHECKBOARD_SIZE, linha);

            
      //Verical lines
      line(linha, -CHECKBOARD_SIZE, linha, CHECKBOARD_SIZE);
    }
  
    stroke(0);
    strokeWeight(1.5);
    line(-CHECKBOARD_SIZE, 0, CHECKBOARD_SIZE, 0);
    line(0, -CHECKBOARD_SIZE, 0, CHECKBOARD_SIZE);
    strokeWeight(5);
    point(0, 0);
  
    pop();
}
