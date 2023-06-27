function pizzaOven(crustType, sauceType, cheeses, toppings) {
  var pizza = {};

  pizza.crustType = crustType;
  pizza.sauceType = sauceType;
  pizza.cheeses = cheeses;
  pizza.toppings = toppings;

  return pizza;
}

// 2 first pizzas with determined ingredient !!!

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

// 2 pizzas with MY OWN ingredients !!!

var margheritaPizza = pizzaOven("thin crust", "marinara", ["mozzarella"], ["basil"]);
console.log(margheritaPizza);

var meatLoversPizza = pizzaOven("pan crust", "barbecue", ["mozzarella", "cheddar"], ["pepperoni", "sausage", "bacon"]);
console.log(meatLoversPizza);

// RANDOM PIZZA MAKER WITH Arrays of Ingredients !!!

function randomPizza (){
    var crustType = ["thin crust", "deep dish", "hand tossed"];
    var sauceType = ["Chocolate Sauce", "Buffalo Sauce", "BBQ Sauce", "pesto"];
    var cheeses =  ["mozzarella", "cheddar", "feta", "parmesan", "Gouda", "Gruyere"];
    var toppings = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "bell peppers", "tona", "chicken"];

    var pizza = {
        crustType: crustType[Math.floor(Math.random() * crustType.length )],
        sauceType: sauceType[Math.floor(Math.random() * sauceType.length )],
        cheeses: cheeses[Math.floor(Math.random() * cheeses.length )],
        toppings: toppings[Math.floor(Math.random() * toppings.length )]

    };
    return pizza;
}
var randomPizza = randomPizza();
console.log(randomPizza);
