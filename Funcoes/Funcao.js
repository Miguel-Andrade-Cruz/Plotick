class Funcao
{
  constructor(
    resolucao,
    cor,
    coefs,
    posicao_input_y,
    equacao
  ) {
    
    this.y = 0;
    
    this.cor = cor;
    this.resolucao = resolucao;
    
    this.coefs = coefs;
    
    this.inputs = [];
    this.posicao_input_y = posicao_input_y;
    
    this.atribuiEquacao(equacao);
  }

  
  atribuiEquacao(equacao)
  {
  
    this.calcula_y = equacao;
  }
  
  
  valorCoef(coef)
  {
    let valor_coef = this.inputs[coef].value()

    return Number(valor_coef);
  }
  
  
  nomeiaInputs()
  {
    let posicao_input_y = this.posicao_input_y;
    for ( let nome_coef in this.coefs ) {
      
      textSize(16);
      textStyle(BOLD);
      strokeWeight(0.5);
      text(nome_coef, TELA -15, posicao_input_y +16);
      
      posicao_input_y += 30;
    } 
  }
  
  
  criaInputs()
  {
    let posicao_input_y = this.posicao_input_y;
    for ( let coef in this.coefs ) {
      
      let valor_padrao = this.coefs[coef];
      let coef_input = createInput(`${valor_padrao}`);
      
      coef_input.position(TELA + 5, posicao_input_y);
      coef_input.size(120);
      
      this.inputs[coef] = coef_input;

      posicao_input_y += 30;
    }
  }
  

  
  

  plota()
  {
    stroke(this.cor);
    strokeWeight(3);
    
    push();
    translate(TELA/2, TELA/2);
    for( let ponto_x = INICIO_TELA; ponto_x < FIM_TELA; ponto_x += this.resolucao ) {
      
      this.x = ponto_x;
      try {
        this.y = this.calcula_y(ponto_x, this) * CORRECAO_DE_PLANO;
      } catch (err) {
        return false;
      }
      point(
        (this.x *PROPORCAO),
        (this.y *PROPORCAO)
      ); 
    }
    pop();
  }
}