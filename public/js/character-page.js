// создаем объект, он будет хранить информацию с ссылками на изображения для слайдера
var sliderCharacters = {
	EllieWilliams: {
		img: ["../public/img/character-page/Ellie Williams/1.jpg", "../public/img/character-page/Ellie Williams/2.jpg",
		"../public/img/character-page/Ellie Williams/3.jpg", "../public/img/character-page/Ellie Williams/4.jpg",
		"../public/img/character-page/Ellie Williams/5.jpg", "../public/img/character-page/Ellie Williams/6.jpg"]
	},
	JoelMiller: {
		img: ["../public/img/character-page/Joel Miller/1.jpg", "../public/img/character-page/Joel Miller/2.jpg",
		"../public/img/character-page/Joel Miller/3.jpg", "../public/img/character-page/Joel Miller/4.jpg"]
	},
	TommyMiller: {
		img: ["../public/img/character-page/Tommy Miller/1.jpg", "../public/img/character-page/Tommy Miller/2.jpg",
		"../public/img/character-page/Tommy Miller/3.jpg"]
	}
};
// создаем переменные, что будут использоваться в будущем в функциях слайдера с картинками
var lastBtn = document.getElementsByClassName("img-slider-num");
	lastSlide = document.getElementsByClassName("img-slider-picture");
var character =  document.getElementsByClassName("character-name")[0].id;
	characterPcs = sliderCharacters[character].img;






function addStyleAndEventToImgSliderSectionFunc(characterPcs)
{
	// имя персонажа, для поиска его в объекте sliderCharacters

	for( var i=0; i<document.getElementsByClassName("img-slider-num").length; i++)
	{
		// последовательно каждому элементу класса задаем картинку и ее положение
		let elemSlide = document.getElementsByClassName("img-slider-picture")[i];
			elemNumber = document.getElementsByClassName("img-slider-num")[i];
		elemSlide.style.background = "url('" + characterPcs[i] + "') center no-repeat";
		elemSlide.style.backgroundSize = "cover";

		// добавляем реакцию чисел под слайдером на нажатие
		elemNumber.addEventListener("click", changeSliderBlockFunc);
	}
}

function creatingImgSliderSectionFunc()
{
	// эти переменные будут накапливать в себе html код в виде строки, после чего этот код будет использован для создания элементов
	var creatingSlidesHTML = "";
		creatingSlidesNumHTML = "";

	// получаем имя персонажа
	// в цикле += означает добивать к текущему значению следующий код
	// в первом повторении цикла, когда наш счетчик(i) равен нулю мы добавляем к классу элементов дополнительные классы активаторы, 
	// чтобы при заходе на страницу у пользователя перед глазами слайдер не был пуст. стиль класс active прописан зараннее
	for( var i=0; i<characterPcs.length; i++)
	{
		if(i === 0)
		{
			creatingSlidesHTML += "<li class='img-slider-picture active'></li>";
			creatingSlidesNumHTML += "<li class='font-family-HeadlinerNo45 img-slider-num active'>" + (i+1) + "</li>";
		} 
		else
		{
			creatingSlidesHTML += "<li class='img-slider-picture'></li>";
			creatingSlidesNumHTML += "<li class='font-family-HeadlinerNo45 img-slider-num'>" + (i+1) + "</li>";
		}
	}

	// создаем наши элементы на странице
	document.getElementsByClassName("img-slider")[0].insertAdjacentHTML("afterbegin", creatingSlidesHTML);
	document.getElementsByClassName("img-slider-nums-list")[0].insertAdjacentHTML("afterbegin", creatingSlidesNumHTML);

	// стилизуем созданные элементы и устанавливаем функционал
	addStyleAndEventToImgSliderSectionFunc(characterPcs);
}






// переменны которые будут использоваться в слайде с текстом
	// определяем само колесо слайдера
var	textSliderWheel = document.getElementsByClassName("text-slider-wheel")[0];
	// позиция колеса слайдера
	textSliderSlidingRight = 0;
	// размер одной страницы
	textSliderPageSize = 25;
	// Общее кол-во страниц. ставится минус 2 из-за особенностей формулы в функции слайдера
	textSliderPageCount = document.getElementsByClassName("text-slider-page").length;
	// время которое будет проворачиваться колесо слайдера и кнопка будет недоступна
	textSliderTimeout = 300;
	// проверяет отключена ли кнопка
	isTextSliderButtonDisabled = false;


window.onload = function(){

	creatingImgSliderSectionFunc();



	// слайдер текста. пришлось делать, потом что disabled не срабатывал
	document.getElementsByClassName("slide-btn")[0].onclick = function()
	{
		if(isTextSliderButtonDisabled === false)
		{
			isTextSliderButtonDisabled = true;
			setTimeout(function()
			{
				isTextSliderButtonDisabled = false;
			}, (textSliderTimeout + 50));
			if(textSliderSlidingRight >= (textSliderPageSize * (textSliderPageCount - 2)))
			{
				textSliderSlidingRight += textSliderPageSize;
				textSliderWheel.style.transform = "translateX(" + (-textSliderSlidingRight) + "%)";
				textSliderSlidingRight = 0;
				setTimeout(function()
				{
					textSliderWheel.style.transition = "none";
					textSliderWheel.style.transform = "translateX(" + textSliderSlidingRight + "px)";
					setTimeout(function()
					{
						textSliderWheel.style.transition = "all ease ." + textSliderTimeout +"s";
					}, 20);
				}, textSliderTimeout);
			}
			else
			{
				textSliderSlidingRight += textSliderPageSize;
				textSliderWheel.style.transform = "translateX(" + (-textSliderSlidingRight) + "%)";
			}
		}
	}


}