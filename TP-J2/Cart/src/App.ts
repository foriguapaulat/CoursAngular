// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
// pour extraire uniquement les produits dont l'option delivery est "special"
import {Product} from './Product';
import {Details} from './data/MockProducts';
import {Delivery} from './data/MockProducts';
import {MockDetails} from './data/MockProducts';
import {MockDelivery} from './data/MockProducts';


function getProducts(){
    const productsMap = MockDetails.map(MockDetails=>MockDetails.id);
    console.log(productsMap);    
}
getProducts();

// function getProductsSpecial(){
//     const deliveryMap = MockDelivery.map(Delivery.Special){
        
//     }

// Vous devez dans un premier temps récupérer les détails et les delivery en fonction des id des produits et mettre l’ensemble des produits dans le tableau suivant :

const products: Array<Product<Details, Delivery>> = [];

// Puis vous devez mapper ce fichier pour en extraire uniquement les produits dont l’option est « special » pour Delivery.
// Vous pouvez utiliser les fonction forEach et map de JS.