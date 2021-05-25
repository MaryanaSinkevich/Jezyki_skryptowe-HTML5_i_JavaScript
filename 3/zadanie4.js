function nwd()
{
	var x = document.getElementById('x').value;
	var y = document.getElementById('y').value;
	var z;
	
	
	while(y) {
		z = y;
		y = x % y;
		x = z;
	}
	
	alert("NWD dwóch liczb to " + x);
}