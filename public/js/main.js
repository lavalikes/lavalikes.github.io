/* js подключаемый ко всем страницам, обладаем функциями используемых на всех страницах*/
var windowWidthOneProcent = (window.innerWidth / 100);
	windowHeightOneProcent = (window.innerHeight / 100);




// ФУНКЦИИ
// базовые функции работы с классами
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