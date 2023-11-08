import {Product} from './Product';
import {Details} from './data/MockProducts';
import {Delivery} from './data/MockProducts';
import {MockDetails} from './data/MockProducts';
import {MockDelivery} from './data/MockProducts';

const products: Array<Product<Details, Delivery>> = [];

function getProducts(){
    MockDetails.forEach(detail=>{
        const deliveryOption= MockDelivery.find(delivery=>delivery.id==detail.id)
        console.log(deliveryOption)
        products.push(deliveryOption)
    })
}
getProducts();
function isSpecial(products) {
    return products.delivery == "special";
}

console.log(products)

console.log(products.map(isSpecial)); //résultat true false
console.log(products.find(isSpecial));// résultat: juste le premier
