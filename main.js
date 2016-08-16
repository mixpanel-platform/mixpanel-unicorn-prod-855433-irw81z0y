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
	var h1 = $('#typography h1'),
		h2 = $('#typography h2'),
		h3 = $('#typography h3'),
		h4 = $('#typography h4'),
		h5 = $('#typography h5'),
		h6 = $('#typography h6'),
		body = h1.next('p'),
		bodyDescriptionText = body.children('span').eq(0);
		
	setTypography(h1, h1.children('span').eq(0));
	setTypography(h2, h2.children('span').eq(0));
	setTypography(h3, h3.children('span').eq(0));
	setTypography(h4, h4.children('span').eq(0));
	setTypography(h5, h5.children('span').eq(0));
	setTypography(h6, h6.children('span').eq(0));
	setTypography(body, bodyDescriptionText);

	function setTypography(element, textElement) {
		var fontSize = Math.round(element.css('font-size').replace('px',''))+'px',
			fontFamily = (element.css('font-family').split(','))[0].replace(/\'/g, '').replace(/\"/g, ''),
			fontWeight = element.css('font-weight');
		textElement.text(fontWeight + ' '+ fontFamily+' '+fontSize );
	}
	
});
