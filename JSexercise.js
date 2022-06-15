// JavaScript Document


document.writeln(" welcome to the world of programming in JS");

  
  function Name(){
	  
	  var name ;
	  name = window.prompt('PLEASE ENTER YOUR NAME');
//KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
	  var stNumb;
	  var intNumb;;
	  var stNumb2;
	  var intNumb2;
	  stNumb = window.prompt("PLEASE ENTER AN INTEGER");
	  intNumb = parseInt(stNumb);
	  
	   stNumb2 = window.prompt(" PLEASE ENTER AN INTEGER");
	  intNumb2 = parseInt(stNumb2);
	  var sum =  stNumb = window.prompt("PLEASE ENTER AN INTEGER");
	  intNumb = intNumb + intNumb2;
	  document.writeln("THE SUM OF THE TWU NUMBERS IS = "+sum);
//KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK	  
	  
	  
	  //var greet = A;
	  var period = 1;
	  
	  if( period > 12){
		  
		  document.body.innerHTML =+ "Goood morning "+name+"and welcome to the world of JS";
		  
		  }else if(period < 16){
			  
			  document.body.innerHTML =+ "Good afternoon "+ name+"and welcome to the world of JS";
			  
			  
			  }else {
				  document.body.innerHTML =+ "Goood evening "+name+"and welcome to the world of JS";
				  
				  }
	  
	  
	  
	  
	  
	  
	  }
	  Name();
	  
	  document.writeln("WELCOME TO JAVASCRIPT "+name);
	  
	  
	  
	  var duration = new Date();
	  var point = duration.getHours();
	  if (point > 8) {
		document.body.innerHTML += '<h3>please you came late for work today</h3>';
	}else{
		
		document.body.innerHTML += '<h3>awesome! you were punctual for work today</h3>';
		
		
		}