<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Sistemas de medidas de calzado

    p La industria del calzado cuenta con distintos sistemas de medidas para determinar la longitud y el volumen del pie, así como las dimensiones de las hormas utilizadas en el proceso de fabricación. Estos sistemas varían según la región del mundo y responden a estándares técnicos específicos. El largo del pie se mide desde el punto más sobresaliente del talón hasta el extremo del dedo más largo.

    Separador
    <!-- BLOQUE 1 -->
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Principales sistemas de numeración de calzado

    p.mb-5.ajustes___movil-1 A nivel mundial existen varios sistemas para establecer tallas de calzado. A continuación se describen los principales, junto con sus características, bases de medida y diferencias.

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Sistemas métrico - <em>Mondopoint</em>

    p.mb-5 Este sistema fue estandarizado por el Instituto Colombiano de Normas Técnicas (ICONTEC) mediante la norma 1639.

    .row.mb-5.align-items-center.ajustes___movil-1
      .col-xl
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3 Uso
            p.mb-0.estilo-text-tema3_1.ajuste___5 Internacional, principalmente en calzado militar, deportivo y técnico.
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___1 Medida base
            p.mb-0.estilo-text-tema3_1.ajuste___4.ajuste___movil_tema3 Longitud del pie en milímetros.
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___2 Características
            p.mb-0.estilo-text-tema3_1 Se basa en la medida real del pie. Puede incluir también el ancho (Por ejemplo 260/100 indica 260 mm de largo y 100 mm de ancho). Recomendado por la Organización Internacional de Normalización(150). 
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___3 Diferencias
            p.mb-0.estilo-text-tema3_1 Es el sistema más preciso, pero menos usado en el comercio minorista.No depende del diseño del zapato.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/img1.svg", alt="" style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Sistema europeo o francés (EU o Paris <em>Point</em>)

    p.mb-5 Este sistema es ampliamente utilizado en Europa y otras regiones.

    .row.mb-5.align-items-center.ajustes___movil-1
      .col-xl
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_1 Uso
            p.mb-0.estilo-text-tema3_1.ajuste___6.ajuste___9.ajuste___color_2 Europa y gran parte del mundo.
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___7.ajuste___10.ajuste___color_1 Medida base
            p.mb-0.estilo-text-tema3_1.ajuste___8.ajuste___color_2 Longitud de la horma en puntos franceses (1 punto= 6.66 mm).
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___2.ajuste___color_1 Características
            p.mb-0.estilo-text-tema3_1.ajuste___color_2 Mide la longitud de la horma, no del pie. No diferencia entre tallas de hombres, mujeres y niños. No contempla el ancho del pie. 
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___3.ajuste___color_1 Diferencias
            p.mb-0.estilo-text-tema3_1.ajuste___color_2 El incremento entre tallas es de 6.66 mm. Es el sistema más común entre marcas europeas.
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/img2.svg", alt="" style="max-width: 500px").m-auto

    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Sistema inglés (UK)

    p.mb-5 Se utiliza principalmente en el Reino Unido y países de la <em>Commonwealth</em>.

    .row.mb-5.align-items-center.ajustes___movil-1
      .col-xl
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_3 Uso
            p.mb-0.estilo-text-tema3_1.ajuste___color_4.ajuste___11.ajuste___14 Reino Unido, India, países de la <em>Commowealth</em>.
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_3.ajuste___12 Medida base
            p.mb-0.estilo-text-tema3_1.ajuste___color_4.ajuste___13.ajuste___15 Longitud de la horma en pulgadas.
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_3.ajuste___2 Características
            p.mb-0.estilo-text-tema3_1.ajuste___color_4 Similar al sistema estadounidense, pero con punto de inicio distinto. Usa 4 pulgadas como referencia para la talla 0. Incremento entre tallas de 1/3 de pulgada (8.46mm).
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_3.ajuste___3 Diferencias
            p.mb-0.estilo-text-tema3_1.ajuste___color_4 Las tallas UK son una unidad menos que las tallas US ( ejemplo: UK8= US 9). Tiene menos variación entre tallas masculinas y femeninas. 
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/img3.svg", alt="" style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Sistema americano y canadiense (US/CA)

    p.mb-5 Utilizado en Estados Unidos y Canadá, tiene diferencias notables respecto al sistema inglés.

    .row.align-items-center.ajustes___movil-1
      .col-xl
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_5 Uso
            p.mb-0.estilo-text-tema3_1.ajuste___color_6.ajuste___16.ajuste___17 Estados Unidos y Canadá.
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_5.ajuste___12 Medida base
            p.mb-0.estilo-text-tema3_1.ajuste___color_6.ajuste___13.ajuste___15 Longitud de la horma en pulgadas.
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_5.ajuste___2 Características
            p.mb-0.estilo-text-tema3_1.ajuste___color_6 Existen tallas separadas para hombres, mujeres y niños. Se basa en sistemas inglés, pero inicia 2,116mm antes. Incremento entre tallas: 1/3 de pulgadas (8.46mm).
        .row.align-items-center.mb-3(data-aos="fade-right")
          .col-lg-auto.d-flex
            p.mb-0.estilo-text-tema3.ajuste___color_5.ajuste___3 Diferencias
            p.mb-0.estilo-text-tema3_1.ajuste___color_6 Para hombres, la talla 0 equivale a 7 2 /3 pulgadas. Para mujeres, las Tallas son 1.5 unidades más altas que en hombres (Ejemplo: us 9.5W)
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/img4.svg", alt="" style="max-width: 500px").m-auto

    Separador
    <!-- BLOQUE 2 -->
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Conversión básica entre sistemas

    p.mb-5.ajustes___movil-1 Existen fórmulas que permiten convertir tallas entre los distintos sistemas. Las siguientes equivalencias son aproximadas y pueden variar según el fabricante.

    .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
      h5 Tabla 2. 
      span Conversión de tallas de calzado

    .row.mb-4.align-items-center
      .col-xl
        .row
          .col-lg-6
            .tabla-a.mb-4.ajuste___tabla_3(data-aos="fade-right")
              table
                thead
                  tr
                    th.ajuste-border-tabla Conversión
                    th Fórmula
                tbody
                  tr
                    td.ajuste-border-tabla.texto-left <strong>EU a US (Hombres)</strong>
                    td.texto-left EU - 33 = US
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left <strong>EU a US (Mujeres)</strong>
                    td.texto-left EU - 31 = US
                  tr
                    td.ajuste-border-tabla.texto-left <strong>US a UK</strong>
                    td.texto-left US - 1 = UK
                  tr.ajuste-color-tabla
                    td.ajuste-border-tabla.texto-left <strong>Mondopoint a EU</strong>
                    td.texto-left <em>Mondopoint</em> ÷ 6.66 = EU
          .col-lg.ajuste___caja_3(data-aos="fade-up").h-100
            h4.mb-3.estilo-h4____3 Ejemplos
            <ul class="fa-ul">
              <li class="mb-3"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Talla EU 42 ≈ US 9 (Hombres) / US 10.5 (Mujeres) / UK 8.</strong></li>
              <li><span class="fa-li"><i class="fas fa-cut"></i></span><strong><em>Mondopoint</em> 270 mm ≈ EU 42.</strong></li>
            </ul>
      .col-xl-auto
        figure(data-aos="fade-left").d-none.d-xl-block
          img(src="@/assets/curso/tema3/img5.png", alt="" style="max-width: 300px").m-auto

    .row
      .col-xl-1
      .col-xl-10
        p.mb-5 Para mayor precisión, se recomienda utilizar las tablas oficiales proporcionadas por cada marca, ya que la horma puede variar entre fabricantes. Además, no solo debe considerarse la longitud, sino también el ajuste general del calzado, sobre todo en modelos deportivos o de seguridad.
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Tabla 3. 
          span Tabla de equivalencias de sistemas de unidades
        .tabla-a.mb-4.ajuste--text(data-aos="fade-up")
          table
            thead
              tr
                th.ajuste-border-tabla Sistema métrico (cm)
                th.ajuste-border-tabla Talla francesa (EU)
                th Talla inglesa / estadounidense (UK / US)
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 22
                td.ajuste-border-tabla 33
                td 1 - 1½
              tr
                td.ajuste-border-tabla 23
                td.ajuste-border-tabla 34
                td 2 - 2½
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 24
                td.ajuste-border-tabla 35
                td 3 - 3½
              tr
                td.ajuste-border-tabla 25
                td.ajuste-border-tabla 36
                td 4 - 4½
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 26
                td.ajuste-border-tabla 37
                td 5 - 5½
              tr
                td.ajuste-border-tabla 27
                td.ajuste-border-tabla 38
                td 6 - 6½
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 28
                td.ajuste-border-tabla 39
                td 7 - 7½
              tr
                td.ajuste-border-tabla 29
                td.ajuste-border-tabla 40
                td 8 - 8½
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 30
                td.ajuste-border-tabla 41
                td 9 - 9½
              tr
                td.ajuste-border-tabla 31
                td.ajuste-border-tabla 42
                td 10 - 10½
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 32
                td.ajuste-border-tabla 43
                td 11 - 11½
              tr
                td.ajuste-border-tabla 33
                td.ajuste-border-tabla 44
                td 12 - 12½
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 34
                td.ajuste-border-tabla 45
                td 13 - 13½
              tr
                td.ajuste-border-tabla 35
                td.ajuste-border-tabla 46
                td 14 - 14½
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 36
                td.ajuste-border-tabla 47
                td 15 - 15½

    Separador
    <!-- BLOQUE 3 -->
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.3 Medida de ancho o volumen del pie

    p.mb-5.ajustes___movil-1 Además de la longitud, el ancho del pie es determinante para lograr un ajuste adecuado. Las diferencias morfológicas entre personas requieren medidas adicionales para asegurar <em>confort</em>, soporte y funcionalidad, especialmente en calzado técnico. Las tres medidas más empleadas para el modelaje de calzado son:

    .row.mb-5
      .col-xl-3
      .col-xl-6
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Figura 1. 
          span Zonas anatómicas del pie utilizadas en el diseño de la horma
        figure(data-aos="fade-up")
          img(src="@/assets/curso/tema3/img6.svg", alt="Diagrama del contorno de un pie con líneas y flechas que indican tres zonas: metatarsos (zona delantera), empeine (zona media elevada) y entrada (zona trasera donde el pie entra al calzado). " style="max-width: 500px").m-auto
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Perímetro del pie

    p.mb-1.ajustes___movil-1 Esta medida se toma rodeando la zona más ancha del pie (metatarsos). Permite establecer el ancho base a partir de la longitud total del pie. 
    h4.mb-4 La fórmula más utilizada es:

    .row.mb-5
      .col-xl-3
      .col-xl-6
        .row.align-items-center.estilo___caja-tema3-1(data-aos="fade-up")
          .col-xl-auto
            figure.d-none.d-xl-block
              img(src="@/assets/curso/tema3/img7.svg", alt="" style="max-width: 40px").m-auto
          .col-xl
            h4.mb-0 Ancho base metatarsiano = 5/6 del largo del pie

    p.mb-5.ajustes___movil-1 Esta medida varía según el público objetivo:

    .row.mb-5.ajustes___movil-1
      .col-xl-3
      .col-xl-6
        .row.align-items-center(data-aos="fade-up")
          .col-lg-4
            h4.mb-0.estilo___caja_1 Dama
            p.mb-0.estilo___caja_2 4.5 mm
          .col-lg-4
            h4.mb-0.estilo___caja_1.ajuste___color_caja-1 Niño
            p.mb-0.estilo___caja_2.ajuste___color_caja-3 4.8 mm
          .col-lg-4
            h4.mb-0.estilo___caja_1.ajuste___color_caja-2 Hombre
            p.mb-0.estilo___caja_2.ajuste___color_caja-4 5.0 mm
    
    .row.mb-5.align-items-center.ajustes___movil-1
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema3/img8.png", alt="" style="max-width: 450px").m-auto
      .col-xl.estilo___caja_tema3_2(data-aos="fade-left")
        h4.mb-2.estilo-h4____3_1 Ejemplo:
        p.mb-2 Para una talla 39 (259.74 mm de largo), el ancho base sería:
        h4.mb-2 259.74 x 5/6 = 216.4 mm
        p.mb-2 Anchos más comunes en Colombia:
        <ul class="fa-ul">
          <li class="mb-1"><span class="fa-li"><i class="fas fa-cut"></i></span>Hombre: 6 y 7</li>
          <li class="mb-1"><span class="fa-li"><i class="fas fa-cut"></i></span>Dama: 4 y 5</li>
          <li><span class="fa-li"><i class="fas fa-cut"></i></span>Niño: 3, 4 y 5</li>
        </ul>
    
    p.mb-5.ajustes___movil-1 Esta tabla indica el largo y los valores correspondientes a cada nivel de ancho desde la base C (o 1) hasta el ancho K:

    .row.mb-5.ajustes___movil-1
      .col-xl-auto
        .titulo-sexto.color-acento-contenido.mb-3(data-aos="fade-right")
          h5 Tabla 4. 
          span Anchos para el sistema europeo o francés
        .tabla-a.mb-4.ajuste--text.ajuste___tabla_4(data-aos="fade-up")
          table
            thead
              tr
                th.ajuste-border-tabla Talla
                th.ajuste-border-tabla Largo (mm)
                th.ajuste-border-tabla C o 1
                th.ajuste-border-tabla D
                th.ajuste-border-tabla E
                th.ajuste-border-tabla F
                th.ajuste-border-tabla G
                th.ajuste-border-tabla H
                th.ajuste-border-tabla I
                th.ajuste-border-tabla J
                th.ajuste-border-tabla K
                th L
            tbody
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 36
                td.ajuste-border-tabla 239.8
                td.ajuste-border-tabla 199.8
                td.ajuste-border-tabla 204.8
                td.ajuste-border-tabla 209.8
                td.ajuste-border-tabla 214.8
                td.ajuste-border-tabla 219.8
                td.ajuste-border-tabla 224.8
                td.ajuste-border-tabla 229.8
                td.ajuste-border-tabla 234.8
                td.ajuste-border-tabla 239.8
                td 244.8
              tr
                td.ajuste-border-tabla 37
                td.ajuste-border-tabla 246.4
                td.ajuste-border-tabla 205.3
                td.ajuste-border-tabla 210.3
                td.ajuste-border-tabla 215.3
                td.ajuste-border-tabla 220.3
                td.ajuste-border-tabla 225.3
                td.ajuste-border-tabla 230.3
                td.ajuste-border-tabla 235.3
                td.ajuste-border-tabla 240.3
                td.ajuste-border-tabla 245.3
                td 250.3
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 38
                td.ajuste-border-tabla 253.1
                td.ajuste-border-tabla 210.9
                td.ajuste-border-tabla 215.9
                td.ajuste-border-tabla 220.9
                td.ajuste-border-tabla 225.9
                td.ajuste-border-tabla 230.9
                td.ajuste-border-tabla 235.9
                td.ajuste-border-tabla 240.9
                td.ajuste-border-tabla 245.9
                td.ajuste-border-tabla 250.9
                td 255.9
              tr
                td.ajuste-border-tabla 39
                td.ajuste-border-tabla 259.7
                td.ajuste-border-tabla 216.4
                td.ajuste-border-tabla 221.4
                td.ajuste-border-tabla 226.4
                td.ajuste-border-tabla 231.4
                td.ajuste-border-tabla 236.4
                td.ajuste-border-tabla 241.4
                td.ajuste-border-tabla 246.4
                td.ajuste-border-tabla 251.4
                td.ajuste-border-tabla 256.4
                td 261.4
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 40
                td.ajuste-border-tabla 266.4
                td.ajuste-border-tabla 222.0
                td.ajuste-border-tabla 227.0
                td.ajuste-border-tabla 232.0
                td.ajuste-border-tabla 237.0
                td.ajuste-border-tabla 242.0
                td.ajuste-border-tabla 247.0
                td.ajuste-border-tabla 252.0
                td.ajuste-border-tabla 257.0
                td.ajuste-border-tabla 262.0
                td 267.0
              tr
                td.ajuste-border-tabla 41
                td.ajuste-border-tabla 273.1
                td.ajuste-border-tabla 227.5
                td.ajuste-border-tabla 232.5
                td.ajuste-border-tabla 237.5
                td.ajuste-border-tabla 242.5
                td.ajuste-border-tabla 247.5
                td.ajuste-border-tabla 252.5
                td.ajuste-border-tabla 257.5
                td.ajuste-border-tabla 262.5
                td.ajuste-border-tabla 267.5
                td 272.5
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 42
                td.ajuste-border-tabla 279.7
                td.ajuste-border-tabla 233.1
                td.ajuste-border-tabla 238.1
                td.ajuste-border-tabla 243.1
                td.ajuste-border-tabla 248.1
                td.ajuste-border-tabla 253.1
                td.ajuste-border-tabla 258.1
                td.ajuste-border-tabla 263.1
                td.ajuste-border-tabla 268.1
                td.ajuste-border-tabla 273.1
                td 278.1
              tr
                td.ajuste-border-tabla 43
                td.ajuste-border-tabla 286.4
                td.ajuste-border-tabla 238.65
                td.ajuste-border-tabla 243.65
                td.ajuste-border-tabla 248.65
                td.ajuste-border-tabla 253.65
                td.ajuste-border-tabla 258.65
                td.ajuste-border-tabla 263.65
                td.ajuste-border-tabla 268.65
                td.ajuste-border-tabla 273.65
                td.ajuste-border-tabla 278.65
                td 283.65
              tr.ajuste-color-tabla
                td.ajuste-border-tabla 44
                td.ajuste-border-tabla 293.0
                td.ajuste-border-tabla 244.2
                td.ajuste-border-tabla 249.2
                td.ajuste-border-tabla 254.2
                td.ajuste-border-tabla 259.2
                td.ajuste-border-tabla 264.2
                td.ajuste-border-tabla 269.2
                td.ajuste-border-tabla 274.2
                td.ajuste-border-tabla 279.2
                td.ajuste-border-tabla 284.2
                td 289.2
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Perímetro de empeine

    p.mb-4.ajustes___movil-1 Esta medida se obtiene pasando la cinta métrica por el centro del arco interno y sobre el dorso del empeine. Determina el tipo de ajuste que requiere el calzado.

    .row.mb-5.align-items-center
      .col-xl-auto
        figure(data-aos="fade-right").d-none.d-xl-block
          img(src="@/assets/curso/tema3/img9.png", alt="" style="max-width: 450px").m-auto
      .col-xl.estilo___caja_tema3_3(data-aos="fade-left")
        <ul class="fa-ul">
          <li class="mb-4"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Empeine alto</strong>: requiere modelos con entrada amplia, cordones o elásticos.</li>
          <li class="mb-4"><span class="fa-li"><i class="fas fa-cut"></i></span><strong>Empeine bajo</strong>: puede causar holgura en la parte superior del calzado.</li>
        </ul>
        p.mb-0 Es fundamental en calzado deportivo, ortopédico y botas de seguridad, donde el ajuste del empeine influye en la comodidad y la estabilidad del pie.
    
    .caja-titulos-tercer-nivel.mb-5(data-aos="fade-right")
      .col-lg-auto
        figure
          img(src="@/assets/curso/tema1/img3.svg" style="max-width: 55px").m-auto
      .col
        h3 Perímetro de entrada

    p.mb-3.ajustes___movil-1 Corresponde a la medida de la apertura del calzado. Esta dimensión influye directamente en la facilidad para calzarse y en la seguridad del ajuste.

    .row
      .col-lg-3
      .col-lg-6
        .row.justify-content-center
          .col-lg-6.estilo___caja-tema3-4(data-aos="fade-up")
            figure.d-none.d-lg-block
              img(src="@/assets/curso/tema3/img10.svg", alt="" style="max-width: 80px").m-auto
            p.mb-0 Una entrada muy ajustada dificulta ponerse el zapato, especialmente en botas o mocasines.
          .col-lg-6.estilo___caja-tema3-4(data-aos="fade-up")
            figure.d-none.d-lg-block
              img(src="@/assets/curso/tema3/img11.svg", alt="" style="max-width: 80px").m-auto
            p.mb-0 Una entrada muy amplia puede provocar que el pie se desplace, generando fricción e incomodidad.
              
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
