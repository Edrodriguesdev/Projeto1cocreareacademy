$(function(){
	$('.flexImg').slick({
		arrows: true,
		dots:true,
  		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll:5,
			responsive:[
				{
					breakpoint: 768,
					settings: {
					arrows: false,
					dots:true,
					infinite: true,
					speed: 300,
					slidesToShow: 3,
					slidesToScroll:3,
				}

				}
			]
  	
	});
	
	
})