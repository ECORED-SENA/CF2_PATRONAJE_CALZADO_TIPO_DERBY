<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Materiales e insumos para calzado

    p.mb-0 Los materiales e insumos son esenciales en la fabricación de calzado, ya que determinan su calidad, resistencia, durabilidad, comodidad y presentación.  Los materiales utilizados en el calzado se pueden clasificar en cueros, sintéticos, textiles y materiales para suelas. Cada tipo presenta características específicas que influyen en el diseño y funcionalidad del producto final.

    Separador
    <!-- BLOQUE 1 -->
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Cueros
    
    .row.mb-5.align-items-center.ajustes___movil-1(data-aos="fade-right")
      .col-xl-auto
        figure.d-none.d-xl-block
          img(src="@/assets/curso/tema1/img1.png", alt="" style="max-width: 550px").m-auto
      .col-xl.caja-text-img-tema1-bloque1
        figure(data-aos="fade-up").d-none.d-xl-block.mb-2
          img(src="@/assets/curso/tema1/img2.svg", alt="" style="max-width: 77px")
        p.mb-0 El cuero es un material natural obtenido a partir de la piel de animales como bovinos, ovinos, caprinos y porcinos. Se somete a un proceso de curtido que evita su descomposición y mejora su resistencia, durabilidad y flexibilidad. Se clasifica según el tipo de curtido, el acabado superficial y la procedencia animal.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Clasificación del cuero según el tipo de curtido

    p.mb-5 El proceso de curtido define muchas de las propiedades del cuero, como su resistencia, color, textura y comportamiento frente a la humedad.

    TabsC.color-acento-contenido.mb-5
      .py-3.py-md-4(titulo="Cuero al cromo")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure(data-aos="zoom-in").d-none.d-xl-block
              img(src='@/assets/curso/tema1/img5.png', alt='').img400.m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Cuero al cromo
            p Cuero flexible y resistente, con color uniforme por el uso de sales de cromo y buena capacidad para el teñido. Se utiliza en calzado, tapicería y vestimenta.
      .py-3.py-md-4(titulo="Cuero vegetal")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure(data-aos="zoom-in").d-none.d-xl-block
              img(src='@/assets/curso/tema1/img4.png', alt='').img400.m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Cuero vegetal
            p Cuero más rígido, biodegradable y con tonos naturales. Utiliza taninos de origen vegetal. Se emplea en artículos artesanales y marroquinería.
      .py-3.py-md-4(titulo="Cuero mixto")
        .row.justify-content-center.align-items-center
          .col-xl-5.order-2.order-lg-1
            figure(data-aos="zoom-in").d-none.d-xl-block
              img(src='@/assets/curso/tema1/img6.png', alt='').img400.m-auto
          .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
            h4.txt--purpura.mb-4 Cuero mixto
            p Combina curtido al cromo y vegetal, ofreciendo resistencia mecánica y menor impacto ambiental. Se utiliza en calzado de calidad media-alta.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Curtidos alternativos

    p.mb-5 Existen métodos de curtido que evitan el uso de metales pesados, ofreciendo opciones más sostenibles o adecuadas para usos específicos.

    .row.fondo-slider.mb-5
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Curtido con aluminio (<em>Wet White</em>)
              p.mb-0 Utiliza sales de aluminio en lugar de cromo. Genera un cuero más claro, con alta capacidad de teñido. Es más ecológico que el curtido al cromo, aunque menos resistente al agua. Se usa en cuero para guantes, ropa y calzado fino.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img8.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Curtido con titanio
              p.mb-0 Emplea sales de titanio, evitando metales pesados. Más biodegradable y seguro para el ambiente. Produce un cuero suave y claro, pero con menor resistencia. Se usa en cuero para guantes, ropa y calzado fino.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img9.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Curtido con aldehídos (<em>Wet White</em>)
              p.mb-0 Utiliza glutaraldehído o formaldehído. Genera un cuero flexible y suave, aunque menos resistente. Algunas variantes eliminan el formaldehído por motivos ambientales. Se usa en interiores de automóviles y calzado.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img10.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Curtido con sílice
              p.mb-0 Usa compuestos de dióxido de silicio (SiO₂), sin metales. Es una técnica reciente y de bajo impacto ambiental. El cuero resultante es ligero y flexible. Se aplica en guantes, tapicería, marroquinería, ropa y calzado fino.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img11.svg', alt='' style="max-width: 400px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Clasificación del cuero según el acabado superficial

    p.mb-5 Los tratamientos aplicados a la superficie del cuero modifican su textura, apariencia y resistencia, y determinan su uso final.

    .row.mb-5.ajustes___movil-1
      .col-xl(data-aos="fade-down")
        TabsA.color-acento-botones.mb-4
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cuero plena flor")
            h4.mb-5 Cuero plena flor
            p.mb-0 Es la capa más superficial de la piel, sin lijado ni alteraciones. Ofrece la  mejor calidad y máxima durabilidad. Se utiliza en calzado de lujo y tapicería.
              
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cuero flor corregid")
            h4.mb-5 Cuero flor corregid
            p.mb-0 Ha sido lijado para eliminar imperfecciones y recibe un acabado artificial. Presenta una textura más uniforme. Se usa en calzado industrial y tapicería.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Gamuza o ante")
            h4.mb-5 Gamuza o ante
            p.mb-0 Presenta una textura suave y aterciopelada. Se obtiene del lado interno de la piel, usualmente de la capa media. Es común en calzado casual y de invierno.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Nobuk")
            h4.mb-5 Nobuk
            p.mb-0 Se produce lijando la capa superior del cuero. Tiene una textura similar A la gamuza, pero con mayor resistencia. Se Usa en botas y calzado elegante.

          .tarjeta.color-acento-botones--borde.p-4(titulo="Cuero charol")
            h4.mb-5 Cuero charol
            p.mb-0 Tratado con barniz o plástico para un acabado brillante. Ofrece una  apariencia llamativa y elegante. Se emplea en zapatos formales y de Fiesta.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Clasificación del cuero según la procedencia animal

    p.mb-5 La especie de origen del cuero influye en su textura, grosor, resistencia y aplicaciones específicas.

    .row.fondo-img
      .col-xl-4(data-aos="fade-right")
        figure.d-none.d-xl-block
          img(src='@/assets/curso/tema1/img12.svg', alt='' style="max-width: 350px").m-auto
      .col-xl-8(data-aos="fade-left")
        SlyderF(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img13.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cuero vacuno
            p.mb-0 Cuero resistente, de grosor medio a grueso. Fácil de trabajar y ampliamente disponible. Se usa en calzado, marroquinería y tapicería.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img14.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cuero ovino (cordero)
            p.mb-0 Suave, ligero y flexible, con textura fina. Se utiliza principalmente en vestimenta y forros de calzado.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img15.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cuero caprino (cabra)
            p.mb-0 Fino, resistente y con textura granulada característica. Más compacto que el ovino. Se emplea en calzado de alta calidad y guantes.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img16.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cuero porcino
            p.mb-0 Grueso, con poros visibles. Económico, aunque menos estético. Se usa en forros de calzado y guantes.
          .tarjeta.color-acento-botones.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/tema1/img17.svg' style="max-width: 90px").m-auto
            h4.mb-3.estilo-text Cuero exótico (cocodrilo, serpiente, avestruz)
            p.mb-0 Presenta texturas únicas, patrones naturales llamativos y alto costo. Se utiliza en calzado de lujo y bolsos exclusivos.
      Separador
      <!-- BLOQUE 2 -->
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Sintéticos
    
    p.mb-5.ajustes___movil-1 Los materiales sintéticos son compuestos desarrollados artificialmente, principalmente a partir de derivados del petróleo y polímeros. Han sido diseñados para imitar o incluso mejorar las propiedades de los materiales naturales como el cuero y los textiles. En la industria del calzado, su uso es ampliamente extendido gracias a su bajo costo, alta versatilidad, resistencia a la humedad, durabilidad y facilidad de limpieza. Su clasificación puede hacerse según su composición química o según su estructura y aplicación específica en el calzado.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Clasificación de los materiales sintéticos según su composición

    p.mb-5 Esta categoría se refiere al tipo de polímero o compuesto base del que está hecho el material sintético. Las propiedades físicas y funcionales dependen directamente de estos componentes.

    .row.fondo-slider.mb-5
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Poliuretano (PU)
              p.mb-0 Material ligero, flexible y resistente al agua y al desgaste. Imita la textura del cuero y es fácil de moldear y teñir. Se utiliza como sustituto del cuero en calzado, bolsos y chaquetas.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img18.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Policloruro de vinilo (PVC)
              p.mb-0 Impermeable, económico y muy resistente, aunque con poca transpirabilidad. Puede ser rígido o flexible. Se emplea en botas de lluvia, calzado industrial, suelas y partes estructurales del calzado.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img19.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Etilvinilacetato (EVA)
              p.mb-0 Espumoso, muy ligero y flexible, con excelente amortiguación y resistencia a impactos. Se usa en plantillas, suelas de calzado deportivo y calzado casual.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img20.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Nylon y poliéster
              p.mb-0 Alta resistencia a la tensión y al desgaste, se secan rápidamente y permiten transpiración. Se utilizan en tejidos para zapatillas deportivas, forros internos y refuerzos.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img21.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Microfibra sintética
              p.mb-0 Textura similar al cuero natural, duradera, ligera y transpirable. Se usa en calzado deportivo y de lujo como alternativa sin origen animal.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img22.svg', alt='' style="max-width: 400px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Clasificación de los materiales sintéticos según su estructura y aplicación en el calzado

    p.mb-5 En la industria del calzado, los materiales sintéticos han ganado protagonismo gracias a su versatilidad, resistencia y adaptabilidad a diferentes estilos y necesidades. Pero no todos los materiales sintéticos son iguales. Su estructura y la función que cumplen dentro del zapato marcan la diferencia. A continuación, se presenta cómo se clasifican según su forma y aplicación.

    .row.justify-content-center(data-aos="fade-down")
      .estilo-caja-1
        .row.align-items-center
          .col-xl-auto
            figure.d-none.d-xl-block
              img.img-tema1-bloque5(src="@/assets/curso/tema1/img23.svg" style="max-width: 270px").m-auto
          .col-xl
            h4 ¿Sabías qué?
            p Lo invitamos a escuchar el siguiente <em>Podcast</em>:
            TarjetaAudio.color-secundario.mb-3(
              texto="Clasificación de los materiales sintéticos según su estructura y aplicación en el calzado."
              :audio="require('@/assets/componentes/audios/Podcast CF2 Patronaje de calzado tipo Oxford y Derby.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false")

    Separador
    <!-- BLOQUE 3 -->
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Textiles

    p Los textiles utilizados en la fabricación de calzado son materiales formados por fibras entrelazadas, ya sean naturales o sintéticas. Se caracterizan por su flexibilidad, ligereza, transpirabilidad y adaptabilidad al movimiento. Son ideales para calzado deportivo, casual y de verano, ya que permiten una buena ventilación y comodidad durante su uso prolongado.
    p.mb-5 La clasificación de los textiles en el calzado se realiza principalmente en función del origen de las fibras con las que se elaboran: naturales o sintéticas.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Textiles de fibras naturales

    p.mb-5 Estas fibras provienen de fuentes vegetales o animales y se caracterizan por su suavidad, capacidad de absorción de humedad, transpirabilidad y confort. Son biodegradables y utilizadas comúnmente en calzado artesanal o de verano.

    .row.mb-5
      .col-xl-auto(data-aos="fade-up")
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 1. 
          span Textiles de fibras naturales
        .tabla-a.mb-4(data-aos="fade-up")
          table
            thead
              tr
                th.ajuste-border-tabla Concepto
                th.ajuste-border-tabla Concepto
                th.ajuste-border-tabla Concepto
                th Valor
            tbody
              tr
                td.ajuste-border-tabla <strong>Algodón</strong>
                td.ajuste-border-tabla.texto-left Vegetal (planta de algodón)
                td.ajuste-border-tabla.texto-left Es una fibra suave al tacto, altamente absorbente, transpirable e hipoalergénica. Tiene buena resistencia al lavado y es cómoda para el contacto directo con la piel.
                td.texto-left Se emplea en forros internos, plantillas y la parte superior de zapatillas ligeras o calzado casual.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla <strong>Lino</strong>
                td.ajuste-border-tabla.texto-left Vegetal (tallo de lino)
                td.ajuste-border-tabla.texto-left Es una fibra fuerte, fresca al tacto, ligera y biodegradable. Posee propiedades antibacterianas y excelente capacidad de absorción de humedad.
                td.texto-left Se utiliza en alpargatas, sandalias y calzado de verano por su frescura y textura natural.
              tr
                td.ajuste-border-tabla <strong>Lana</strong>
                td.ajuste-border-tabla.texto-left Animal (ovejas, alpacas)
                td.ajuste-border-tabla.texto-left Actúa como aislante térmico natural. Es flexible, elástica, y tiene la capacidad de absorber la humedad sin perder la sensación de calor.
                td.texto-left Se emplea en botas de invierno, pantuflas y zapatillas térmicas.
              tr.ajuste-color-tabla
                td.ajuste-border-tabla <strong>Seda</strong>
                td.ajuste-border-tabla.texto-left Animal (gusano de seda)
                td.ajuste-border-tabla.texto-left Es una fibra suave, brillante y delicada. Tiene una alta resistencia a la tracción y una textura lujosa, aunque es costosa y requiere cuidados especiales.
                td.texto-left Se utiliza en calzado de lujo y como detalle decorativo en diseños especiales.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Textiles de fibras sintéticas

    p.mb-5 Estas fibras se producen mediante procesos químicos y polímeros derivados del petróleo. Suelen ser más resistentes, duraderas y fáciles de mantener que las fibras naturales, además de tener un costo menor.

    .row.fondo-slider
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Poliéster
              p.mb-0 Fibra ligera, resistente a la tracción y al desgaste. Se seca rápido, no absorbe humedad y conserva su forma. Se utiliza en zapatillas deportivas, forros interiores, tejidos transpirables y mallas técnicas.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img24.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Nylon
              p.mb-0 Muy fuerte y resistente a la abrasión, estiramiento y deformación. Suave y duradera. Se emplea en tenis deportivos, refuerzos laterales, forros internos y mallas transpirables.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img25.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Elastano (<em>Lycra</em> o <em>Spandex</em>)
              p.mb-0 Alta elasticidad, adaptable al movimiento y resistente al sudor y la deformación. Aporta ajuste al calzado. Se usa en zapatillas deportivas y tejidos que requieren ajuste, como botines deportivos o interiores elásticos.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img26.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Acrílico
              p.mb-0 Fibra sintética suave, con tacto similar a la lana. Resiste la exposición solar y es térmica. Se emplea en botas de invierno, tejidos térmicos y calzado para climas fríos.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img27.svg', alt='' style="max-width: 400px").m-auto

    Separador
    <!-- BLOQUE 4 -->
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Suelas

    p.mb-5.ajustes___movil-1 Las suelas son una de las partes más importantes del calzado, ya que están en contacto directo con el suelo y cumplen funciones clave como proporcionar tracción, soporte, estabilidad y amortiguación. El material con el que se fabrican las suelas influye directamente en el rendimiento, la durabilidad, el peso y la comodidad del calzado. A continuación, se describen los materiales más utilizados en su fabricación, cada uno con sus características particulares y aplicaciones específicas.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Materiales comunes utilizados en suelas

    p.mb-5 Esta clasificación incluye los materiales más empleados en la fabricación de suelas, abarcando tanto compuestos naturales como sintéticos. Cada material se selecciona en función del tipo de calzado, el entorno de uso y las necesidades del usuario.

    .row.fondo-slider
      .ajuste-slider(data-aos="fade-up")
        SlyderA(tipo="b")
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Caucho
              p.mb-0 Es un material natural o sintético altamente resistente al desgaste y con excelentes propiedades antideslizantes. Tiene buena flexibilidad y amortiguación. Se comporta bien en condiciones húmedas o terrenos irregulares.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img28.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 EVA (etilvinilacetato)
              p.mb-0 Es una espuma ligera, flexible y con gran capacidad de absorción de impactos. Ofrece suavidad al andar y reduce la fatiga. Es resistente al agua y de bajo peso.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img29.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Poliuretano
              p.mb-0 Es un material sintético muy duradero, elástico y resistente a la abrasión. Tiene una buena capacidad de amortiguación y conserva su forma con el uso prolongado. Puede ser rígido o expandido.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img30.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 TR (termoplástico)
              p.mb-0 Es un material termoplástico con buena resistencia al desgaste, flexibilidad y apariencia estética. Permite diseños detallados y colores variados.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img31.svg', alt='' style="max-width: 400px").m-auto
          .row.h-100.justify-content-center.align-items-center
            .col-xl-6.mb-4.col-xs-12
              h4.mb-4 Cuero
              p.mb-0 Aunque es menos común hoy en día, el cuero aún se emplea en suelas por su apariencia sofisticada, transpirabilidad y resistencia moderada. Ofrece un andar natural y elegante.
            .col-xl-6
              figure.d-none.d-xl-block
                img(src='@/assets/curso/tema1/img32.svg', alt='' style="max-width: 400px").m-auto
 
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
