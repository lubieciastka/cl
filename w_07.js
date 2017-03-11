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

