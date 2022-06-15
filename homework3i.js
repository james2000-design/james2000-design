function max(x,y) {
	var count = x;
	var count1 = y;
	if((count % count1) == 0){
		console.log("The multiple of "+ count1 +" is " + count);
	}else{
		console.log("They are not multiples");
	}
}


max(64,10);