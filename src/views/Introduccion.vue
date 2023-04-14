<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .bloque-texto-a.color-acento-botones.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-4.mb-4.mb-lg-0
          figure
            img(src="@/assets/curso/temas/if1.svg", alt="imagen relacionada")
        .col-lg-8
          .contenedor-dashed.p-3        
            .bloque-texto-a__texto.p-4
              p Apreciado aprendiz, bienvenido a este componente formativo, donde se abordarán aspectos generales y claves sobre algoritmos, estructuras y operaciones, temáticas de suma importancia en su proceso formativo. Con el estudio responsable de este componente, afiance sus conocimientos, saberes y habilidades para la implementación y gestión de bases de datos, la aplicación de metodologías para la solución de problemas informáticos, aplicación de estructuras de control, funciones y procedimientos.
              p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.


    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/aICQGTU4Dm8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
