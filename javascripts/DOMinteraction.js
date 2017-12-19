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

menu.addEventListener("change", function(){
    console.log(event.target.value);
    console.log(event.target.closest("div").id);
    sandwichMaker.addIngredient(event.target.closest("div").id,event.target.value);
    

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