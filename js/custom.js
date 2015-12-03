$('.interested').click(function(){
$(this).text('Saved');
	$(this).addClass('disabled');
});

$('.remove-saved').click(function(){
$(this).text('Removed from Saved');
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
		contact.style.backgroundColor = '#c9c9c9';
		contact.style.color = 'rgb(225, 114, 39)'
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