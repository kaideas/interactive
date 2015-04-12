$(document).ready(function(){

// var mq= window.matchMedia('@media screen and (max-width: 520px)');

if($(window).width()<520) {

		$("div.csmlogo").html('<img src="csmlogo2.svg">');
		 console.log("yay");
	}

});