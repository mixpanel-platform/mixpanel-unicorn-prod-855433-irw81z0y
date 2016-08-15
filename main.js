jQuery(document).ready(function($){
	/*******************
		color swatch
	********************/
	//convert rgba color to hex color
	$.cssHooks.backgroundColor = {
	    get: function(elem) {
	        if (elem.currentStyle)
	            var bg = elem.currentStyle["background-color"];
	        else if (window.getComputedStyle)
	            var bg = document.defaultView.getComputedStyle(elem,
	                null).getPropertyValue("background-color");
	        if (bg.search("rgb") == -1)
	            return bg;
	        else {
	            bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
	            function hex(x) {
	                return ("0" + parseInt(x).toString(16)).slice(-2);
	            }
	            return "#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]);
	        }
	    }
	}
	//set a label for each color swatch
	$('.cd-color-swatch').each(function(){
		var actual = $(this);
		$('<b>'+actual.css("background-color")+'</b>').insertAfter(actual);
	});
	
	/*******************
		typography
	********************/
	var heading = $('#typography h1'),
		headingDescriptionText = heading.children('span').eq(0),
		body = heading.next('p'),
		bodyDescriptionText = body.children('span').eq(0);
		
	setTypography(heading, headingDescriptionText);
	setTypography(body, bodyDescriptionText);
	$(window).on('resize', function(){
		setTypography(heading, headingDescriptionText);
		setTypography(body, bodyDescriptionText);
	});

	function setTypography(element, textElement) {
		var fontSize = Math.round(element.css('font-size').replace('px',''))+'px',
			fontFamily = (element.css('font-family').split(','))[0].replace(/\'/g, '').replace(/\"/g, ''),
			fontWeight = element.css('font-weight');
		textElement.text(fontWeight + ' '+ fontFamily+' '+fontSize );
	}
	
});
