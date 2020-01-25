// изменение закрепления хедера
var	headerFixation = false;
headerTop = document.getElementsByClassName("main-header")[0].offsetTop;


if(document.getElementsByClassName("first-section")[0]){
	// события на прокрутку, открепление pc хедера
	window.addEventListener("scroll", function(){
		if(pageYOffset >= headerTop && headerFixation === false){
			var elem = document.getElementsByClassName("main-header")[0];
			changeClassOfElementFunc(elem, "static", "fixed");
			headerFixation = true;
		} else if(pageYOffset < headerTop && headerFixation === true){
			var elem = document.getElementsByClassName("main-header")[0];
			changeClassOfElementFunc(elem, "fixed", "static");
			headerFixation = false;
		}
	});

	// создание видео
	let createVid = function(){
		console.log("yes");
		let HTML = "";
		HTML += '<div class="first-section-video">'
		+ '<video preload="true" autoplay="true" muted="true" loop="true">'
		+ '<source src="public/img/index-page/first-section-gif-bg.mp4" type="video/mp4">'
		+ '</video></div>';
		createElementAfterBeginFunc(".first-section", HTML);
	}();
}