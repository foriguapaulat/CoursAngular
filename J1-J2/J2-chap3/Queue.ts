Class Queue{
    // typage générique
function fusion<T>(a: T, b: T, c: T, d: T): T {
    return a.concat(b,c,d);
    console.log(1)
}
function fusionArray<T>(a: T[], b: T[], c: T[], d: T[]): T[] {
    return a.concat(b,c,d);
    console.log(a)
}

let queue = fusion<number>(1,2,3,4);
console.log(1);

let queueArray = fusion<number[]>([1,2], [3,4], [5,6], [7,8]);
console.log(1); 
}

