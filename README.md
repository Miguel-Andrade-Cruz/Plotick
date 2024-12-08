# Bem vindo ao Plotick!
Este é o reopsitório do Plotick, um programa de visualização gráfica de funções.
Siga as intruções abaixo para utilizá-lo e melhorá-lo.

## Declare funções existentes
Para declarar uma nova função, basta instanciar a mesma com as propriedades necessárias, no seguinte formato:
```
funcao = new Funcao(resolucao, cor, coeficientes, posicaoSliderX, posicaoSliderY, equacao);
```
```
primeiro_grau = new Funcao(0.02, 'green', {'A': 1, 'B': 3}, 20, 480, PRIMEIRO_GRAU);
```
Segue abaixo uma tabela de funções que já existem dentro do Plotick:
| Nome da função | Equação |
|--|--|
| `PRIMEIRO_GRAU` | ax + b |
| `SEGUNDO_GRAU`| ax² + bx + c |
| `ZIG_ZAG` | x * x² + a |
| `LOGARITIMICA` | log(x) + a |
| `CRUZADO` | 1 / x * a |

> Apenas lembrando que `sin()` refere-se ao seno, só que em inglês.

## Crie funções novas

O processo de criar uma nova função é agora é simples. Siga os seguites passos:
1. Entre no arquivo `Equacoes.js` dentro da pasta `Funcoes`;
2. Crie uma constante como uma equação que recebe o valor de X e objeto da funcão em si;
3. Declare uma variável 'Y' com a fórmula que quiser, adicionando os coeficientes que serão passados
4. Retorne a variável Y.


> Caso não saiba do que se trata, observe o exemplo abaixo para compreender melhor:
```
\\ Dentro do arquivo Equacoes.js

const MINHA_EQUACAO = (X, funcao) => {

    let Y = X * funcao.sliders.A.value();
    return Y;
}
```

> Nota: Siga alguns padrões quando for declarar a sua nova equação, como:
> - Nome da função em caizxa alta;
> - Nome do objeto da função como `funcao`;
> - Criar a variável e depois retorná-la.


Como é possível ver no código exemplo, é necessário utilizar alguns prefixos e sufixos para conseguir extrairo valor do coeficiente.
Então para não restar dúvidas, o formato sempre será `funcao.sliders.<<coef>>.value()`, onde o texto dentor de "<<>>" será o nome do coeficiente.


Depois de criar sua nova equação, basta utilizá-la instanciando um objeto da classe função e passando como último parâmetro da função que você acabou de criar:
```
let minha_nova_funcao = new Funcao(0.02, 'blue', {'A' : 12}, 200, 400, MINHA_EQUACAO);
```
E em seguida, adicioná-la a variável `LISTA_DE_FUNCOES`:
```
LISTA_DE_FUNCOES = [
    funcao_verde,
    funcao_azul,
    minha_nova_funcao
];
```

## Veja o resultado

Após os passos acima, clique no botão rosa de play no canto superior esquerdo e veja o resultaodo da sua obra prima! Além disso
você também pode mexer nos sliders criados para alterar os coeficientes e ver em tempo real as mudanças.
