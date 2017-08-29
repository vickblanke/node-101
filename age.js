
function increaseAge(myAge) {
	return myAge + 1;
}

function checkAge(myAge) {
	if (myAge < 21) {
		return("can't drink");
	} else if (myAge == 21) {
		return("legaly can drink");
	} else {
		return("old but can drink");
	}
}

var age = 20;

var drinkStatus = checkAge(age);

console.log(drinkStatus);

var newAge = increaseAge(age);

console.log(newAge);

drinkStatus = checkAge(newAge);

console.log(drinkStatus);