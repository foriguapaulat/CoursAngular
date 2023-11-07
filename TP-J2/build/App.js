"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MockProducts_1 = require("./data/MockProducts");
function getProducts() {
    const productsMap = MockProducts_1.MockDetails.map(MockDetails => MockDetails.id);
    console.log(productsMap);
}
getProducts();
// function getProductsSpecial(){
//     const deliveryMap = MockDelivery.map(Delivery.Special){
//     }
// Vous devez dans un premier temps récupérer les détails et les delivery en fonction des id des produits et mettre l’ensemble des produits dans le tableau suivant :
const products = [];
// Puis vous devez mapper ce fichier pour en extraire uniquement les produits dont l’option est « special » pour Delivery.
// Vous pouvez utiliser les fonction forEach et map de JS.
