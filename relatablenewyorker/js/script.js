$(document).ready(function(){

	var counter = 0;
	var right = "..am I right?";
	var days = " these days?";
	var deal = "What's the deal with ";

	function add_sentence(counter) {
 		var str = $('.captext').text();
 
			if (counter==0) {
				console.log("clicked");
				$(".captext").append(right);
				return 1;
			}

			if (counter==1) {
				str = str.split(right, 1) [0];
				str = str.slice(0, str.length-1);

				var c0 = str.charAt(0);
				var c1 = str.charAt(1);

				if (c0.toLowerCase() === 'i' &&
			       (c1 === " " || c1 === "\u2019")) {
				} else {
				  str = str.charAt(0).toLowerCase() + str.slice(1);
		        }
				str = str.concat(days);
				str = deal.concat(str);
				$('.captext').text(str);
			
				return 2;
			}
			str = str.split(deal)[1];
			str = str.split(days, 1) [0];
			str = str + ".";
			str = str.charAt(0).toUpperCase() + str.slice(1);
			$('.captext').text(str);
			return 0;
	}

	$('.spice').click(function(){
			counter = add_sentence(counter);
	});
});