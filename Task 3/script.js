  /*
      Написати таблицю, де можна додавати дані через форму, редагувати
    дані і видаляти будь-який row. Таблиця повинна містити наступні
    поля: ім’я, прізвище, e-mail. Повинна бути валідація поля’’e-mail.’’ і
    дата створення має генеруватися автоматично.
    * ​Реалізувати можливість виділяти декілька row і видаляти їх.
  */

function addRow() {
	var name = document.getElementById('name').value;
	var surname = document.getElementById('surname').value;
	var email = document.getElementById('mail').value;
	if (!validateEmail(email)) {
	        alert("invalid");
	        return false;
	    }
	var row = document.createElement("tr");
	row.innerHTML = "<td><input type='checkbox'></td>";
	row.innerHTML += "<td>" + name + "</td>";
	row.innerHTML += "<td>" + surname + "</td>";
	row.innerHTML += "<td>" + email + "</td>";
	row.innerHTML += "<td onclick='getRow(this)'>Edit</td>";
	table.appendChild(row);
}

function getRow(obj) {
    var record = obj.parentElement;
    var updateName = record.children[1];
    var updateSurname = record.children[2];
    var updateEmail = record.children[3];
    document.getElementById("name").value = updateName.innerText;
    document.getElementById("surname").value = updateSurname.innerText;
    document.getElementById("mail").value = updateEmail.innerText;



    var btn = document.getElementById("update-button");
    btn.onclick = function () {
      if (!validateEmail(document.getElementById("mail").value)) {
        alert("invalid");
        return false;
    }

      record.innerHTML = "<td><input type='checkbox'></td>";
      record.innerHTML += "<td>" + document.getElementById("name").value + "</td>";
      record.innerHTML += "<td>" + document.getElementById("surname").value + "</td>";
      record.innerHTML += "<td>" + document.getElementById("mail").value + "</td>";
      record.innerHTML += "<td onclick='getRow(this)'>Edit</td>";

      document.getElementById("name").value = document.getElementById("surname").value = document.getElementById("mail").value = "";
    }
}

function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

function deleteRows() {
	var inputs = document.getElementById("table").getElementsByTagName("input");
	for (var i = 1; i < inputs.length; i++){
	  if (inputs[i].checked) {
	    inputs[i].parentElement.parentElement.remove();
	    i--;
	  }
	}
}
var selectAll = document.getElementById("select-all");

selectAll.onclick = function () {
  var inputs = document.getElementById("table").getElementsByTagName("input");

  for (var i = 1; i < inputs.length; i++){

      if (inputs[i].checked == true) {
        inputs[i].checked = inputs[0].checked = false;
      } else {
        inputs[i].checked = inputs[0].checked = true;
      }
    }
}