function init(){
//add your javascript between these two lines of code
 

	var alertButton = document.getElementById("entrybutton")
	
	function alertFun() {
		
		var inBox = document.getElementById("entryinput");
		var outBox = document.getElementById("textoutput");
		alert("Patryk Oleskiewicz: " + inBox.value);
		outBox.innerHTML = inBox.value;
		
	}
	
		alertButton.addEventListener('click' , alertFun);
		
}





window.addEventListener('load', init);