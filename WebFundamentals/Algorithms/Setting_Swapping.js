function setSwap() {
    var myNumber = 42,
        myName = "Andre",
        temp = "";
    temp = myName;
    myNumber = myName
    myName = temp;
    return (myName, myNumber);
}
console.log(setSwap());