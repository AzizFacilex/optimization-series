function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);
    return arr;
}

const array1 = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 10000));

console.time('Bubble Sort');
bubbleSort(array1);
console.timeEnd('Bubble Sort');
