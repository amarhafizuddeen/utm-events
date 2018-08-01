$(document).ready(function() {
	var $div = $('<div />').appendTo('body');

	$.get('http://events.utm.my/json_event_future', function(data) {
		/*optional stuff to do after success */
		$.each(data, function(index, val) {
			var $p = $('<p />').appendTo($div);
			$p.html(val.title);

			$p = $('<img />').appendTo($div);
			$p.attr('src', val.image);
		});
	});

});