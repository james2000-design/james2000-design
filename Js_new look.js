// JavaScript Document

	document.writeln("Here is some text from an external file.");
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

	var date = new Date();
	var time = date.getHours();
	if (time < 12) {
		document.body.innerHTML += '<h1>Good Morning</h1>';
	}
	
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

	var date = new Date();
	var time = date.getHours();
	if ( time < 12 ) {
		document.body.innerHTML += '<h1>Good Morning</h1>';
	} else {
		document.body.innerHTML += '<h1>Good Afternoon</h1>';
	}
	
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

/*	<p>Enter the name of your favorite type of animal that stars in a cartoon:</p>
	<form>
	<form>
		<input type="text" name="txtAnimal" /><br />
		<input type="button" value="Check animal" onclick="checkAnimal()" />
	</form>*/
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

	var i = 1;
	while ( i < 11 ) {
		document.getElementById( "numbers" ).innerHTML +="<li>" + i + " x 3 = " + (i * 3) +"</li>";
		i ++;
	}
	
	
	
	
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

	function calculateArea( width, height ) {
		var area = width * height;
		
		console.log("AREA = "+area);
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
	
	
/*	document.getElementById( "calc" ).onclick = function(){
				console.log( calculateArea(
					document.getElementById( "width" ).value,
					document.getElementById( "height" ).value));
			}*/
			
	//
/*	document.getElementById( "calc" ).onclick = function(){
			document.writeln( "<h2> "+ calculateArea(
			document.getElementById( 'width' ).value,
			document.getElementById( 'height').value)+"</h2>");
		}*/
			
			
//HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH

	name( function(){
		return "Rob Larsen";
	});


