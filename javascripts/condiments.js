"use strict";

let condimentPrices = {
    "ketchup": 0.19,
    "mustard": 0.25,
    "mayo": 0.30,
    "none": 0
};

module.exports.addCondiment = function (condimentType){
    return condimentPrices[condimentType];
};