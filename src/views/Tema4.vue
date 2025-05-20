<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Herramientas utilizadas en el proceso de patronaje

    .row.align-items-center.mb-5
      .col-xl
        p.mb-0 Antes de iniciar el proceso de enmascarado, es fundamental realizar el alistamiento de las herramientas necesarias para llevar a cabo esta actividad de manera eficiente. A continuación, se presentan las herramientas requeridas.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema4/img22.svg", alt="" style="max-width: 295px").m-auto
    
    .titulo-sexto.color-acento-contenido.mb-4.ajustes___movil-1(data-aos="fade-right")
      h5 Figura 13. 
      span Herramientas utilizadas en el proceso de patronaje
    
    .row.align-items-center.estilo___caja_3.m-0(data-aos="zoom-in")
      .col-xl-auto
        figure
          img(src='@/assets/curso/tema4/img20.svg', alt='' style="max-width: 500px").m-auto
      .col-xl.ajustes___movil-3
        ol.lista-ol
          li 
            span.text-bold 1. 
            | Cuchilla de corte.
        ol.lista-ol
          li 
            span.text-bold 2. 
            | Borrador.
        ol.lista-ol
          li 
            span.text-bold 3. 
            | Compás de puntas secas o compás de precisión.
        ol.lista-ol
          li 
            span.text-bold 4. 
            | Regla metálica de 15 cm.
        ol.lista-ol
          li 
            span.text-bold 5. 
            | Portaminas.
        ol.lista-ol
          li 
            span.text-bold 6. 
            | Tijeras.
        ol.lista-ol
          li 
            span.text-bold 7. 
            | Cinta de enmascarar.
        ol.lista-ol
          li 
            span.text-bold 8. 
            | Piedra de afilar.
        ol.lista-ol
          li 
            span.text-bold 9. 
            | Regla metálica de 30 cm.
        ol.lista-ol
          li 
            span.text-bold 10. 
            | Metro de calzado o cinta métrica.
        ol.lista-ol
          li 
            span.text-bold 11. 
            | Tabla de corte.

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
