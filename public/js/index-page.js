// создание сменяющихся секций блока покупки
var lastBtn = document.getElementsByClassName("slider-buy-header-btns");
	lastSlide = document.getElementsByClassName("slider-buy-section-container");


//mail
var emailInputActive = false;
	emailPattern = new RegExp(/^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i);
	emailButtonIsActive = false;


// секция слайдера смена картинок
var indexPageImgSliderTranslate = 0;
	maxImages = 16;
	imageNum = 1;


function indexPageScrollingFunc(){
	var scrollingTo = this.getAttribute("data-scrollTo");
		direction = document.getElementsByClassName(scrollingTo)[0].offsetTop;

	window.scrollTo(0, direction);
}

function buySectionHeight(){
	let elem = document.getElementsByClassName("slider-buy-section-container");
	let elemHeight = 0;

	for(var i=0; i<elem.length; i++) if(elemHeight < elem[i].offsetHeight) elemHeight = elem[i].offsetHeight; // супер сокращенная форма цикла с if
	
	document.querySelector(".slider-buy-list-container").style.height = elemHeight + "px";
};



// откроывающиеся окна(видео и изображения)
function indexPageActiveteContentWindowFunc(elem){
	var elem = elem;
	if(elem.hasAttribute("data-imgNum")){
		var imgNum = elem.getAttribute("data-imgNum");
			switcher = "img";
	} else{
		var switcher = "iframe";
	}
	var HTML = "<div class='"+switcher+"-block-container flex-center-center' id='"+switcher+"BlockContainer'>";
		if(switcher === "img"){	
			HTML+= "<div class='img-block' style='background-image: url(public/img/index-page/img-slider/screenshots/screenshot-"+ imgNum +".jpg)'>"
				+ "<div class='slide-btn slide-btn-right' id='indexPageChangeImgBtnRight'><p>&#10144;</p></div>"
				+ "<div class='slide-btn slide-btn-left' id='indexPageChangeImgBtnLeft'><p>&#10144;</p></div>";
		}
		else{
			HTML+= "<div class='iframe-block'>";
		};
		HTML+= "<div class='close-"+switcher+"-block flex-center-center' id='"+switcher+"CloseBlock'>"
			+ "<p class='flex-center-center'><i class='fas fa-times'></i></p>"
			+ "</div>";
		if(switcher === "iframe"){
			HTML+= "<iframe marginheight='0' marginwidth='0' vspace='0' hspace='0' src='https://www.youtube.com/embed/qPNiIeKMHyg'"
				+ "frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>"
				+ "</iframe>";
		};
		HTML+= "</div></div>";

	createElementAfterBeginFunc(HTML);
	document.body.style.overflow = 'hidden';
	document.getElementById(switcher+"CloseBlock").addEventListener("click", function(){
	document.getElementById(switcher+"BlockContainer").remove();
	document.body.style.overflow = 'auto';
	});
	if(switcher === "img"){
		var imgBlock = document.getElementsByClassName("img-block")[0];
		document.getElementById("indexPageChangeImgBtnRight").addEventListener("click", function()
		{
			if(imgNum < maxImages){
				imgNum++;
			} else{
				imgNum = 1;
			}
			imgBlock.style.backgroundImage = "url(public/img/index-page/img-slider/screenshots/screenshot-"+ imgNum +".jpg)";
		});
		document.getElementById("indexPageChangeImgBtnLeft").addEventListener("click", function()
		{
			if(imgNum <= 1){
				imgNum = maxImages;
			} else{
				imgNum--;
			}
			imgBlock.style.backgroundImage = "url(public/img/index-page/img-slider/screenshots/screenshot-"+ imgNum +".jpg)";
		});
	}
}

function redirectionIndexPageContenWindowFunc(){
	var elem = this;
	indexPageActiveteContentWindowFunc(elem);
}






window.onload = function(){

	buySectionHeight();

	// события на прокрутку страницы, по нажатию на кнопки хедера
	for(var i=0; i<document.getElementsByClassName("scrolling-page").length; i++){
		var elem = document.getElementsByClassName("scrolling-page")[i];
		elem.addEventListener("click", indexPageScrollingFunc);
	}



	// события секции подписки на рассылку
	// движения label у input в form. Приходится подключать js, по скольку в css пустое значение считается за верное от этого срабатывает анимация
	document.getElementById("emailInput").onkeyup = function(){
		if(emailPattern.test(this.value) && emailButtonIsActive === false)
		{
			var elem = document.getElementById("emailSubmitBtn");

			addActiveClassToElementFunc(elem);
			// включаем кнопку убирая аттрибут disabled
			document.getElementById("emailSubmitBtn").removeAttribute("disabled");
			emailButtonIsActive = true;
		} 
		else if(!emailPattern.test(this.value) && emailButtonIsActive === true)
		{
			var elem = document.getElementById("emailSubmitBtn");

			removeActiveClassToElementFunc(elem);
			// включаем кнопку убирая аттрибут disabled
			document.getElementById("emailSubmitBtn").setAttribute("disabled", "true");
			emailButtonIsActive = false;
		}


		if(this.value != "" && emailInputActive === false)
		{
			var elem = document.getElementById("emailForm");
			addActiveClassToElementFunc(elem);
			emailInputActive = true;
		}
		else if((this.value == "" || this.value == " ") && emailInputActive === true)
		{
			var elem = document.getElementById("emailForm");
			removeActiveClassToElementFunc(elem);
			emailInputActive = false;
		}
	}




	// события на секцию покупки
	for(var i=0; i<document.getElementsByClassName("slider-buy-header-btns").length; i++){
		var elem = document.getElementsByClassName("slider-buy-header-btns")[i];
		elem.addEventListener("click", changeSliderBlockFunc);
	}



	// прокрутка секции слайдера
	document.getElementById("indexPageImgSliderBtnRight").onclick = function(){
		if(indexPageImgSliderTranslate === -75){
			indexPageImgSliderTranslate = 0;
		} else{
			indexPageImgSliderTranslate -= 25;
		}
		document.getElementsByClassName("index-page-img-slider-wheel")[0].style.transform = "translateX(" + indexPageImgSliderTranslate + "%";
	};
	document.getElementById("indexPageImgSliderBtnLeft").onclick = function(){
		if(indexPageImgSliderTranslate === 0){
			indexPageImgSliderTranslate = -75;
		} else{
			indexPageImgSliderTranslate += 25;
		}
		document.getElementsByClassName("index-page-img-slider-wheel")[0].style.transform = "translateX(" + indexPageImgSliderTranslate + "%";
	};




	// вставка видео при нажатии на кнопку
	document.getElementById("activeWideoIframe").onclick = function(){
		var elem = this;
		indexPageActiveteContentWindowFunc(elem);
	};




	// создание события при нажатии на картинки
	for(var i=0; i<document.getElementsByClassName("index-page-img-slider-block-image").length; i++){
		var elem = document.getElementsByClassName("index-page-img-slider-block-image")[i];
		elem.addEventListener("click", redirectionIndexPageContenWindowFunc);
	};

};


window.onresize = function(){
	buySectionHeight();
}