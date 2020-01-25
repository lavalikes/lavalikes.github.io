// изменение закрепления хедера
var	headerFixation = false;
headerTop = document.getElementsByClassName("main-header")[0].offsetTop;

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