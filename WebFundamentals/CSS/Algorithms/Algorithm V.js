function negToZero(x) {
    for (var i = 0; i < x.length; i++) {
        if (x[i] < 0) {
            x[i] = 0;
        }
    }
    return x;
}
console.log(negToZero([2, -3, 4, -5]));

function moveForward(x) {
    var y = x.slice();
    for (var i = 0; i < x.length; i++) {
        x[i] = y[i + 1];
    }
    x.pop();
    x.push(0);
    return x;
}
console.log(moveForward([9, 8, 7, 6, 5, 2]));

function reverseOrder(x) {
    var y = [];
    for (var i = x.length - 1; i >= 0; i--) {

        y.push(x[i]);
    }
    console.log(y);
}
reverseOrder([2, 3, 4, 5, 6]);

function repeatTwice(x) {
    var y = [];
    for (var i = 0; i < x.length; i++) {
        y.push(x[i]);
        y.push(x[i]);
    }
    return y;
}

console.log(repeatTwice([1, 2, 3, 4, 'will', 9]));