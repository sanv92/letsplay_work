$(document).ready(function() {


$('#galerii ul li:nth-child(3n+4)').css({ 'margin' : '0' });


//menu
$('footer .copy').wrap('<div></div>');


var x_width = $(window).width();
var xxwidth = $(window).width();



if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {

 // some code..
 
} else {

	if(x_width > 520){

	$(function(){
	$(window).scroll(function(){

	$('#pedro').text($(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() + 100);

		if($(window).scrollTop() >= 37){
		
			if($('nav[role=navigation]').css('position') === 'fixed') {} else {
			$('nav[role=navigation]').fadeOut(0);

				$('nav[role=navigation]').slideDown();
			}
			
			$('nav[role=navigation]').css({ 'position' : 'fixed' });
			$('nav[role=navigation] img').css({ 'display' : 'block' });
			
					$('nav[role=navigation] ul:first-child > li a').css({ 'font-size' : '16px' });
			
			$('nav[role=navigation] div > ul:first-child li ul li a').css({ 'padding' : 0, 'margin' : 0, 'font-size' : '0.85em', 'line-height' : 0 });
			$('.lang li a').css({ 'font-size' : '14px', 'padding' : '0' });

			if(xxwidth > 500 && xxwidth < 960){
				$('nav[role=navigation] div > ul:first-child').css({ 'margin' : '0 0 0 120px' });
			}

		} else {
		
			$('nav[role=navigation]').css({ 'position' : 'absolute' });
			$('nav[role=navigation] img').css({ 'display' : 'none' });

					$('nav[role=navigation] ul:first-child > li a').css({ 'font-size' : '18px' });

			$('nav[role=navigation] div > ul:first-child li ul li a').css({ 'padding' : 0, 'margin' : 0, 'font-size' : '0.85em', 'line-height' : 0 });
			$('.lang li a').css({ 'font-size' : '14px', 'padding' : '0' });
			
			if(xxwidth > 500 && xxwidth < 960){
				$('nav[role=navigation] div > ul:first-child').css({ 'margin' : '0' });
			}

		}




	var sdegree = 0;

	   
			sdegree = $(document).scrollTop() / 6;
			betop = 8.3 + $(document).scrollTop() / 150;
			betop2 = $(document).scrollTop() / 10;
			
			if(sdegree < 80) {
					var srotate = "rotate(" + '-' + sdegree + "deg)";

				$("#bear").css({'-moz-transform' : srotate, '-o-transform' : srotate, '-webkit-transform' : srotate, '-ms-transform' : srotate, 'transform' : srotate,
				'margin': '-' + betop + 'em 0 0 0' + betop2 + 'px'

				});
				   
			}
	/*
	//out footer nav
			tediitop = 270 + $(document).scrollTop() / 100 + 'px auto';
			tediitop = $(document).scrollTop() - $(document).scrollTop() / 30;

			winhax = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() + 100;
			tediiup = 270 - winhax / 4;
			
			winhax2 = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() - 65;
			treeup = 12.8 - winhax2 / 40;
			
			winhax3 = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() - 35;
			behindup = -3.2 + winhax3 / 80;
			
			winhax4 = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() + 270;
			rabbitup = 12.7 + winhax4 / 80;
			rabbitup2 = 21.8375 - winhax4 / 80;
	*/

	//footer nav
			tediitop = 270 + $(document).scrollTop() / 100 + 'px auto';
			tediitop = $(document).scrollTop() - $(document).scrollTop() / 30;
		
			winhax = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() + 90;
			tediiup = 315 - winhax / 4;
			
			winhax2 = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() - 165;
			treeup = 13.8 - winhax2 / 40;
			
			winhax3 = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() - 35;
			behindup = -3.2 + winhax3 / 480;
			
	/*
			winhax4 = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() + 270;
			rabbitup2 = 15.5 - winhax4 / 125;
			rabbitup3 = 13 + winhax4 / 125;
	*/

			winhax4 = $(document).scrollTop() - $(document).height() + $(window).height() + $('footer').height() + 270;
			rabbitup2 = 23.7 - winhax4 / 90;
			
			
			rabbitup3 = 13.4 + winhax4 / 140;
			
			if(rabbitup3 >= 15.376) {
				rabbitup = 13 + winhax4 / 125;
			}

		if($(document).scrollTop() >= $(document).height() - $(window).height() - $('footer[role=contentinfo]').innerHeight() - 150) {

			$(".teddi").css({ 'margin' : tediiup + 'px auto 0 -5px' });
			$(".treedd").css({ 'margin' : treeup + 'em 0 0 0.6em' });
			$(".behinddd").css({ 'margin' : '19.5em 0 0 ' + behindup + 'em' });
			$(".rabbit").css({ 'margin' : rabbitup3 + 'em 0 0 ' + rabbitup2 + 'em' });

		}




	  });
	});
	
//gallery by Sander
//all dom number
var gallen = $('#galcat ul li').size() -1;

$('#lightoff').css({ 'opacity' : 0.8 });
	$('#galcat ul li').click(function(e){
	
	//click dom number
	console.log($(this).index());
	
	e.preventDefault();
	e.stopPropagation();
		var href = $(this).children('a').attr('href');
		var alt = $(this).children('a').children('img').attr('alt');

$(this).addClass('spilt');
$(this).css({ 'border' : '3px solid #1ea3f7' });
$('#close').fadeIn('fast');
		if ($('#lightoff').is(":hidden")) {
			$('#lightoff').fadeIn("slow");
				$('<div class="tooltip">').html('<div id="wrnav"><div id="galleft"></div><img src="' + href + '" alt="" /><div id="galright"></div></div><div id="alt">' + alt + '</div></div>').appendTo('body').fadeIn('fast');
				

		$('#galright').click(function() {
			//console.log($('.spilt').index());
			var galnum = $('.spilt').index();
			if(gallen == galnum) {} else {
			var childimgprv = $(".spilt").next().addClass("spilt");
			$(".spilt").prev().removeClass("spilt");
			var gpilt = $(childimgprv).children('a').attr('href');
			var piltnimi = $(childimgprv).children('a').children('img').attr('alt');
			$(childimgprv).prev().removeAttr('style');
			$(childimgprv).css({ 'border' : '3px solid #1ea3f7' });
			$('.tooltip img').removeAttr('src');
			$('.tooltip #alt').text(piltnimi);
			$('.tooltip img').attr('src', gpilt);
			}
		});


$('#galleft').click(function(){
	//console.log($('.spilt').index());
	var galnum = $('.spilt').index();
		if(0 == galnum) {} else {
			var childimgprv = $(".spilt").prev().addClass("spilt");
			$(".spilt").next().removeClass("spilt");
			var gpilt = $(childimgprv).children('a').attr('href');
			var piltnimi = $(childimgprv).children('a').children('img').attr('alt');
			$(childimgprv).next().removeAttr('style');
			$(childimgprv).css({ 'border' : '3px solid #1ea3f7' });
			$('.tooltip img').removeAttr('src');	
			$('.tooltip #alt').text(piltnimi);	
			$('.tooltip img').attr('src', gpilt);
		}
});
		
		} else {
			$('#lightoff').fadeOut("slow");
			$('<div class="tooltip">').html('');
			$('#galcat ul li').removeAttr('class');
		}
		//ainult nupu voimalus kinni panna
	}), $("#close").click(function(){
		//molemad voimalused, nupp ja vaba kohta vajutamine
		//$("#lightoff, #close").click(function(){
			$('#lightoff').fadeOut("slow");
			$('.tooltip').fadeOut("fast");
			$('<div class="tooltip">').html('');
			$('#galcat ul li').removeAttr('class');
			$('.tooltip').remove();
			$('#galcat ul li').removeAttr('style');
			$('#close').fadeOut('fast');
	});


	
    $('#licon').click(function(e){

		if ($('#lightoff').is(":hidden")) {
			$('#lightoff').fadeIn("slow");
		} else {
			$('#lightoff').fadeOut("slow");
		}
		
    });


	}

}

    $('#nav').click(function(e){ //fader
        e.preventDefault();
        e.stopPropagation();
        $('nav[role=navigation] div > ul:first-child').slideToggle('fast');
    });
		
$(function() {
    $("header[role=banner] h1 img")
        .mouseover(function() { 
            var src = $(this).attr("src").match(/[^\.]+/) + "-h.png";
            $(this).attr("src", src);
        })
        .mouseout(function() {
            var src = $(this).attr("src").replace("-h.png", ".png");
            $(this).attr("src", src);
        });
});


				function generatePages() {
					var _total, i, _link;
					
					_total = $( "#carousel" ).rcarousel( "getTotalPages" );
					
					for ( i = 0; i < _total; i++ ) {
						_link = $( "<a href='#'></a>" );
						
						$(_link)
							.bind("click", {page: i},
								function( event ) {
									$( "#carousel" ).rcarousel( "goToPage", event.data.page );
									event.preventDefault();
								}
							)
							.addClass( "bullet off" )
							.appendTo( "#pages" );
					}
					
					// mark first page as active
					$( "a:eq(0)", "#pages" )
						.removeClass( "off" )
						.addClass( "on" )
						.css( "background-image", "url('assets/images/sliderh.png')" );

				}

				function pageLoaded( event, data ) {
					$( "a.on", "#pages" )
						.removeClass( "on" )
						.css( "background-image", "url('assets/images/sliderb.png')" );

					$( "a", "#pages" )
						.eq( data.page )
						.addClass( "on" )
						.css( "background-image", "url('assets/images/sliderh.png')" );
				}				

				$( "#carousel" ).rcarousel({
					auto: {enabled: true},
					start: generatePages,
					pageLoaded: pageLoaded
				});



//gallery

	$("#gallery").rcarousel({
		visible: 4,
		step: 1,
		
		width: 238,
		height: 136,
		
		speed: 500,
			orientation: "horizontal",
			auto: {
				enabled: false,
				direction: "next",
				interval: 400000
			},
			startAtPage: 0,
			navigation: {
				prev: "#gthl",
				next: "#gthr",
				start: gallerygeneratePages,
				pageLoaded: gpageLoaded
		}
	});

				function gallerygeneratePages() {
					var gtotal, num, glink;

					gtotal = $( "#gallery" ).rcarousel( "galleryTotalPages" );


					for ( num = 0; num < gtotal; num++ ) {
						glink = $( "<a href='#'></a>" );
						
						$(glink)
							.bind("click", {gpage: num},
								function( event ) {
									$( "#gallery" ).rcarousel( "goToPage", event.data.gpage );
									event.preventDefault();
								}
							)
							.addClass( "bullet off" )
							.appendTo( "#gpages" );
					}
					
					

					$( "a:eq(0)", "#gpages" )
						.removeClass( "off" )
						.addClass( "on" )
						.css( "background-image", "url(images/page-on.png)" );

					}

				function gpageLoaded( event, data ) {
					$( "a.on", "#gpages" )
						.removeClass( "on" )
						.css( "background-image", "url(images/page-off.png)" );

					$( "a", "#gpages" )
						.eq( data.page )
						.addClass( "on" )
						.css( "background-image", "url(images/page-on.png)" );
				}

				$( "#gallery" ).rcarousel({
					auto: {enabled: true},
					start: gallerygeneratePages,
					pageLoaded: gpageLoaded
				});
				
				$( "#gthl" ).add( "#gthr" ).hover(
						function() {
							$( this ).css( "opacity", 0.7 );
						},
						function() {
							$( this ).css( "opacity", 1.0 );
						}
					);

//gallery	


	$('#mzone a').click(function(){
		$('html, body').animate({
			//scrollTop: -50 + $( $(this).attr('href') ).offset().top
			scrollTop: $( $(this).attr('href') ).offset().top
		}, 500);
		return false;
	});



});

