<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Materiales e insumos para calzado

    Separador
    <!-- BLOQUE  -->
    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 Cueros


    Separador
    <!-- BLOQUE  -->
    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Sintéticos


    Separador
    <!-- BLOQUE  -->
    #t_1_3.titulo-segundo.color-acento-contenido
      h2 1.3 Textiles


    Separador
    <!-- BLOQUE  -->
    #t_1_4.titulo-segundo.color-acento-contenido
      h2 1.4 Suelas


 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
