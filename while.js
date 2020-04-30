let estudiantes = ["Daniel", "Pedro", "María", "Sergio"];

function saludar(estudiante) {
  console.log(`Hola ${estudiante}`);
}

while (estudiantes.length > 0) {
  console.log(estudiantes);
  let estudiante = estudiantes.shift();
  saludar(estudiante);
}
