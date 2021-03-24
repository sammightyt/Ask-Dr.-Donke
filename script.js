var random;
var string;

function checkThing(){
	string = document.getElementById("input").value;

	if(string.charAt(string.length-1) == "?"){
		var d = ["Correctomundo!", "Wrong", "Yes", "Nope", "Definetley Not", "Maybe", "Of course!", "Dunno"];

		random = Math.floor(Math.random() * 7); 

		document.getElementById("input2").value = `${d[random]}`;
	} else{
		document.getElementById("input2").value = "Noob. I shall not respond. Put a question mark at the end and I shall talk."
	}
}