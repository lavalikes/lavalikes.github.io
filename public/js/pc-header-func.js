// изменение закрепления хедера
console.log("yes");
var	headerFixation = false;
headerTop = document.getElementsByClassName("main-header")[0].offsetTop;

// события на прокрутку, открепление pc хедера
window.addEventListener("scroll", function(){
	if(pageYOffset >= headerTop && headerFixation === false){
		var element = document.getElementsByClassName("main-header")[0];
		changeClassOfElementFunc(element, "static", "fixed");
		headerFixation = true;
	} else if(pageYOffset < headerTop && headerFixation === true){
		var element = document.getElementsByClassName("main-header")[0];
		changeClassOfElementFunc(element, "fixed", "static");
		headerFixation = false;
	}
});