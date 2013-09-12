/*
Debug
1) File is not included in index.html 
2) your-vote code for change event is outside of document ready and missing a close parenthesis 
3) Repeated images
a) Extra comma in images creates undefined src so jQuery thinks only one argument is passed to .attr
b) i!=images.length should be i+1<images.length
4) i!==0 is not a strong enough check. If i is decreased below 0 elsewhere in our code, the check will return true even though that doesn't make sense. Same for i!==images.length.
5) If we're being super nit-picky, we could wrap the entire thing in a closure to prevent images, i, and votes from being global
6) No quotes around the result text
Refactor
1) Code to change image is repeated. Should be split into own function
2) No need to repeat selector for image-to-vote-on
3) Can use "this" inside of transitionend function
4) Moving forward an image is used in both voting code and skipping code, should be split out
5) Since we have a nextImage, might as well have a previous image
6) .children("options") can be part of initial selector
7) Be really tricky and introduce/use ternary operators (see commented out code). If your class is not ready refactor code and remove ternary operators.
*/
(function(){
	var images=["images/Will.jpg","https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/larry-05ccd359e37c97852808f81fc8c4d1fe.jpg",
	"https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/whitney-759db7532cbf1f224aee94e2d6adf480.jpg",
	"https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/benji-94c7e7372199cb2cce87bda8a7c4dba2.jpg"];
	var i=0;
	var votes=[];
	function previousImage(){
		if(i>0){
			i--;
			changeImage("moveRight");
		}
		/*i>0 ? changeImage("moveRight",--i):0;*/
	}
	function nextImage(){ 
		if(i+1<images.length){
			i++;
			changeImage("moveLeft");	
		}
		else{
			calculateVotes();
		}
		/*i+1<images.length ? changeImage("moveLeft",++i):calculateVotes();*/
	}
	function changeImage(direction){
		$("#image-to-vote-on").addClass(direction).one('transitionend',function(e) {
		 	$(this).removeClass(direction).attr("src",images[i]);
		 	$("#your-vote>option").removeAttr("selected");
		}); 
	}
	function calculateVotes(){
		var ave=0;
		if(votes.length!==0){
			votes.forEach(function(element){
				ave+=parseInt(element);
			});
			ave=(Math.round((ave/votes.length) * 100) / 100).toFixed(2);
		}
		$("#image-to-vote-on+div").text("You have reached the end. Total hotness score was: "+ave);
	}
	$(document).ready(function(){
		$("#buttons-wrapper .btn[value='Back']").on("click",previousImage);
		$("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
		$("#your-vote").on("change",function(){
			votes[i]=$("#your-vote").val();
			nextImage();
		});
	});
})();