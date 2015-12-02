$('.interested').click(function(){
$(this).text('Saved');
	$(this).addClass('disabled');
});


/* ==============================
 *  Requested Alert for Listings 
 * ==============================
 */
$('.action').click(function() {
	var contact = this;
	$('#send').click(function() {
		$(contact).text('Contacted!');
		contact.style.backgroundColor = '#797979';
		contact.removeAttribute("data-toggle");
	});
});




$('#basic-info-tab').on('click', function(e) {
	$('.nav> li').removeClass('active');
	$(this).addClass('active');
	setPages();
});    

$('#saved-tab').on('click', function(e) {
	$('.nav> li').removeClass('active');
	$(this).addClass('active');
	$('#saved').show(400);
	$('#basic-info').hide();
	$('#history').hide();
});    

$('#history-tab').on('click', function(e) {
	$('.nav > li').removeClass('active');
	$(this).addClass('active');
	$('#history').show(400);
	$('#basic-info').hide();
	$('#saved').hide();
});    

function setPages(){
	$('#basic-info').show(400);
	$('#saved').hide();
	$('#history').hide();
};

/*function setDivs() {
	$('.extra-info').hide();
}*/