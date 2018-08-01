$(document).ready(function() {
	var $div = $('<div />').appendTo('body');
	$div.addClass('container');

	$.get('http://events.utm.my/json_event_future', function(data) {
		/*optional stuff to do after success */
		var $divRow = $('<div />').appendTo($div);
		$divRow.addClass('row');

		$.each(data, function(index, val) {
			if ((index) % 3 == 0) {
				$divRow = $('<div />').appendTo($div);
				$divRow.addClass('row');
			}

			var $divEvent = $('<div />').appendTo($divRow);
			$divEvent.addClass('event');

			var $p = $('<p />').appendTo($divEvent);
			$p.html(val.title);

			$p = $('<img />').appendTo($divEvent);
			$p.attr('src', val.image);
		});
	});

});