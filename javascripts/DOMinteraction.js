"use strict";
let menu = document.getElementById("menu");
let submit = document.getElementById("submit");
let bread = document.getElementById("bread");
let meat = document.getElementById("cheese");
let condiments = document.getElementById("condiments");
let veggies = document.getElementById("veggies");

let sandwichMaker = require("./SandwichMaker");

submit.addEventListener("click", function(){
    console.log("button clicked");
    console.log("submit",sandwichMaker.getTotal());
    document.getElementById("output").innerHTML = `${sandwichMaker.getTotal()}${sandwichOutput(sandwichMaker.getSandwich())}`;
});

function clearCheckboxes(div){
    let checkCheckboxes = div.getElementsByClassName(div.id);
    
    for (let i=0; i < checkCheckboxes.length; i++){
        checkCheckboxes[i].checked = false;
    }
}

menu.addEventListener("change", function(){
    let category = event.target.closest("div");
    if (event.target.value === "none"){
        clearCheckboxes(category);
    } if (!event.target.checked){
        sandwichMaker.removeIngredient(category.id, event.target.value);
    } else if (event.target.checked){
        sandwichMaker.addIngredient(category.id,event.target.value);
    }

});

let sandwichOutput = function(sandwichObject){
    let sandwichString = "";
    for (let ingredient in sandwichObject){
        for (let i=0; i < sandwichObject[ingredient].length; i++){
            sandwichString += `${sandwichObject[ingredient][i]} `;
        }
    }
    return sandwichString;
};