"use strict";
// selecting the element

const toycategoryDropDown = document.getElementById("toycategoryDropDown");
const toyList = document.getElementById("toyList");
const toyDetailRow = document.getElementById("toyDetailRow");
const toyName = document.getElementById("toyName");
const toyManuFacturer = document.getElementById("toyManuFacturer");
const toyAge = document.getElementById("toyAge");

window.onload = () => {
    console.log("onload");
    toycategoryDropDown.onchange = onToCategoryDropdownChange;
    toyList.onchange = onToyListchange
}

function onToCategoryDropdownChange() {
    console.log("onToyCateGoryDropdownChange");

    //figure out what value was selected (which category)
    const selectedCategory = toycategoryDropDown.value;

    //loop throguh correct array and add values to the toyList one at time

    const toysArray = toys.Toys[selectedCategory];
    //clear out our ToyList from the previous selction;
    toyList.innerHTML = "";

    for (let i = 0; i < toysArray.length; i++) {
        const toy = toysArray[i];
        const option = document.createElement("option");
        option.innerHTML = toy.name;
        toyList.appendChild(option);
    }
}

function onToyListchange() {
    console.log("onToysListChange");

    //loop up selected toy
    const selectedToyName = toyList.value;
    // which category is selected
    const selectedCategory = toycategoryDropDown.value;

    // grabbing the arrays
    const toysArray = toys.Toys[selectedCategory];

    const selectedToy = toysArray.find(toy => toy.name == selectedToyName);

    //show the details
    toyDetailRow.style.display = "block";
    toyName.innerHTML = selectedToy.name;
    toyManuFacturer.innerHTML = selectedToy.manufacturer;
    toyAge.innerHTML = selectedToy.age_range;

}