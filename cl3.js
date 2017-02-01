/**
 * Created by Jacek on 2016-01-11.
 */

// js news
// js news: after hours
// wspolne programowanie
// html & css pierwsza praca
// nofluffjobs
// linkedin!!!!

document.addEventListener("DOMContentLoaded", function(){

	var ex1 = document.querySelector('.exercise.ex1');

	var ex1chrome = ex1.querySelector('.chrome');
	var ex1firefox = ex1.querySelector('.firefox');
	var ex1edge = ex1.querySelector('.edge');

	ex1firefox.style.backgroundImage = 'url(assets/img/firefox.png)';
	ex1edge.style.backgroundImage = 'url(assets/img/edge.png)';

	var ex1chromeLink = ex1.querySelector('.chrome + a');
	var ex1edgeLink = ex1.querySelector('.edge + a');
	var ex1firefoxLink = ex1.querySelector('.firefox + a');

	ex1chromeLink.innerHTML = "Chrome";
	ex1edgeLink.setAttribute("href", "http://www.edge.pl");

	ex1firefoxLink.innerHTML = "Firefox";
	ex1firefoxLink.setAttribute("href", "http://firefox.pl");

	ex1chrome.style.width = "100px";

	//zadanie 2

	var name = document.getElementById('name');
	var fav_color = document.getElementById('fav_color');
	var fav_meal = document.getElementById('fav_meal');

	name.innerHTML = "Jakub Chamicewicz to ja";
	fav_color.innerHTML = "niebieski";
	fav_meal.innerHTML = "pizzzuszka giuseppe kebab";


	//zadanie 3
	var ex3 = document.querySelector('.exercise.ex3');

	var ex3ul = ex3.querySelector('ul');
	ex3ul.classList.add('menu');

	var ex3li = ex3ul.querySelectorAll('li');

	for (var i = 0; i < ex3li.length; i++){
		ex3li[i].classList.add('menuElement');
	}

	var allError = document.querySelectorAll('.error');

	for (var i = 0; i < allError.length; i++){
		allError[i].classList.remove('error');
	}	

	var ex5li = document.querySelectorAll('.ex5 li');

	console.log(ex5li);

	for ( var i = 0; i < ex5li.length; i++){
		if (ex5li[i].dataset.direction === undefined){
			ex5li[i].dataset.direction = "up";
		}

		if (i % 2 === 1){
			ex5li[i].style.backgroundColor = "#00ff00";
		}

		if (i === 4){
			ex5li[i].classList.add('big');
		}

		if (i % 3 === 2){
			ex5li[i].style.borderBottom = "20px dotted #f0f";
		}

		// console.log(ex5li[i].dataset.direction);
	}
});

document.addEventListener("DOMContentLoaded", function() {

	var parents = document.getElementsByClassName('parent');

	for (var i = 0; i < parents.length; i++){
		parents[i].addEventListener('mouseover', function () {
			var children = this.querySelector('.children');
			
			children.style.display = 'block';
		});
		
		parents[i].addEventListener('mouseout', function () {
			var children = this.querySelector('.children');

			children.style.display = 'none';
		});
	}
});

document.addEventListener("DOMContentLoaded", function() {

	var parents = document.getElementsByClassName('parent');

	for (var i = 0; i < parents.length; i++){
		parents[i].addEventListener('mouseover', function () {
			var children = this.querySelector('.children');
			
			children.style.display = 'block';
		});
		
		parents[i].addEventListener('mouseout', function () {
			var _this = this;
			hideChildrenElement();

			function hideChildrenElement () {
				var children = _this.querySelector('.children');

				children.style.display = 'none';
			}
		});
	}
});