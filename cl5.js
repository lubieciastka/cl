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