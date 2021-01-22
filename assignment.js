// https://github.com/tareqhassan2014/js-assignment
//First Solution
function kilometerToMeter(kilometer) {
    let meter = 0;
    if (kilometer > 0) {
        meter = kilometer * 1000;
    }
    else {
        meter = "Error: Distance can't be negative.";
    }
    return meter;
}

var result = kilometerToMeter(5);
console.log(result);

//Second Solution

function budgetCalculator(watch, phone, laptop) {
    let total = 0;
    if (watch < 0 || phone < 0 || laptop < 0) {
        total = "Error: Input can't be negative.";
    }
    else {
        total = 50 * watch + 100 * phone + 500 * laptop;
    }
    return total;
}

var totalAmount = budgetCalculator(1, 5, 5);
console.log(totalAmount);

//Third Solution

function hotelCost(days) {
    let totalCost = 0;
    if (days < 0) {
        totalCost = "Error: Day can't be negative.";
    }
    if (days <= 10 && days > 0) {
        totalCost = days * 100;
    }
    if (days > 10 && days <= 20) {
        totalCost = 1000 + (days - 10) * 80;
    }
    if (days > 20) {
        totalCost = 1800 + (days - 20) * 50;
    }
    return totalCost;
}

let total = hotelCost(4);
console.log(total);

//Fourth Solution

function megaFriend(arr) {
    var long = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (long.length < element.length) {
            long = element;
        }
    }
    return long;
}

var friend = ["Tareq", "Jahid", "Raihan", "Abdullah", "Ruhulamin"];
var longword = megaFriend(friend);
console.log(longword);