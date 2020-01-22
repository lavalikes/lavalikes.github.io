// выдвижное меню мобильного хедера
var headerMobileActive = false;
document.getElementById("header-activator").onclick = function(){
	if(headerMobileActive === false){
		document.getElementsByClassName("mobile-header")[0].style.left = "0%";
		document.getElementsByClassName("header-activator-button")[0].style.stroke = "rgba(255, 101, 0, 1)";
		headerMobileActive = true;
	} else {
		document.getElementsByClassName("mobile-header")[0].style.left = "-100%";
		document.getElementsByClassName("header-activator-button")[0].style.stroke = "rgba(94, 94, 94, .7)";
		headerMobileActive = false;		
	}
};

var lastPictureNum = 0;
var pictureNum = 0;
document.querySelector(".img-slider-filter").ontouchstart = function(event){
		let startX = event.targetTouches[0].pageX;

		document.querySelector(".img-slider-filter").ontouchmove = function(event){
			let x,moveX, elem1,elem2;
			elem1 = document.getElementsByClassName("img-slider-picture");
			elem2 = document.getElementsByClassName("img-slider-num");
			x = event.targetTouches[0].pageX;
			moveX = x - startX;
			console.log(moveX);
			if(moveX > 30 || moveX < -30){
				if(moveX > 30){
					if(pictureNum === 0) return false;
					removeActiveClassToElementFunc(elem2[pictureNum], "active");
					removeActiveClassToElementFunc(elem1[pictureNum], "active");
					pictureNum --;
				}
				else{
					if(pictureNum === 5) return false;
					removeActiveClassToElementFunc(elem2[pictureNum], "active");
					removeActiveClassToElementFunc(elem1[pictureNum], "active");
					pictureNum ++;
				}
				addActiveClassToElementFunc(elem2[pictureNum], "active");
				addActiveClassToElementFunc(elem1[pictureNum], "active");
				document.querySelector(".img-slider-filter").ontouchmove = null;
			}
		}
	}
