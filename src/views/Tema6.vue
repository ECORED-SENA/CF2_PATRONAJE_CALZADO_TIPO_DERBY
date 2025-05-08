<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 6
      h1 Líneas y puntos básicos para el desarrollo del patronaje

    p.mb-5 Durante el modelaje del calzado, la ubicación precisa de líneas y puntos sobre la horma es crucial para lograr un patronaje técnico, anatómico y funcional. Estos elementos son comunes a todos los tipos de calzado, aunque varían en función del diseño específico.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Puntos y líneas guía en la horma

    p.mb-4.ajustes___movil-1 A continuación se presentan las principales referencias utilizadas para el trazado de patrones en la horma:

    .row.fondo-slider.mb-5
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")

          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Eje de empeine y capellada
              p.mb-0 Línea central que divide la parte frontal de la horma en dos.
            .col-xl-6
              figure
                img(src='@/assets/curso/tema6/img1.svg', alt='Dibujo lateral de una horma de zapato que resalta dos líneas curvas: el eje de capellada, que atraviesa la parte superior del empeine, y el eje de empeine, que corre paralelo un poco más arriba. ' style="max-width: 400px").m-auto

          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Puntos metatarsianos
              p.mb-0 Ubicados en los extremos internos y externos de la articulación metatarsiana, sobre la línea de plantilla.
            .col-xl-6
              figure
                img(src='@/assets/curso/tema6/img2.svg', alt='Dibujo lateral de una horma de zapato en el que se señala el punto metatarsiano exterior, ubicado en la parte inferior externa, donde la horma entra en contacto con la base. ')

          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Línea de plantilla
              p.mb-0 Es la línea que se forma con el borde de la planta de la horma.
            .col-xl-6
              figure
                img(src='@/assets/curso/tema6/img3.svg', alt='Ilustración de una horma de zapato vista en perspectiva, con líneas y puntos que indican referencias clave para el diseño del calzado: punto de entrada, punto de calzada, línea de plantilla, punto de arqueo, línea metatarsiana y punto metatarsiano. ' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Punto de altura de talón
              p.mb-4 Se mide desde la línea de plantilla hasta la parte superior del talón.
              <ul class="fa-ul">
                <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Hombre</strong>: talla + 20 mm</li>
                <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Mujer o niño</strong>: talla + 18 mm</li>
                <li class="espacio__li"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Ejemplo</strong>: Horma 40 → Hombre = 60 mm, Mujer = 58 mm</li>
              </ul>
            .col-xl-6
              figure
                img(src='@/assets/curso/tema6/img4.svg', alt='Dibujo de la parte trasera de una horma de calzado visto desde atrás, donde se indica el eje central del talón y un punto que representa la altura del talón. ' style="max-width: 400px").m-auto
    
    p.mb-5 A continuación, se presentan los elementos clave utilizados en el diseño de hormas para calzado, los cuales permiten identificar proporciones, simetrías y zonas funcionales del pie:

    .row.mb-5(data-aos="fade-up")
      .col-xl-1
      .col-xl-10
        .row
          .col-auto.estilo___caja-tema6
            h4.mb-0 Línea metatarsiana
          .col.estilo___caja-tema6-1
            p.mb-0 Conecta los puntos metatarsianos. Define la zona de flexión natural del pie.
        .row
          .col-auto.estilo___caja-tema6-2.ajuste___widht
            h4.mb-0 Punto de calzada
          .col.estilo___caja-tema6-3
            p.mb-0 Intersección entre la línea metatarsiana y el eje de empeine; divide simétricamente la horma.
        .row
          .col-auto.estilo___caja-tema6.ajuste___widht
            h4.mb-0 Punto de atraque
          .col.estilo___caja-tema6-1
            p.mb-0 Ubicado en la línea metatarsiana, se puede desplazar según el diseño.
        .row
          .col-auto.estilo___caja-tema6-2.ajuste___widht
            h4.mb-0 Punto de entrada
          .col.estilo___caja-tema6-3
            p.mb-0 Se ubica desde el punto de calzada hacia la boca, sumando a la talla de horma +28 mm (dama o niño) o +30 mm (hombre). Marca una zona de flexión entre el antepié y el resto del pie.
        .row
          .col-auto.estilo___caja-tema6.ajuste___widht-1
            h4.mb-0 Eje de talón
          .col.estilo___caja-tema6-1
            p.mb-0 Divide el talón en dos partes simétricas.

    p.mb-5 Estos elementos adicionales complementan el diseño técnico de la horma, facilitando el ajuste, la funcionalidad y la estética del calzado:

    .row
      .col-lg-auto
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Figura 13. 
          span Puntos y líneas de referencia en el diseño del corte
        figure(data-aos="fade-right")
          img.my-4.mb-4(src="@/assets/curso/tema6/img5.svg", alt="Dibujo  de una horma de calzado en vista lateral que resalta con líneas de colores las siguientes referencias: línea de profundidad, línea de chapeta, línea de entrada y línea de tobillo. " style="width: 500px").m-auto
      .col-lg.estilo___caja-tema6-3(data-aos="fade-left")
        <ul class="fa-ul">
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Línea de profundidad</strong>: conecta el punto de altura de talón con el punto de atraque o remate.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Línea de entrada</strong>: establece el límite de ingreso del pie, previniendo presiones o talles. Se traza con escuadra desde el punto de entrada hasta la plantilla.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Línea de tobillo</strong>: une el punto de entrada con la base del talón, usada para definir la curva de la boca en modelos con cordones.</li>
          <li class="mb-2"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Línea de chapeta o vena</strong>: ubicada en la parte frontal, sobre la zona de quiebre. Guía para trazado de punteras o chapetas.</li>
        </ul>
        
</template>

<script>
export default {
  name: 'Tema6',
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
