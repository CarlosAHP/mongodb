use('SocioslegalesSA');

// Insertar varias audiencias
const nuevasAudiencias = [
  {
    id_expediente: {
      $oid: "66574a79386437d1872682fa"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682f9"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682fb"
    },
    fecha_audiencia: {
      $date: "2024-02-20T10:00:00.000Z"
    },
    incidencias: "Pospuesta por falta de documentos"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d1872682fb"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682fa"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682f9"
    },
    fecha_audiencia: {
      $date: "2024-03-15T11:00:00.000Z"
    },
    incidencias: "Audiencia sin incidencias"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d1872682fc"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682f8"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682fa"
    },
    fecha_audiencia: {
      $date: "2024-04-10T09:00:00.000Z"
    },
    incidencias: "Testigo no se presentó"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d1872682fd"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682fb"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682f8"
    },
    fecha_audiencia: {
      $date: "2024-05-05T14:00:00.000Z"
    },
    incidencias: "Retrasada por tráfico"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d1872682fe"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682fc"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682fb"
    },
    fecha_audiencia: {
      $date: "2024-06-20T10:00:00.000Z"
    },
    incidencias: "Audiencia con normalidad"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d1872682ff"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682f9"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682fa"
    },
    fecha_audiencia: {
      $date: "2024-07-15T10:00:00.000Z"
    },
    incidencias: "Aplazada por lluvia"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d187268300"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682fb"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682f9"
    },
    fecha_audiencia: {
      $date: "2024-08-01T10:00:00.000Z"
    },
    incidencias: "Testigos retrasados"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d187268301"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682fa"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682fc"
    },
    fecha_audiencia: {
      $date: "2024-09-10T11:00:00.000Z"
    },
    incidencias: "Error en la documentación"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d187268302"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682f8"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682fb"
    },
    fecha_audiencia: {
      $date: "2024-10-15T13:00:00.000Z"
    },
    incidencias: "Incidente con la grabación"
  },
  {
    id_expediente: {
      $oid: "66574a79386437d187268303"
    },
    id_abogado: {
      $oid: "66574a79386437d1872682f9"
    },
    id_procurador: {
      $oid: "66574a79386437d1872682fa"
    },
    fecha_audiencia: {
      $date: "2024-11-20T10:00:00.000Z"
    },
    incidencias: "Pospuesta por huelga"
  }
];

const insertManyResult = db.getCollection('Audiencia').insertMany(nuevasAudiencias);

console.log("Resultado de la inserción de las audiencias:", insertManyResult);
