$(document).ready(function(event){
	    randomNumber1 = Math.floor(Math.random()*(100)+1);
	    $('#randomNumber1').empty();
	    $('#randomNumber1').html(randomNumber1);
});

generateNumber2 = function(){
	randomNumber2 = Math.floor(Math.random()*(100)+1);
	$('#randomNumber2').empty();
    $('#randomNumber2').html(randomNumber2);
	if(randomNumber2==randomNumber1){
		window.location.assign('goodluck.html')
	}
}

checkSudoku = function(antwoord){
	if(antwoord == '41234321'){
		window.location.assign('memecountry.html')
	}
}