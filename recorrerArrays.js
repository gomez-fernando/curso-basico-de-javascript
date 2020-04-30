let articulos = [
  { nombre: "bicicleta", costo: 3000 },
  { nombre: "televisión", costo: 9000 },
  { nombre: "libro", costo: 1000 },
  { nombre: "móvil", costo: 12000 },
  { nombre: "laptop", costo: 23000 },
  { nombre: "teclado", costo: 4000 },
  { nombre: "audífonos", costo: 6000 },
];

// find encuentra el valor que se le pide con true o false, generando un nuevo array
let encuentraArticulo = articulos.find((articulo) => {
  return articulo.nombre === "laptop";
});

// foreach, este NO genera un nuevo array, pero tampoco modifica el array original
articulos.forEach((articulo) => {
  console.log(articulo.nombre);
});

// some, solo genera una variable con true o false dentro, si algún objeto cunple con la condición
let articulosBaratos = articulos.some((articulo) => {
  return articulo.costo <= 6000;
});
// true
