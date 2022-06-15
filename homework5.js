function circle(Radius){
	var r = Radius;
	var D = 2*r;
	var C =D* Math.PI;
	var A = Math.PI * Math.pow(r,2);
	if (r>=0 ) {
		console.log("The radius of the circle is = "+ r);
		console.log("The diameter of the circle is = "+ D);
		console.log("The circumference of the circle is = "+ C);
		console.log("The Area of the circle is = "+ A);
	};
}
circle(6);
