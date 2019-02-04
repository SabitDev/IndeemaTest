/*
	Написати власну імплементацію модального вікна. Створити HTML
сторінку з кнопкою “Open Modal Window”, після натискання на
кнопку- повинно з’являтись модальне вікно (HTML модального вікна
повинен автоматично генеруватися, а не бути вже імплементованим в
HTML). Вікно має мати кнопку для закриваннтя самого себе, після чого
його HTML повинен бути видаленим з DOM-дерева.
* Реалізувати функціонал, який дозволяє створити декілька модальних
вікон і видалити їх у разі закриття конкретного вікна.
* Реалізувати анімацію за допомогою CSS3 при відкриванні і
закриванні модального вікна (плавна поява і плавне закривання вікна)
*/

var currentPopup  = 0;

function createPopup() {
	var box = document.createElement("div");
	box.classList.add("popup");

	var closeBox = document.createElement("div");

	closeBox.innerHTML = "&times";
	closeBox.classList.add("close");
	closeBox.setAttribute("onclick", "deletePopup(this)");
	box.appendChild(closeBox);

	box.innerHTML += "<h3>Popup number " + ++currentPopup + "</h3>";
	box.innerHTML += "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>";
	
	document.body.appendChild(box);
}

function deletePopup(obj) {

	var animatePopup = setTimeout(function() {
	  if (obj.parentElement.style.opacity == 0) {
	    clearTimeout(animatePopup);
	  }
	  obj.parentElement.style.opacity -= 0.1;
	}, 100)

	setTimeout(function() {
	    obj.parentElement.remove();
	}, 1000)
}