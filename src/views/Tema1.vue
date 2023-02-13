<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Metodologías para solución de problemas, usando computadoras


    .row.justify-content-center.align-items-center.mb-4
      .col-md-1.col-sm-8
        figure
          img(src="@/assets/curso/temas/t1/f1.svg", alt="imagen relacionada")
      .col-md-11
        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            p
              b El proceso de resolución de un problema con una computadora conduce a la escritura de un programa y a su ejecución en la misma. Aunque el proceso de diseñar un programa es - esencialmente- un proceso creativo, se puede considerar una serie de fases o pasos comunes, que generalmente deben seguir todos los programadores.
              br
              span - Joyanes (2020), (p. 68)
            i.fas.fa-quote-right

    p Para solucionar problemas de una manera efectiva en programación se necesita trabajar con una metodología fácil de entender que indique el paso a paso hasta llegar a la solución, este es básicamente, un hábito o guía que puede aplicarse cada vez que se necesite resolver un problema. 
    p
      b Los pasos de la metodología son:

    .row.justify-content-center.mb-5
      .col-md-4
        figure
          img(src="@/assets/curso/temas/t1/f2.png", alt="persona controlando una tablet con un diagrama de flujos")
      .col-md-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          .row.justify-content-around(titulo="Análisis previo del problema")
            .col-md-3.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t1/f3.svg", alt="icono relacionado")
            .col-md-7
              p.mb-0 Se debe analizar el escenario inicial de los requerimientos del problema para conocer los datos de entrada, el origen de estos datos, cómo se obtienen, igualmente cómo se relacionan entre ellos y definir o establecer las tareas que se deben realizar en el programa, para llevar a cabo la solución del mismo. De este paso depende la solución de un problema de manera exitosa, ya que hacerlo incorrectamente conlleva a un diseño insuficiente y, posteriormente a un resultado erróneo; convirtiéndose así en uno de los pasos más críticos.
          .row.justify-content-around(titulo="Diseño de la solución")
            .col-md-3.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t1/f4.svg", alt="icono relacionado")
            .col-md-7
              p.mb-0 Después de haber aclarado los requerimientos del problema y de haber definido las entradas y salidas necesarias en el programa, al igual que las tareas a realizar, es el momento de diseñar la solución. En este paso se define qué y cómo lo hará el programa a través de dos formas que son: como un pseudocódigo o como un diagrama de flujo y esto debe ser entendible para cualquier persona.
          .row.justify-content-around(titulo="Codificación")
            .col-md-3.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t1/f5.svg", alt="icono relacionado")
            .col-md-7
              p.mb-0 Es el paso donde se escribe o transcribe una serie de instrucciones específicas, de acuerdo a la lógica establecida en el diseño, utilizando un lenguaje de programación con sentencias y sintaxis propias del mismo. Esta serie de instrucciones son también conocidas como código fuente, el cual se escribe en un lenguaje de alto nivel.
          .row.justify-content-around(titulo="Prueba y depuración")
            .col-md-3.mb-4.mb-md-0
              figure
                img(src="@/assets/curso/temas/t1/f6.svg", alt="icono relacionado")
            .col-md-7
              p.mb-0 Es un proceso dividido en dos tareas. La primera es la prueba del código elaborado en el paso anterior con el fin de ingresar o registrar datos, hasta que el programa no presente errores de tipo sintáctico y lógico; la segunda es la depuración, donde se deben detectar los errores del programa para corregirlos o eliminarlos.
          .row.justify-content-around(titulo="Documentación")
            .col-md-10
              p Es un registro detallado de manera escrita de todo lo relacionado con el 
                em software
                | , por ejemplo, conceptos, solicitudes o acuerdos, procedimientos y diagramas. La documentación tiene como fin ayudar a comprender el uso de un programa y facilitar futuros mantenimientos; no solo para quien que lo diseñó, sino también, para cualquier persona.
              p 
                b Existen tres tipos de documentación:
              p
                i.fas.fa-circle.cac.me-2.text-small
                strong.cp Documentación interna: 
                | es cualquier tipo de comentario que se escribe en el código fuente, con el fin de hacer más clara la comprensión en un proceso.
              p
                i.fas.fa-circle.cac.me-2.text-small
                strong.cp Documentación externa: 
                | esta documentación se encuentra resumida en el manual técnico del programa y describirá:
              p Como instalar el sistema, como usarlo y operarlo, los requisitos y el diseño, la administración del sistema y los procedimientos de prueba. Todo ello, para poderles dar el adecuado mantenimiento y que será útil durante todo el tiempo de vida del sistema.
              p Adicionalmente, el manual técnico incluirá también: la descripción del problema, el nombre de cada módulo, la fecha de creación o modificación, el nombre de los autores, el algoritmo y/o el diagrama de flujo, el listado de los módulos y procedimientos del programa; así como, el diccionario de datos y el código fuente (programa).
              p
                i.fas.fa-circle.cac.me-2.text-small
                strong.cp Manual del usuario: 
                | está orientado a los usuarios finales que utilizarán el sistema. Este explica paso a paso el funcionamiento del programa, con el fin de que el usuario final conozca de manera detallada el programa para obtener el resultado deseado.

    h3 Concepto de algoritmo

    .row.justify-content-center.mb-5
      .col-md-8.order-md-first.order-last
        p Al hablar de un algoritmo, se hace referencia a un conjunto de instrucciones de forma ordenada, que buscan solucionar un determinado problema y que están relacionadas lógicamente. La palabra algoritmo deriva de la traducción al latín de la palabra árabe 
          em alkhowarizmi
          | , nombre de un matemático y astrónomo árabe que escribió un tratado sobre manipulación de números y ecuaciones en el siglo IX.
        p Es decir, un algoritmo es una serie de instrucciones organizadas que describen el proceso que se debe seguir, para solucionar un problema, por medio de una computadora. Por tanto, todo algoritmo tiene unas características primordiales que debe llevar a cabo, estas son:
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4 Debe ser preciso e indicar el orden de realización de cada paso. 
              br
              | Debe estar bien definido, se debe obtener el mismo resultado cada vez que se lleve a cabo. 
              br
              | Debe ser finito, se debe terminar en algún momento.
            br
            span - Joyanes, 2022, p.60
            i.fas.fa-quote-right
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Estas tres características permiten definir y estructurar de manera clara y legible un algoritmo confiable que ayuda a resolver el problema.
      .col-md-4
        figure
          img(src="@/assets/curso/temas/t1/f7.svg", alt="programador sentado con un laptop en las piernas")

    .row.align-items-center.justify-content-end.mb-5
      .col-md-2
        figure
          img(src="@/assets/curso/temas/t1/f8.svg", alt="icono de diagrama de flujos")
      .col-md-9
        p Por otra parte, la estructura de un algoritmo está compuesta por tres partes: entrada, proceso y salida.
        p 
          i.fas.fa-circle.cac.me-2.text-small
          strong.cp La entrada 
          | se refiere a los datos que se le suministran al algoritmo o programa para iniciar y pueden ser asignados directamente en el programa o suministrados por el usuario por medio de una solicitud de ingreso desde el teclado.
        p
          i.fas.fa-circle.cac.me-2.text-small
          strong.cp El proceso 
          | es la parte donde se llevan a cabo las diferentes acciones con los datos de entrada tales como ciclos, operaciones, cálculos, etc.
        p
          i.fas.fa-circle.cac.me-2.text-small
          strong.cp La salida 
          | es la visualización de los resultados obtenidos en la parte del proceso.
    
    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Representación gráfica de los algoritmos

    p Para representar un algoritmo, es necesario seleccionar algún método que permita desligarlo del lenguaje de programación, permitiendo así que el mismo algoritmo, pueda ser codificado, sin importar cuál sea el lenguaje.
    p Los métodos más conocidos para representar gráficamente un algoritmo son: diagrama de flujo y lenguaje de especificación de algoritmos: pseudocódigo.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      |  Diagrama de flujo

    p Para Joyanes (2020), un diagrama de flujo o <i>flowchart</i> en inglés, es uno de los métodos gráficos de representación de algoritmos más antiguos que, a su vez, es uno de los más utilizados. Aunque, en la actualidad, su uso se ha reducido, sobre todo con la aparición de lenguajes de programación estructurados. Un diagrama de flujo es un diagrama que utiliza los símbolos y que tiene los pasos de algoritmo escritos en cajas unidas por flechas, denominadas líneas de flujo, que indican la secuencia en que se debe llevar a cabo. 
    p El siguiente esquema muestra un ejemplo de diagrama de flujo:

    .col-md-6.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 1
        p.mb-0
          em Ejemplo de un diagrama de flujo
      figure
        img(src="@/assets/curso/temas/t1/f9.svg", alt="Ejemplo de un diagrama de flujo")
        figcaption Nota: Adaptada de Wikimedia commonds (2007). 

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Pseudocódigo

    .row.justify-content-ceter.mb-5.align-items-center
      .col-md-7
        p Según Joyanes (2020), el pseudocódigo (seudocódigo) es un lenguaje de especificación o de descripción de algoritmos. El uso de este, hace que el paso de codificación a un lenguaje de programación sea relativamente más fácil. Es considerado como un primer borrador, dado que el pseudocódigo tiene que traducirse posteriormente a un lenguaje de programación. El pseudocódigo no puede ser ejecutado por una computadora, presenta como ventaja que al planificar un programa, el programador se puede concentrarse en la lógica y en las estructuras de control y no preocuparse de las reglas de un lenguaje específico.
      .col-md-5
        figure
          img(src="@/assets/curso/temas/t1/f10.svg", alt="Ejemplo de un pseudocódigo")
    
    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Algoritmos

    .bloque-texto-a.color-acento-contenido.p-4.p-md-5.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/t1/f11.svg", alt="imagen relacionada")
        .col-lg-8
          .bloque-texto-a__texto.p-4
            p Se definen como una serie de pasos a seguir para solucionar un problema.
            p Utilizando Elementos de secuencia:
            ul.lista-ul--color.mb-4
              li
                i.fas.fa-circle.text-small
                p.mb-0
                  b Entrada
              li
                i.fas.fa-circle.text-small
                p.mb-0
                  b Proceso
              li
                i.fas.fa-circle.text-small
                p.mb-0
                  b Salida
            .row
              .col-md-6
                h4 Creando estructuras:
                .mb-4
                  p.mb-0
                    i.fas.fa-circle.cac.text-small.me-2
                    b De decisión:
                  ul.ms-4
                    li - Simples 
                    li - Dobles
                .mb-4                
                  p.mb-0
                    i.fas.fa-circle.cac.text-small.me-2
                    b De control:
                  ul.ms-4
                    li - Secuenciales
                    li - Cíclicas o repetitivas
                    li - Estructura Para
                    li - Estructura Mientras
                    li - Estructura Repita
                
              .col-md-6
                h4 Emplean la siguiente metodología:
                ol.lista-ol--cuadro
                  li
                    .lista-ol--cuadro__vineta
                      span 1
                    b Análisis del problema
                  li
                    .lista-ol--cuadro__vineta
                      span 2
                    b Diseño de algritmo 
                ul.lista-ul--color.ms-4
                  li
                    i.fas.fa-circle.text-small
                    b Constantes
                  li
                    i.fas.fa-circle.text-small
                    b Variables
                  li
                    i.fas.fa-circle.text-small
                    b Operadores
                ul.ms-5
                  li - Aritméticos
                  li - Relacionales
                  li - Lógicos


    h3 Construcción de expresiones algorítmicas

    p Para realizar la construcción de expresiones algorítmicas se deben tener en cuenta las siguientes consideraciones:
    .row.mb-5
      .col-md-6.col-lg-3.mb-5.col-auto
        .tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false", style="background-color: #B9DDFC")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3.align-items-center.text-center.py-5
              h4 Analizar el problema
              p Analizar la situación teniendo en cuenta los requerimientos del cliente y organizarlos en un orden lógico de pasos para resolver el problema.
            .tarjeta-slide__img(:style="{'background-position':`bottom center`,'background-image': `url(${require('@/assets/curso/temas/t1/f12.svg')})`}")
      .col-md-6.col-lg-3.mb-5.col-auto
        .tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false", style="background-color: #B9DDFC")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3.align-items-center.text-center.py-5
              h4 Diseñar el algoritmo
              p En este paso se describe la secuencia ordenada de pasos del algoritmo, para diseñar una solución que conduce a resolver el problema citado a través de un diagrama de flujo o pseudocódigo.
            .tarjeta-slide__img(:style="{'background-position':`bottom center`,'background-image': `url(${require('@/assets/curso/temas/t1/f13.svg')})`}")
      .col-md-6.col-lg-3.mb-5.col-auto
        .tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false", style="background-color: #B9DDFC")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3.align-items-center.text-center.py-5
              h4 Expresar el algoritmo
              p Se debe expresar como un programa en un lenguaje de programación adecuado. También conocido como fase de codificación.
            .tarjeta-slide__img(:style="{'background-position':`bottom center`,'background-image': `url(${require('@/assets/curso/temas/t1/f14.svg')})`}")
      .col-md-6.col-lg-3.mb-5.col-auto
        .tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false", style="background-color: #B9DDFC")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-3.align-items-center.text-center.py-5
              h4 Ejecución y validación
              p Se pone en ejecución el programa realizado en un computador, verificando y eliminando los errores 
                em (bugs).
            .tarjeta-slide__img(:style="{'background-position':`bottom center`,'background-image': `url(${require('@/assets/curso/temas/t1/f15.svg')})`}")

    p.mb-5 La formulación de algoritmos para enfrentar algunos problemas implica un análisis previo del problema mismo, es decir, identificar los datos iniciales, también denominados variables. Esto favorecerá que la formulación de soluciones sea más pertinente y, por lo mismo, efectiva. El siguiente video detallas los aspectos que se deben tener en cuenta acerca de las variables y las constantes:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
 
    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Información a tener en cuenta

    .fcac50.px-4.pt-4.mb-5
      .row.justify-content-center.align-items-end
        .col-md-9
          p Las constantes se deben declarar e inicializar. A la acción de crear una variable (o una constante), por primera vez en un programa, se le denomina declaración de variable (o constante). La vida de las variables y constantes dentro de un programa, abarca desde que son declaradas por primera vez hasta la finalización del programa. Todo ese tiempo es lo que se llama ámbito de la variable (o constante). El programador podrá hacer referencia a las variables y constantes utilizando los identificadores, pero siempre dentro del ámbito de las mismas (o sea, desde que son declaradas hasta que el programa termina).
          .row.justify-content-between.mb-4
            .col-md-5
              figure
                img(src="@/assets/curso/temas/t1/f16.png", alt="ejemplo de código")
            .col-md-3
              figure
                img(src="@/assets/curso/temas/t1/f17.svg", alt="pantalla de computador")
        .col-md-3
          figure
            img(src="@/assets/curso/temas/t1/f18.svg", alt="persona con boligrafo en la mano")

    h3.mb-5 Operaciones aritméticas, relacionales y lógicas

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Información a tener en cuenta

    p Joyanes (2020), indica que las <b>Expresiones</b> “son combinaciones de constantes, variables, símbolos de operación, paréntesis y nombres de funciones especiales”. 
    p Los operadores son elementos que relacionan de forma diferente los valores de una o más variables y/o constantes. Es decir, los operadores permiten manipular valores, para obtener nuevos valores en nuevas o diferentes variables.

    .cajon.color-acento-botones.p-4.mb-4
      p.mb-0 A continuación, pueden conocerse los tipos de operadores, lo que representan y una ejemplificación de cada uno de ellos:

    .tarjeta.fcp15.p-4.mb-5
      SlyderA
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            h4 Operadores aritméticos
            p Permiten la realización de operaciones matemáticas con las variables y las constantes.
            p Son utilizados de dos formas con los dos tipos de datos:
            ul
              li ● Enteros: si ambos son enteros, el resultado es entero.
              li ● Reales: si alguno de ellos es real, el resultado es real.

          .col-md-8.tarjeta.p-3.fblanco

            figure
              img(src='@/assets/curso/temas/t1/f19.svg', alt='Texto que describa la imagen')
        .row.p-4
          .col-md-7.mb-4.mb-md-0
            h4 Prioridad de los operadores aritméticos
            p Es el orden lógico establecido como se ejecutan las operaciones aritméticas. 
            p Se evalúan de la siguiente manera:
            ol
              li 1. Todas las expresiones que están en paréntesis.
              li 2. Todas las expresiones con paréntesis anidados de adentro hacia afuera.
              li 3. Todas las expresiones dentro del paréntesis interno se evalúan primero.
            p En una misma expresión, los operadores aritméticos se evalúan en el siguiente orden:
            ol
              li 1. ^ Exponenciación.
              li 2. *, /, mod Multiplicación, división, módulo.
              li 3. +, - Suma y resta.
            p En una misma expresión con igual nivel de prioridad, los operadores aritméticos se evalúan de izquierda a derecha.
          
          .col-md-5.tarjeta.p-3
            figure
              img(src='@/assets/curso/temas/t1/f20.svg', alt='Texto que describa la imagen')
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            h4 Operadores relacionales
            p El Departamento de Sistemas Informáticos Escuela Técnica Superior de Ingeniería ICAI (2020) indica que “Los operadores se utilizan para formar expresiones lógicas”.
          .col-md-8.tarjeta.p-3.fblanco

            figure
              img(src='@/assets/curso/temas/t1/f21.svg', alt='Texto que describa la imagen')
        .row.p-4
          .col-md-4.mb-4.mb-md-0
            h4 Operadores lógicos
            p Se utilizan para establecer relaciones entre valores lógicos. Estos valores pueden ser resultado de una expresión relacional.
          .col-md-8.tarjeta.p-3.fblanco

            figure
              img(src='@/assets/curso/temas/t1/f22.svg', alt='Texto que describa la imagen')

        .row.p-4.justify-content-around
          .col-md-4
            p Los operadores AND y OR combinan expresiones relacionales, cuyo resultado viene dado por la última columna de sus tablas de verdad.
          .col-md-7
            .fcac50.p-3
              h4 Ejemplo:
              p
                | (a&lt;b) &amp;&amp; (b&lt;c) es verdadero (true), si ambas son verdaderas. 
                br
                | Si alguna o ambas son falsas el resultado es falso (false).
              p
                | En cambio, la expresi&oacute;n (a&lt;b) ||(b&lt;c) es verdadera, si una de las dos comparaciones lo es. 
                br
                | Si ambas, son falsas, el resultado es falso.
              p La expresi&oacute;n&raquo; NO a es menor que b&raquo;
              p
                | !(a&lt;b) es falsa si (a&lt;b) es verdadero, y es verdadera si la comparaci&oacute;n es falsa. 
                br
                | Por tanto, el operador NOT actuando sobre (a&lt;b) es equivalente a (a&gt;=b)
                br
                | La expresi&oacute;n &laquo;NO a es igual a b&raquo;
              p
                | !(a==b) es verdadera si a es distinto de b, y es falsa si a es igual a b. 
                br
                | Esta expresi&oacute;n es equivalente a (a!=b)


    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Tipos de operadores
    p En cuanto a los tipos de operadores, se pueden mencionar los que se expresan en la siguiente gráfica:
    .col-md-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 2
        br
        em Tipos de operadores
      figure
        img(src='@/assets/curso/temas/t1/f23.svg', alt='')

    h3 Representación gráfica de algoritmos
    
    p A través de la siguiente imagen se puede ver la explicación de los algoritmos, de acuerdo a su representación gráfica:

    .col-md-9.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1
        br
        em Representación gráfica de algoritmos
      .tabla-a.color-acento-contenido.mb-5
        table
          caption Nota: Adaptado de Olimpiada Oaxaqueña de informática. Gitbook (2019) 
          thead
            tr
              th Símbolo
              th Nombre
              th Acción
          tbody
            tr
              td(data-aos='fade-right') 
                img(src='@/assets/curso/temas/t1/f24.svg', alt='', style='height:40px')
              td Terminal
              td Representa el inicio o el fin del diagrama de flujo.
            tr
              td(data-aos='fade-right') 
                img(src='@/assets/curso/temas/t1/f25.svg', alt='', style='height:40px')
              td Entrada y salida
              td Representa los datos de entrada y los de salida.
            tr
              td(data-aos='fade-right') 
                img(src='@/assets/curso/temas/t1/f26.svg', alt='', style='height:40px')
              td Decisión
              td Representa las comparaciones de dos o mas valores, tiene dos salidas de información falso o verdadero.
            tr
              td(data-aos='fade-right') 
                img(src='@/assets/curso/temas/t1/f27.svg', alt='', style='height:40px')
              td Proceso
              td Indica todas las acciones o cálculos que se ejecutaran  con los datos de entrada u otros obtenidos.
            tr
              td(data-aos='fade-right') 
                img(src='@/assets/curso/temas/t1/f28.svg', alt='', style='height:40px')
              td Líneas de flujo de información
              td Indican el sentido de la información obtenida y su uso posterior en algún proceso subsiguiente.
            tr
              td(data-aos='fade-right') 
                img(src='@/assets/curso/temas/t1/f29.svg', alt='', style='height:40px')
              td Conector
              td Este símbolo permite identificar la continuación de la información, si el diagrama es muy extenso.

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
