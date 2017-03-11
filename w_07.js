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


document.addEventListener('DOMContentLoaded', function () {

	var price = document.querySelector('#price');
	var allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
	var allIngridients = allCheckboxes[0];
	var ingridients = document.querySelectorAll('[data-price]');
	var clearAll = allCheckboxes[allCheckboxes.length - 1];
	var submit = document.querySelector('button');
});