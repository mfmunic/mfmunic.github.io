
$(".nameTitle").one("click", function(){
	$(".nameTitle").css("transition", "1s");
	$(".nameTitle").css("font-size", "50px");
	$(".nameTitle").css("-webkit-transform", "rotateY(-180deg)");
	$(".nameTitle").css("transform", "rotateY(-180deg)");
	$(".nameTitle").css("-moz-transform", "rotateY(-180deg)");
	$(".nameTitle").css("-o-transform", "rotateY(-180deg)");
	$(".nameTitle").css("-ms-transform", "rotateY(-180deg)");

	$(".nameBorder").css("transition", "1s");
	$(".nameBorder").css("left", "10px");
	$(".nameBorder").css("-webkit-transform", "rotateY(3600deg)");
	$(".nameBorder").css("transform", "rotateY(180deg)");
	$(".nameBorder").css("-moz-transform", "rotateY(180deg)");
	$(".nameBorder").css("-o-transform", "rotateY(180deg)");
	$(".nameBorder").css("-ms-transform", "rotateY(180deg)");
	$(".nameBorder").css("box-shadow", "inset -2px 2px 2px");


	$(".startHeader").css("height", "100px");
	$(".nameTitle").css("margin", "3px");
	$("#container").css("padding-top", "10px");
	$("#container").css("padding-bottom", "10px");

	$(".headerDiv").removeClass("hide");
	setTimeout(function(){
		$(".nameTitle").css("transition", "0s");
		$(".headerDiv").css("visibility", "visible");
		$(".aboutDiv").css("width", "25%");
		$(".resumeDiv").css("width", "25%");
		$(".portfolioDiv").css("width", "25%");
		$(".contactDiv").css("width", "25%");
		$(".stickyFoot").css("visibility", "visible");
		$(".stickyFoot").css("height", "8%");
	}, 1000);

	setTimeout(function(){
		$(".aboutDiv").css("width", "40%");
		$(".resumeDiv").css("width", "40%");
		$(".portfolioDiv").css("width", "40%");
	}, 1250)

	setTimeout(function(){
		$(".aboutDiv").css("width", "55%");
		$(".resumeDiv").css("width", "55%");
	}, 1500)

	setTimeout(function(){
		$(".aboutDiv").css("width", "70%");
		$(".aboutDiv").addClass("current");
		$("#container").css("overflow-y", "auto");
	}, 1750)
});//end of one click main header

