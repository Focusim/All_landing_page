if (document.documentElement.clientWidth > 1199) {
    /* Устанавливаем стартовый индекс слайда по умолчанию: */
    var slideIndex = 3;
    /* Вызываем функцию, которая реализована ниже: */
    showSlides(slideIndex);

    /* Увеличиваем индекс на 1 — показываем следующий слайд: */
    function nextSlide() {
        showSlides(slideIndex -= 1);
    }

    /* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
    function previousSlide() {
        showSlides(slideIndex += 1);
    }

    /* Устанавливаем текущий слайд: */
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    /* Функция перелистывания: */
    function showSlides(n) {
        /* Обращаемся к элементам с названием класса "slider__block", то есть к картинкам: */
        var slides = document.getElementsByClassName("slider__block");

        /* Проверяем количество слайдов: */
        if (n > slides.length) {
            slideIndex = 3
        }
        if (n < 3) {
            slideIndex = slides.length
        }

        /* Проходим по каждому слайду в цикле for: */
        for (let slide of slides) {
            slide.style.display = "none";
        }
        /* Делаем элемент блочным: */
        slides[slideIndex - 1].style.display = "block";
        slides[slideIndex - 2].style.display = "block";
        slides[slideIndex - 3].style.display = "block";
    }
} else if (document.documentElement.clientWidth > 0){
    var slideIndex = 1;

    showSlides(slideIndex);

    function nextSlide() {
        showSlides(slideIndex -= 1);
    }

    function previousSlide() {
        showSlides(slideIndex += 1);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let slides = document.getElementsByClassName("slider__block");

        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }

        for (let slide of slides) {
            slide.style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }
}

document.getElementById('burger').onclick = function () {
    document.getElementById('menu-active').classList.toggle('active-burger');
    document.getElementById('body').classList.toggle('active-body');
}

document.getElementById('burger__anchor').onclick = function () {
    document.getElementById('menu-active').classList.remove('active-burger');
    document.getElementById('body').classList.remove('active-body');
}
