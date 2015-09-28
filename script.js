// JavaScript Document
$(document).ready(function(){
	
	$('#homeNav').click(
		function() {
			$('.nav').css({'color':'#333'}, 1000);
			$(this).css({'color':'#ffba00'}, 1000);
			$('#widgetHome').stop().animate({'left':'0%'}, 1000).css({'display':'inherit'});
			$('#widgetPortfolio').stop().animate({'left':'100%'}, 1000).css({'display':'inherit'});
			$('#widgetContact')
				.css({'display':'inherit'})
				.stop()
				.animate({'left':'200%'}, 1000, function () {
					$('#widgetPortfolio').css({'display':'none'});
					$('#widgetContact').css({'display':'none'});
				});
		}
	);
	
	$('#portfolioNav').click(
		function() {
			$('.nav').css({'color':'#333'}, 1000);
			$(this).css({'color':'#ffba00'}, 1000);
			$('#widgetHome').stop().animate({'left':'-100%'}, 1000).css({'display':'inherit'});
			$('#widgetPortfolio').stop().animate({'left':'0%'}, 1000).css({'display':'inherit'});
			$('#widgetContact')
				.css({'display':'inherit'})
				.stop()
				.animate({'left':'100%'}, 1000, function () {
					$('#widgetHome').css({'display':'none'});
					$('#widgetContact').css({'display':'none'});
			});
		}
	);
	
	$('#contactNav').click(
		function() {
			$('.nav').css({'color':'#333'}, 1000);
			$(this).css({'color':'#ffba00'}, 1000);
			$('#widgetHome').stop().animate({'left':'-200%'}, 1000).css({'display':'inherit'});
			$('#widgetPortfolio').stop().animate({'left':'-100%'}, 1000).css({'display':'inherit'});
			$('#widgetContact')
				.css({'display':'inherit'})
				.stop()
				.animate({'left':'0%'}, 1000, function () {
					$('#widgetHome').css({'display':'none'});
					$('#widgetPortfolio').css({'display':'none'});
				});
		}
	);
	
	
	// Home animaties
	// Home animaties
	// Home animaties
	
	function slideHoofdstuk (){
		$('.titel').css({'border-color':'#333'})
		$('.titel', this).css({'border-color':'#ffba00'})			
		$(this)
			.stop()
			.animate({
				'width': '56.25rem', 
				'height':'24.5rem', 
				'top':'0rem', 
				'z-index':'1000'
			}, 1000)
			.css({
				'border-color': '#ffba00', 
				'cursor':'auto', 
				'-webkit-filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
				'-moz-filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
				'filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))'
			})
			.unbind('mouseenter mouseleave')
		.siblings()
			.stop()
			.animate({
				'width': '6.25rem', 
				'height':'20rem', 
				'top':'3rem'
			}, 1000)
			.css({'border-color': '#333', 
				'cursor':'pointer', 
				'-webkit-filter':'none',
				'-moz-filter':'none',
				'filter':'none',
				'z-index':'800'
			})
			.hover(  function() {
				$( this ).css({
					'border-color': '#ffba00', 
					'-webkit-filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
					'-moz-filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
					'filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
					'z-index':'900', 
				})
				$('.titel', this).css({'border-color':'#ffba00'})
			},   function() {
				$( this ).css({
					'border-color': '#333', 
					'-webkit-filter':'none',
					'-moz-filter':'none',
					'filter':'none',
					'z-index':'800',
				})
				$('.titel', this).css({'border-color':'#333'})
			})
		.end();
	}
	
	$('.hoofdstuk').on('click', slideHoofdstuk);

	
	// Portfolio script
	// Portfolio script
	// Portfolio script
	function mouseEnterItemWork() {
		$( this ).css({
			'-webkit-filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
			'-moz-filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
			'filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))'
		})
		$('.containerImgWerk', this).css({'background-image':'url(img/logo-background-hover.png)'});
	};
	
	function mouseLeaveItemWork() {
		$( this ).css({
			'-webkit-filter':'none',
			'-moz-filter':'none',
			'filter':'none'
		})
		$('.containerImgWerk').css({'background-image':'url(img/logo-background.png)'});
	};
	
	$('.itemWerk').hover(mouseEnterItemWork, mouseLeaveItemWork);
	
	$(window).load(function() {
		$('.imgWerk').each(function () {
			var height = $(this).height();
			$(this).css({'top':'calc(50% - ' + height / 2 + 'px'});
		})
	});
	
	function openItemWerk () {
		
		var position = $(this).position();
		var height = $('.tekstWerk', this).height() + 168;
		
		$(this)
			.unbind('mouseenter mouseleave')
			.off('click', openItemWerk)
			.animate({
				'left': - position.left + 8, 
				'top': - position.top + 8, 
				'width':'74rem', 
				'height': height + 'px',
			}, 1000)
			.css({
				'cursor':'auto',
				'z-index':'1000',
				'-webkit-filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
  				'-moz-filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
				'filter':'drop-shadow(0px 0px 3px rgba(51,51,51,0.9))',
			});
		$(".overlay")
			.css({'display':'none'});		
		$("#wrapperPortfolio")
			.animate({'height': height + 16 + 'px'}, 1000);
	};
	
	function closeItemWerk() {
		
		$('.itemWerk')
			.animate({
				'left':'0',
				'top':'0', 
				'width':'100%', 
				'height': '100%', 
				'z-index':'500'
			}, 1000, function() {
				$(this)
					.on('click', openItemWerk)
			})
			.css({'cursor':'pointer'})
			.hover(mouseEnterItemWork, mouseLeaveItemWork);
		$(".overlay")
			.css({
				'display':'inherit'
			});
		$("#wrapperPortfolio")
			.animate({
				'height':'25rem'
			}, 1000);
	};
		
	$('.itemWerk').on('click', openItemWerk);
	$('.close').on ('click', closeItemWerk);	
		
	$("a, img").click(function(event){
		event.stopPropagation();
	});	
	
	/* MOBILE SCRIPT */
	/* MOBILE SCRIPT */
	/* MOBILE SCRIPT */
	
	if ($(window).width() <= 699) {
		$('.hoofdstuk').off('click', slideHoofdstuk);	
		$('.itemWerk')
			.off('click', openItemWerk)
			.unbind('mouseenter mouseleave');
		$('.containerWerk').on('click', openItemWerkMobile);
		$(window).scroll(function() {
			stickyNav();
		});		
	} else {
		// $('.hoofdstuk').on('click', slideHoofdstuk);
	}
	
	function openItemWerkMobile () {
			
		var position = $(this).position();
		var height = $('.tekstWerk', this).height() + 174;
		
		$(this)
			.unbind('mouseenter mouseleave')
			.off('click', openItemWerkMobile)
			.animate({
				'left': - position.left,
				'height': height + 'px',
			}, 1000, function() {
				$(this).on('click', closeItemWerkMobile);
			})
		$(".overlay")
			.css({'display':'none'});		
	};
	
	function closeItemWerkMobile() {
		
		$(this)
			.off('click', closeItemWerkMobile)
			.animate({
				'left':'0',
				'height': '171px', 
			}, 1000, function() {
				$(this)
					.on('click', openItemWerkMobile)
			})
		$(".overlay")
			.css({
				'display':'inherit'
			});
	};
	
	var stickyNavTop = $('#GlobalNav').offset().top;
	 
	function stickyNav (){
		var scrollTop = $(window).scrollTop();
			  
		if (scrollTop > stickyNavTop) { 
			$('#GlobalNav').addClass('sticky');
		} else {
			$('#GlobalNav').removeClass('sticky'); 
		}
	};
});




