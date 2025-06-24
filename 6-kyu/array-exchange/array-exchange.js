function exchangeWith(arr1, arr2) {
    const reversed1 = [...arr2].reverse();
    const reversed2 = [...arr1].reverse();
    arr1.length = 0;
    arr2.length = 0;
    arr1.push(...reversed1);
    arr2.push(...reversed2);
}
​