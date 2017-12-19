"use strict";

let breadPrices = {
    "white": 0.19,
    "wheat": 0.25,
    "rye": 0.30,
    "none": 0
};

module.exports.addBread = function (breadType){
    return breadPrices[breadType];
};