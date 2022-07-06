'use strict';
import timer from './modules/timer';
import scroll from './modules/scroll';
import { checkDOMHeight } from './modules/scroll';
import {silderMenu} from './modules/slidermenu';
import { doModal } from './modules/modal';
import ordersFrom from './modules/ordersform';
import getOrdersCount from './modules/orderscount';
import slider from './modules/slider';
import { hideWrapper, mainWrapper, sliderMainWrapper, charsMainWrapper } from './modules/mainwrapper';
import auth from './modules/auth';
import checkAccountLogin from './modules/checkaccount';
import search from './modules/search';

document.addEventListener('DOMContentLoaded', function() {
    
    // Скрыть главное окно
    hideWrapper();

    // Логика главного контента
    mainWrapper();

    //Слайдер основного изображения
    sliderMainWrapper();

    //Скрыть/отобразить блок характеристик
    charsMainWrapper();

    // Слайдер основного меню
    silderMenu();

    // Timer
    timer();

    // Прокрутка страницы
    scroll();

    //Если клиентское окно больше окна документа, то скрывает стрелку прокрутки
    checkDOMHeight();

    // Modal
    doModal();
    
    //Slider
    slider();
    
    //Отобразить количество заказов
    getOrdersCount('.header__client__orders__count');

    //Окно с заказами
    ordersFrom();

    // Окно с авторизацией/регистрацией
    auth('.auth__wrapper__content');

    // Проверка авторизации и вывод значения в кнопку аккаунта
    checkAccountLogin('.header__client__auth__title');

    search();
    
});