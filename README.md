# Desafio-RGB-JavaScript
Exercício proposto no bootcamp Full Stack IGTI durante o inicio do módulo 1. 

O desagio era criar uma estrutura utilizando o input range para definir cores utilizando a função rbg do css diretamente no arquivo javascript. 
Ao final do desafio foi proposto um teste com algumas perguntas relacionadas ao desafio.

Objetivos

Exercitar os seguintes conceitos trabalhados no Módulo:

Utilização de elementos HTML.
Utilização de CSS.
Utilização de identificadores em elementos HTML.
Captura de referência de elementos com JavaScript.
Manipulação de eventos com JavaScript.
Utilização de funções com JavaScript e CSS.
Manipulação direta de CSS com JavaScript.
 

Enunciado

Construa, utilizando HTML, CSS e JavaScript puro, uma aplicação para a visualização de cores a partir da escala RGB.

 

Atividades

Os alunos deverão desempenhar as seguintes atividades:

Implementar, através de HTML, CSS e JavaScript puro, uma aplicação que contenha três inputs do tipo “range”, cujos valores vão de 0 a 255 e representem, respectivamente, R (Red – Vermelho), G (Green – Verde) e B (Blue – Azul).
Essa combinação de valores deve ser utilizada para preencher a cor de fundo de uma <div> quadrada.
Além disso, inclua três inputs de texto somente-leitura (desabilitados) para a visualização do valor atual de cada input do tipo range.
À medida em que o usuário modifica o valor dos ranges com as teclas ← e → do teclado, a <div> deve refletir a cor correspondente.
A imagem abaixo ilustra uma possível interface para a aplicação.
  ![rbg igit](https://user-images.githubusercontent.com/53823948/82613611-16ec2680-9b9c-11ea-8369-0576fa14acf5.png)

 Dicas

Utilize o método load de window.addEventListener para garantir que o DOM esteja totalmente carregado antes de qualquer instrução JavaScript.
Utilize id's nos inputs e na div para mapeá-los no script com document.querySelector.
Não se preocupe tanto com a interface gráfica. O mais importante é o código estar funcionando.
Para definir a cor da div, utilize style.backgroundColor. O valor deve ser uma string que, por sua vez, interpola a função rgb() do CSS. Mais informações aqui (Links para um site externo.).
Mais alguns valores de referência:

![rbg igit](https://user-images.githubusercontent.com/53823948/82613497-ca085000-9b9b-11ea-8be8-e48dba5c50ff.png)
