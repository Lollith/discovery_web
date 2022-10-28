
function show_alert() {

	var input1 = parseInt(document.getElementById('input1').value); // recup mon input
	var input2 = parseInt(document.getElementById('input2').value);
	if (isNaN(input1) || isNaN(input2) || input1 < 0  || input2 < 0)
	{
			alert("Error :(");
			return;
	}
	var operator = document.getElementById('operator').value;
// va chercher ma value indiquee, si non precisee valeur par default
	var result;
	switch(operator){
		case '+':
			result = input1 + input2;
			break;
		case '-':
			result = input1 - input2;
			break;
		case '*':
			result = input1 * input2;
			break;
		case '/':
			if (input2 == 0)
				result = "It's over 9000!";
			else
				result = input1 / input2;
			break;
		case '%':
			if (input2 == 0)
				result = "It's over 9000!";
			else
				result = input1 % input2;
			break;
	}
	alert("result: " + result);//cast mon int en string
	console.log(result); // affiche ds le terminal
}


setInterval(function(){
	alert("Please use me");

}, 30000);



//attention si je met une variable en dehors , le script va venir une seule fois la chercher =? va s effectuer 1 seule fois
// parseInt  passe une string en int