



function friends (A,B,C,D,X,Y) {
	var EMeka = A;
	var nux = B;
	var josiah = C;
	var Francis = D;
	var John = X;
	var JAMES = Y;
	var sum = A + B + C + D + X +Y;
	var ave = sum/6
	console.log(sum);
	console.log(ave);
	if(JAMES > ave) {
		console.log("James is older than his friends");
	}else if(JAMES < ave){
		console.log("James is the youngest in the group");
	}else{
		console.log("They are of the same age grade");
	}
}
friends(23,28,27,24,23,21);