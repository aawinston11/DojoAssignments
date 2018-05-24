function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "\"big\"";
        }
    }
    return arr;
}

function lowHigh(arr) {
    min = arr[0];
    maarr = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }
    console.log(min);
    for (var i = 0; i < arr.length; i++) {
        if (maarr < arr[i]) {
            maarr = arr[i];
        }
    }
    return maarr;
}

function secondToLast(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
            break;
        }
    }
}

function doubleVision(arr) {
    y = [];
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] * 2;
        y.push(sum);
    }
    return y;
}

function countPositives(arr) {
    count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            count++
        }
    }
    arr.pop();
    arr.push(count);
    return arr;
}

function evensAndOdds(arr) {
    for (var i = 2; i < arr.length; i++) {
        if (arr[i] % 2 != 0 && arr[i - 1] % 2 != 0) {

            if (arr[i - 2] % 2 != 0) {
                return "That\'s odd";
            }
        }
        if (arr[i] % 2 == 0 && arr[i - 1] % 2 == 0) {
            if (arr[i - 2] % 2 == 0) {
                return "Even more so!";
            }
        }
    }
    return "No consecutive odd or even values";
}

function incrementSecond(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i]++;
            console.log(arr[i]);
        }
    }
    return arr;
}

function prevLengths(arr) {
    for (var i = 0; i < arr.length; i++) {

        var string = arr[i];
        arr[i] = string.length
    }
    return arr;
}

function addSeven(arr) {
    var y = arr.slice();
    y.shift();
    for (var i = 0; i < y.length; i++) {
        y[i] = y[i] + 7;
    }
    return y;
}


function reverse(arr) {
    var arrLength = arr.length;
    for (var i = 0; i < arrLength / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arrLength - 1 - i];
        arr[arrLength - 1 - i] = temp;
    }
    return arr;
}

function negaitve(arr) {
    var y = arr.slice();
    for (var i = 0; i < y.length; i++) {
        if (y[i] > 0) {
            y[i] = y[i] * -1;
        }
    }
    return y;
}


function hungry(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'food') {
            console.log('yummy');
        }
    }
    if (arr.indexOf('food') == -1) {
        console.log("I\'m hungry");
    }
}

function swapToCenter(arr) {
    var left = 0;
    var right = arr.length - 1;
    for (var i = 0; i < arr.length / 2; i++) {
        var hold = arr[left];
        arr[left] = arr[right];
        arr[right] = hold;
        right--;
        left++;
    }
    return arr;
}

function scaleArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}