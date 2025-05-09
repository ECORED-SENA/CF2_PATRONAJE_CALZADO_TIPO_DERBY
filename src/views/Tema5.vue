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

    .row.h-100.align-items-center.ajustes___movil-1.mb-5
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
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Proceso de enmascarado de la horma
    
    p.mb-4 Antes de iniciar el proceso de enmascarado, es esencial marcar los puntos centrales de la horma, ya que estos constituyen la base para el patronaje. Para ello, se emplea una regla o cinta métrica con el fin de medir y señalar el centro de la horma en la cara plantar, tanto en la punta como en el talón, repitiendo el mismo procedimiento en la mesa de la horma.

    .row.align-items-center.mb-5
      .col-xl
        p Existen diversas formas de obtener la copia de la horma; una de las más precisas y ampliamente utilizadas consiste en enmascararla o forrarla con papel o cinta para llevarla a un sistema plano. El enmascarado es el primer paso del proceso de patronaje. Consiste en cubrir de forma uniforme la superficie de la horma con cinta adhesiva para trazar sobre ella el diseño del zapato. Luego, esta capa se retira fácilmente y se transfiere al papel, lo que permite convertir el diseño tridimensional en uno plano de manera ágil y precisa.
        p.mb-0 En caso de que la horma sea simétrica en la punta, algunos patronistas enmascaran únicamente la cara exterior. No obstante, para lograr una mayor precisión en los moldes, se recomienda realizar el enmascarado en ambas caras de la horma.
      .col-xl-auto.ajustes___movil-3
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-up")
          h5 Figura 14. 
          span Marcación de los puntos centrales en la horma
        figure(data-aos="fade-left")
          img(src="@/assets/curso/tema5/img10.png", alt="Marcación del centro en la punta y el talón de la horma usando una regla como guía." style="max-width: 500px").m-auto
    
    .row
      .col-lg-1
      .col-lg-10.estilo_caja_8
        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta.ajuste__li_1
              span 1
            | Para comenzar este procedimiento, se utiliza cinta de enmascarar. El primer paso consiste en colocar una tira de cinta en el centro del empeine y otra en el centro del talón, tal como se indica en la siguiente figura.
        .row.mb-3
          .col-lg-2
          .col-lg-8(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 15. 
              span Aplicación de la primera tira de cinta en la horma
            figure
              img(src="@/assets/curso/tema5/img11.png", alt="Colocación de una tira de cinta de enmascarar desde el centro del talón hasta la punta del empeine para iniciar el proceso de enmascarado. " style="max-width: 500px")
        
        .row.mb-5(data-aos="fade-up")
          .col-lg-1
          .col-lg-10
            .row.align-items-center.estilo_caja_9
              .col-lg-auto
                figure.d-none.d-xl-block
                  img(src="@/assets/curso/tema5/img12.svg", alt="" style="max-width: 70px").m-auto
              .col-lg
                p.mb-0 <strong>Nota:</strong> es importante mantener siempre visibles los puntos centrales para evitar que se pierdan al colocar la cinta.

        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta.ajuste__li_1
              span 2
            | A continuación, se coloca una cinta de refuerzo aproximadamente a la altura de la línea de profundidad en ambas caras de la horma. Luego, se aplica otra cinta sobre la línea de plantilla, rodeando el contorno de la horma. Esta debe quedar colocada de modo que una mitad cubra el perfil lateral y la otra se doble hacia la cara plantar.
        .row.mb-5
          .col-lg-2
          .col-lg-8(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 16. 
              span Refuerzo del enmascarado en el empeine y lateral
            figure
              img(src="@/assets/curso/tema5/img13.png", alt="Aplicación de cintas adicionales en el empeine y el lateral de la horma para reforzar el enmascarado y cubrir uniformemente la superficie. " style="max-width: 500px")

        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta.ajuste__li_1
              span 3
            | Para continuar con el proceso de enmascarado, se deben colocar tiras de cinta en los laterales y la parte posterior de la horma. Estas franjas deben ubicarse de manera paralela a la cinta de refuerzo previamente colocada, es decir, siguiendo la línea de profundidad, extendiéndose tanto hacia arriba como hacia abajo desde dicha cinta de refuerzo, como se ilustra en la siguiente imagen.
        .row.mb-5
          .col-lg-2
          .col-lg-8(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 17. 
              span Cobertura lateral completa de la horma
            figure
              img(src="@/assets/curso/tema5/img14.png", alt="Enmascarado completo de ambos laterales de la horma con tiras de cinta superpuestas que aseguran una cobertura uniforme para el patronaje. " style="max-width: 500px")

        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta.ajuste__li_1
              span 4
            | Posteriormente, se aplican tiras de cinta de forma perpendicular al eje del empeine, cubriendo desde la punta hasta la parte superior de este. Para garantizar un enmascarado uniforme, cada tira debe superponerse a la mitad de la anterior. Esta operación se muestra en la siguiente imagen.
        .row.mb-5
          .col-lg-2
          .col-lg-8(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 18. 
              span 
            figure
              img(src="@/assets/curso/tema5/img15.png", alt="" style="max-width: 500px")

        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta.ajuste__li_1
              span 5
            | A continuación, se coloca una cinta de refuerzo a lo largo del borde de la mesa y en el borde de la línea de plantilla. Luego, se marcan los bordes con un lápiz y se recorta el exceso de cinta tanto en la mesa como en la línea de plantilla de la horma.
        .row.mb-5
          .col-lg-2
          .col-lg-8(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 19. 
              span 
            figure
              img(src="@/assets/curso/tema5/img16.png", alt="" style="max-width: 500px")

        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta.ajuste__li_1
              span 6
            | Para marcar los ejes sobre la horma, tomamos una tira de cinta y la colocamos sobre la tabla de corte. Con un esfero, trazamos una línea recta en el centro de la cinta. Es importante destacar que esta tira debe ser lo suficientemente larga para cubrir tanto el empeine como el talón, ya que servirá como referencia para marcar los ejes de simetría. Este procedimiento se ilustra en la siguiente imagen.
        .row.mb-5
          .col-lg-2
          .col-lg-8(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 20. 
              span Cinta de enmascarar para refuerzo
            figure
              img(src="@/assets/curso/tema5/img17.png", alt="Tira de cinta de enmascarar recortada y alineada sobre una superficie de corte, lista para ser aplicada sobre la horma. " style="max-width: 500px")

        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta.ajuste__li_1
              span 7
            | Una vez dibujada la línea sobre la cinta, tomamos la horma y alineamos el eje marcado con los puntos medios del empeine previamente determinados. Del mismo modo, repetimos el proceso en el talón, como se muestra en la siguiente imagen.
        .row.mb-5
          .col-lg-2
          .col-lg-8(data-aos="fade-up")
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 21. 
              span Horma completamente enmascarada
            figure
              img(src="@/assets/curso/tema5/img18.png", alt="Vista superior de la horma con cobertura total de cinta de enmascarar, lista para el trazado del diseño del calzado. " style="max-width: 500px")
        
        ol.lista-ol--cuadro.mb-4
          li
            .lista-ol--cuadro__vineta.ajuste__li_1
              span 8
            | Por último se refilan los sobrantes de cinta y se realiza un corte por los ejes obtenidos, es decir el eje del empeine y del talón.
        .row
          .col-lg-2
          .col-lg-8(data-aos="fade-right")
            .titulo-sexto.color-acento-contenido.mb-3
              h5 Figura 22. 
              span Horma enmascarada con línea central marcada
            figure
              img(src="@/assets/curso/tema5/img19.png", alt="Horma completamente cubierta con cinta de enmascarar y línea central trazada sobre la superficie para guiar el diseño del patrón. " style="max-width: 500px")
        
          
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
