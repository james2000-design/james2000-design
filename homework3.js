function myMul(x,y){
	var count = x;
	var count1 = y;
	if((count % count1) == count1){
		console.log("The multiple of "+ count1 "is" + count);
	}else{
		console.log(" They are not multiples");
	}
}

myMul(64,8);