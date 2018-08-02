$(document).ready(function() {
	var $divContainer = $('<div />').appendTo('body');
	$divContainer.addClass('container');

	var $divRow = $('<div />').appendTo($divContainer);
	$divRow.addClass('row');

	var $divCol = $('<div />').appendTo($divRow);
	$divCol.addClass('col-md-12');

	$.get('http://events.utm.my/json_event_future', function(data) {
		/*optional stuff to do after success */
		$divRow = $('<div />').appendTo($divCol);
		$divRow.addClass('row');

		$.each(data, function(index, val) {

			if (index >= 2 && index % 3 === 0) {				
				$divRow = $('<div />').appendTo($divCol);
				$divRow.addClass('row');
			}

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