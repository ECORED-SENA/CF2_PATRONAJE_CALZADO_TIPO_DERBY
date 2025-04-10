<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Sistemas de medidas de calzado


    Separador
    <!-- BLOQUE  -->
    #t_3_1.titulo-segundo.color-acento-contenido
      h2 3.1 Principales sistemas de numeración de calzado


    Separador
    <!-- BLOQUE  -->
    #t_3_2.titulo-segundo.color-acento-contenido
      h2 3.2 Conversión básica entre sistemas


    Separador
    <!-- BLOQUE  -->
    #t_3_3.titulo-segundo.color-acento-contenido
      h2 3.3 Medida de ancho o volumen del pie

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
