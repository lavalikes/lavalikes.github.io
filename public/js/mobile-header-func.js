// выдвижное меню мобильного хедера
var headerMobileActive = false;
document.getElementById("header-activator").onclick = function(){
	if(headerMobileActive === false){
		document.getElementsByClassName("mobile-header")[0].style.left = "0%";
		headerMobileActive = true;
	} else {
		document.getElementsByClassName("mobile-header")[0].style.left = "-100%";
		headerMobileActive = false;		
	}
};