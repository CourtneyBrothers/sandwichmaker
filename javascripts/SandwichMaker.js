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
    if (id === "bread"){
    sandwich[id].push(value);
    total += bread.addBread(value);
     //returns bread price
    } if (id === "cheese"){
        sandwich[id].push(value);
        total += cheese.addCheese(value);
    } if (id === "meat"){
        sandwich[id].push(value);
        total += meat.addMeat(value);
    }  if (id === "veggies"){
        sandwich[id].push(value);
        total += veggies.addVeggie(value);
    } if (id === "condiments"){
        sandwich[id].push(value);
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