import titulo from './titulo'
export default {
  global: {
    componenteFormativo: titulo,
    descripcionCurso:
      'Las bases de datos se han convertido en elementos indispensables que precisan manejar grandes o pequeños volúmenes de información, a través de estas se pueden solucionar problemas por medio de instrucciones secuenciales de lenguaje natural, las cuales pueden ser llevadas posteriormente a un programa basado en el lenguaje de programación definido o seleccionado.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/decorativo-4.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Metodologías para la solución de problemas, usando computadoras',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Estructuras de control y funciones',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Definición de funciones y procedimientos',
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
      tema: 'Definición de funciones y procedimientos',
      referencia:
        'Garcia, M. (2020). Fundamentos de programación, algoritmos y estructuras de datos.',
      tipo: 'Página web',
      link:
        'http://www.profmatiasgarcia.com.ar/uploads/tutoriales/Algoritmos2.pdf ',
    },
    {
      tema: 'Metodologías para la solución de problemas, usando computadoras',
      referencia:
        'Guerrero, L., Villegas E. (2016). Análisis y diseño de algoritmos, un enfoque práctico. Editorial Universidad Nacional de Colombia.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_elibroELB129991&context=L&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=Local%20Search%20Engine&tab=sena_completo&query=any,contains,ALGORITMOS&offset=0 ',
    },
    {
      tema: 'Estructuras de control y funciones',
      referencia:
        'López, M, y Silva, E. (2018). Verificación formal de algoritmos. Ejercicios resueltos. Universidad de Cádiz.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB33887',
    },
    {
      tema: 'Metodologías para la solución de problemas, usando computadoras',
      referencia:
        'Muro, A. (2018) <i>Informática, Operadores, Programación.</i>',
      tipo: 'Página web',
      link: 'https://procomsys.wordpress.com/tag/programacion/',
    },
    {
      tema: 'Metodologías para la solución de problemas, usando computadoras',
      referencia:
        'Respuestas rápidas. (2020). <i>Cuáles son las principales herramientas ofimáticas.</i>',
      tipo: 'Página web',
      link:
        'https://respuestasrapidas.com.mx/cuales-son-los-principales-herramientas-ofimaticas/ ',
    },
    {
      tema: 'Estructuras de control y funciones',
      referencia:
        'Rincón, R. (2017).<i> Introducción y construcción de algoritmos. </i>',
      tipo: 'Libro PDF',
      link:
        'https://pdfcookie.com/documents/oa-introduccion-y-construccion-de-algoritmospdf-025ek0myqk21 ',
    },
    {
      tema: 'Metodologías para la solución de problemas, usando computadoras',
      referencia: 'Sznajdleder, P. (2012). Algoritmos a fondo. Alfaomega.',
      tipo: 'Libro PDF',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_alfaomega17554&context=L&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=Local%20Search%20Engine&tab=sena_completo&query=any,contains,ALGORITMOS ',
    },
  ],
  glosario: [
    {
      termino: 'Algoritmo',
      significado:
        'es un conjunto de instrucciones que están relacionadas lógica y ordenadamente, que conllevan a la solución de un problema determinado.',
    },
    {
      termino: 'Constante',
      significado:
        'es un valor que se almacena en una zona de la memoria y que no varía durante la ejecución del programa.',
    },
    {
      termino: 'Diagrama de flujo',
      significado:
        'representación gráfica de un algoritmo, el cual presenta a través de símbolos los pasos o procesos a seguir para alcanzar la solución de un problema. Su correcta construcción es sumamente importante porque, a partir del mismo se escribe un programa en algún lenguaje de programación.',
    },
    {
      termino: 'Estructura cíclica',
      significado:
        'es parte de un algoritmo necesario para repetir una o varias acciones en un número determinado.',
    },
    {
      termino: 'Función',
      significado:
        'es un subprograma que recibe como argumentos o parámetros, datos de tipo numérico o no numérico y devuelve un único resultado.',
    },
    {
      termino: 'Operadores',
      significado:
        'son elementos que relacionan de forma diferente, los valores de una o más variables y/o constantes. Es decir, los operadores nos permiten manipular valores.',
    },
    {
      termino: 'Procedimiento',
      significado: 'es un subprograma que ejecuta una tarea determinada.',
    },
    {
      termino: 'Pseudocódigo',
      significado:
        'es una descripción informal de alto nivel de un algoritmo, que utiliza las convenciones estructurales de un lenguaje de programación verdadero, pero que está diseñado para la lectura.',
    },
    {
      termino: 'Sintaxis',
      significado:
        'es el conjunto de reglas que deben seguirse al escribir el código fuente de los programas y así, considerarse como correctos para ese lenguaje de programación.',
    },
    {
      termino: 'Variable',
      significado:
        'es un espacio en la memoria para almacenar un valor determinado que puede cambiar durante la ejecución dentro del programa y son definidas por nombres, para identificarlas dentro del algoritmo. ',
    },
  ],
  referencias: [
    {
      referencia:
        'Ayala, G. (2020). <em>Algoritmos y programación. Mejores prácticas</em>. Fundación Universidad de las Américas. Puebla UDLAP.',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB180290 ',
    },
    {
      referencia:
        'Joyanes, L. (2020). <em>Fundamentos de programación</em>. McGraw-Hill.',
      link:
        'https://www-ebooks7-24-com.bdigital.sena.edu.co/stage.aspx?il=&pg=&ed=',
    },
    {
      referencia:
        'López, M, y Silva, E. (2017). <em>Corrección de algoritmos complejos: verificación formal</em>. Universidad de Cádiz. ',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/permalink/f/1j5choe/sena_elibroELB33887',
    },
    {
      referencia:
        'Rojas, C. (2017). <em>Algoritmia y estructura de datos</em>. Manual autoformativo.',
      link:
        'https://es.slideshare.net/jdelacruzpalacios/algoritmia-y-estructura-de-datos ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
