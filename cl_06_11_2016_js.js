// 4_eventy - zadanie 3
document.addEventListener("DOMContentLoaded", function(){
	var buttons = document.getElementsByTagName('button');

	for(var i = 0;i < buttons.length; i++){
		buttons[i].addEventListener('click', function(event){
			var span = this.nextElementSibling.querySelector('span');
			span.innerHTML = parseInt(span.innerHTML, 10) + 1;
		});
	}
});

//5 - poruszanie sie po DOM - zadanie 1
document.addEventListener("DOMContentLoaded", function(){
	var buttons = document.getElementsByClassName('button');

	for(var i = 0;i < buttons.length; i++){
		buttons[i].addEventListener('click', function(event){
			this.nextElementSibling.classList.toggle('hidden');
		});
	}
});

//5 - poruszanie sie po DOM - zadanie 2
document.addEventListener("DOMContentLoaded", function(){
	var buttons = document.getElementsByClassName('button');
	for(var i = 0;i < buttons.length; i++){
		buttons[i].addEventListener('click', function(event){
			var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

			this.parentElement.style.backgroundColor = randomColor;
		});
	}
});


// 6 - tworzenie nowych elementow - zadanie 1


document.addEventListener("DOMContentLoaded", function(){
	var button = document.querySelector('a');
	var counter = 0;

	button.addEventListener('click', function(){
		var newLi = document.createElement('li');

		newLi.innerHTML = "Do tej pory bylo " + counter + " elementow";
		counter++;

		document.querySelector('ul').appendChild(newLi);
	});
});

// 6 - tworzenie nowych elementow - zadanie 2

document.addEventListener("DOMContentLoaded", function(){
	var button = document.getElementById('addBtn');

	button.addEventListener('click', function(){
		var orderId = document.getElementById('orderId');
		var item = document.getElementById('item');
		var quantity = document.getElementById('quantity');
		var tr = document.createElement('tr');

		tr.innerHTML = '<td>' + orderId.value + '</td><td>' 
						+ item.value + '</td><td>' + quantity.value +'</td>';

		document.getElementById('orders').appendChild(tr);

		orderId.value = '';
		item.value = '';
		quantity.value = '';
	});
});




