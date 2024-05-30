use('SocioslegalesSA');

// Insertar varios clientes
const nuevosClientes = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    dni: "123456789"
  },
  {
    nombre: "Ana",
    apellido: "Lopez",
    dni: "987654321"
  },
  {
    nombre: "Pedro",
    apellido: "Gonzalez",
    dni: "234567890"
  },
  {
    nombre: "Lucía",
    apellido: "Ramirez",
    dni: "345678901"
  },
  {
    nombre: "Carlos",
    apellido: "Fernandez",
    dni: "456789012"
  },
  {
    nombre: "María",
    apellido: "Rodriguez",
    dni: "567890123"
  },
  {
    nombre: "Miguel",
    apellido: "Martinez",
    dni: "678901234"
  },
  {
    nombre: "Raúl",
    apellido: "Sanchez",
    dni: "789012345"
  },
  {
    nombre: "Elena",
    apellido: "Garcia",
    dni: "890123456"
  },
  {
    nombre: "Sara",
    apellido: "Gómez",
    dni: "901234567"
  }
];

const insertManyResult = db.getCollection('Cliente').insertMany(nuevosClientes);

console.log("Resultado de la inserción de los clientes:", insertManyResult);
