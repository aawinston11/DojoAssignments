function numbers1To255() {
    var y = [];
    for (var i = 1; i < 256; i++) {
        y.push(i);
    }
    return y;
}

function even1000() {
    sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum = i + sum;
        }
    }
    return sum;
}

function odd5000() {
    sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum = i + sum;
        }
    }
    return sum;
}

function iterateArray(arr) {
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    return sum;
}

function findMax(arr) {
    max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

function findAvg(arr) {
    avg = 0;
    sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    avg = sum / arr.length;
    return avg;
}

function arrayOdd() {
    var y = [];
    for (var i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            y.push(i);
        }
    }
    return y;
}

function greaterThanY(arr, y) {
    count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count++;
        }
    }
    return count;
}

function square(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

function negatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

function minMaxAvg(arr) {
    avg = 0;
    sum = 0;
    max = arr[0];
    min = arr[0];


    for (var i = 1; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }

    for (var i = 1; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
    }

    for (var i = 0; i < arr.length; i++) {
        sum = arr[i] + sum;
    }
    avg = sum / arr.length;

    var y = [max, min, avg];
    return y;
}

function swap(arr) {
    var h = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = h;
    return arr;
}

function numToStr(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}