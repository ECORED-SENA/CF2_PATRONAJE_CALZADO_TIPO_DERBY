<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Fichas técnicas de diseño

    p La ficha técnica de diseño es un documento esencial que reúne la información detallada de un producto en desarrollo. Su objetivo es asegurar que, desde el diseño hasta la producción final, se sigan parámetros estandarizados que garanticen la calidad del artículo. Este instrumento es ampliamente utilizado en sectores como el calzado, la marroquinería, el textil y la manufactura en general.

    Separador
    <!-- BLOQUE 1 -->
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Características de la ficha técnica de diseño

    p.mb-5.ajustes___movil-1 Una ficha técnica bien elaborada debe contener diversos elementos que permitan comprender todas las características del producto. A continuación, se describen los apartados que la componen:

    .bg--img_03
      .row.h-100.align-items-center
        .col-lg-auto
          figure(data-aos="fade-right").d-none.d-xl-block
            img(src="@/assets/curso/tema2/img1.png", alt="" style="width: 450px").m-auto
        .col-lg
          AcordionA(tipo="a" clase-tarjeta="tarjeta acordeonA")(data-aos="fade-left")
            .row(titulo="Información general").ajuste-cajaAcordion
              p Incluye los datos básicos que identifican el producto y su registro documental:
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Nombre del producto.</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Código o referencia.</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Fecha de creación y versión.</li>
              </ul>
            .row(titulo="Descripción del diseño").ajuste-cajaAcordion
              p Define visual y dimensionalmente el producto para su correcta interpretación por parte del equipo técnico: 
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Boceto o imagen del producto.</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Especificaciones de forma y dimensiones.</li>
              </ul>     
            .row(titulo="Materiales y componentes").ajuste-cajaAcordion
              p Detalla los elementos físicos que conforman el producto, tanto estructurales como decorativos:
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Tipo de materiales utilizados (cuero, tela, sintético, etc.).</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Herrajes, cremalleras, botones u otros accesorios.</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Colores y texturas.</li>
              </ul>
            .row(titulo="Técnicas de fabricación").ajuste-cajaAcordion
              p Define los procesos que se deben seguir para ensamblar las partes del producto:
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Tipo de costuras y uniones.</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Métodos de ensamblaje (pegado, cosido, termosellado, etc.).</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Tipo de curtido en caso de cuero.</li>
              </ul>
            .row(titulo="Medidas y tallas").ajuste-cajaAcordion
              p Especifica las dimensiones del producto y, si corresponde, la tabla de tallas según su aplicación:
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Dimensiones en centímetros o pulgadas.</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Tabla de tallas en caso de calzado o prendas.</li>
              </ul>
            .row(titulo="Indicaciones de uso y cuidado").ajuste-cajaAcordion
              p Proporciona instrucciones necesarias para preservar el producto y prevenir daños:
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Recomendaciones para su conservación.</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Restricciones de uso (temperaturas, humedad, exposición al sol, etc.).</li>
              </ul>
            .row(titulo="Observaciones y requisitos de calidad").ajuste-cajaAcordion
              p Incluye datos adicionales relacionados con los estándares que deben cumplirse y pruebas necesarias:
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Pruebas de resistencia o durabilidad.</li>
                <li><span class="fa-li"><i class="fas fa-cut"></i></span>Normativas aplicables.</li>
              </ul>
    
    Separador.ajustes___movil-2
    <!-- BLOQUE 2 -->
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Usos de la ficha técnica de diseño

    p.mb-5.ajustes___movil-1 La ficha técnica cumple diversas funciones clave en el ciclo de vida del producto. No solo sirve como guía para la producción, sino que también es un documento de soporte para los procesos de control de calidad y gestión comercial.

    .row.h-100.align-items-center.ajustes___movil-1
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema2/img2.svg", alt="" style="max-width: 450px").m-auto
      .col-xl.ajuste-caja-tema2(data-aos="fade-left")
        <ul class="fa-ul">
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Facilita la producción</strong>: sirve como guía clara para el equipo de fabricación.</li>
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Garantiza calidad y uniformidad</strong>: asegura que todas las piezas del producto sean fabricadas bajo los mismos estándares.</li>
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Optimiza costos y tiempos</strong>: al estandarizar el proceso, se reducen errores y retrabajos.</li>
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Sirve para cotizaciones</strong>: permite a proveedores conocer los requerimientos específicos del producto.</li>
          <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Documento de referencia</strong>: es útil en auditorías, certificaciones y control de calidad.</li>
          <li><span class="fa-li"><i class="fas fa-cut"></i></span><strong>En la industria del calzado y marroquinería</strong>: la ficha técnica es fundamental para coordinar todos los procesos desde el diseño hasta la manufactura y comercialización del producto.</li>
        </ul>

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
