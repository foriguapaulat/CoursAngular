"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MockProducts_1 = require("./data/MockProducts");
const MockProducts_2 = require("./data/MockProducts");
const products = [];
function getProducts() {
    MockProducts_1.MockDetails.forEach(detail => {
        const deliveryOption = MockProducts_2.MockDelivery.find(delivery => delivery.id == detail.id);
        console.log(deliveryOption);
        products.push(deliveryOption);
    });
}
getProducts();
function isSpecial(products) {
    return products.delivery == "special";
}
console.log(products);
console.log(products.map(isSpecial)); //résultat true false
console.log(products.find(isSpecial)); // résultat: juste le premier
