var sprawdzPoprawnosc = function()
{
	var imie = document.getElementById('imie').value;
	var email = document.getElementById('email').value;
	var nazwisko = document.getElementById('nazwisko').value;

	var char1 = imie.charAt(0);
	var char2 = nazwisko.charAt(0);

	var emailFormat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var checkEmail = emailFormat.test(String(email).toLowerCase());


	if(!(char1 == char1.toUpperCase()) || !(char2 == char2.toUpperCase()))
	{
		alert("Nazwisko lub imie nie zawiera wielkiej litery na początku");
		return;
	}
	else if(imie === "" || email === "" || nazwisko === "")
	{
		alert("Są puste pola");
		return;
	}
	else if(!checkEmail)
	{
		alert("Email ma nieprawidłowy format");
		return;
	}
	
	
	
	alert("Imie: " + imie + "\nNazwisko: " + nazwisko + "\ne-mail: " + email);
}



