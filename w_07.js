var buttons = document.querySelectorAll('.moveBtn');
var list1 = document.querySelector('#list1');
var list2 = document.querySelector('#list2');

for (var i = 0; i < buttons.length; i++){
	buttons[i].addEventListener('click', function () {
		var listNumber = this.parentNode.parentNode.id;
		var li = this.parentNode;
		var temp = li.parentNode.removeChild(li);

		if (listNumber === 'list1'){	
			list2.appendChild(temp);

			return;
		}

		list1.appendChild(temp);
	});
}

// 7_inputy
// zadanie 1

var invoiceData = document.querySelector('#invoiceData');
var invoiceCheckbox = document.querySelector('#invoice');

invoiceData.style.display = 'none';

invoiceCheckbox.addEventListener('click', function () {
	if (this.checked === true) {
		invoiceData.style.display = 'block';
		return;
	}

	invoiceData.style.display = 'none';
});

//zadanie 2

/**
 * Created by Jacek on 2016-01-12.
 */

document.addEventListener('DOMContentLoaded', function () {
	var price = document.querySelector('#price');
	var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	var allIngridients = allCheckboxes[0];
	var ingridients = document.querySelectorAll('[data-price]');
	var clearAll = allCheckboxes[allCheckboxes.length - 1];
	var submit = document.querySelector('button');

	for ( var i = 0; i < ingridients.length; i++){
		ingridients[i].addEventListener('click', function(){
			updatePrice(sumAll());
			if (this.checked === false) {
				allIngridients.checked = false;
				return;
			}
			clearAll.checked = false;
		});
	}

	updatePrice(sumAll());

	clearAll.addEventListener('click', function () {
		for ( var i = 0; i < ingridients.length; i++){
			ingridients[i].checked = false;
		}

		allIngridients.checked = false;
		updatePrice(sumAll());
	});

	allIngridients.addEventListener('click', function () {
		for ( var i = 0; i < ingridients.length; i++){
			ingridients[i].checked = true;
		}

		clearAll.checked = false;
		updatePrice(sumAll());
	});

	function sumAll (){
		var tempSum = 0;

		for ( var i = 0; i < ingridients.length; i++){
			if (ingridients[i].checked === true) {
				tempSum += parseFloat(ingridients[i].dataset.price);
			}
		}

		return tempSum.toFixed(2);
	}

	function updatePrice (sumPrice) {
		price.innerHTML = sumPrice + "zł";
	}

});

// zadanie 3

document.addEventListener('DOMContentLoaded', function () {
 	var osImages = document.querySelectorAll('[data-os]');
 	var osSelect = document.querySelector('.form-control');
 	var button = document.querySelector('button');

 	hideAllImages();
	showSelectedImage();

 	button.addEventListener('click', function (event) {
 		event.preventDefault();
		hideAllImages();
 		showSelectedImage();
 	});

 	function hideAllImages () {
 		for ( var i = 0; i < osImages.length; i++ ) {
	 		osImages[i].style.display = 'none';
	 	}
 	}

 	function showSelectedImage () {
 		var selectedValue = osSelect.value;

 		for ( var i = 0; i < osImages.length; i++ ) {
 			if (osImages[i].dataset.os === selectedValue) {
 				osImages[i].style.display = '';
 			}
 		}
 	}
});

//zadanie 4
https://regex101.com/
 document.addEventListener('DOMContentLoaded', function () {
 	var email = document.querySelector('#email');
 	var name = document.querySelector('#name');
 	var surname = document.querySelector('#surname');
 	var pass1 = document.querySelector('#pass1');
 	var pass2 = document.querySelector('#pass2');
 	var agree = document.querySelector('#agree');
 	var button = document.querySelector('button');

 	button.addEventListener('click', function (event) {
 		if (validateEmail() === true &&
 			validateName() === true &&
 			validateSurname() === true &&
 			validatePasswordEqaulity() === true &&
 			validateCheckbox() === true &&
 			validatePassword() === true) {
 			// przepuszczamy
 		}else{
 			event.preventDefault();
 			console.log('aaa');
 		}
 	});

	//Email zawiera w sobie @
	function validateEmail () {
		if (email.value.indexOf('@') < 0 ) {
			//nieznalezlismy
			return false;
		}
		return true;
	}

	//Imię jest dłuższe niż pięć znaków.
	function validateName () {
		if (name.value.length <= 5 ) {
			//mniejsze
			return false;
		}
		return true;
	}

	//Nazwisko jest dłuższe niż pięć znaków.
	function validateSurname () {
		if (surname.value.length > 5 ) {
			//mniejsze
			return true;
		}
		return false;
	}

	//Hasło i hasło drugie są identyczne.
	function validatePasswordEqaulity () {
		return pass1.value === pass2.value;
	}

	//Checkbox musi być zaznaczony.
	function validateCheckbox () {
		return agree.checked;
	}

	//Warunek dla chętnych. Dodatkowe. Hasło ma mieć co 
	//najmniej pięć znaków (w tym co najmniej jedną liczbę i jedną literę).
	function validatePassword () {
		var passValue = pass1.value;

		if (passValue.length < 6) {
			return false;
		}

		var hasNumber = false;
		var hasLetter = false;

		for (var i = 0; i < passValue.length; i++){
			//sprawdzamy czy to jest numer, false => number
			if (isNaN(passValue[i]) === false) {
				hasNumber = true;
			}else {
				hasLetter = true;
			}
		}

		return hasNumber === true && hasLetter === true;
	}
});

//zadanie 5
document.addEventListener('DOMContentLoaded', function () {
	var team1 = document.querySelector('#team1');
	var points1 = document.querySelector('#points1');
	var team2 = document.querySelector('#team2');
	var points2 = document.querySelector('#points2');
	var button = document.querySelector('button');

	button.addEventListener('click', function (event) {
		event.preventDefault();
		if (validateTeams() === true && 
			validatePoints() === true ){

			var temp = document.createElement('tr');
			var td1 = document.createElement('td');
			var td2 = document.createElement('td');
			var td3 = document.createElement('td');

			td1.innerHTML = team1.value;
			td2.innerHTML = team2.value;
			td3.innerHTML = points1.value + ' - ' + points2.value;

			temp.appendChild(td1);
			temp.appendChild(td2);
			temp.appendChild(td3);

			document.querySelector('tbody').appendChild(temp);
		}
	});

	function validateTeams () {
		return team1.value !== team2.value;
	}

	function validatePoints () {
		return points1.value >= 0 && points2.value >= 0;
	}
});

//zadanie 6:
document.addEventListener('DOMContentLoaded', function () {
	var card = document.querySelector('#card');
	var type = document.querySelector('#type');
	var button = document.querySelector('button');

	card.addEventListener('keyup', function () {
		//Karty Visa zaczynają się od cyfry 4.
		if (this.value[0] === '4'){
			updateCardType('Visa');
			return;
		}

		//Karty Mastercard zaczynają się od cyfry 5.
		if (this.value[0] === '5'){
			updateCardType('Mastercard');
			return;
		}

		//Karty American Express zaczynają się od cyfry 3. 
		//Następną cyfrą musi być 4 lub 7.
		if (this.value[0] === '3' && 
			(this.value[1] === '4' || this.value[1] === '7')){
			updateCardType('American Express');
			return;
		}

		updateCardType('Zaba Pepe');
	});

	button.addEventListener('click', function (event) {
		event.preventDefault();
		
		// Karty Visa mają od 13 do 16 cyfr.
		if (type.innerHTML === "Visa" && 
			card.value.length >= 13 &&
			card.value.length <= 16){
			console.log('OK');
			return;
		}
		// Karty Mastercard mają równo 16 cyfr.
		if (type.innerHTML === "Mastercard" && 
			card.value.length === 16){
			console.log('OK');
			return;
		}
		// Karty American Express mają równo 15 cyfr.
		if (type.innerHTML === "American Express" && 
			card.value.length === 15){
			console.log('OK');
			return;
		}

		console.log("hola hola walidacja nie przeszla");
	});

	function updateCardType (cardType) {
		type.innerHTML = cardType;
	}
});


// Warsztaty - slider
document.addEventListener('DOMContentLoaded', function () {
	var nextPicture = document.querySelector('#nextPicture');
	var prevPicture = document.querySelector('#prevPicture');
	var list = document.querySelectorAll('.slider li');
	var currentImage = 0;

	showCurrentImage();

	nextPicture.addEventListener('click', function () {
		moveSlider(1);
	});

	prevPicture.addEventListener('click', function () {
		moveSlider(-1);
	});

	function moveSlider (direction) {
		hideCurrentImage();
		currentImage += direction;
		validateCurrentPosition();
		showCurrentImage();
	}

	function validateCurrentPosition () {
		if (currentImage < 0) {
			currentImage = list.length - 1;
		}

		if (currentImage === list.length) {
			currentImage = 0;
		}
	}

	function hideCurrentImage () {
		list[currentImage].classList.remove('visible');
	}

	function showCurrentImage () {
		list[currentImage].classList.add('visible');
	}
});

// warsztaty - galeria:
/**
 * Created by Jacek on 2015-12-16.
 */

document.addEventListener('DOMContentLoaded', function () {
	var list = document.querySelectorAll('.gallery li');
	var body = document.querySelector('body');

	for (var i = 0; i < list.length; i++){
		list[i].addEventListener('click', function () {
			createBigImage(this.firstElementChild.getAttribute('src'));
		});
	}

	function createBigImage (src) {

		/*
		 <div class="fullScreen">
		   <img src="./images/wrong.png">
		   <button class="close">Close</button>
		 </div>
		 */
		 var fullScreen = document.createElement('div');
		 fullScreen.classList.add('fullScreen');

		 var img = document.createElement('img');
		 img.setAttribute('src', src);

		 var button = document.createElement('button');
		 button.classList.add('close');
		 button.innerHTML = "Close";
		 
		 button.addEventListener('click', function () {
		 	fullScreen.parentElement.removeChild(fullScreen);
		 });

		 fullScreen.appendChild(img);
		 fullScreen.appendChild(button);
		 body.appendChild(fullScreen);
	}
});
// warsztaty - galeria - filtry - wersja basic:

document.addEventListener('DOMContentLoaded', function () {
	var list = document.querySelectorAll('#gallery img');
	var showButton = document.querySelector('#showButton');
	var hideButton = document.querySelector('#hideButton');
	var tagInput = document.querySelector('#tagInput');

	showButton.addEventListener("click", function () {
		var temp = tagInput.value;
		
		tagInput.value = '';
		for (var i = 0; i < list.length; i++) {
			if (list[i].dataset.tag.indexOf(temp) >= 0){
				list[i].classList.remove('invisible');
			}
		}
	});

	hideButton.addEventListener("click", function () {
		var temp = tagInput.value;

		tagInput.value = '';
		for (var i = 0; i < list.length; i++) {
			if (list[i].dataset.tag.indexOf(temp) >= 0){
				list[i].classList.add('invisible');
			}	
		}
	});
});

// warsztaty - galeria - filtry - dodatkowe:

document.addEventListener('DOMContentLoaded', function () {
	var list = document.querySelectorAll('#gallery img');
	var showButton = document.querySelector('#showButton');
	var hideButton = document.querySelector('#hideButton');
	var tagInput = document.querySelector('#tagInput');

	showButton.addEventListener("click", function () {
		var temp = tagInput.value.split(' ');
		
		tagInput.value = '';
		for (var i = 0; i < list.length; i++) {
			for (var j = 0; j < temp.length; j++){
				if (list[i].dataset.tag.indexOf(temp[j]) >= 0){
					list[i].classList.remove('invisible');
				}	
			}
		}
	});

	hideButton.addEventListener("click", function () {
		var temp = tagInput.value.split(' ');
		
		tagInput.value = '';
		for (var i = 0; i < list.length; i++) {
			for (var j = 0; j < temp.length; j++){
				if (list[i].dataset.tag.indexOf(temp[j]) >= 0){
					list[i].classList.add('invisible');
				}	
			}
		}
	});
});

// warsztaty - menu 
document.addEventListener('DOMContentLoaded', function () {
	var menu = document.querySelectorAll('.nav > ul > li');

	for (var i = 0; i < menu.length; i++) {
		menu[i].addEventListener('mouseover', function () { 
			toggleMenu(this, 'block');
		});

		menu[i].addEventListener('mouseout', function () { 
			toggleMenu(this, 'none');
		});
	}

	function toggleMenu (element, display) {
		var temp = element.children;

		if (temp.length > 0) {
			temp[0].style.display = display;
		}
	}
});


//warsztaty - tooltip

document.addEventListener('DOMContentLoaded', function () {
	var menu = document.querySelectorAll('.nav > ul > li');

	for (var i = 0; i < menu.length; i++) {
		menu[i].addEventListener('mouseover', function () { 
			toggleMenu(this, 'block');
		});

		menu[i].addEventListener('mouseout', function () { 
			toggleMenu(this, 'none');
		});
	}

	function toggleMenu (element, display) {
		var temp = element.children;

		if (temp.length > 0) {
			temp[0].style.display = display;
		}
	}
});

//css
.tooltip {
    text-decoration: underline;
    position: relative;
    display: inline-block;
}

.tooltipText {
    position: absolute;
    top: 100%;
    display: block;
    color: white;
    border: solid black 1px;
    z-index: 1;
    padding: 10px;
    background: darkblue;
    margin-top:15px;

    -webkit-box-shadow: 0px 2px 0px 10px rgba(255,0,204,1);
    -moz-box-shadow: 0px 2px 0px 10px rgba(255,0,204,1);
    box-shadow: 0px 2px 0px 10px rgba(255,0,204,1);
}

.tooltipText::after{
    content: '';
    position: absolute;
    left: 0;
    top:-15px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 15px 20px 15px;
    border-color: transparent transparent darkblue transparent;
}

