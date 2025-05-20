<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Herramientas utilizadas en el proceso de patronaje

    p.mb-4 Antes de iniciar el proceso de enmascarado, es fundamental realizar el alistamiento de las herramientas necesarias para llevar a cabo esta actividad de manera eficiente. A continuación, se presentan las herramientas requeridas.

    .row.align-items-center
      .col-xl-4
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Figura 13. 
          span Herramientas utilizadas en el proceso de patronaje
        figure(data-aos="fade-right")
          img(src='@/assets/curso/tema4/img20.svg', alt='' ).m-auto
      .col-xl-5.estilo___caja-tema4-7(data-aos="fade-right")
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 1
            | <strong>Cuchilla de corte</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 2
            | <strong>Borrador</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 3
            | <strong>Compas de puntas secas o compas de precisión</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 4
            | <strong>Regla metálica de 15 cm</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 5
            | <strong>Portaminas</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 6
            | <strong>Tijeras</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 7
            | <strong>Cinta de enmascarar</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 8
            | <strong>Piedra de afilar</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 9
            | <strong>Regla metálica de 30 cm</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 10
            | <strong>Metro de calzado o cinta métrica</strong>
        ol.lista-ol--cuadro
          li
            .lista-ol--cuadro__vineta.ajuste__li
              span 11
            | <strong>Tabla de corte</strong>
      .col-xl-3
        figure.d-none.d-xl-block(data-aos="fade-left")
          img(src='@/assets/curso/tema4/img21.png', alt='' style="max-width: 300px").m-auto    

    
</template>

<script>
export default {
  name: 'Tema4',
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
