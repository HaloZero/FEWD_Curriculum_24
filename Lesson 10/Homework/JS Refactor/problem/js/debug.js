var images=["images/Will.jpg","https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/larry-05ccd359e37c97852808f81fc8c4d1fe.jpg",
"https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/whitney-759db7532cbf1f224aee94e2d6adf480.jpg",,
"https://d3o09jpaxs6yh2.cloudfront.net/production/assets/student_stories/circles/benji-94c7e7372199cb2cce87bda8a7c4dba2.jpg"];
var i=0;
var votes=[];
$("#your-vote").on("change",function(){
	votes[i]=$("#your-vote").val();
	if(i!==images.length){
		i++;
		$("#image-to-vote-on").addClass("moveLeft");
		$("#image-to-vote-on").one('transitionend',function(e) {
			$("#image-to-vote-on").removeClass("moveLeft");
			$("#image-to-vote-on").attr("src",images[i]);
			$("#your-vote").children("option").removeAttr("selected");
		});  	
	}
	else{
		calculateVotes();
	}
};
function calculateVotes(){
	var ave=0;
	if(votes.length!==0){
		votes.forEach(function(element){
			ave+=parseInt(element);
		});
		ave=(Math.round((ave/votes.length) * 100) / 100).toFixed(2);
	}
	$("#image-to-vote-on+div").text(You have reached the end. Total hotness score was: +ave);
}
$(document).ready(function(){
	$("#buttons-wrapper .btn[value='Skip']").on("click",function(){
		if(i!==images.length){
			i++;
			$("#image-to-vote-on").addClass("moveLeft");
			$("#image-to-vote-on").one('transitionend',function(e) {
				$("#image-to-vote-on").removeClass("moveLeft");
				$("#image-to-vote-on").attr("src",images[i]);
				$("#your-vote").children("option").removeAttr("selected");
			});  	
		}
		else{
			calculateVotes();
		}
	});
	$("#buttons-wrapper .btn[value='Back']").on("click",function(){
		if(i!==0){
			i--;
			$("#image-to-vote-on").addClass("moveRight");
			$("#image-to-vote-on").one('transitionend',function(e) {
			 	$("#image-to-vote-on").removeClass("moveRight");
				$("#image-to-vote-on").attr("src",images[i]);
				$("#your-vote").children("option").removeAttr("selected");
			}); 
		}
	});
});