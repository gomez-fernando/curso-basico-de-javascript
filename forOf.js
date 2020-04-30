let estudiantes = ["Daniel", "Pedro", "María", "Sergio"];

function saludar(estudiante) {
  console.log(`Hola ${estudiante}`);
}

for (let i = 0; i < estudiantes.length; i++) {
  saludar(estudiantes[i]);
}

for (estudiante of estudiantes) {
  saludar(estudiante);
}
