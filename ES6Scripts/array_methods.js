"use scripts";

let cart = [
    { item: "Bread", price: 3.29, quantity: 2 },
    { item: "Milk", price: 4.09, quantity: 1 },
    { item: "T-Bone Steak", price: 12.99, quantity: 2 },
    { item: "Baking Potato", price: 1.89, quantity: 6 },
    { item: "Iceberg Lettuce", price: 2.06, quantity: 1 },
    { item: "Ice Cream - Vanilla", price: 6.81, quantity: 1 },
    { item: "Apples", price: 0.66, quantity: 6 }
];


let itemNames = cart.map((x) => x.item);

itemNames.sort().forEach((item) => {
    console.log(item);
})

console.log("-----------------------------using Reduce------------------------------------");

let totalCart = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
console.log(totalCart.toFixed(2));

console.log("------------------------------------------------------------------------------")

