/* js подключаемый ко всем страницам, обладаем функциями используемых на всех страницах*/
var windowWidthOneProcent = (window.innerWidth / 100);
	windowHeightOneProcent = (window.innerHeight / 100);
var slideNum = 0;


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


			createElementAfterBeginFunc(HTML);
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


		createElementAfterBeginFunc(HTML);
		if(document.getElementsByClassName("first-section-video")[0]){
			includeJs("public/js/pc-header-func.js");
		} else{
			includeJs("../public/js/pc-header-func.js");
		}
	}
}();



// ФУНКЦИИ
// базовые функции работы с классами стиля
function changeClassOfElementFunc(elem, removeClass, addClass){
	var elem = elem;
		removeClass = removeClass;
		addClass = addClass;

	elem.classList.remove(removeClass);
	elem.classList.add(addClass);
};
function addActiveClassToElementFunc(...args){
	for (var i = 0; i < args.length; i++) args[i].classList.add("active");
}
function removeActiveClassToElementFunc(...args){
	for (var i = 0; i < args.length; i++) args[i].classList.remove("active");
}
function createElementAfterBeginFunc(HTML){
document.getElementsByTagName("body")[0].insertAdjacentHTML("afterbegin", HTML);
};




// было тяжело, но я сжал эту функцию на строк 50, при этом сохранив весь функционал
// слайдеры с несколькими кнопками
function changeSliderBlockFunc()
{
	if(lastBtn[slideNum] === this) return false;
	else
	{
		removeActiveClassToElementFunc(lastBtn[slideNum], lastSlide[slideNum]);

		for(var i=0; i<lastBtn.length; i++)
		{
			if(this === lastBtn[i])
			{
				slideNum = i;
				addActiveClassToElementFunc(lastBtn[slideNum], lastSlide[slideNum])
				break;
			}
		}
	}
};
