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
	};
};



if(!document.getElementsByClassName("first-section-video")[0]){
	var imgSliderFilter = document.querySelector(".img-slider-filter");
	imgSliderFilter.ontouchstart = function(event){
			let startX = event.targetTouches[0].pageX;

			imgSliderFilter.ontouchmove = function(event){
				let x,moveX;
				x = event.targetTouches[0].pageX;
				moveX = x - startX;
				lastSlide[slideNum].style.transform = "translateX(" + moveX + "px)";
				if(moveX > 50 || moveX < -50){
					lastSlide[slideNum].style.transform = "translateX(0px)";
					if(moveX > 50){
						if(slideNum === 0) return false;
						removeActiveClassToElementFunc(lastBtn[slideNum], lastSlide[slideNum]);
						slideNum --;
					}
					else{
						if(slideNum === characterPcs.length) return false;
						removeActiveClassToElementFunc(lastBtn[slideNum], lastSlide[slideNum]);
						slideNum ++;
					};
					lastSectionActive = lastBtn[slideNum];
					lastBtnActive = lastSlide[slideNum];
					addActiveClassToElementFunc(lastBtn[slideNum], lastSlide[slideNum]);
					imgSliderFilter.ontouchmove = null;
				};
			};
		imgSliderFilter.ontouchend = function(){
			lastSlide[slideNum].style.transform = "translateX(0px)";
		};
	};
};