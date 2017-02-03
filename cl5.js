/**
 * Created by Jacek on 2016-01-12.
 */

// 7 - zadanie 1
document.addEventListener("DOMContentLoaded", function(){
	var checkbox = document.querySelector('#invoice');
	var invoiceData = document.querySelector('#invoiceData');

	checkbox.addEventListener('click', function() {
		if(this.checked === true){
			invoiceData.classList.remove('hidden');
		}else{
			invoiceData.classList.add('hidden');
		}
	});
});
// 7 - zadanie 2
document.addEventListener("DOMContentLoaded", function(){
	var form = document.querySelector('form');
	var images = document.getElementsByClassName('os_image');

	form.addEventListener('submit', function(event){
		event.preventDefault();
		var selectedValue = this.elements[0].value;

		for(var i = 0; i < images.length; i++){
			if(images[i].getAttribute('alt') === selectedValue){
				images[i].style.display = "block";
			}else{
				images[i].style.display = "none";
			}
		}
	});
});
