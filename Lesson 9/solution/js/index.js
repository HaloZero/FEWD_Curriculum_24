var images=["images/Will.jpg","https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/larry-05ccd359e37c97852808f81fc8c4d1fe.jpg",
"https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/whitney-759db7532cbf1f224aee94e2d6adf480.jpg",
"https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/benji-94c7e7372199cb2cce87bda8a7c4dba2.jpg"];
var i=0;
var votes=[];
function nextImage(){
	if(i+1!==images.length){
		i++;
		changeImage();
	}
	else{
		var ave=0;
		if(votes.length!==0){
			votes.forEach(function(element){
				ave+=parseInt(element);
			});
			ave=(Math.round((ave/votes.length) * 100) / 100).toFixed(2);
		}
		$("#image-to-vote-on+div").text("You have reached the end. Total hotness score was: "+ave);
	}
}
function changeImage(){
	$("#image-to-vote-on").attr("src",images[i]);
	$("#your-vote").children("option").removeAttr("selected")
}
$(document).ready(function(){
	$("#your-vote").on("change",function(){
		if(i<images.length){
			votes[i]=$("#your-vote").val();
			nextImage();
		}
	});
	$("#buttons-wrapper .btn[value='Skip']").on("click",nextImage);
	$("#buttons-wrapper .btn[value='Back']").on("click",function(){
		if(i!==0){
			i--;
			changeImage();
		}
	});
});

