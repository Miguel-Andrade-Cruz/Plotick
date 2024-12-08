# Bem vindo ao Plotick!
Este é o reopsitório do Plotick, um programa de visualização gráfica de funções.
Siga as intruções abaixo para utilizá-lo e melhorá-lo.

## Declare funções existentes
Para declarar uma nova função, basta instanciar a mesma com as propriedades necessárias, no seguinte formato:
```
funcao = new Funcao(resolucao, cor, coeficientes, posicaoSliderX, posicaoSliderY);

primeirograu = new PrimeiroGrau(0.02, 'green', {'A': 1, 'B': 3}, 20, 480);
```
Segue abaixo uma tabela de funções que já existem dentro do Plotick:
| Nome da função | Equação |
|--|--|
| `PrimeroGrau` | ax + b |
| `SegundoGrau`| ax² + bx + c |
| `ZigZag` | x * x² + a |
| `Logaritimica` | log(x) + a |
| `Cruzado` | 1 / x * a |
| `MInhaFuncao` | sin(x) * aᵇ + tan(x) |

> Apenas lembrando que a `sin()` refere-se ao seno, só que em inglês.

## Crie funções novas

O processo de criar uma nova função é um pouco mais longo mas nada muito complicado. Siga os seguites passos:
1. Crie um arquivo com o nome da função juntamente ao sufixo `.js` na pasta 'Funcoes';
2. Dentro do arquivo `index.html`, cole a seguinte linha `<script src="./Funcoes/<<Cruzado>>.js"></script>`,debaixo das outras funções já declaradas, onde o texto entre '<<>>' deve ser mudado para o nome de sua função.
3. dentro da classe de sua nova função extendida de `AbstracaoFuncao`, declare o constutor chamando o método contrutor pai `super()` e declare a função `plotar(X)`, que deve retornar o valor de Y, de acordo com as regras da sua função; 


> Caso não saiba do que se trata, observer o exemplo abaixo para compreender melhor:
```
class FuncaoNova extends FuncaoAbstracao
{
    constructor(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY)
    {
        super(resolucao, cor, coefs, posicaoSliderX, posicaoSliderY);
    }


    plotar(X)
    {
        let Y = this.sliders.F;value() + 23 * X * this.sliders.C.value();

        return Y;
    }
}
```

> É importante ressaltar que o nome que voce coloca ao coeficiente aqui deve ser o mesmo para
> referenciar ao chamar na declaração da função como mostrado acima. Caso contrário, você acabará com um erro.


## Veja o resultado

Após os passos acima, clique no botão rosa de play no canto superior esquerdo e veja o resultaodo da sua obra prima! Além disso
você também pode mexer nos sliders criados para alterar os coeficientes e ver em tempo real as mudanaças.
