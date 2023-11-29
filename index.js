const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];
//pizzas impares
const pizzasImpar = pizzas.filter((pizza) => pizza.id % 2 !== 0);

pizzasImpar.forEach((pizza) => {
  console.log(
    "Esta pizza tiene un ID impar " + `ID: ${pizza.id}, Nombre: ${pizza.nombre}`
  );
});

//pizza con valor menor a 600

const pizzasAffordable = pizzas.filter((pizza) => pizza.precio <= 600);

pizzasAffordable.forEach((pizza) => {
  console.log(
    "Esta pizza tiene un precio menor o igual a 600 " +
      ` Precio: ${pizza.precio}, ID: ${pizza.id}, Nombre: ${pizza.nombre}`
  );
});

/////nombre de todas las pizzas con sus precios

const pizzasNameandPrice = pizzas.toString();

const pizzasNameandPrice = pizza.map();
