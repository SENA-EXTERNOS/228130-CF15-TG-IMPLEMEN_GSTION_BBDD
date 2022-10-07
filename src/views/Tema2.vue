<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Estructuras de control y funciones

    .row.justify-content-center.align-items-center.mb-5
      .col-md-3
        figure
          img(src='@/assets/curso/temas/t2/f1.svg', alt='persona frente a un laptop')
      .col-md-9
        p También es conocido como secuenciación o control del flujo. El flujo de control hace referencia a la secuencia en que se ejecutan las instrucciones de un algoritmo o de un programa; el flujo normal de control de todos los programas es secuencial, a menos que se indique expresamente lo contrario o se especifique algo diferente. Esto quiere decir que las sentencias se llevan a cabo en secuencia, seguida una de otra, en el orden en que se encuentran ubicadas en el algoritmo o en el programa. 
        p Las estructuras de selección, repetición o iteración, permiten que el flujo de control del programa sea alterado de una forma precisa y establecida con anterioridad. Estas se usan como lo indica su palabra para seleccionar, elegir o escoger, las instrucciones que se han de llevar a cabo a continuación. Por su parte, las estructuras de repetición (repetitivas o iterativas), se usan para que un conjunto de instrucciones se repita.
    
    .col-md-10.mx-auto.mb-5
      .fcs.p-4
        p.p-3.border1.mb-0 En la siguiente información al respecto, se encuentra la indicación de las utilizaciones, las estructuras de control, así como los contadores y acumuladores.

    Separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Conceptos y aplicación de condicionales 

    .row.justify-content-center.align-items-center.mb-5
      .col-md-1.col-sm-4.col-xs-10
        img(src='@/assets/curso/temas/t2/f2.svg', alt='pantalla con diagrama')
      .col-md-10.col-sm-6
        p Los condicionales se suelen utilizar para tomar decisiones lógicas, son llamadas estructuras selectivas o alternativas, a través de ellas se evalúa una condición y, en función del resultado de la misma, se realiza una opción u otra.
        p En la siguiente información al respecto, se encuentra la indicación de las utilizaciones, las estructuras de control, así como los contadores y acumuladores.
    
    p Las estructuras de decisión pueden ser de las siguientes formas: estructuras simples y estructuras dobles.

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Estructuras simples")
        .row
          .col-md-6.mb-4.mb-md-0
            p Las estructuras simples permiten que se lleven a cabo una o varias acciones o instrucciones determinadas cuando se cumple una condición específica; esta estructura es comúnmente llamada “si-entonces”. 
            p La estructura “si-entonces” analiza la condición y si esta es verdadera, entonces lleva a cabo las acciones que están dentro de la estructura; si la condición es falsa entonces no realiza nada.
          .col-md-6.tarjeta.tarjeta--azul.p-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 3.
              br
              em Estructuras simples
            img(src='@/assets/curso/temas/t2/f3.svg', alt='')
      .py-4.py-md-5(titulo="Estructuras dobles")
        .row
          .col-md-6.mb-4.mb-md-0
            p Las estructuras dobles permiten llevar a cabo una o más acciones entre dos opciones o alternativas posibles, si se cumple o no una determinada condición; esta estructura es comúnmente llamada “si-entonces-si_no”. 
            p La estructura “si-entonces-si_no” analiza la condición y si esta es verdadera, entonces ejecuta las acciones que están dentro de la estructura Si; si la condición es falsa, entonces realiza las acciones que están dentro de la estructura si_no.
          .col-md-6.tarjeta.tarjeta--azul.p-3
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 4.
              br
              em Estructuras dobles
            img(src='@/assets/curso/temas/t2/f4.svg', alt='')
      
    Separador 

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Estructuras de control

    .row.justify-content-center.align-items-center.mb-5
      .col-md-1.col-sm-4.col-xs-10
        img(src='@/assets/curso/temas/t2/f4_.svg', alt='pantalla con engranajes')
      .col-md-10.col-sm-6
        p Las estructuras de control son acciones o instrucciones que permiten, en general darle solución al problema, pero de una forma lógica, es decir, la que permite dar el orden secuencial para lograr la solución del problema.
        p 
          b Las estructuras de control pueden ser:
        
        .fcac50.p-3.mb-5
          p 
            i.fas.fa-circle.text-small.cac.me-2
            b Estructuras secuenciales
          p.mb-0 Las estructuras secuenciales son conocidas también como estructura lineal, son de las más sencillas y se ejecutan tal cual en el orden que van apareciendo, de arriba hacia abajo.

      .col-md-4.mb-4
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 5.
          br
          em Estructuras secuenciales
        img(src='@/assets/curso/temas/t2/f5.svg', alt='')

      .col-md-10.p-3.fcab17
        p
          i.fas.fa-circle.text-small.cac.me-2
          b Estructuras cíclicas y/o repetitivas
        p.mb-0 Las estructuras cíclicas también llamadas repetitivas o bucles, como su nombre lo indica, se repiten realizando la misma acción un determinado número de veces, dependiendo del requerimiento del problema. Existen algunas ocasiones donde se conoce previamente la cantidad de veces que se necesitan llevar a cabo las acciones o instrucciones de un ciclo.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Tipos de estructuras cíclicas

    p Dentro de los tipos de estructura cíclicas se pueden encontrar: la estructura Para, la estructura Mientras y la estructura Repita.

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Estructura Para")
        .row
          .col-md-6.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t2/f6.svg', alt='')
          .col-md-6
            p La estructura Para permite llevar a cabo una o varias acciones o instrucciones, un determinado número de veces.
            p Es necesario que la variable contadora de control del ciclo sea de tipo entero, tenga un valor inicial, definir el valor limite y el valor de como aumenta o disminuye el contador.
      .py-4.py-md-5(titulo="Estructura Mientras")
        .row
          .col-md-6.mb-4.mb-md-0
            p La estructura Mientras permite llevar a cabo una o varias acciones o instrucciones, mientras el resultado de la condición, sea verdadera.
            p Cuando se ejecuta la estructura Mientras, se evalúa la condición, si esta es falsa, ninguna acción se realiza y el programa continuo; si es verdadera, entonces se llevan a cabo las instrucciones del bucle.
            p Este proceso se repite una y otra vez, mientras la condición sea verdadera, durante la ejecución del programa.
          .col-md-4
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 6.
              br
              em Estructuras Mientras
            img(src='@/assets/curso/temas/t2/f7.svg', alt='')
      .py-4.py-md-5(titulo="Estructura Repita")
        .row
          .col-md-6.mb-4.mb-md-0
            p La estructura Repita permite llevar a cabo una o varias acciones o instrucciones en un número indeterminado de veces, hasta que el resultado de la condición sea falso.
            p A diferencia de la estructura Mientras, que evalúa la condición al inicio del ciclo, la estructura Repita lo hace al final del mismo. Esto es importante, ya que garantiza la ejecución de las instrucciones, mínimo una vez cuando se ejecuta el algoritmo o programa. 
          .col-md-4
            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Figura 7.
              br
              em Estructura Repita
            img(src='@/assets/curso/temas/t2/f8.svg', alt='')

    Separador 

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Contadores y acumuladores 

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Contadores

    .row.justify-content-center.align-items-center.mb-5
      .col-md-1.col-sm-4.col-xs-10
        img(src='@/assets/curso/temas/t2/f9.svg', alt='pantalla con código binario')
      .col-md-10.col-sm-6
        p Como su palabra lo dice permiten contar, para poder utilizar un contador es necesario inicializarlo en un valor y luego incrementar su valor de una manera constante, para permitir realizar el conteo. Se considera que es una variable, a través de la cual su valor se incrementa o decrementa en una cantidad constante, cada vez que se produce un determinado suceso o acción. La finalidad que estos tienen es la de contar sucesos o acciones internas de un bucle; realizando una operación de inicialización y posteriormente las sucesivas de incremento o decremento del mismo. La inicialización consiste en asignarle al contador un valor. Se situará antes y fuera del bucle.

    .col-md-4.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 8.
        br
        em Ejemplo de estructura de contadores
      figure
        img(src='@/assets/curso/temas/t2/f10.svg', alt='')

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Representación

      p
        | &lt;nombre del contador&gt; = &lt;nombre del contador&gt; + &lt;valor constante&gt;
        br
        | Si en vez de incremento es decremento se coloca un menos en lugar del m&aacute;s.
        br
        | Ejemplo: i = i + 1

    .col-md-4.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 9.
        br
        em Ciclo Para
      figure
        img(src='@/assets/curso/temas/t2/f11.svg', alt='')

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Acumuladores

    p Como su palabra lo dice permiten acumular el valor de una variable, para poder utilizar un acumulador es necesario inicializarlo en un valor y luego iniciar con la acumulación del valor.

    .col-md-10.mx-auto.fcab17.p-3
      p.mb-0 El algoritmo que se presenta anteriormente se esquematiza a través de un diagrama de flujo y lo que hace es inicializar un valor en 1 hasta 100, hasta imprimir la suma de cada dígito, acumulándolo hasta 100. En este caso sería 1+2+3+4+5.....+100.

</template>

<script>
export default {
  name: 'Tema2',
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
