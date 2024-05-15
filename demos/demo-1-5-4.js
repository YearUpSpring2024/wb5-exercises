"use strict";
let menu = [
    { id: 1, item: "Tacos", category: "Meal", price: 12.29 },
    { id: 2, item: "Burger", category: "Meal", price: 7.29 },
    { id: 3, item: "Salad", category: "Meal", price: 8.29 },
    { id: 4, item: "Ice tea", category: "Drink", price: 2.19 },
    { id: 5, item: "Coke", category: "Drink", price: 2.29 },
];

let searchId = 4;
let matching = null;

// matching = menu.find(doseMenuObjectHaveId);

matching = menu.find((m) => m.id == searchId)

if (matching != null) {
    console.log(matching.item + " cost $ " + matching.price)
} else {
    console.log("item " + searchId + " not found");
}

