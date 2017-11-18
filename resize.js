$(document).ready(function(event){
	    resizeAmount=0;
	    small=false;
});

 $(window).on('resize', function(event){
 	console.log(resizeAmount)
 	if(resizeAmount>=6){
 		window.location.assign('wtfrudoin.html')
 	}
 	var windowWidth = $(window).width();
		 if(windowWidth < 500){
		 	if(small==false){
		 		resizeAmount++;
		 		small=true;
		 	}
		 }else if(windowWidth>1000){
		 	if(small==true){
		 		resizeAmount++;
		 		small=false;
		 	}
		 }
});