import { loadFromDb } from '../services/fetches';
import { checkDOMHeight } from './scroll';
import SliderItems from './slidermenu';

// Логика главного контента
function hideWrapper() {
    const wrapper = document.querySelectorAll('.main__content__wrapper'),
          spisok = document.querySelectorAll('.main__movies__list__item');

    wrapper.forEach(function(item) {
        item.classList.add('hide');
        item.classList.remove('show');
        item.classList.remove('fade');
    });
    
    spisok.forEach(function(item) {
        item.classList.remove('main__movies__list__item__active');
    });
}

function mainWrapper() {
    const wrapper = document.querySelectorAll('.main__content__wrapper'),
          spisok = document.querySelectorAll('.main__movies__list__item'),
          spisokWrapper = document.querySelector('.main__movies__list');
    
    loadFromDb('http://localhost:3000/products')
        .then(result => {
            wrapper.forEach((item, i) => {
                item.setAttribute('wrapper-id', result[i].id);
                item.querySelector('.main__content__wrapper__cost').textContent = result[i].cost;
                item.querySelector('.main__content__wrapper__title').textContent = result[i].model;
                item.querySelectorAll('.main__content__wrapper__images__item').forEach((item, k) => {
                    item.src = result[i].images[k].link;
                });
                item.querySelector('.main__content__wrapper__description').textContent = result[i].description;
                item.querySelector('.main__content__wrapper__chars__values__rightblock__colorvalue').textContent = result[i].chars.color;
                item.querySelector('.main__content__wrapper__chars__values__rightblock__modvalue').textContent = result[i].chars.mod;
            });
            spisok.forEach((item, i) => {
                item.textContent = result[i].model;
            });
        });

    loadFromDb('http://localhost:3000/categories')
        .then(result => {
            result.forEach(item => {
                new SliderItems(item,'.main__slider__background__list').render();
            });
        });
    
    /* const request = new XMLHttpRequest();
    request.open('GET', 'jsonfiles/products.json');
    request.send();
    request.addEventListener('load', () => {
        console.log(request.response);
        const resp = JSON.parse(request.response);
        wrapper.forEach((item, i) => {
            item.querySelector('.main__content__wrapper__cost').textContent = resp.products[i].cost;
            item.querySelector('.main__content__wrapper__title').textContent = resp.products[i].model;
            item.querySelector('.main__content__wrapper__image').textContent = resp.products[i].images1;
            item.querySelector('.main__content__wrapper__imagesecond').textContent = resp.products[i].images2;
            item.querySelector('.main__content__wrapper__description').textContent = resp.products[i].description;
        });
    }); */

    function showWrapper(i) {
        wrapper[i].classList.add('show');
        wrapper[i].classList.add('fade');
        wrapper[i].classList.remove('hide');
        spisok[i].classList.add('main__movies__list__item__active');
    }

    function slideWrapper() {
        spisokWrapper.addEventListener('click', function(e) {
            if (e.target.classList.contains('main__movies__list__item')) {
                spisok.forEach(function(item, i) {
                    if (e.target == item) {
                        hideWrapper();
                        showWrapper(i);
                        checkDOMHeight();
                    }
                });
            }
        });
    } 

    hideWrapper();
    showWrapper(0);
    slideWrapper();
}

    /* function swipeImage() {
        imageWrapper.forEach((item, i) => {
            if (wrapper[i].querySelectorAll('img').length > 1) {
                if (item.classList.contains('show')) {
                    item.classList.remove('show');
                    item.classList.add('hide');
                    imageWrapperScnd[i].classList.add('show');
                    imageWrapperScnd[i].classList.remove('hide');
                    imageItemWrapper.forEach((item) => {
                        item.firstElementChild.classList.add('main__content__wrapper__countimage__item');
                        item.firstElementChild.classList.remove('activeitem');
                        item.lastElementChild.classList.add('activeitem');
                        item.lastElementChild.classList.remove('main__content__wrapper__countimage__item');
                    });
                } else {
                    item.classList.remove('hide');
                    item.classList.add('show');
                    imageWrapperScnd[i].classList.add('hide');
                    imageWrapperScnd[i].classList.remove('show');
                    imageItemWrapper.forEach((item) => {
                        item.firstElementChild.classList.add('activeitem');
                        item.firstElementChild.classList.remove('main__content__wrapper__countimage__item');
                        item.lastElementChild.classList.add('main__content__wrapper__countimage__item');
                        item.lastElementChild.classList.remove('activeitem');
                    });
                }
            } 
        });
    }
    
    swipeImage();

    btnNextImageWrapper.forEach((item) => {
        item.addEventListener('click', swipeImage);
    }); */

//Слайдер основного изображения
function sliderMainWrapper() {
    
    const slImageItem = document.querySelectorAll('.main__content__wrapper__images__item'),
    slImageField = document.querySelectorAll('.main__content__wrapper__field'),
    slImageWrapper = document.querySelectorAll('.main__content__wrapper__images'),
    slBtnNext = document.querySelectorAll('.main__content__wrapper__next'),
    slBtnPrev = document.querySelectorAll('.main__content__wrapper__prev'),
    width = window.getComputedStyle(slImageWrapper[0]).width;

    let slOffset = 0;

    slImageField.forEach(item => {
        item.style.width = ((100 * slImageItem.length) / slImageWrapper.length) + '%';
        item.style.display = 'flex';
        item.style.transition = '0.5s all';
    });
    slImageWrapper.forEach(item => item.style.overflow = 'hidden');

    slBtnNext.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (slOffset == +width.slice(0, width.length - 2) * (slImageField[i].childElementCount - 1)) {
                slOffset = 0;
            } else {
                slOffset += +width.slice(0, width.length - 2);
            }
            slImageField[i].style.transform = `translateX(-${slOffset}px)`;
        });
    });

    slBtnPrev.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (slOffset == 0) {
                slOffset = +width.slice(0, width.length - 2) * (slImageField[i].childElementCount - 1);
            } else {
                slOffset -= +width.slice(0, width.length - 2);
            }
            slImageField[i].style.transform = `translateX(-${slOffset}px)`;
        });
    });
}
    
//Скрыть/отобразить блок характеристик
function charsMainWrapper() {

    const charsTitleWrapper = document.querySelectorAll('.main__content__wrapper__chars__title'),
    charsTitileWrapperText = document.querySelectorAll('.main__content__wrapper__chars__title__text'),
    charsValuesLeft = document.querySelectorAll('.main__content__wrapper__chars__values__leftblock'),
    charsValuesRight = document.querySelectorAll('.main__content__wrapper__chars__values__rightblock'),

    hideChars = () => {
    charsValuesLeft.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show');
    });
    charsValuesRight.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show');
    }); 
    charsTitileWrapperText.forEach(item => {
        item.classList.remove('showed');
        item.classList.add('hided');
    });
    },

    showChars = () => {
    charsValuesLeft.forEach((item) => {
        item.classList.add('show');
        item.classList.remove('hide');
    });
    charsValuesRight.forEach((item) => {
        item.classList.add('show');
        item.classList.remove('hide');
    });
    charsTitileWrapperText.forEach(item => {
        item.classList.remove('hided');
        item.classList.add('showed');
    });
    };

    charsTitleWrapper.forEach((item, i) => {
        item.addEventListener('click', function(e) {
            if (e.target.classList.contains('hided')) {
                showChars();
            } else {
                hideChars();
            }
        });
    });
}

export { hideWrapper, mainWrapper, sliderMainWrapper, charsMainWrapper};