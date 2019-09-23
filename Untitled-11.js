function filp(arr, k) {
    for (let i = 0; i < k / 2; i++) {
        let temp = arr[0];
        arr[0] = arr[k - i - 1];
        arr[k - i - 1] = temp;
    }
    return arr;
}

function pancakeSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] > arr[j + 2]) {
                filp(arr, j + 1)
                console.log(arr)
            }
        }

    }
    return arr;
}

[4 3 5 1 7]
2   3 4 5 1 7
3   5 4 3 1 7
4   1 3 4 5 7
5   7 5 4 3 1
6   1 2 4 5 7

