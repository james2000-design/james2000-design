// JavaScript Document


	document.writeln("<br/><br/><br/>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH <br/>");
	document.writeln("BUILDING A CAREER IN PROGRAMMING REQUIRE PATIENT AND COMMITMENT");
	
	document.writeln( "<br/> ");
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH  G

	var date = new Date();
	var time = date.getHours();
	if (time < 12) {
		document.body.innerHTML += '<h1>FIRST GREETING: Good Morning, Sir Chris</h1>';
	}
	document.writeln( "<br/> ");
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH		G

	var date = new Date();
	var time = date.getHours();
	if ( time < 12 ) {
		document.body.innerHTML += '<h1>SECOND GREETING: Good Morning, Mr Chris</h1>';
	} else {
		document.body.innerHTML += '<h1>SECOND GREETING: Good Afternoon, Mr Chris</h1>';
	}
	document.writeln( "<br/> ");
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH		G

	function checkAnimal(){
		var name;
		name = window.prompt( "Please enter your name" );
		document.writeln("PROMPT GREETING 1:  Hello " + name + ", welcome to JavaScript programming!" );
	}
	checkAnimal();
	document.writeln( "<br/> ");

	//**************************************
	function namess(){
	var name2;
	name2 = window.prompt( "Please enter your name" );
document.writeln( "<h1>PROMPT GREETING 2: Hello " + name2 + ", welcome to JavaScript programming!</h1>" );
	}
	namess();
	document.writeln( "<br/> ");
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH		G

	function numbess(){
	firstNumber = window.prompt( "Enter first integer" );
	secondNumber = window.prompt( "Enter second integer" );
	number1 = parseInt( firstNumber );
	number2 = parseInt( secondNumber );
	var sum = number1 + number2;
	document.writeln( "THWE SUM OF THE TWO NUMBERS IS = "+sum );
	}
	numbess();
	document.writeln( "<br/> ");
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

	function windowObject(){
		document.body.innerHTML += "<p><b>innerHeight</b>: "+
		window.innerHeight + "</p>";
		
		document.body.innerHTML += "<p><b>innerWidth</b>: "+
		window.innerWidth + "</p>";
		
		document.body.innerHTML+= "<p><b>Color Depth</b>: "+
		window.screen.colorDepth + "</p>";
	}

	document.body.onload = windowObject ;
	document.writeln( "<br/> ");
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH



	var i = 1;
	while ( i < 11 ) {
		document.getElementById( "numbers" ).innerHTML +="<li>" + i + " x 3 = " + (i * 3) +"</li>";
		i ++;
	}
	
	
	
	
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

	function calculateArea( width, height ) {
		var area = width * height;
		
		document.writeln( "AREA IS [= "+ area);
		return area;
	}
	//
	
	function getValue(){
		var a = document.getElementById( "width" ).value;
		console.log("AREA = "+a);
	var calArea = calculateArea(document.getElementById( "width" ).value,	document.getElementById( "height" ).value);
		return calArea;
	}
	
	
	document.getElementById( "calc" ).onclick = getValue();
	
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
	
	
	document.getElementById( "calc" ).onclick = function(){
				calculateArea(
					document.getElementById( "width" ).value,
					document.getElementById( "height" ).value);
					
					document.writeln( "AREA IS [= "+ss);
			}
			
	
	document.getElementById( "calc" ).onclick = function(){
		var ss = calculateArea(
			document.getElementById( 'width' ).value,
			document.getElementById( 'height').value);
			document.writeln( "AREA IS [= "+ss);
		}
			
			
HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

	/*name( function(){
		return "Rob Larsen";
	});*/


