function productArray(arr) {
    let n = arr.length;
    let prod = [];
​
    for (let i = 0; i < n; i++) {
        let product = 1;
        for (let j = 0; j < n; j++) {
            if (i !== j) {
                product *= arr[j];
            }
        }
        prod.push(product);
    }
​
    return prod;
}
​