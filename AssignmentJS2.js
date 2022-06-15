 var odd = 1;
 for (var odd = 0; odd < 1001; odd++) {
 	if(odd%2 == 0){
 		console.log(odd);
 	}
 };




function Max (w,x,y,z) {
	var crop = w;
	var  bird = x;
	var tree = y;
	var fruit = z;
	max_val = crop;
	if (bird > max_val && bird > tree && bird > fruit) {
		max_val = x;
	}else if(tree > max_val && tree > fruit){
		max_val = y;
	}else if(fruit > max_val){
		max_val = z;
	}
	console.log("The maximum number is ="+max_val);
	return max_val;
}
Max(21,85,76,105);