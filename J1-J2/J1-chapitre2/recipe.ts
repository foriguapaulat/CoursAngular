class Recipe {
    name: string;
    star?: number; // attribut facultatif
}

// c'est plus intéressant d'utiliser une interface plus cohérent pour définir uniquement les types.
let recipes: Recipe[] = []; // pour le type, la notation est équivalente à Array<Recipe>

let recipe1 = new Recipe
let recipe2 = new Recipe
let recipe3 = new Recipe

console.log(recipe1,recipe2, recipe3)