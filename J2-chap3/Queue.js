Class;
Queue;
{
    // typage générique
    function fusion(a, b, c, d) {
        return a.concat(b, c, d);
        console.log(1);
    }
    function fusionArray(a, b, c, d) {
        return a.concat(b, c, d);
        console.log(a);
    }
    var queue = fusion(1, 2, 3, 4);
    console.log(1);
    var queueArray = fusion([1, 2], [3, 4], [5, 6], [7, 8]);
    console.log(1);
}
