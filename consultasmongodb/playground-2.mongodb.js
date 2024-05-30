use('SocioslegalesSA');
db.getCollection('Cliente').find({})


// Consultar clientes
use('SocioslegalesSA');
const consultaQuery = { nombre: "Luis Carlos" }; // Condición para encontrar los clientes
const clientes = db.getCollection('Cliente').find(consultaQuery).toArray();

console.log("Clientes encontrados:", clientes);


// Insertar un nuevo cliente
use('SocioslegalesSA');

const nuevoCliente = {
  nombre: "Luis",
  apellido: "Morales",
  dni: "1122443366"
};

const insertResult = db.getCollection('Cliente').insertOne(nuevoCliente);

console.log("Resultado de la inserción del cliente:", insertResult);





// Actualizar un cliente existente
use('SocioslegalesSA');
const query = { dni: "1122443366" }; // Condición para encontrar el cliente a actualizar
const update = {
  $set: {
    nombre: "Luis Carlos",
    apellido: "Pérez García"
  }
};

const updateResult = db.getCollection('Cliente').updateOne(query, update);

console.log("Resultado de la actualización del cliente:", updateResult);





// Eliminar un cliente
use('SocioslegalesSA');
const deleteQuery = { dni: "1122443366" }; // Condición para encontrar el cliente a eliminar

const deleteResult = db.getCollection('Cliente').deleteOne(deleteQuery);

console.log("Resultado de la eliminación del cliente:", deleteResult);





