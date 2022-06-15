// JavaScript Document


document.writeln();


min_val =0;

function min(a,b,c,x,y) {
	
	var AA  =  a;
	var BB  =  b;
	var CC  =  c;
	var XX  =  x;
	var YY  =  y;

	min_val= AA;

	if(BB < min_val){

	min_val=b;


	}else if(CC< min_val){


	min_val = c;


	}else if(XX<min_val){


	min_val=x;


	}else if(YY<min_val){


	min_val=y;

	document.body.innerHTML=+ "The minimum number is  ="+min_val ;

	return min_val;

	}
}

min(23,45,41,25,9);




var num1 = 46;
var num2  = 44;
var num3 = 1
// IOI9PO87JNJ;/;/44;

if(num1> num2 && num1>num3){


	document.body.innerHTML =+"The highest value is ="+num1 ;

}else if(num1 < num2 && num2>num3){


	document.body.innerHTML =+"The highest value is="+num2 ;


}else if(num1< num3 && num2<num3){

	document.body.innerHTML =+"The highest value is ="+num3 ;

}else if(num1==num2 && num2==num3){

	document.body.innerHTML=+"The three numbers are equal" ;
}


var gen = "female";
var age = 20;

if(age >= 23 && gen == "female"){
	document.body.innerHTML =+ "YOU ARE A MATURED WOMAN. YOU CAN MARRY" ;
}else if (age >= 25 && gen == "male"){
	console.log("YOU ARE A MATURED MAN, YOU CAN MARRY");
}else if(age < 25 && gen == "male"){
	document.body.innerHTML =+"YOU ARE still a boy you can not marry" ;
}else if(age >= 25 || gen == "female" ){
	document.body.innerHTML =+"YOU have my blessing to get married";
}
