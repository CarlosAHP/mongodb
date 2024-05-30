use('SocioslegalesSA');




// Insertar varios asuntos
const nuevosAsuntos = [
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f8"
    },
    descripcion: "Descripción del asunto 1",
    fecha_inicio: {
      $date: "2024-01-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f9"
    },
    descripcion: "Descripción del asunto 2",
    fecha_inicio: {
      $date: "2024-02-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {
    id_cliente: {
      $oid: "66574a79386437d1872682f0"
    },
    descripcion: "Descripción del asunto 3",
    fecha_inicio: {
      $date: "2024-03-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f1"
    },
    descripcion: "Descripción del asunto 4",
    fecha_inicio: {
      $date: "2024-04-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f2"
    },
    descripcion: "Descripción del asunto 5",
    fecha_inicio: {
      $date: "2024-05-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f3"
    },
    descripcion: "Descripción del asunto 6",
    fecha_inicio: {
      $date: "2024-06-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f4"
    },
    descripcion: "Descripción del asunto 7",
    fecha_inicio: {
      $date: "2024-07-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f5"
    },
    descripcion: "Descripción del asunto 8",
    fecha_inicio: {
      $date: "2024-08-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f6"
    },
    descripcion: "Descripción del asunto 9",
    fecha_inicio: {
      $date: "2024-09-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado"
  },
  {

    id_cliente: {
      $oid: "66574a79386437d1872682f7"
    },
    descripcion: "Descripción del asunto 10",
    fecha_inicio: {
      $date: "2024-10-01T00:00:00.000Z"
    },
    fecha_finalizacion: null,
    estado: "cerrado    "
  }
];

const insertManyResult = db.getCollection('Asunto').insertMany(nuevosAsuntos);

console.log("Resultado de la inserción de los asuntos:", insertManyResult);
