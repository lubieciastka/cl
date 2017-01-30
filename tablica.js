var fruits = ["orange", "banana", "mandarynka", "test"];

console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);

for(var i = 0; i < fruits.length; i++) {
    console.log(i, fruits[i]);
}

// zadanie 02

function createArray(number) {
    var newArray = [];

    for(var counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// zadanie 3

var fruits2 = ["orange", "banana", "mandarynka", "test"];

function printTable(array) {
    for ( var i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

printTable(fruits2);