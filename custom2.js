



function handle(e){
	var inputTextValue = e.target.value;
    if(e.keyCode === 13){
    	var x = document.getElementsByClassName("yourCompany");
    	for (var i=0; i<x.length; i++) {
    		x[i].innerHTML = inputTextValue;
    	}
    	// document.getElementById("codeArea").style.display = 'block';
    	document.getElementById("codeArea").classList.add('horizTranslate');
    	// document.getElementById("passToCA").style.display = "none";
    	// document.getElementById("codeArea").style.background = 'red';
        // alert(inputTextValue);
    }

    return false;
}
