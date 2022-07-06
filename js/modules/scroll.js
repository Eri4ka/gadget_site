let scrollToTopBtn = document.querySelector('.scrolltop__item');

//Если клиентское окно больше окна документа, то скрывает стрелку прокрутки
function checkDOMHeight() {
    
    if (document.documentElement.clientHeight > document.documentElement.offsetHeight) {
        scrollToTopBtn.classList.add('hide');
        scrollToTopBtn.classList.remove('show');
    } else {
        scrollToTopBtn.classList.remove('hide');
        scrollToTopBtn.classList.add('show');
    }
}

function scroll() {
    //Меняет стрелку в зависимости от положения в документе
    document.addEventListener('scroll', function() {
        if (document.documentElement.scrollTop == 0) {
            /* scrollToTopBtn.classList.add('hide');
            scrollToTopBtn.classList.remove('show'); */
            scrollToTopBtn.classList.add('scrolltop__itemRotate');
            scrollToTopBtn.classList.remove('scrolltop__item');
        } else {
            /* scrollToTopBtn.classList.add('show');
            scrollToTopBtn.classList.remove('hide'); */
            scrollToTopBtn.classList.remove('scrolltop__itemRotate');
            scrollToTopBtn.classList.add('scrolltop__item');
        }
    });

    //Клик по стрелке прокрутке перемещает на начало/конец страницы
    function scrollToTopWindow() {
        scrollToTopBtn.addEventListener('click', function() {
            if (document.documentElement.scrollTop == 0) {
                window.scrollTo({top: document.documentElement.scrollHeight,
                    behavior: "smooth"});
            } else {
                window.scrollTo({top: 0,
                    behavior: "smooth"});
            }
        });
    }
    scrollToTopWindow();

    //Заполненность верхнего скролла
    function doScroll() {
        let scrollElem = document.querySelector('.header__scroll__line__complete'),
            scrolled = document.documentElement.scrollHeight - document.documentElement.clientHeight,
            total = Math.floor((document.documentElement.scrollTop / scrolled) * 100);
        scrollElem.style.width = total + '%';
    }

    document.addEventListener('scroll', function() {
        doScroll();
    });
}

export default scroll;
export { checkDOMHeight };