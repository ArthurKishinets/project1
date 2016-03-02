(function() {

	$(document).ready(function(){
		
			$('.notifytext').delay(100).animate(
			 	{
			 		marginLeft: '-=900px'
			 	},
			 800
			);
			$('.smallertext').delay(100).animate(
				{
					marginTop: '-=500px'
				},
				800
			);

			var item = $('div.item'),
            itemOffset = item.offset().top/5;
                
            $(document).on('scroll', function() {
                if ( $(document).scrollTop() > itemOffset ) {
                	item.animate({
                		opacity: '1'
                	}, 1500);
                }
            });



	});
})()