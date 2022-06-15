function checkboard (y,x) {
	var row = y;
	var column  = x;
	var point = 0; 
	for(var i = 0; i < row; i++) {
		
		for(var j = 0; j < column; j++) {
		if (j % 2 ==0 && i % 2 != 0) {
			point = row;
		}else{
			point = column;
		}
	};
	
		console.log("**********");
		console.log(" **********");
	};
}
checkboard(5,5);