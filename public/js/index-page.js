// изменение закрепления хедера
var	headerFixation = false;
	headerTop = document.getElementsByClassName("main-header")[0].offsetTop;


// создание сменяющихся секций блока покупки
var lastBuySectionBtnActive = document.getElementsByClassName("slider-buy-header-btns")[0];
	lastBuySectionActive = document.getElementsByClassName("slider-buy-section-container")[0];


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



// откроывающиеся окна(видео и изображения)
function indexPageActiveteContentWindowFunc(element){
	var element = element;
	if(element.hasAttribute("data-imgNum")){
		var imgNum = element.getAttribute("data-imgNum");
			switcher = "img";
	} else{
		var switcher = "iframe";
	}
	var HTML = "<div class='"+switcher+"-block-container flex-center-center' id='"+switcher+"BlockContainer'>";
		if(switcher === "img"){	
			HTML+= "<div class='img-block' style='background-image: url(public/img/index-page/img-slider/screenshots/screenshot-"+ imgNum +".jpg)'>"
				+ "<div class='slide-btn slide-btn-right' id='indexPageChangeImgBtnRight'><p>&#10144;</p></div>"
				+ "<div class='slide-btn slide-btn-left' id='indexPageChangeImgBtnLeft'><p>&#10144;</p></div>";
		} else{
			HTML+= "<div class='iframe-block'>";
		}
		HTML+= "<div class='close-"+switcher+"-block flex-center-center' id='"+switcher+"CloseBlock'>"
			+ "<p class='flex-center-center' style='color: #303030FF; font-size: 30px; cursor:pointer'><i class='fas fa-times'></i></p>"
			+ "</div>";
		if(switcher === "iframe"){
			HTML+= "<iframe marginheight='0' marginwidth='0' vspace='0' hspace='0' src='https://www.youtube.com/embed/qPNiIeKMHyg'"
				+ "frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen>"
				+ "</iframe>";
		}
		HTML+= "</div>"
			+ "</div>";

	document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", HTML);
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
	var element = this;
	indexPageActiveteContentWindowFunc(element);
}






window.onload = function(){



	// события на прокрутку, открепление хедера
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
	// события на прокрутку страницы
	for(var i=0; i<document.getElementsByClassName("scrolling-page").length; i++){
		var element = document.getElementsByClassName("scrolling-page")[i];
		element.addEventListener("click", indexPageScrollingFunc);
	}



	// события секции подписки на рассылку
	// движения label у input в form. Приходится подключать js, по скольку в css пустое значение считается за верное от этого срабатывает анимация
	document.getElementById("emailInput").onkeyup = function(){
		if(emailPattern.test(this.value) && emailButtonIsActive === false)
		{
			var element = document.getElementById("emailSubmitBtn");

			addActiveClassToElementFunc(element, "active");
			// включаем кнопку убирая аттрибут disabled
			document.getElementById("emailSubmitBtn").removeAttribute("disabled");
			emailButtonIsActive = true;
		} 
		else if(!emailPattern.test(this.value) && emailButtonIsActive === true)
		{
			var element = document.getElementById("emailSubmitBtn");

			removeActiveClassToElementFunc(element, "active");
			// включаем кнопку убирая аттрибут disabled
			document.getElementById("emailSubmitBtn").setAttribute("disabled", "true");
			emailButtonIsActive = false;
		}


		if(this.value != "" && emailInputActive === false)
		{
			var element = document.getElementById("emailForm");

			addActiveClassToElementFunc(element, "active");
			emailInputActive = true;
		}
		else if((this.value == "" || this.value == " ") && emailInputActive === true)
		{
			var element = document.getElementById("emailForm");

			removeActiveClassToElementFunc(element, "active");
			emailInputActive = false;
		}
	}




	// события на секцию покупки
	for(var i=0; i<document.getElementsByClassName("slider-buy-header-btns").length; i++){
		var element = document.getElementsByClassName("slider-buy-header-btns")[i];
		element.addEventListener("click", changeSliderBlockFunc);
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
		var element = this;
		indexPageActiveteContentWindowFunc(element);
	};




	// создание события при нажатии на картинки
	for(var i=0; i<document.getElementsByClassName("index-page-img-slider-block-image").length; i++){
		var element = document.getElementsByClassName("index-page-img-slider-block-image")[i];
		element.addEventListener("click", redirectionIndexPageContenWindowFunc);
	};




};