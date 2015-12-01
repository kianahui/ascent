$('.interested').click(function(){
$(this).text('Saved');
	$(this).addClass('disabled');
});

$('.action').click(function(){
	$(this).text('Requested');
	$(this).addClass('disabled');
	$('#extra-info').text("We have contacted the nonprofit with your information. You should be contacted shortly!");
			$('#extra-info').show(400);
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
	$('.nav> li').removeClass('active');
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

function setDivs() {
	$('#extra-info').hide();
}