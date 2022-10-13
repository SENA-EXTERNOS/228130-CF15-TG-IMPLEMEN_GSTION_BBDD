<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tecnólogo en implementación y gestión de bases de datos
      span Síntesis: Algoritmos, estructuras y operaciones

    p En este componente de algoritmos, estructuras y operaciones, se dio una inmersión en los diferentes temas y conceptos necesarios para aprender a programar y desarrollar la mentalidad algorítmica que se requiere como programador. Esto permitirá al aprendiz enfrentar cualquier tipo de problema dentro de una organización, para plantear y llevar a cabo una solución óptima para la misma. Estructurar la mente de tal forma que entrenará capacidades muy demandadas en el mercado laboral actual, tales como el análisis de requerimientos, la resolución de problemas bajo mucha presión, la organización y gestión del trabajo en forma de micro tareas, entre muchas otras. La mente analítica como programador será uno de los mayores activos.

    p El siguiente mapa conceptual presenta a manera resumen la temática abordada:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-4(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
