


var numbers = [12,4,23,45,67];

var min = numbers[0];
var max = numbers[0];
for (var i = 0; i < 5; i++) {
	if (numbers[i]< min) {
		min = numbers[i];
	};
	if(numbers[i]> max){
		max = numbers[i];
	}
	
}
console.log("set minimum value = " + min);
	console.log("set maximum value= " + max);