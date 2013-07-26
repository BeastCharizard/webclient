$(document).ready(function() {
	// makes :contains selector case insensitive
	$.expr[":"].contains = $.expr.createPseudo(function(arg) {
		return function( elem ) {
			return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
		};
	});
	
	$("#tab-titles").on('click', 'li i', function() {
		if($("#tab-titles li").length > 1)
		{
            var dparent = $(this).parent().parent();
			var href = dparent.attr("href");
            objFromId(href).close();
		}
	});
	
	$(".dropdown_button").on('click', function() {
		$(this).find('i').toggle();
		$(this).parent().find('.dropdown_content').toggle();
	});
	
	$("#trainer_username").on('click', function() {
		$(".middle_block").hide();
		$("#user_params").show();
	});
	$("#create_team").on('click', function() {
		$(".middle_block").hide();
		$("#teambuilder").show();
	});
	$("#po_title").on('click', function() {
		$(".middle_block").hide();
		$("#content").show();
	});
});