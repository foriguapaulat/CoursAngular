// Exercice 8.1
function readonly(target, key, descriptor) {
    descriptor.writable = false; // modifier la visibilité à true si vous voulez redéfinir la méthode
    
    return descriptor;
}

class Bike {
    @readonly
    speed () {
        return 8;
    }
}

let bike = new Bike;

bike.speed = () => 5; // On tente de redéfinir la méthode => impossible car writable = false

// la méthode retournera 8 car elle n'est accessible qu'en lecture
console.log(bike.speed());