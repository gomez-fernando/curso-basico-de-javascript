let articulos = [
  { nombre: "bicicleta", costo: 3000 },
  { nombre: "televisión", costo: 9000 },
  { nombre: "libro", costo: 1000 },
  { nombre: "móvil", costo: 12000 },
  { nombre: "laptop", costo: 23000 },
  { nombre: "teclado", costo: 4000 },
  { nombre: "audífonos", costo: 6000 },
];

// filtra ciertas cosas con true o false poniéndolo en un nuevo array
let articulosFiltrados = articulos.filter(function (articulo) {
  return articulo.costo <= 6000;
});

// map , mapea generando un nuevo array
let nombreArticulos = articulos.map(function (articulo) {
  return articulo.nombre;
});
