export default {
  global: {
    Name: 'Estructura y desarrollo del calzado',
    Description:
      'El componente formativo desarrolla el patronaje de calzado Oxford y Derby, abordando materiales, hormas, moldes y sistemas de medidas. Explica los tipos de cuero, materiales sintéticos y textiles, junto con sus aplicaciones. También describe la estructura de las hormas, su clasificación y dimensiones, además de los moldes utilizados en la fabricación del calzado, garantizando ajuste y calidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Sistemas de medidas de calzado',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Principales sistemas de numeración de calzado',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Conversión básica entre sistemas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Medida de ancho o volumen del pie',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Hormas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Partes de la horma',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Dimensiones de la horma',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Clasificación de las hormas',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Relación entre la anatomía del calzado y el pie',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Clasificación según la forma del pie',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Clasificación según el tipo de arco plantar',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación según la pisada',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Herramientas utilizadas en el proceso de patronaje',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Proceso de enmascarado de la horma',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52450479_CF02_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Hormas',
      referencia: 'Hormas para zapatos. (s. f.). Mexpolimeros.',
      tipo: 'Sitio web',
      link: 'https://www.mexpolimeros.com/app/hormas.html',
    },
    {
      tema: 'Sistemas de medidas de calzado',
      referencia: 'Guia de tallas. (s. f.). Skatepro. ',
      tipo: 'Sitio web',
      link: 'https://www.skatepro.es/z151.htm',
    },
  ],
  glosario: [
    {
      termino: 'Cuero',
      significado:
        'material natural obtenido de la piel de animales, principalmente vacuno, que se somete a un proceso de curtido para hacerlo resistente y flexible. Se utiliza en la fabricación de calzado por su durabilidad, <em>confort</em> y capacidad de adaptarse a la forma del pie.',
    },
    {
      termino: 'Horma',
      significado:
        'molde con la forma del pie que se usa en la fabricación de calzado para darle estructura y garantizar un ajuste adecuado. Puede estar hecha de madera, plástico o metal y varía según el tipo de calzado y su finalidad.',
    },
    {
      termino: 'Patronaje',
      significado:
        'es el proceso de diseño y creación de patrones que sirven como base para cortar las piezas de un calzado. A través del patronaje, se definen las formas y dimensiones de los componentes que conformarán el zapato.',
    },
    {
      termino: 'Sintético',
      significado:
        'material artificial fabricado a partir de polímeros como el PVC o el poliuretano, diseñado para imitar características del cuero o de otros materiales naturales. Se usa en calzado por su costo accesible, variedad de diseños y facilidad de mantenimiento.',
    },
    {
      termino: 'Textil',
      significado:
        'material compuesto por fibras naturales (algodón, lino, lana) o sintéticas (poliéster, nylon) que se utiliza en la fabricación de calzado, especialmente en modelos deportivos y casuales, debido a su ligereza y transpirabilidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arias Navarro, A., & Acevedo Ramírez, G. (1998). Patronaje, modelado y escalado de calzado.',
      link: '',
    },
    {
      referencia:
        '<em>Bossan</em>, M. J. (2007). El arte del zapato (S. Caballero, Trad.). <em>Edimat</em> Libros.',
      link: '',
    },
    {
      referencia:
        'García Macias, A. (1957). Arte y técnica del patronaje y modelaje del calzado. Editorial <em>Dossat</em>.',
      link: '',
    },
    {
      referencia:
        '<em>Motawi, W. M., & Motawi</em>, A. M. (2021). Patronaje de calzado y diseño de hormas. <em>Wade Motawi</em>.',
      link: '',
    },
    {
      referencia:
        '<em>Vass</em>, L., & Molnár, M. (1999). Zapatos de caballero hechos a mano. Konemann.',
      link: '',
    },
    {
      referencia:
        'Zambrano, L. C. (1990). Bloque modular 1: Preparación de avíos para calzado. Módulo instruccional 1: Estructura del pie - Proporciones y medidas. CEFAD, Regional Bogotá.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Líder del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermudez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Elkin Darío Fontecha Pardo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paola Alexandra Moya',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Geraldine Viviana Fernandez Jaramillo',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Robinson Javier Ordoñez Barreiro',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parado',
          cargo: 'Producción audiovisual',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Andrés Felipe Guevara Ariza',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'GESTORES DE REPOSITORIO',
      autores: [
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Raúl Mosquera Serrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
