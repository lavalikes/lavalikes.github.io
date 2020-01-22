/* js подключаемый ко всем страницам, обладаем функциями используемых на всех страницах*/
var windowWidthOneProcent = (window.innerWidth / 100);
	windowHeightOneProcent = (window.innerHeight / 100);


// подключение мобильного или комп хедера
// функция подключения js файлов
function includeJs(url){
	var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
};
var siteHeadersCreator = function(){
	var HTML = "";
	if( window.innerWidth < 1000 ){
			HTML += '<header class="mobile-header">' 
			+ '<div class="header-activator" id="header-activator"><svg class="header-activator-button">'
			+ '<line x1="0" y1="10%" x2="100%" y2="10%"/><line x1="0" y1="50%" x2="100%" y2="50%"/><line x1="0" y1="90%" x2="100%" y2="90%"/>'
			+ '</svg></div>'
			+ '<ul>'
			if(document.getElementsByClassName("first-section-video")[0]){
				HTML += '<li><a href="#" class="font-family-HeadlinerNo45">Главная</a></li>' 
				+ '<li class="character-pages">' 
				+ '<p class="font-family-HeadlinerNo45">Персонажи</p>' 
				+ '<div>'
				+ '<a href="character pages/Ellie Williams.html" class="font-family-HeadlinerNo45">Элли Уильямс</a>'
				+ '<a href="character pages/Joel Miller.html" class="font-family-HeadlinerNo45">Джоэл Миллер</a>'
				+ '<a href="character pages/Tommy Miller.html" class="font-family-HeadlinerNo45">Томми Миллер</a>'
				+ '</div>'
				+ '</li>'
				+ '<li><a class="font-family-HeadlinerNo45 scrolling-page" data-scrollTo="sixth-section">Изображения</a></li>'
				+ '<li><a class="font-family-HeadlinerNo45 scrolling-page" data-scrollTo="second-section">Трейлер</a></li>'
			}
			else{
				HTML += '<li><a href="../index.html" class="font-family-HeadlinerNo45">Главная</a></li>' 
				+ '<li class="character-pages">' 
				+ '<p class="font-family-HeadlinerNo45">Персонажи</p>' 
				+ '<div>'
				+ '<a href="Ellie Williams.html" class="font-family-HeadlinerNo45">Элли Уильямс</a>'
				+ '<a href="Joel Miller.html" class="font-family-HeadlinerNo45">Джоэл Миллер</a>'
				+ '<a href="Tommy Miller.html" class="font-family-HeadlinerNo45">Томми Миллер</a>'
				+ '</div>'
				+ '</li>'
			}
			HTML += '<li><a href="https://www.playstation.com/ru-ru/games/the-last-of-us-part-ii-ps4/" class="font-family-HeadlinerNo45">Предзаказать</a></li>'
			+ '</ul>'
			+ '</header>';


			document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", HTML);
			if(document.getElementsByClassName("first-section-video")[0]){
				includeJs("public/js/mobile-header-func.js");
			} else{
				includeJs("../public/js/mobile-header-func.js");
			}
	}
	else {
		if(document.getElementsByClassName("first-section-video")[0]){
			HTML += '<header class="main-header static">' 
				+ '<ul class="flex-start">' 
				+ '<li><a href="#" class="font-family-HeadlinerNo45">Главная</a></li>' 
				+ '<li class="character-pages">' 
				+ '<p class="font-family-HeadlinerNo45">Персонажи</p>' 
				+ '<div>'
				+ '<a href="character pages/Ellie Williams.html" class="font-family-HeadlinerNo45">Элли Уильямс</a>'
				+ '<a href="character pages/Joel Miller.html" class="font-family-HeadlinerNo45">Джоэл Миллер</a>'
				+ '<a href="character pages/Tommy Miller.html" class="font-family-HeadlinerNo45">Томми Миллер</a>'
				+ '</div>'
				+ '</li>'
				+ '<li><a class="font-family-HeadlinerNo45 scrolling-page" data-scrollTo="sixth-section">Изображения</a></li>'
				+ '<li><a class="font-family-HeadlinerNo45 scrolling-page" data-scrollTo="second-section">Трейлер</a></li>'
			}
			else{
				HTML += '<header class="main-header fixed">' 
				+ '<ul class="flex-start">'
				+ '<li><a href="../index.html" class="font-family-HeadlinerNo45">Главная</a></li>' 
				+ '<li class="character-pages">' 
				+ '<p class="font-family-HeadlinerNo45">Персонажи</p>' 
				+ '<div>'
				+ '<a href="Ellie Williams.html" class="font-family-HeadlinerNo45">Элли Уильямс</a>'
				+ '<a href="Joel Miller.html" class="font-family-HeadlinerNo45">Джоэл Миллер</a>'
				+ '<a href="Tommy Miller.html" class="font-family-HeadlinerNo45">Томми Миллер</a>'
				+ '</div>'
				+ '</li>'
			}
			HTML += '<li><a href="https://www.playstation.com/ru-ru/games/the-last-of-us-part-ii-ps4/" class="font-family-HeadlinerNo45">Предзаказать</a></li>'
			+ '</ul>'
			+ '</header>';


		document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", HTML);
		if(document.getElementsByClassName("first-section-video")[0]){
			includeJs("public/js/pc-header-func.js");
		} else{
			includeJs("../public/js/pc-header-func.js");
		}
	}
}();



// ФУНКЦИИ
// базовые функции работы с классами стиля
function changeClassOfElementFunc(element, removeClass, addClass){
	var element = element;
		removeClass = removeClass;
		addClass = addClass;

	element.classList.remove(removeClass);
	element.classList.add(addClass);
};
function addActiveClassToElementFunc(element, addClass){
	element.classList.add(addClass);
}
function removeActiveClassToElementFunc(element, removeClass){
	element.classList.remove(removeClass);
}



// слайдеры с несколькими кнопками
function changeSliderBlockFunc()
{
	// определение переменных, которые будут использоваться дальше в коде, для сокращения кода и уменьшения вызова команд
	if(this.classList.contains("slider-buy-header-btns"))
	{
		var	lastBtnActive = lastBuySectionBtnActive;
			lastSectionActive = lastBuySectionActive;
			sectionSlider = "buy";
			sectionBtnClass = document.getElementsByClassName("slider-buy-header-btns");
			sectionBlockClass = document.getElementsByClassName("slider-buy-section-container");
	}
	else if(this.classList.contains("img-slider-num"))
	{
		var lastBtnActive = lastImgSectionBtnActivate;
			lastSectionActive = lastImgSectionBlockActivate;
			sectionSlider = "img";
			sectionBtnClass = document.getElementsByClassName("img-slider-num");
			sectionBlockClass = document.getElementsByClassName("img-slider-picture");
	}
	if(lastBtnActive === this){
		return false;
	} 
	else
	{
		removeActiveClassToElementFunc(lastBtnActive, "active");
		removeActiveClassToElementFunc(lastSectionActive, "active");

		for(var i=0; i<sectionBtnClass.length; i++)
		{
			if(this === sectionBtnClass[i])
			{
				if(sectionSlider === "buy")
				{
					lastBuySectionBtnActive = this;
					lastBuySectionActive = sectionBlockClass[i];
					addActiveClassToElementFunc(lastBuySectionBtnActive, "active")
					addActiveClassToElementFunc(lastBuySectionActive, "active");
				} 
				else if(sectionSlider === "img")
				{
					lastImgSectionBtnActivate = this;
					lastImgSectionBlockActivate = sectionBlockClass[i];
					addActiveClassToElementFunc(lastImgSectionBtnActivate, "active")
					addActiveClassToElementFunc(lastImgSectionBlockActivate, "active");
				}
				break;
			}
		}
	}
}