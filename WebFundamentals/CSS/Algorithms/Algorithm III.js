function printAverage(x) {
    sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum = x[i] + sum;
    }
    average = sum / x.length;
    return average;
}
y = printAverage([1, 2, 3]);
console.log(y); // should log 2

y = printAverage([2, 5, 8]);
console.log(y); // should log 5

function returnOddArray() {
    z = [];
    for (var i = 0; i <= 255; i++) {
        if (i % 2 == 1) {
            z.push(i);
        }
    }
    return z;
}
y = returnOddArray();
console.log(y); // should log [1,3,5,...,253,255]

function squareValue(x) {
    sq = [];
    for (var i = 0; i < x.length; i++) {
        sq.push(x[i] * x[i]);
    }
    return sq;
}
y = squareValue([1, 2, 3]);
console.log(y); // should log [1,4,9]

y = squareValue([2, 5, 8]);
console.log(y); // should log [4,25,64]