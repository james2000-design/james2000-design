var max_val = 0;


function max(x,y,z){

	var xx = x;
	var yy = y;
	var zz = z;

	max_val = xx;

	if(yy > max_val){

	max_val = y;

	}else if(zz > max_val){

	max_val = z;		
	}


	console.log("the highest number is =  "+max_val)
	return max_val;
}

max(120,30,540);