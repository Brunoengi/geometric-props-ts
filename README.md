<p>This documentation is available in Portuguese (pt-br) and English (en). If you want to access it in English continue reading, but if you want to access it in Portuguese, <a href="#portuguese-title">click here</a>.</p>

<br>

<h1 id='english-title'>Geometric Properties</h1>

<p>This documentation aims to provide context about the <i>geometric-props</i> project. The project is also available on github, where simplified and complete documentation and examples are provided. To access the complete documentation, <a href="https://github.com/Brunoengi/geometric-props-ts/blob/main/README.complete.md">click here</a>.</p>

<ol>
  <li><a href='#project'>What's the project / project objectives</a></li>
  <li><a href='#introduction'>Introduction</a></li>
  <li><a href='#file-system'>File System</a></li>
  <li><a href='#execute'>How to execute the application</a></li>
  <li><a href='#authors'>Authors<a></li>
  <li><a href='#reference'>Bibliographic references</a></li>
</ol>

<br>

<h2 id='project'>1 - What's the project / project objectives</h2>

<p>The project aims to calculate a set of geometric properties of polygonal figures inserted in a two-dimensional plane. In this project, a class is implemented using the Javascript programming language that abstracts the methodology used in Green's theorem, which transforms surface integrals into line integrals along a contour to calculate the following geometric properties:</p>

Note: The units provided in the table are valid when entering the coordinates of the polygonal figure in centimeters (cm).

| Geometric Propertie                                                                           | Acronym        | Unit    |
| :---                                                                                          | :---:          | :---:   |
| Section area                                                                                  | A              | cm²     |
| Static moment with respect to the x-axis                                                      | S<sub>x</sub>  | cm³     |
| Static moment with respect to the y-axis                                                      | S<sub>y</sub>  | cm³     |
| Moment of inertia with respect to the x-axis                                                  | I<sub>x</sub>  | cm⁴     |
| Moment of inertia with respect to the y-axis                                                  | I<sub>y</sub>  | cm⁴     |
| Product of inertia with respect to the x and y axes                                           | I<sub>xy</sub> | cm⁴     |
| Centroid of the section relative to the x-axis                                                | x<sub>g</sub>  | cm      |
| Centroid of the section relative to the y-axis                                                | y<sub>g</sub>  | cm      |
| Barycentric moment of inertia (with respect to the centroid) on the x-axis                    | I<sub>xg</sub> | cm⁴     |
| Barycentric moment of inertia (with respect to the centroid) on the y-axis                    | I<sub>yg</sub> | cm⁴     |
| Vertical distance between the center of gravity and the lowest point along the vertical axis  | Y<sub>1</sub>  | cm      |
| Vertical distance between the highest point along the vertical axis and the center of gravity | Y<sub>2</sub>  | cm      |
| Resistant modulus, calculated considering Y<sub>1</sub>                                       | W<sub>1</sub>  | cm³     |
| Resistant modulus, calculated considering Y<sub>2</sub>                                       | W<sub>2</sub>  | cm³     |
| Height                                                                                        | height         | cm      |

<br>

<p>In addition, the application also allows you to obtain some more relevant information, such as:</p>

| Information                                   | Acronym         | Unit    |
| :---                                          | :---:           | :---:   |
| Maximum coordinate with respect to the x axis | x<sub>max</sub> | cm     |
| Minimum coordinate with respect to the x axis | x<sub>min</sub> | cm      |
| Maximum coordinate with respect to the y axis | y<sub>max</sub> | cm      |
| Minimum coordinate with respect to the x axis | y<sub>min</sub> | cm      |

<br>

<h2 id='introduction'>2 - Introduction</h2>

<p>The application allows you to work with hollow figures, but you must pay attention to the following precautions, the insertion of a section takes place as the vertices are inserted in a counterclockwise direction, while the removal of a section takes place as its vertices are inserted clockwise.</p>

<p>In the following introductory example, we want to calculate the properties of a figure with 4 vertices; this figure does not have a hollow section (its section is solid). Care must be taken with the order in which the vertices are inserted. The first point is marked with the number 1, the second with the number 2, and so on. Note that it is necessary to reinsert the starting point, such that the x and y axis coordinates of the first point and the last point are the same. In the following image, on the left an image is shown that indicates the correct order of insertion of the points, on the right we have an example of a common error which is using the wrong direction when inserting the points.</p>

Install the library:

```
npm install geometric-props
```

Import the class:

```
import GeometricProps from "geometric-props"
```

<p>The next step is to create an instance of the class, in this case, a vector of objects is expected in the argument, each object must contain the x property, which references the coordinate on the x axis, and must also contain the y property, which references the coordinate on the y axis. Each vertex of the figure is strictly related to a position of the vector, within which an object is contained that requires the position of the vertex in relation to the x-axis and in relation to the y-axis. When instantiating the class, the following structure must be provided:</p>

In the following case, we want to represent a rectangular figure with a base of 20cm and a height of 60cm, where the lower left corner is located at coordinates (0,0). The following table and figure represent the situation in question:


| Point  | Coordinate on x axis | Coordinate on y axis |
| :---:  | :---:                | :---:                |
| 1      | 0                    | 0                    |
| 2      | 20                   | 0                    |
| 3      | 20                   | 60                   |
| 4      | 0                    | 60                   |
| 5      | 0                    | 0                    |

<br>
<br>

<p>After importing the class, you must create an instance and assign it to a variable. In this case, the variable <code>rectangulo</code> will be created and assigned to the instance of the class that expects to receive in its constructor, a vector indicated by <code>[]</code> and each position of this vector must be an object indicated by <code>{}</code>. Within this dictionary, a key set will be inserted, a value that references the axis (x or y) and the reference value.
</p>

```
const rectangulo = new GeometricProps(
    [
        {'x':0, 'y':0},           //point 1
        {'x':20, 'y':0},          //point 2
        {'x':20, 'y':60},         //point 3
        {'x':0, 'y':60},          //point 4
        {'x':0, 'y':0}            //point 5
    ])
```

<p>After having correctly instantiated a class, it is now possible to access all the properties described in the geometric properties table, each geometric property is a respective property of the class. Next, the name of the class property and its corresponding geometric geometry will be presented.</p>

<h3>Name of the geometric property and respective class property:</h3>


<table border="1">
  <thead>
  <th>Goemetric Propertie</th>
    <th>Class Propertie</th>
  </thead>

  <tbody>
    <tr>
      <td>Section Area (A)</td>
      <td align="center">rectangulo.A</td>
    </tr>
    <tr>
      <td>Static moment with respect to the x-axis (S<sub>x</sub>)</td>
      <td align="center">rectangulo.Sx</td>
    </tr>
    <tr>
      <td>Static moment with respect to the y-axis (S<sub>y</sub>)</td>
      <td align="center">rectangulo.Sy</td>
    </tr>
    <tr>
      <td>Moment of inertia with respect to the x-axis (I<sub>x</sub>)</td>
      <td align="center">rectangulo.Ix</td>
    </tr>
    <tr>
      <td>Moment of inertia with respect to the y-axis (I<sub>y</sub>)</td>
      <td align="center">rectangulo.Iy</td>
    </tr>
    <tr>
      <td>Product of inertia with respect to the x and y axes (I<sub>xy</sub>)</td>
      <td align="center">rectangulo.Ixy</td>
    </tr>
    <tr>
      <td>Centroid of the section relative to the x-axis (x<sub>g</sub>)</td>
      <td align="center">rectangulo.Xg</td>
    </tr>
    <tr>
      <td>Centroid of the section relative to the y-axis (y<sub>g</sub>)</td>
      <td align="center">rectangulo.Yg</td>
    </tr>
    <tr>
      <td>Barycentric moment of inertia (with respect to the centroid) on the x-axis (I<sub>xg</sub>)</td>
      <td align="center">rectangulo.Ixg</td>
    </tr>
    <tr>
      <td>Barycentric moment of inertia (with respect to the centroid) on the y-axis (I<sub>yg</sub>)</td>
      <td align="center">rectangulo.Iyg</td>
    </tr>
    <tr>
      <td>Product of inertia with respect to the centroid in x and y (I<sub>xyg</sub>)</td>
      <td align="center">rectangulo.Ixyg</td>
    </tr>
    <tr>
      <td>Vertical distance between the center of gravity and the lowest point along the vertical axis (Y<sub>1</sub>)</td>
      <td align="center">rectangulo.Y1</td>
    </tr>
    <tr>
      <td>Vertical distance between the highest point along the vertical axis and the center of gravity (Y<sub>2</sub>)</td>
      <td align="center">rectangulo.Y2</td>
    </tr>
    <tr>
      <td>Resistant modulus, calculated considering Y<sub>1</sub> (W<sub>1</sub>)</td>
      <td align="center">rectangulo.W1</td>
    </tr>
    <tr>
      <td>Resistant modulus, calculated considering Y<sub>2</sub> (W<sub>2</sub>)</td>
      <td align="center">rectangulo.W2</td>
    </tr>
    <tr>
      <td>Height (h)</td>
      <td align="center">rectangulo.height</td>
    </tr>
  </tbody>
</table>

<h3>Accessing each geometric property and other information</h3>

<p>Below, the <code>console.log()</code> will be presented for each of the geometric properties, the <code>toFixed()</code> function helps to display the result with 2 spaces decimals. </p>


```
console.log(`
Xmax: ${rectangulo.Xmax.toFixed(2)} cm,
Xmin: ${rectangulo.Xmin.toFixed(2)} cm,
Ymax: ${rectangulo.Ymax.toFixed(2)} cm,
Ymin: ${rectangulo.Ymin.toFixed(2)} cm,
A: ${rectangulo.A.toFixed(2)} cm²,
Sx: ${rectangulo.Sx.toFixed(2)} cm³,
Sy: ${rectangulo.Sy.toFixed(2)} cm³,
Ix: ${rectangulo.Ix.toFixed(2)} cm⁴,
Iy: ${rectangulo.Iy.toFixed(2)} cm⁴,
Ixy: ${rectangulo.Ixy.toFixed(2)} cm⁴,
Xg: ${rectangulo.Xg.toFixed(2)} cm,
Yg: ${rectangulo.Yg.toFixed(2)} cm,
Ixg: ${rectangulo.Ixg.toFixed(2)} cm⁴,
Iyg: ${rectangulo.Iyg.toFixed(2)} cm⁴,
Ixyg: ${rectangulo.Ixyg.toFixed(2)} cm⁴,
Y1: ${rectangulo.Y1.toFixed(2)} cm,
Y2: ${rectangulo.Y2.toFixed(2)} cm,
W1: ${rectangulo.W1.toFixed(2)} cm³,
W2: ${rectangulo.W2.toFixed(2)} cm³,
height: ${rectangulo.height.toFixed(2)} cm,
base: ${rectangulo.base.toFixed(2)} cm,
`)
```

<br>

<h2 id='file-system'>3 - File System</h2>

In the context of organizing modules in our project, we adopted the practice of "barrel export". This approach consists of creating a central file (the "barrel") that re-exports modules from multiple files, facilitating import and improving code clarity. Through "barrel export", we can simplify imports by grouping them into a single entry point. This not only makes the code cleaner and more manageable, but also makes maintenance and refactoring easier since changes to modules can be tracked from a single location.

<br>

<h2 id='execute'>4 - How to execute the application</h2>

The first step in install the project with npm:

```
npm install geometric-props
```

The second step is to import the module into your preferred file:

```
import GeometricProps from "geometric-props"
```

The third step is to instantiate the class, inserting the coordinates of the vertices, for more examples besides those demonstrated in the introduction, access the complete documentation on github, to access, <a href="https://github.com/Brunoengi/geometric-props-ts" >click here</a>

<br>

<h2 id='authors'>5 - Authors</h2>

<h4>Developer: Eng. Bruno Teixeira Santos</h4>
<p>Social Networks:</p>
<a href="https://github.com/Brunoengi">Github:</a> <br>
<a href="https://www.linkedin.com/in/bruno--teixeira/">Linkedin:</a> <br>
<a href="https://www.instagram.com/b.de_bruno/">Instagram:</a> <br>
<a href="https://www.youtube.com/channel/UCini8PeSegCCvsCuzZCfKKA">Youtube:</a> <br>
</p>

<h4>Adviser: Prof. Dr. Mauro de Vasconcellos Real </h4>
<p>Social Networks:</p>
<a href="https://github.com/mvreal">Github:</a> <br>
</p>

<br>

<h2 id='reference'>6 - Bibliographic References</h2>

<p>FILHO, A. C. Dimensionamento e verificação de seções poligonais de concreto armado submetidas à flexão composta oblíqua, Porto Alegre, Universidade Federal do Rio Grande do Sul/RS, 2014.</p>

<br>
<br>

A partir dessa seção, será apresentada a documentação do projeto em português (pt-br).
<br>
<br>

<h1 id='portuguese-title'>Propriedades Geométricas</h1>

<p>Esta documentação tem o objetivo de contextualizar com relação ao projeto  <i>geometric-props</i>. O projeto está disponibilizado também pelo github, em que é fornecido a documentação simplificada e completa. Para acessar a documentação completa, <a href="https://github.com/Brunoengi/geometric-props-ts/blob/main/README.complete.md">clique aqui</a>. 

<ol>
  <li><a href='#projeto'>O que é / objetivo do projeto</a></li>
  <li><a href='#introducao'>Introdução</a></li>
  <li><a href='#sistema-arquivos'>Sistema de Arquivos</a></li>
  <li><a href='#executar'>Como executar a aplicação</a></li>
  <li><a href='#autores'>Autores<a></li>
  <li><a href='#referencia'>Referência Bibliográfica</a></li>
</ol>

<br>

<h2 id='projeto'>1 - O que é / objetivo do projeto</h2>
<p>O projeto tem como objetivo calcular um conjunto de propriedades geométricas de figuras poligonais inseridas em um plano bidimensional. Nesse projeto, implementa-se uma classe utilizando a linguagem de programação Javascript que abstrai a metodologia utilizada no teorema de green, que transforma integrais de superfície em integrais de linha ao longo de um contorno para assim, calcular as seguintes propriedades geométricas:</p>

Observação: As unidades disponibilizadas na tabela são válidas quando se insere as coordenadas da figura poligonal em centímetros (cm).

| Propriedades Geométricas                                                                      | Sigla          | Unidade |
| :---                                                                                          | :---:          | :---:   |
| Área da seção                                                                                 | A              | cm²     |
| Momento estático com relação ao eixo x                                                        | S<sub>x</sub>  | cm³     |
| Momento estático com relação ao eixo y                                                        | S<sub>y</sub>  | cm³     |
| Momento de inércia com relação ao eixo x                                                      | I<sub>x</sub>  | cm⁴     |
| Momento de inércia com relação ao eixo y                                                      | I<sub>y</sub>  | cm⁴     |
| Produto da inércia em relação aos eixos x e y                                                 | I<sub>xy</sub> | cm⁴     |
| Centróide da seção em relação ao eixo x                                                       | x<sub>g</sub>  | cm      |
| Centróide da seção em relação ao eixo y                                                       | y<sub>g</sub>  | cm      |
| Momento de inércia baricêntrica (com relação ao centróide) no eixo x                          | I<sub>xg</sub> | cm⁴     |
| Momento de inércia baricêntrica (com relação ao centróide) no eixo x                          | I<sub>xg</sub> | cm⁴     |
| Distância vertical entre o centro de gravidade e o ponto mais baixo ao longo do eixo vertical | Y<sub>1</sub>  | cm      |
| Distância vertical entre o ponto mais alto ao longo do eixo vertical e o centro de gravidade  | Y<sub>2</sub>  | cm      |
| Módulo resistente, calculado considerando Y<sub>1</sub>                                       | W<sub>1</sub>  | cm³     |
| Módulo resistente, calculado considerando Y<sub>2</sub>                                       | W<sub>2</sub>  | cm³     |
| Altura                                                                                        | height         | cm      |

<br>

<p>Além disso, a aplicação permite também obter mais algumas informações relevantes, como:</p>


| Informação                                    | Sigla           | Unidade |
| :---                                          | :---:           | :---:   |
| Coordenada máxima com relação ao eixo x       | x<sub>max</sub> | cm     |
| Coordenada mínima com relação ao eixo x       | x<sub>min</sub> | cm      |
| Coordenada máxima com relação ao eixo y       | y<sub>max</sub> | cm      |
| Coordenada mínima com relação ao eixo y       | y<sub>min</sub> | cm      |

<br>

<h2 id='introducao'>2 - Introdução</h2>

<p>A aplicação permite que se trabalhe com figuras vazadas, mas deve-se atentar aos seguintes cuidados, a inserção de uma seção se da a medida que os vértices são inseridos no sentido anti-horário, enquanto a remoção de uma seção se da a medida que seus vértices são inseridos no sentido horário.</p>

<p>No exemplo introdutório a seguir, deseja-se calcular as propriedades de uma figura com 4 vértices, essa figura não apresenta seção vazada (sua seção é maciça). Deve-se tomar cuidado com a ordem de inserção dos vértices. O primeiro ponto é marcado com o número 1, o segundo com o número 2 e assim por diante. Nota-se que é necessário reinserir o ponto inicial, de tal forma que a coordenadas do eixo x e y do primeiro ponto e do último ponto são as mesmas. Na imagem a seguir, é apresentado na esquerda uma imagem que indica a ordem correta de inserção dos pontos, já na direita temos um exemplo de um erro comum que é utilizar o sentido errado na inserção dos pontos.</p>

Instale a biblitoeca:

```
npm install geometric-props
```

Importe a classe:

```
import GeometricProps from "geometric-props"
```

<p>A próxima etapa é criar uma instância da classe, nesse caso, é esperado no argumento um vetor de objetos, cada objeto deve contar a propriedade x, que faz referência a coordenada no eixo x, e deve conter também a propriedade y, que faz referência a coordenada no eixo y. Cada vértice da figura está estritamente relacionado a uma posição do vetor, em que dentro está contido um objeto que necessita da possição do vértice em relação ao eixo x e em relação ao eixo y. Ao instanciar a classe, a seguinte estrutura deve ser fornecida:</p>

No caso a seguir, queremos representar uma figura retangular com base de 20cm e altura de 60cm, em que a quina inferior esquerda está situada nas coordenadas (0,0). A tabela e a figura a seguir, representam a situação em questão:


| Ponto  | Coordenada no eixo x | Coordenada no eixo y |
| :---:  | :---:                | :---:                |
| 1      | 0                    | 0                    |
| 2      | 20                   | 0                    |
| 3      | 20                   | 60                   |
| 4      | 0                    | 60                   |
| 5      | 0                    | 0                    |

<br>

<p>Após ter realizado a importação da classe, deve-se criar uma instância e atribuir em uma variável. Nesse caso, será criada a variável <code>rectangulo</code> e atribuida a instância da classe que espera receber no seu construtor, um vetor indicado por <code>[]</code> e cada posição desse vetor deve ser um objeto indicado por <code>{}</code>. Dentro desse dicionário, será inserido um conjunto chave, valor que faz referência ao eixo (x ou y) e ao valor de referência.
</p>

```
const rectangulo = new GeometricProps(
    [
        {'x':0, 'y':0},           //ponto 1
        {'x':20, 'y':0},          //ponto 2
        {'x':20, 'y':60},         //ponto 3
        {'x':0, 'y':60},          //ponto 4
        {'x':0, 'y':0}            //ponto 5
    ])
```
  
<p>Após ter instanciado a classe corretamente, já é possível acessar todas as propriedades descritas na tabela de proprieades geométricas, cada propriedade geométrica é uma respectiva propriedade da classe. A seguir será apresentado o nome da propriedade da classe e sua propriedade geométrica correspondente.</p>

<h3>Nome da propriedade geométrica e respectiva propriedade da classe:</h3>

<table border="1">
  <thead>
  <th>Propriedade Geométrica</th>
    <th>Propriedade da classe</th>
  </thead>

  <tbody>
    <tr>
      <td>Área da seção (A)</td>
      <td align="center">rectangulo.A</td>
    </tr>
    <tr>
      <td>Momento estático com relação ao eixo x (S<sub>x</sub>)</td>
      <td align="center">rectangulo.Sx</td>
    </tr>
    <tr>
      <td>Momento estático com relação ao eixo y (S<sub>y</sub>)</td>
      <td align="center">rectangulo.Sy</td>
    </tr>
    <tr>
      <td>Momento de inércia com relação ao eixo x (I<sub>x</sub>)</td>
      <td align="center">rectangulo.Ix</td>
    </tr>
    <tr>
      <td>Momento de inércia com relação ao eixo y (I<sub>y</sub>)</td>
      <td align="center">rectangulo.Iy</td>
    </tr>
    <tr>
      <td>Produto da inércia em relação aos eixos x e y (I<sub>xy</sub>)</td>
      <td align="center">rectangulo.Ixy</td>
    </tr>
    <tr>
      <td>Centróide da seção em relação ao eixo x (x<sub>g</sub>)</td>
      <td align="center">rectangulo.Xg</td>
    </tr>
    <tr>
      <td>Centróide da seção em relação ao eixo y (y<sub>g</sub>)</td>
      <td align="center">rectangulo.Yg</td>
    </tr>
    <tr>
      <td>Momento de inércia baricêntrica (com relação ao centróide) no eixo x (I<sub>xg</sub>)</td>
      <td align="center">rectangulo.Ixg</td>
    </tr>
    <tr>
      <td>Momento de inércia baricêntrica (com relação ao centróide) no eixo y (I<sub>yg</sub>)</td>
      <td align="center">rectangulo.Iyg</td>
    </tr>
    <tr>
      <td>Produto de inércia com relação ao centróide em x e y (I<sub>xyg</sub>)</td>
      <td align="center">rectangulo.Ixyg</td>
    </tr>
    <tr>
      <td>Distância vertical entre o centro de gravidade e o ponto mais baixo ao longo do eixo vertical (Y<sub>1</sub>)</td>
      <td align="center">rectangulo.Y1</td>
    </tr>
    <tr>
      <td>Distância vertical entre o ponto mais alto ao longo do eixo vertical e o centro de gravidade (Y<sub>2</sub>)</td>
      <td align="center">rectangulo.Y2</td>
    </tr>
    <tr>
      <td>Módulo resistente, calculado considerando Y<sub>1</sub> (W<sub>1</sub>)</td>
      <td align="center">rectangulo.W1</td>
    </tr>
    <tr>
      <td>Módulo resistente, calculado considerando Y<sub>2</sub> (W<sub>2</sub>)</td>
      <td align="center">rectangulo.W2</td>
    </tr>
    <tr>
      <td>Altura (h)</td>
      <td align="center">rectangulo.height</td>
    </tr>
  </tbody>
</table>

<h3>Acessando cada propriedade geométrica e demais informações</h3>

<p>Abaixo, será apresentado o <code>console.log()</code> referente a cada uma das propriedades geométricas, a função <code>toFixed()</code> auxilia para que seja apresentado o resultado com 2 casas decimais. </p>

```
console.log(`
Xmax: ${rectangulo.Xmax.toFixed(2)} cm,
Xmin: ${rectangulo.Xmin.toFixed(2)} cm,
Ymax: ${rectangulo.Ymax.toFixed(2)} cm,
Ymin: ${rectangulo.Ymin.toFixed(2)} cm,
A: ${rectangulo.A.toFixed(2)} cm²,
Sx: ${rectangulo.Sx.toFixed(2)} cm³,
Sy: ${rectangulo.Sy.toFixed(2)} cm³,
Ix: ${rectangulo.Ix.toFixed(2)} cm⁴,
Iy: ${rectangulo.Iy.toFixed(2)} cm⁴,
Ixy: ${rectangulo.Ixy.toFixed(2)} cm⁴,
Xg: ${rectangulo.Xg.toFixed(2)} cm,
Yg: ${rectangulo.Yg.toFixed(2)} cm,
Ixg: ${rectangulo.Ixg.toFixed(2)} cm⁴,
Iyg: ${rectangulo.Iyg.toFixed(2)} cm⁴,
Ixyg: ${rectangulo.Ixyg.toFixed(2)} cm⁴,
Y1: ${rectangulo.Y1.toFixed(2)} cm,
Y2: ${rectangulo.Y2.toFixed(2)} cm,
W1: ${rectangulo.W1.toFixed(2)} cm³,
W2: ${rectangulo.W2.toFixed(2)} cm³,
height: ${rectangulo.height.toFixed(2)} cm,
base: ${rectangulo.base.toFixed(2)} cm,
`)
```

<br>

<h2 id='sistema-arquivos'>3 - Sistema de Arquivos</h2>

No contexto da organização dos módulos do nosso projeto, adotamos a prática de <i>barrel export</i>. Esta abordagem consiste na criação de um arquivo central (o “barril”) que reexporta módulos de múltiplos arquivos, facilitando a importação e melhorando a clareza do código. Através da “exportação em barril”, podemos simplificar as importações agrupando-as num único ponto de entrada. Isso não apenas torna o código mais limpo e gerenciável, mas também facilita a manutenção e a refatoração, já que as alterações nos módulos podem ser rastreadas em um único local.

<br>

<h2 id='executar'>4 - Como executar a aplicação</h2>

O primeiro passo é fazer a instalação do projeto via npm:

```
npm install geometric-props
```

O segundo passo é fazer a importação do módulo no seu arquivo de preferência:

```
import GeometricProps from "geometric-props"
```

O terceiro passo é instanciar a classe, inserindo as coordenada dos vértices, para mais exemplos além dos demonstrados na introdução, acesse a documentação completa pelo github, para acessar, <a href="https://github.com/Brunoengi/geometric-props-ts">clique aqui</a>

<br>

<h2 id='autores'>5 - Autores</h2>

<h4>Desenvolvedor: Eng. Bruno Teixeira Santos</h4>
<p>Redes: Sociais:</p>
<a href="https://github.com/Brunoengi">Github:</a> <br>
<a href="https://www.linkedin.com/in/bruno--teixeira/">Linkedin:</a> <br>
<a href="https://www.instagram.com/b.de_bruno/">Instagram:</a> <br>
<a href="https://www.youtube.com/channel/UCini8PeSegCCvsCuzZCfKKA">Youtube:</a> <br>
</p>

<h4>Orientador: Prof. Dr. Mauro de Vasconcellos Real </h4>
<p>Redes Sociais:</p>
<a href="https://github.com/mvreal">Github:</a> <br>
</p>

<br>

<h2 id='referencia'>6 - Referências Bibliográficas</h2>

<p>FILHO, A. C. Dimensionamento e verificação de seções poligonais de concreto armado submetidas à flexão composta oblíqua, Porto Alegre, Universidade Federal do Rio Grande do Sul/RS, 2014.</p>