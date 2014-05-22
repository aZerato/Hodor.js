function hodor() {
	//$("*:not(:has(*))").text('hodor');
	var hodors = [
		'hodor ',
		'hodor? ',
		'hodor! ',
		'hodooooooor ',
		'hod-or! ',
	];

	$('head title').text('hodor');

	$('body *').each(function() {
		var $el = $(this),
			$elChildren = $el.children();

		$elChildren.remove();
		
		var $elText = $el.text();
		
		var hodor = '';

		if($elText.trim() != '') {
			for (var i = 0; i < $elText.split(' ').length; i++) {
				hodor += hodors[Math.floor(Math.random() * hodors.length)];
			};
			$el.text(hodor);
		}

		$el.append($elChildren);
	});
}