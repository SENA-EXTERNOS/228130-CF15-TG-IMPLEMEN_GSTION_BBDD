<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Definición de funciones y procedimientos 


    .row.justify-content-center.mb-5
      .col-md-8
        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4 Procedimientos son módulos que se utilizan para elaborar un conjunto de instrucciones, independientes y reutilizables, pero definiendo claramente el significado y la utilidad de esa porción de programa.         
            br
            span Rojas (2017) 
            i.fas.fa-quote-right
        
        .fcac50.p-4.mb-4
          p.mb-0 En otras palabras, se puede decir que los procedimientos son fragmentos o pedazos de códigos, que se pueden reutilizar dentro de la ejecución de un programa.

        p Entretanto las <b>funciones</b> son definidas por Rojas (2017), como:

        .bloque-texto-b.color-secundario.p-4.mb-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4 módulos que tienen la misma definición de un procedimiento, pero con la particularidad que permiten devolver un valor en una variable
            br
            span - Rojas (2017) (p. 36). 
            i.fas.fa-quote-right

        .fcac50.p-4
          p.mb-0 Las funciones prácticamente son lo mismo que los procedimientos, pero, con la diferencia de que estas devuelven un valor al programa que las llamó.

      .col-md-4
        figure
          img(src='@/assets/curso/temas/t3/f1.svg', alt='persona viendo documentos')

    .bloque-texto-a.color-secundario.p-4.p-md-5.mb-5.bgt3-2
      .row.m-0.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          
        .col-lg-8
          .contenedor-dashed.p-3         
            .bloque-texto-a__texto.p-4
              p 
                i.fas.fa-circle.text-small.cac.me-2
                b Declaración de funciones
              p.cac En pseudocódigo:

              p 
                b SINTAXIS

              p Función nombre_función (lista de parámetros a recibir):

              p Tipo
              p declaraciones locales

              p Hacer
              p cuerpo ejecutable de la función

              p Nombre_funci&oacute;n = &lt;expresi&oacute;n o valor calculado dentro de la funci&oacute;n&gt; // 1 //
              p Fin Hacer
              p Fin Funcion

    i.fas.fa-dot.cac.me-2
    h4 

    .row.justify-content-center.mb-5
      .col-md-4
        figure
          img(src='@/assets/curso/temas/t3/f3.svg', alt='')
      .col-md-8
        p 
          b nombre_función: 
          | es el nombre de la función.
        p 
          b Lista de parámetros: 
          | es la lista de parámetros formales y no puede estar vacía.
        p 
          b Tipo: 
          | es el tipo de dato que devuelve la función.
        p // 1 // En el cuerpo de la función debe existir una sentencia que asigne valor explícitamente al nombre de la función.
        p 
          b Invocación a las funciones
        p Para que una función sea ejecutada, esta debe ser llamada desde un programa principal, otras funciones o procedimientos haciendo referencia a su nombre. 

        .bloque-texto-b.color-secundario.p-4
          .bloque-texto-b__texto
            i.fas.fa-quote-left
            h4 Cada vez que se llama a una función desde el algoritmo principal, se establece automáticamente una correspondencia entre los parámetros formales y los reales.
              br
              | Debe haber exactamente el mismo número de parámetros reales que de formales en la declaración de la función 
            br
            span - Joyanes (2020)  (p. 214). 
            i.fas.fa-quote-right

    .col-md-10.mx-auto.mb-5
      .fcac50.p-4
        p
          b Ejemplo en pseudocódigo:
        p nombre_función (lista de parámetros).
        p La sentencia nombre_función con los parámetros, es la que realiza el llamado de la función. El control de ejecución lo toma la función, lleva a cabo secuencialmente las instrucciones y cuando termina, le devuelve el control al programa llamador, ejecutando el paso inmediatamente siguiente a la de la llamada. El resultado lo devuelve en el nombre de la función.

    p Una llamada a una función implica los siguientes pasos:

    .row.justify-content-center.mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/t3/f4.png', alt='')
      .col-md-7
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Asignar valor") A cada parámetro formal se le asigna el valor real de su correspondiente parámetro actual (cabe destacar que se dice “real” haciendo referencia al valor verdadero, con el cual va a trabajar el subprograma, y no al tipo de dato).
          p(numero="2" titulo="Ejecución") Se ejecuta el cuerpo de acciones o instrucciones de la función.
          p(numero="3" titulo="Devolver valor") Se devuelve el valor de la función al nombre de la función y se retorna al punto de llamada.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Procedimientos

    p Los procedimientos son fragmentos o pedazos de códigos que se pueden reutilizar dentro de la ejecución de un algoritmo o programa.
    p Todo procedimiento, al igual que un programa principal, consta de una cabecera, que proporciona su nombre y sus parámetros de comunicación; de una sección de declaraciones locales y el cuerpo de sentencias ejecutables.
    p
      b Las ventajas más destacables de usar procedimientos son:

    .row.justify-content-center.mb-5
      .col-md-8
        TabsA.color-primario.mb-5
          .tarjeta.color-secundario--borde.p-4(titulo="Ventaja 1")
            p Facilitan el diseño 
              em top-down
              | .
          .tarjeta.color-secundario--borde.p-4(titulo="Ventaja 2")
            p Se pueden llevar a cabo más de una vez en un programa, con sólo llamarlos las veces que así se desee. Con esto se ahorra tiempo de diseño y programación.
          .tarjeta.color-secundario--borde.p-4.adss-3(titulo="Ventaja 3")
            p El mismo procedimiento se puede usar en distintos programas.
          .tarjeta.color-secundario--borde.p-4.adss-5(titulo="Ventaja 4")
            p Su uso facilita la división de tareas entre los diferentes programadores de un equipo.
          .tarjeta.color-secundario--borde.p-4.adss-5(titulo="Ventaja 5")
            p Se pueden probar individualmente e incorporarlos en librerías o bibliotecas, para ser usados posteriormente por quien lo necesite.

      .col-md-4
        figure
          img(src='@/assets/curso/temas/t3/f5.svg', alt='programador con su laptop')

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-3
      | Declaración de procedimiento:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-5
        figure
          img(src='@/assets/curso/temas/t3/f6.png', alt='mujer frente a pc')

      .col-md-7
        p En pseudocódigo:
        p 
          i.fas.fa-circle.text-small.cac.me-2
          b SINTAXIS
        p procedimiento nombre procedimiento (lista de parámetros):
        p 
          i.fas.fa-circle.text-small.cac.me-2
          b Tipo
        p declaraciones locales
        p 
          i.fas.fa-circle.text-small.cac.me-2
          b Hacer
        p cuerpo ejecutable del procedimiento
        p Fin procedimiento
        .fcac30.p-4.text-center
          p
            b Ámbito variables locales y globales
          p.mb-0 Las variables utilizadas en los programas principales y subprogramas se clasifican en dos tipos: variables locales y variables globales.

    p A continuación, se muestra una breve explicación de ambos tipos de variables:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-secundario.p-5
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/f7.svg', alt='Texto que describa la imagen')
        h4.text-center Variables locales
        p Joyanes (2020), indica que “Una variable local es aquella que está declarada y definida dentro de un subprograma, en el sentido de que está dentro de este subprograma y es distinta de las variables con el mismo nombre, declaradas en cualquier parte del programa principal”.

      .col-md.tarjeta.color-primario.p-5.text-white
        .row.justify-content-center.mb-4
          .col-6
            figure
              img(src='@/assets/curso/temas/t3/f8.svg', alt='Texto que describa la imagen')
        h4.text-center Variables globales
        p Joyanes (2020), indica que “Es aquella que está declarada para el programa o algoritmo principal, del que dependen todos los subprogramas”.

    p En la comunicación con subprogramas, se deben tener en cuenta los parámetros y su uso. Por eso, tenga en cuenta su definición:

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7
        ul.lista-ul--color
          li
            i.fas.fa-circle.text-small
            p.mb-0 
              b Un parámetro: 
              | es un valor (puede ser una variable, una constante o una expresión) que se pasa desde el programa principal al subprograma (función o procedimiento) para que puedan ser usados en este. 
          li
            i.fas.fa-circle.text-small
            p.mb-0 
              b Un subprograma: 
              | tiene su propia estructura (nombre, declaración de variables y sus respectivos parámetros). 
          li
            i.fas.fa-circle.text-small
            p.mb-0 
              b Paso de parámetros: 
              | es la forma en que los diferentes subprogramas se comunican, la información entre ellos, es a través de la lista de parámetros y se establece una correspondencia entre los diferentes parámetros.
      .col-md-5
        figure
          img(src='@/assets/curso/temas/t3/f9.png', alt='Pantallas de computador')

    p Los parámetros pueden ser clasificados como:

    .col-md-8.mx-auto.mb-5
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t3/f11.svg', alt='Texto que describa la imagen')
        .tarjeta.fcac50.p-3.pnt-az(x="13%" y="15%" numero="1")
          .h5.mb-2 Entradas (E)
          p Las entradas proporcionan valores desde el programa que llama y se utilizan dentro del procedimiento.
        .tarjeta.fcac50.p-3(x="88.5%" y="15%" numero="2")
          .h5.mb-2 Salidas (S)
          p Las salidas proporcionan los resultados del subprograma.
        .tarjeta.fcac50.p-3(x="23%" y="49%" numero="3")
          .h5.mb-2 Entradas/Salidas (E/S)
          p Un solo parámetro se utiliza para mandar argumentos a un programa y para devolver resultados.
        .tarjeta.fcac50.p-3(x="76%" y="84%" numero="4")
          .h5.mb-2 Importante
          p Los métodos más empleados para realizar el paso de parámetros son:
          ul.lista-ul--color
            li
              i.fas.fa-circle
              | Paso por valor (parámetro valor).
            li
              i.fas.fa-circle.text-small
              | Paso por referencia o dirección (parámetro variable).
            li
              i.fas.fa-circle.text-small
              | Paso por nombre.
            li
              i.fas.fa-circle.text-small
              | Paso por resultado.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4
        img(src='@/assets/curso/temas/t3/f12.png', alt='')
      .col-md-8
        p
          i.fas.fa-circle.text-small.cac.me-2
          b Paso por valor
        p “No se hace diferencia entre un parámetro que es variable; constante o expresión, ya que solo importa el valor del parámetro” (Joyanes, 2020, p. 227).
        p
          i.fas.fa-circle.text-small.cac.me-2
          b Paso por referencia
        p Son los parámetros que están precedidos por la palabra reservada ref., que indica que sólo reciben valor en el subprograma, o bien proporcionan valor al subprograma y reciben un valor nuevo en el mismo. Así que todo cambio realizado sobre los parámetros formales precedidos por “ref.”, se refleja en los parámetros reales correspondientes. Se los considera como parámetros bidireccionales o variables, ya que son de Entrada y/o Salida.
        p
          i.fas.fa-circle.text-small.cac.me-2
          b Recursión (recursividad)
        p La recursión es un método por medio del cual un subprograma puede ser llamado por el mismo. La escritura de un procedimiento o función recursiva es similar a sus homónimos no recursivos. Sin embargo, para evitar que la recursión continúe indefinidamente, es preciso incluir una condición de terminación dentro del subprograma. 
    
    .col-md-10.mx-auto

      .fcab.p-3
        .contenedor-dashed.p-3
          .fblanco.p-3
            p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.


</template>

<script>
export default {
  name: 'Tema3',
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
