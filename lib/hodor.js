/*
	$("*:not(:has(*))").text('hodor');
	HODOR !
*/
(function ($) {
	
	$.hodor = function(options) {
		// hodor useless
		var defaults = {
			hodor: 'hodor'
		};

		var plugin = this;

		plugin.hodors = [
			'hodor ',
			'hodor? ',
			'hodor! ',
			'hodooooooor ',
			'hod-or! ',
		];

		plugin.init = function() {
			// hodor options !
			plugin.settings = $.extend({}, defaults, options);

			plugin.start();
		};

		plugin.start = function() {
			// Hodor Title !
			$('head title').text('hodor');

			// Hodor Elements !
			$('body *').each(function() {
				var $el = $(this),
					$elChildren = $el.children();

				$elChildren.remove();
				
				var $elText = $el.text();
				
				var hodor = '';

				if($elText.trim() != '') {
					for (var i = 0; i < $elText.split(' ').length; i++) {
						hodor += plugin.hodors[Math.floor(Math.random() * plugin.hodors.length)];
					};
					$el.text(hodor);
				}

				$el.append($elChildren);
			});
		};

		plugin.init();
	};

	// Add to jquery functions library
	$.fn.hodor = function(options) {
		return this.each(function() {
			if (undefined == $(this).data('hodor')) {
				var plugin = new $.hodor(this, options);
				$(this).data('hodor', plugin);
			}
		});
	}
})(jQuery);