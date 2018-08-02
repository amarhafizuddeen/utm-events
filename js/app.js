$(document).ready(function() {
	var $div = $('<div />').appendTo('body');
	$div.addClass('container');

	$.get('http://events.utm.my/json_event_future', function(data) {
		/*optional stuff to do after success */
		var $divRow = $('<div />').appendTo($div);
		$divRow.addClass('row');

		$.each(data, function(index, val) {
			var $divEvent = $('<div />').appendTo($divRow);
			$divEvent.addClass('col-md-4 events');

			var $p = $('<h4 />').appendTo($divEvent);
			$p.html(val.title);

			$p = $('<img />').appendTo($divEvent);
			$p.attr('src', val.image);
			$p.addClass('img');
		});
	});

});