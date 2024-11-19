function quadriculado()
{
    push();
    translate(TELA / 2, TELA / 2);
    strokeWeight(1);
    stroke(200);    
    
    for (let linha = -TELA; linha != TELA;
      linha += PROPORCAO){
            
      //Linhas horizontais
      line(-TELA, linha, TELA, linha);

            
      //Linhas vericais
      line(linha, -TELA, linha, TELA);
    }
  
    stroke(0);
    strokeWeight(1.5);
    line(-TELA, 0, TELA, 0);
    line(0, -TELA, 0, TELA);
    strokeWeight(5);
    point(0, 0);
  
    pop();
}





function declarador(tipoFuncao, resolucao, cor, coeficientes)
{
  let funcao = new tipoFuncao(resolucao, cor, coeficientes);
  return funcao;
}





function criarSliders(funcoes)
{
  let nextPos = 20;
  let sliders;
  for ( let funcao in funcoes ) {
    
    let coefChaves = Object.keys(funcao);
    for ( let coef in funcao.coefs ) {
      
      slider = createSlider(0, PROPORCAO);
      slider.position(20, nextPos);
      slider.size(80);
      
      nextPos += 15;
    }
  }

  return sliders;
}