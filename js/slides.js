$(function(){
	$('.flexImg').slick({
		arrows: true,
		dots:true,
  		infinite: false,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll:3,
			responsive:[
				{
					breakpoint: 1280,
					settings: {
					arrows: true,
					dots:true,
					infinite: false,
					speed: 300,
					slidesToShow: 4,
					slidesToScroll:4,
				}

				},

				{
					breakpoint: 1025,
					settings: {
					arrows: false,
					dots:true,
					infinite: false,
					speed: 300,
					slidesToShow: 4,
					slidesToScroll:4,
				}

				},

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

				},

				{
					breakpoint: 580,
					settings: {
					arrows: false,
					dots:true,
					infinite: true,
					speed: 300,
					slidesToShow: 2,
					slidesToScroll:2,
				}

				}

			]
  	
	});
	
	
})