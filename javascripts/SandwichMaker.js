"use strict";

require("./DOMinteraction");
let bread = require("./bread");
let meat = require("./meat");
let condiments = require("./condiments");
let veggies = require("./veggies");
let cheese = require("./cheese");

let total = 0;
let sandwich = {
    "bread": [],
    "veggies": [],
    "condiments": [],
    "meat": [],
    "cheese":[]
};



module.exports.addIngredient = function(id, value){
    sandwich[id].push(value);
    switch (id){
        case "bread": 
        total += bread.addBread(value);
        break;
        case "cheese":
        total += cheese.addCheese(value);
        break;
        case "meat":
        total += meat.addMeat(value);
        break;
        case "veggies":
        total += veggies.addVeggie(value);
        break;
        case "condiments":
        total += condiments.addCondiment(value);
        let outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "";

    }
    return total.toFixed(2);
};

module.exports.getTotal = function(){
    return total;
};

module.exports.getSandwich = function(){
    return sandwich;
};

module.exports.removeIngredient = function(id, value){
    sandwich[id].splice(sandwich[id].indexOf(value), 1);
    switch (id) {
        case "bread":
        total -= bread.addBread(value);
        break;
        case "meat":
        total -= meat.addMeat(value);
        break;
        case "cheese":
        total -= cheese.addCheese(value);
        break;
        case "condiments":
        total -= condiments.addCondiments(value);
        break;
        case "veggies":
        total -= veggies.addVeggie(value);
    }
    let outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";
    console.log("your total", total);
    return total;
};

module.exports.clearCategoryTotal = (category) => {
    total -= bread.breadTotal();
    total -= veggies.veggieTotal();
};