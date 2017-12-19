"use strict";

require("./DOMinteraction");
let bread = require("./bread");
let total = 0;
let sandwich = {
    bread: [],
    veggies: [],
    condiments: [],
    meat: [],
    cheese:[]
};

module.exports.addIngredient = function(id, value){
    console.log(sandwich[id].push(value));
    console.log(total += bread.addBread(value)); //returns bread price

};

module.exports.getTotal = function(){
    return total;
};

module.exports.getSandwich = function(){
    return sandwich;
};