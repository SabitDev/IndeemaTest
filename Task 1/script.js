/*
    Написати форму для вирахування решти при внесенні певної суми і
  ціни товару. У формі створити поля: “Сума” (де користувач вписує
  суму грошей, яку він віддає) та “Ціна” (де користувач вписує ціну
  товарів, що купує). При натисканні на кнопку “Повернути решту” -
  скріпт повинен вирахувати скільки здачі буде на 1 цент, 5 центів, 10
  центів, 25 центів, 50 центів і долари. Наприклад, я вношу 3.14 долари і
  ціна товару 0.99 долара, мені повинно повернути “Ваша решта: 2
  долари,15 центів.” (по номіналу 2 долари, 10 центів, 5 центів.)
*/

result.onclick = function() {
  var sum = +document.getElementById("sum").value;
  var price = +document.getElementById("price").value;
  var denominations = {
  	1   :"долларов", 
    0.5 :"центов",
    0.25:"центов",
    0.10:"центов",
    0.05:"центов",
    0.01:"центов"
 	};
  var result, output;

  if (sum >= price) {
    result = +(sum - price).toFixed(2);
  } else {
    alert("Not enough money");
    return false;
  }

  output = "Ваша решта: " + Math.trunc(result) + " долари " + +(result - Math.trunc(result)).toFixed(2) + " центів";

	for(var denomination in denominations) {
  	if (result >= denomination){
    	output = output + " " + Math.trunc(result / denomination) + "x" + denomination + " " + denominations[denomination];
	    result = +(result - Math.trunc(result / denomination) * denomination).toFixed(2);

    }
  }

  alert(output);
}
