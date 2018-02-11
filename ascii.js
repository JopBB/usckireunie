$( function() {
	$( "#draggable" ).draggable({
		start: function(){
			changeColorRed();
		},
    	drag: function(){
    		var locationSchacht = $("#schacht").offset();
    		var locationToompje = $("#draggable").offset();
    		var locationZak = $("#willyOnderToompje").offset();
  			if(locationToompje.left>=locationSchacht.left+144 && locationToompje.left<=locationSchacht.left+148 && locationToompje.top<= locationSchacht.top-16 && locationToompje.top >= locationSchacht.top-20 ){
  				removeInvis($("#willy"));
  			}else{
  				addInvis($("#willy"));
  			}
  			if(locationToompje.left<=locationZak.left-19 && locationToompje.left>=locationZak.left-23 && locationToompje.top<= locationZak.top-16 && locationToompje.top >= locationZak.top-20 ){
  				removeInvis($("#fichtl"));
  			}else{
  				addInvis($("#fichtl"));
  			}
  		},
  		stop: function(){
  			changeColorBlack();
  		}
	});
});

changeColorRed = function(){
	$(".redBlock").addClass("red")
}

changeColorBlack = function(){
	$(".redBlock").removeClass("red")
}

removeInvis = function(e){
	e.removeClass("invis")
}

addInvis = function(e){
	e.addClass("invis")
}