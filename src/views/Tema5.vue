<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Moldes

    p Los moldes en la industria del calzado son herramientas fundamentales para la producción de las piezas que conforman un zapato. Su precisión y diseño garantizan la correcta elaboración del calzado, asegurando uniformidad, ajuste y eficiencia en la fabricación.

    Separador.ajustes___movil-2
    <!-- BLOQUE 1 -->
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.1 Tipos y características de los moldes

    p.mb-5

    .row(data-aos="fade-up")
      .col-lg-6.caja-color-1
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/tema5/img1.svg" style="max-width: 70px")
          .col.ajuste-h4
            h4.mb-0.white Moldes según su función
        <ul class="fa-ul">
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Moldes base</strong>: se obtienen directamente de la horma y sirven como referencia para todos los procesos posteriores.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Moldes de corte</strong>: utilizados para marcar y cortar las piezas de la capellada.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Moldes de refuerzo</strong>: empleados en la confección de plantillas, contrafuertes y punteras, brindando soporte estructural.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Moldes de forro</strong>: se usan para diseñar y confeccionar el interior del calzado. </li>
        </ul>
      .col-lg-6.caja-color-2
        .row.mb-4
          .col-auto
            figure
              img(src="@/assets/curso/tema5/img1.svg" style="max-width: 70px")
          .col.ajuste-h4
            h4.mb-0.white Moldes según el material
        <ul class="fa-ul">
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Moldes de cartón</strong>: utilizados en la fase de desarrollo inicial y prototipos.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Moldes de plástico o acrílico</strong>: más resistentes, apropiados para producción a gran escala.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Moldes de lámina</strong>: hechos en hojalata o lámina galvanizada, ofrecen mayor durabilidad para uso industrial.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Moldes de fleje de acero (troqueles)</strong>: cortan con precisión las piezas del calzado, optimizando el proceso de producción y reduciendo desperdicios.</li>
        </ul>

    Separador
    <!-- BLOQUE 2 -->
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 5.2 Procedimiento de referenciación de los moldes

    p.mb-5 Este proceso permite identificar, clasificar y organizar los moldes, facilitando su trazabilidad y uso correcto en la fabricación. Los pasos del procedimiento son:

    .row.fondo-img.align-items-center.mb-5
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema5/img3.png', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img4.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Identificación del modelo
            p.mb-0 Asignación de un código único según el diseño, número de horma y versión. Ejemplo: M-2024-42-BOT (Molde del año 2024, talla 42, tipo bota).
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img5.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Categorización de moldes
            p.mb-0 Clasificación según su función: moldes base, de corte, de forro, de suela o para avíos.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img6.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Marcado en los moldes	
            p.mb-0 Grabado o impresión de la referencia en el material mediante etiquetas adhesivas, grabado láser o marcadores permanentes.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img7.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Registro en sistema
            p.mb-0 Documentación física o digital de la información del molde mediante bases de datos o software de gestión de producción.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema5/img8.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Almacenamiento y organización
            p.mb-0 Estanterías organizadas por referencia, talla y tipo. Uso de cajas, carpetas o gavetas correctamente etiquetadas.

      .caja-titulos-tercer-nivel.ajuste___caja-tercernivel.ajuste___movil-tema5(data-aos="fade-right")
        .col-lg-auto
          figure
            img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
        .col
          h3 Importancia de la referenciación

    p.mb-5.ajustes___movil-1 La referenciación clara y sistemática de los moldes contribuye al orden y precisión en los procesos de fabricación:

    .row.h-100.align-items-center.ajustes___movil-1
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema5/img9.png", alt="" style="max-width: 500px").m-auto
      .col-xl.ajuste-caja-tema2.ajuste___tema5(data-aos="fade-left")
        <ul class="fa-ul">
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Facilita la localización y control de inventario.</strong></li>
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Evita errores de corte.</strong></li>
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Permite la reproducción exacta de modelos anteriores.</strong></li>
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Mejora la eficiencia en producción.</strong></li>
        </ul>

</template>

<script>
export default {
  name: 'Tema5',
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
