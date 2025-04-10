<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje de calzado <em>Oxford</em> y <em>Derby</em>',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> Identificar  materiales, hormas, moldes, sistemas de medidas y fundamentos técnicos aplicados al patronaje de calzado, específicamente en los modelos <em>Oxford</em> y <em>Derby</em>.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!..',
      titulo_reprobado: 'VUELVA A INTENTARLO..',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es el principal propósito del patronaje en la fabricación de calzado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Transformar materiales en productos terminados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Convertir diseños en moldes precisos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Seleccionar los mejores materiales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir colores y texturas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué tipo de cuero se caracteriza por su flexibilidad y color uniforme?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cuero vegetal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuero mixto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cuero al cromo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cuero charol.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál es una característica de los materiales sintéticos tipo EVA?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Son rígidos y pesados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Son espumosos, ligeros y flexibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se usan exclusivamente en botas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No se pueden moldear.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es la función principal de una horma en el proceso de fabricación de calzado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aportar diseño estético.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Seleccionar materiales adecuados.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Servir como molde para construir el zapato.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Controlar la calidad del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué tipo de horma es ideal para personas con pie voluminoso?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Horma estándar.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Horma para pie ancho.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Horma de moda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Horma para pie delgado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué materiales se utilizan comúnmente en la fabricación de moldes para corte?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Vidrio y cerámica.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cartón y papel.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cartón, plástico o lámina metálica.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Tela y resina.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál es el punto de partida para ubicar la línea metatarsiana en la horma?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Punto de entrada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Puntos metatarsianos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Punto de calzada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Línea de plantilla.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Qué sistema de medida es el más preciso y está basado en la longitud real del pie?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '<em>Mondopoint</em>.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Europeo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Americano.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inglés.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto: '¿Qué indica el perímetro de retención en la horma?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La altura del tacón.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La medida entre el perímetro de la bola y el cono.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'El largo del pie.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El volumen de la puntera.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué tipo de calzado usa comúnmente horma articulada tipo Alfa (V)?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Botas y zapatos abotinados.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Sandalias y mocasines.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Zapatillas deportivas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Zapatos sin tacón.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'Los moldes base son utilizados únicamente para suelas y tacones.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto: 'El cuero vegetal es biodegradable y tiene tonos naturales.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: 'El cuero vegetal es biodegradable y tiene tonos naturales.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'La línea de plantilla se forma con el borde superior del cono de la horma.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La horma puede tener apertura para facilitar el proceso de deshormado.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Verdadero',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Falso',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
