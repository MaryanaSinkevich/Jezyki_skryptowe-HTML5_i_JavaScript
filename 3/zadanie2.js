function najw()
{
	var numbers = document.getElementById('input1').value;
	
	if(numbers.length > 7)
	{
		alert("Wprowadzono więcej niz 7 liczb");
		return;
	}

	else if (numbers.length < 7)
	{
		alert("Wprowadzono mniej niż 7 liczb");
		return;
	}
	
	for(var i = 0; i < numbers.length; i++) 
	{ 
		numbers[i] = parseInt(numbers[i], 10); 	
	} 
	
	var max = numbers[0];
	
	for(var i = 1; i < numbers.length; i++)
	{
		if(numbers[i] > max)
		{
			max = numbers[i];
		}
	}		
	
	alert("Największy element to " + max);
}

