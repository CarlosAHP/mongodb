use('SocioslegalesSA');

// Insertar varios procuradores
const nuevosProcuradores = [
  {
    nombre: "Carlos",
    apellido: "Ramírez",
    dni: "1122334455"
  },
  {
    nombre: "María",
    apellido: "Hernández",
    dni: "2233445566"
  },
  {
    nombre: "Juan",
    apellido: "Fernández",
    dni: "3344556677"
  },
  {
    nombre: "Ana",
    apellido: "Gómez",
    dni: "4455667788"
  },
  {
    nombre: "Pedro",
    apellido: "Martínez",
    dni: "5566778899"
  },
  {
    nombre: "Lucía",
    apellido: "Lopez",
    dni: "6677889900"
  },
  {
    nombre: "Miguel",
    apellido: "Pérez",
    dni: "7788990011"
  },
  {
    nombre: "Elena",
    apellido: "Sánchez",
    dni: "8899001122"
  },
  {
    nombre: "Raúl",
    apellido: "García",
    dni: "9900112233"
  },
  {
    nombre: "Sara",
    apellido: "Rodríguez",
    dni: "1011122334"
  }
];

const insertManyResult = db.getCollection('Procurador').insertMany(nuevosProcuradores);

console.log("Resultado de la inserción de los procuradores:", insertManyResult);
