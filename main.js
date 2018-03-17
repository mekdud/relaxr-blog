//On clicking of the 'Sign up' button: Display an alert that says "We are not currently taking sign ups", Then change the text of the button to say "No Sign Ups!”

$('.secondary').on("click", function(){
	alert("We are not currently taking sign ups");
	$('.secondary').text("No Sign Ups!");
});

//If a user clicks "Read More": Have an extra paragraph show using $.slideDown() or $.show() and change the link to say “Read Less”//If a user clicks "Read Less": Have an extra paragraph hide using $.slideUp() or $.hide() and change the link to say “Read More”

$('.read-more-slidedown').hide();

$('.read-more').on("click", function(){
	$(".read-more-slidedown").slideDown();
	$('.read-more').css({"padding-bottom":"10px"}).text("Read Less >");
	$('.read-more').on("click", function(){
		$(".read-more-slidedown").slideUp();
		$('.read-more').css({"padding-bottom":"45px"}).text("Read More >");
	});
// *** question **: is there a way to loop this function? Right now when I click on the Read More the second time, the slideUp runs with out clicking the readless button. 

});


//If a user clicks “Learn More” in the sidebar: Have an extra paragraph show using $.slideDown() or $.show() and change the link to say “Learn Less”//If a user clicks "Learn Less” in the sidebar: Have an extra paragraph hide using $.slideUp() or $.hide() and change the link to say “Learn More”


/* Can't get code below to work...
$('.learn-more-slidedown').hide();

$('.learn-more').on("click", function(){
	$(".learn-more-slidedown").slideDown();
	$('.learn-more').css({"padding-bottom":"10px"}).text("Learn Less >");
	$('.learn-more').on("click", function(){
		$(".learn-more-slidedown").slideUp();
		$('.learn-more').css({"padding-bottom":"45px"}).text("Learn More >");
	});
*/


