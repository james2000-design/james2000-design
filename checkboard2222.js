// JavaScript Document


function checkerborad (x) {
	var y = x;
	for(y = 0; y < 11; y++){
		if(y % 2 != 0){
			console.log("**********");
		}else{
			console.log(" **********");
		}
			
	}
}
checkerborad(10);