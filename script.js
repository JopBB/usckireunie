		$(document).ready(function(event){
		    var windowWidth = $(window).width();
		    var windowHeight = $(window).height();
			if(windowWidth < 800){
	    		$('#navUnits').attr('data-toggle', 'collapse');
		        $('#navBarHeader').attr('data-target', '#bs-example-navbar-collapse-1');
	    		$('#navBarHeader').attr('data-toggle', 'collapse');
		        $('#navUnits').attr('data-target', '#bs-example-navbar-collapse-1');
			}
			else if(windowWidth == 1337 && windowHeight == 1337){
				$('.content').empty();
				$('.content').html('To be fair, you have to have a very high IQ to understand HTML. The syntax is extremely subtle, and without a solid grasp of theoretical physics most of the code will go over a typical h4k0rk1d\'s head. There’s also CSS\'s nihilistic outlook, which is deftly woven into its characterisation- its personal philosophy draws heavily from W3Schools\' literature, for instance. The actual nerds understand this stuff; they have the intellectual capacity to truly appreciate the depths of these languages, to realise that they’re not just useful- they say something deep about LIFE. As a consequence people who dislike HTML truly ARE idiots- of course they wouldn’t appreciate, for instance, the syntax of JavaScript\'s \'this\' keyword which itself is a cryptic reference to Turgenev’s Russian epic Fathers and Sons. I’m smirking right now just imagining one of those addlepated simpletons scratching their heads in confusion as Tim Berners Lee’s genius wit unfolds itself on their computer screens. What fools.. how I pity them. <br /> <br /> And yes, by the way, i DO have an HTML tattoo. And no, you cannot see it. It’s for the ladies’ eyes only- and even then they have to demonstrate that they’re within 5 IQ points of my own (preferably lower) beforehand. Nothin personnel kid')
			}
			else{
				$('#navUnits').removeProp('data-toggle');
				$('#navBarHeader').removeProp('data-toggle');
				$('#navUnits').removeProp('data-target');
				$('#navBarHeader').removeProp('data-target');
			}
        });

        $(window).on('resize', function(event){
    		var windowWidth = $(window).width();
			 if(windowWidth < 55){
				window.location.assign("https://www.youtube.com/watch?v=RnAMDg7IVWs");
			}
			else if(windowWidth < 800){
	    		$('#navUnits').attr('data-toggle', 'collapse');
		        $('#navBarHeader').attr('data-target', '#bs-example-navbar-collapse-1');
	    		$('#navBarHeader').attr('data-toggle', 'collapse');
		        $('#navUnits').attr('data-target', '#bs-example-navbar-collapse-1');
			}
			else{
				$('#navUnits').removeProp('data-toggle');
				$('#navBarHeader').removeProp('data-toggle');
				$('#navUnits').removeProp('data-target');
				$('#navBarHeader').removeProp('data-target');
				$('#logocontainer').empty();
				$('#logocontainer').html('<br />8===D<a href="sudoku.html">~~</a>');
			}
		});

