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


/**
 * Created by Jacek on 2016-01-11.
 */

 // mail: jakub@chamicewicz.com

document.addEventListener("DOMContentLoaded", function() {
 //  	Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio nazwanych
 //   	zmiennych: 1. Element o id home (na dwa sposoby). 2. Pierwszy element li 
 //nieposiadający atrybutu data-direction. 3. Pierwszy element o klasie block.

	// Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiedni element. 
	// Pamiętaj, żeby używać funkcji, które wyszukują tylko jeden element.

	var home1 = document.getElementById('home');
	var home2 = document.querySelector('#home');

	console.log(home1, home2);

	var li = document.querySelector('li:not([data-direction])');

	console.log(li);

	var block = document.querySelector('.block');

	// console.log(block);


	//Wyszukaj na stronie następujące elementy i zapisz je do odpowiednio 
	//nazwanych zmiennych: 
	//1. Wszystkie elementy li znajdujące się w tagu nav. 
	//2. Wszystkie paragrafy należące do wszystkich elementów div. 
	//3. Wszystkie divy znajdujące się w tagu article.

	//Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. 
	//Pamiętaj, żeby używać funkcji, które wyszukują wiele elementów. 
	//Za każdym razem wypisz w konsoli, ile znalazłeś elementów.

	var allLiInNav = document.querySelectorAll('nav li');
	console.log(allLiInNav);

	var allPInDivs = document.querySelectorAll('div p');
	console.log(allPInDivs);

	var allDivInArticle = document.querySelectorAll('article div');
	console.log(allDivInArticle);


	//zadanie 3
	// Wyszukaj na stronie i zapisz do odpowiednio nazwanej zmiennej tag article o klasie first.
	// W kolejnym etapie:
	// wypisz w konsoli, ile elementów h1 znajduje się w tym tagu.
	// wyszukaj w nim wszystkie elementy o klasie oferts, przeiteruj je i wypisz nazwy ich tagów w konsoli,
	// wyszukaj w nim wszystkie elementy div, przeiteruj je i wypisz nazwy ich klas w konsoli.
	// Pamiętaj, żeby za każdym razem sprawdzić, czy wczytałeś odpowiednie elementy. Pamiętaj, żeby używać 
	// funkcji, które wyszukują wiele elementów. Za każdym razem wypisz w konsoli, ile jest znalezionych przez Ciebie elementów.

	var articleFirst = document.querySelector('article.first');
	console.log(articleFirst);

	var allH1inArticleFirst = articleFirst.getElementsByTagName('h1');
	console.log(allH1inArticleFirst.length);

	var ofertsInArticleFirst = articleFirst.getElementsByClassName('oferts');
	console.log(ofertsInArticleFirst);

	for (var i = 0; i < ofertsInArticleFirst.length; i++){
		console.log(i, ofertsInArticleFirst[i], ofertsInArticleFirst[i].tagName);
	}

	var allDivsInArticleFirst = articleFirst.getElementsByTagName('div');

	console.log(allDivsInArticleFirst);

	for (var i = 0; i < allDivsInArticleFirst.length; i++){
		console.log(i, allDivsInArticleFirst[i], allDivsInArticleFirst[i].className);
	}	

	
	// zadanie z wykladowca

	var title = document.querySelector('.title');

	function getDataAnimation (element) {
		var dataAnimationValue = element.getAttribute('data-animation');
		
		return dataAnimationValue;
	}

	getDataAnimation(title);
});


