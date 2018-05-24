function sigma(num) {
    sum = 0;
    for (var i = 1; i <= num; i++) {
        sum = i + sum;
    }
    return sum;
}

function factorial(num) {
    product = 1;
    for (var i = 1; i <= num; i++) {
        product = i * product;
    }
    return product;
}

function fibonacci(num) {
    var a = 1,
        b = 0;
    var temp = a;

    while (num >= 0) {
        temp = a;
        a = a + b;
        b = temp;
        num--;
    }
    return b;
}

function secondToLast(arr) {
    if (arr.length < 2) {
        return null;
    } else {
        return arr[arr.length - 2];
    }
}

function nthToLast(arr, num) {
    if (arr.length < num) {
        return null
    } else {
        return arr[arr.length - num];
    }
}

function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    } else {
        var second_highest = arr.sort(function(a, b) { return b - a; })[1];
        return second_highest;
    }
}

function double(arr) {
    var y = [];
    for (var i = 0; i < arr.length; i++) {
        y.push(arr[i]);
        y.push(arr[i]);
    }
    return y;
}

function fib(n) {
    if (n <= 1) return 1;
    return fib(n - 1) + fib(n - 2);
}