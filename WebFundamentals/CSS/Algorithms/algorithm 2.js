// function printUpTo(x) {
//     for (var i = 0; i < x; i++) {
//         if (x < 0) {
//             console.log("Negative Number");
//             return false;

//         } else
//             console.log(i);
//     }

// }
// printUpTo(1000000); // should print all the integers from 1 to 1000000
// y = printUpTo(-10); // should return false
// console.log(y); // should print false

function printSum(x) {
    sum = 0;
    for (var i = 0; i < x; i++) {
        var y = 0;
        y = x + y
        console.log(y);
    }
    return sum
}
y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
console.log(y) // should print 32385