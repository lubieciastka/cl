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

// zadanie z wykladowca

function distFromAvarage (array) {
    var sumFromArray = 0;
    var arrayDifference = [];

    for (var i = 0; i < array.length; i++){
        sumFromArray += array[i];
    }

    var averageFromArray = sumFromArray / array.length;

    // sprawdzamy roznice
    for (var i = 0; i < array.length; i++){
        arrayDifference.push(Math.abs(array[i] - averageFromArray));
    }

    console.log(arrayDifference);
    
    return arrayDifference;
} 

//testy
distFromAvarage([1,2,3,4,5,6,7]); // => [3,2,1,0,1,2,3]; // (średnia z tablicy wejściowej to 4)
distFromAvarage([1,1,1,1]); // => [0,0,0,0]; //(średnia z tablicy wejściowej to 1)
distFromAvarage([2,8,3,7]); // => [3,3,2,2]; ///(średnia z tablicy wejściowej to 5)

// zadanie 4

function multiply (array) {
    var multiplicationFromArray = 1;
   
    for (var i = 0; i < array.length; i++){
        multiplicationFromArray *= array[i];
    }

    console.log(multiplicationFromArray);
    
    return multiplicationFromArray;
} 

//testy
multiply([1,2,3,4,5,6,7]);// => 5040
multiply([1,1,1,1]);// => 1
multiply([2,8,3,7]);// => 336

// zadanie 5

function getEvenAvarage (array) {
    var sumFromArray = 0;
    var numberFromArray = 0;

    for (var i = 0; i < array.length; i++){
        if (array[i] % 2 === 0) {
            sumFromArray += array[i];
            numberFromArray += 1;
        }
    }
    
    if (numberFromArray === 0){
        console.log(null);
        return null;
    }
     
    var averageFromArray = sumFromArray / numberFromArray;

    console.log(averageFromArray);
    
    return averageFromArray;
} 

//testy
getEvenAvarage([1,2,3,4,5,6,7]);// => 4
getEvenAvarage([1,1,1,1]);// => null
getEvenAvarage([2,8,3,7,4]); //=> 4.666


//tablice wielowymiarowe - zadanie 2

var task2Array = [
                  [1, 2, 3, 4],
                  [5, 6, 7, 8],
                  [9, 10, 11, 12]
            ];

// pkt. 1:

console.log('-- 1 --');
for (var i = 0; i < task2Array.length; i++){
    console.log(task2Array[i]);
}

// pkt. 2:
console.log('-- 2 --');
for (var i = 0; i < task2Array.length; i++){
    console.log(task2Array[i].length);
}

// pkt. 3:
console.log('-- 3 --');
for (var i = 0; i < task2Array.length; i++){
    for (var j = 0; j < task2Array[i].length; j++){
        console.log(task2Array[i][j]);
    }
}

//tablice wielowymiarowe - zadanie z wykladowca

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34]
];

function checkArray (array) {
    var tempArray = [];

    for (var i = 0; i < array.length; i++){
        console.log('1 petla for', array[i]);
        var returnValue = false;

        for (var j = 0; j < array[i].length; j++){
            console.log('2 petla for',array[i][j]);
            if (array[i][j] % 2 === 1) {
                returnValue = false;
                break;
            }else{
                returnValue = true;
            }
            //console.log(array[i][j]);
        }

        tempArray.push(returnValue);
    }

    return tempArray;  
}

console.log(checkArray(arr));

//tablice wielowymiarowe - zadanie 3

var arr = [
    [11, 12],
    [42, 2],
    [-4, -120],
    [0, 0],
    [1, 34]
];

function print2DArray (array) {
    for (var i = 0; i < array.length; i++){
        for (var j = 0; j < array[i].length; j++){
            console.log(array[i][j]);
        }
     }
}

print2DArray(arr);
