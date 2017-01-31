https://developer.mozilla.org/en/docs/Web/JavaScript/EventLoop
HASLA: eventloop / call stack

// funkcje zaawansowane - zadanie 2

function findMax () {
    var tempMax = 0;

    for (var i = 0; i < arguments.length; i++) {
        if (tempMax < arguments[i]){
            tempMax = arguments[i];   
        }
    }

    console.log(tempMax)
}

findMax(5, 9, 6, 4, 34, 56, 2, 3, 12312, 123323,2993293,1, 1235,465475,775);

// Napisz funckję countHello(), która jako parametr przyjmie liczbę całkowitą od 1-10. 
// W funkcji uruchom funkcję setInterval. Niech jego zadaniem będzie wypisywanie na konsoli 
// tekstu "Hello" oraz licznika, zliczającego, który raz już został uruchomiony setInterval. 
// Jeśli licznik osiągnie wartość podaną do funkcji jako parametr, powinien zostać usunięty setInterval.

// Kroki:

// 1. Tworzymy funkcje countHello(howMany) - funkcja musi przyjmowac jeden parametr
// 2. Tworzymy zmienna lokalna o nazwie counter, przypisujemy jej wartosc 0
// 3. Uruchamiamy funkcje setInterval - przypisujemy setInterval do jakiejs zmiennej (ktora przechowywac ID intervalu - do pozniejszego wykasowania) 
// 4. Ustawiamy setInterval na 1000ms
// 5. W setInterval odpalamay console.log(counter, "Hello");
// 6. W setInterval zwiekszamy counter o jeden -> counter++;
// 7. W setInterval ustawiamy warunek sprawdzajacy czy if(counter >= howMany) -> jezeli tak -> clearInterval(zmienna z pkt.3)

// funkcje zaawansowane - zadanie 3

// funkcje zaawansowane - zadanie 3

function countHello (howMany) {
    // sprawdzamy czy howMany jest w przedzial <1;10>
    if ( howMany < 1 || howMany > 10) {
        return;
    }
    var counter = 0;

    var interval = setInterval(function() {
        console.log(counter, "Hello");
        counter++;

        if (counter >= howMany) {
            clearInterval(interval);
        }
    }, 1000);
}

countHello(11);

