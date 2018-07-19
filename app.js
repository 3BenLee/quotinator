//This means when the page is ready load this function
$(document).ready(function(){
	
var quote
var author
	function getNewQuote() {
		$.ajax({
			//You can add all this info in the url also.(same result)
			url: ' https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'				
			},
			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
				$('#quote').text(quote);
				if (author) {
					$('#author').text('- ' + author + ' -');
				} else {
					$('#author').text('-Unknown-');
				}
			}
		});
	}
	getNewQuote();

	$('#quote-button').on('click', function() {
		getNewQuote();
	});
	$('#twit').on('click', function(event) {
		window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(quote + ' -' + author + '-'));
	});
});




	
