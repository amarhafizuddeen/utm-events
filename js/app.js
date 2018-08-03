$(document).ready(function() {
	var $div = $('<div />').appendTo('body');

	$.get('http://events.utm.my/json_event_future', function(events) {
		function prettyDate(val) {

		    var month_names =["Jan","Feb","Mar",
		                      "Apr","May","Jun",
		                      "Jul","Aug","Sep",
		                      "Oct","Nov","Dec"];
		    
		    var date = new Date(val); 

		    var day = date.getDate();
		    var month_index = date.getMonth();
		    var year = date.getFullYear();
		    
		    return "" + day + " " + month_names[month_index] + " " + year;
		}

		function eventDate(start, end) {
			if (start == end) {
				return prettyDate(start);
			} else {
				return prettyDate(start) + " - " + prettyDate(end);
			}
		}

		function eventTime(start, end) {
			if (start == end) {
				return start;
			} else {
				return start + " - " + end;
			}
		}

		function eventTemplate(event) {
			var image = event.image.replace('-150x150','');
			return `
				<div class="event">
					<img class="event-photo" src="${image}">
					<h2 class="event-name">${event.title}</h2>
					<p><strong>Date:</strong> ${eventDate(event.start_date, event.end_date)}</p>
					<p><strong>Time:</strong> ${eventTime(event.start_time, event.end_time)}</p>
					<p><strong>Location:</strong> ${event.location}</p>
					<p><strong>Categories:</strong> ${event.category.join(', ')}</p>
				</div>
				<div class="modal">
					<span class="close">&times;</span>
					<img class="modal-content" src="${image}">
					<span class="caption">${event.title}</span>
				</div>
			`
		}

		$div.html(`
			<h1 class="app-title">Events (${events.length} results)</h1>
			${events.map(eventTemplate).join('')}
		`);

		$('.event-photo').on('click', function(event) {
			event.preventDefault();
			
			/* Act on the event */
			$(this).parent().next('.modal').css('display', 'block');
		});

		$('.close').on('click', function(event) {
			event.preventDefault();

			/* Act on the event */
			$(this).parent().css('display', 'none');
		});

		$('.modal').on('click', function(event) {
			/* Act on the event */
			$(this).css('display', 'none');
		});		

		$('.modal-content').on('click', function(event) {			
    		event.stopPropagation();
		});

		$('.caption').on('click', function(event) {			
    		event.stopPropagation();
		});
	});

});