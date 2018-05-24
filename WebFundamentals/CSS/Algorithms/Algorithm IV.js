function greaterThan(x, y) {
    count = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] > y) {
            count++;
        }
    }
    return count;
}
console.log(greaterThan([2, 3, 4, 5], 3)); // should log 2


function maxMinAvg(x) {
    max = x[0];
    min = x[0];
    sum = 0;
    avg = 0;

    for (var i = 1; i < x.length; i++) {
        if (x[i] > max) {
            max = x[i];
        }
    }

    for (var i = 1; i < x.length; i++) {
        if (x[i] < min) {
            min = x[i];
        }
    }

    for (var i = 0; i < x.length; i++) {
        sum = x[i] + sum;
    }
    avg = sum / x.length;

    console.log(max, min, avg);
}

maxMinAvg([31, 5, 14, 2, 21]);

function negativeToString(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 'Dojo';
        }
    }
    return x;
}

console.log(negativeToString([2, -1, 0, -199, 28, 92]));

function removeVals(x, y, z) {
    x.splice(y, z);
    return x;
}

console.log(removeVals([2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 4));