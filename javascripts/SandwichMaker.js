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

    }
    return total;
};

module.exports.getTotal = function(){
    return total;
};

module.exports.getSandwich = function(){
    return sandwich;
};