/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/auth.js":
/*!****************************!*\
  !*** ./js/modules/auth.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "renderAuthWrapper": () => (/* binding */ renderAuthWrapper)
/* harmony export */ });
/* harmony import */ var _services_fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetches */ "./js/services/fetches.js");
/* harmony import */ var _noty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noty */ "./js/modules/noty.js");
/* harmony import */ var _checkaccount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkaccount */ "./js/modules/checkaccount.js");
/* harmony import */ var _orderscount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./orderscount */ "./js/modules/orderscount.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./js/modules/modal.js");




 // Валидация инпутов формы

const validateInputs = () => {
  const inputs = document.querySelectorAll('.auth__wrapper__content__form__input__field'),
        inputName = document.querySelector('[data-id="auth-name"]'),
        inputSurname = document.querySelector('[data-id="auth-surname"]'),
        inputEmail = document.querySelector('[data-id="auth-email"]'),
        inputPass = document.querySelector('[data-id="auth-pass"]'),
        eyePadding = document.querySelector('.auth__wrapper__content__form__input__image');
  inputs.forEach(item => {
    item.addEventListener('blur', () => {
      switch (item.getAttribute('data-id')) {
        case 'auth-name':
          (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputName, /^[a-zа-я]+$/gi, '[data-id="name"]', 'Только буквы');
          break;

        case 'auth-surname':
          (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputSurname, /^[a-zа-я]+$/gi, '[data-id="surname"]', 'Только буквы');
          break;

        case 'auth-email':
          (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail');
          break;

        case 'auth-pass':
          (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов');
          break;
      }
    });
    item.addEventListener('keydown', () => {
      switch (item.getAttribute('data-id')) {
        case 'auth-name':
          (0,_modal__WEBPACK_IMPORTED_MODULE_4__.removeInputError)(inputName);
          break;

        case 'auth-surname':
          (0,_modal__WEBPACK_IMPORTED_MODULE_4__.removeInputError)(inputSurname);
          break;

        case 'auth-email':
          (0,_modal__WEBPACK_IMPORTED_MODULE_4__.removeInputError)(inputEmail);
          break;

        case 'auth-pass':
          (0,_modal__WEBPACK_IMPORTED_MODULE_4__.removeInputError)(inputPass);
          break;
      }
    });
  });
  document.addEventListener('click', e => {
    if (e.target.classList.contains('auth__wrapper__content__form__input__image')) {
      if (inputPass.type == 'password') {
        eyePadding.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#7c7f84" fill-rule="evenodd" d="M11,12 C10.448,12 10,11.552 10,11 C10,10.448 10.448,10 11,10 C11.552,10 12,10.448 12,11 C12,11.552 11.552,12 11,12 M12,8 C9.791,8 8,9.791 8,12 C8,14.209 9.791,16 12,16 C14.209,16 16,14.209 16,12 C16,9.791 14.209,8 12,8 M12,18 C8.143,18 4.664,15.616 3.14,12 C4.664,8.384 8.143,6 12,6 C15.857,6 19.336,8.384 20.86,12 C19.336,15.616 15.857,18 12,18 M12,4 C6.922,4 2.6,7.337 1,12 C2.6,16.663 6.922,20 12,20 C17.078,20 21.4,16.663 23,12 C21.4,7.337 17.078,4 12,4"/>
                </svg>              
                `;
        inputPass.type = 'text';
      } else {
        eyePadding.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#7c7f84" fill-rule="evenodd" d="M15.5817018,10.217288 C15.8494088,10.754062 16,11.3594578 16,12 C16,14.209 14.209,16 12,16 C11.3594578,16 10.754062,15.8494088 10.217288,15.5817018 L8.48536364,17.3136262 C9.58485203,17.7588553 10.7733084,18 12,18 C15.857,18 19.336,15.616 20.86,12 C20.1808436,10.3885634 19.1134329,9.02179652 17.7973358,8.00165407 L15.5817018,10.217288 Z M19.2229364,6.57605345 C20.9352704,7.9668572 22.2593071,9.84134303 23,12 C21.4,16.663 17.078,20 12,20 C10.198616,20 8.49236889,19.5800637 6.9690243,18.8299656 L5.12132034,20.6776695 C4.73079605,21.0681938 4.09763107,21.0681938 3.70710678,20.6776695 C3.31658249,20.2871452 3.31658249,19.6539803 3.70710678,19.263456 L19.263456,3.70710678 C19.6539803,3.31658249 20.2871452,3.31658249 20.6776695,3.70710678 C21.0681938,4.09763107 21.0681938,4.73079605 20.6776695,5.12132034 L19.2229364,6.57605345 Z M5.12012808,15.0220075 L3.70481475,16.4373209 C2.5100928,15.194138 1.57764926,13.6834866 1,12 C2.6,7.337 6.922,4 12,4 C13.2450856,4 14.4447211,4.20061769 15.5699262,4.57220943 L13.9385597,6.20357596 C13.3087024,6.06978167 12.6598834,6 12,6 C8.143,6 4.664,8.384 3.14,12 C3.62148288,13.1424161 4.29810228,14.1618612 5.12012808,15.0220075 Z"/>
                </svg>             
                `;
        inputPass.type = 'password';
      }
    }
  });
},
      // Рендер формы регистрации
signUp = wrapperContent => {
  document.querySelector(wrapperContent).innerHTML = `
    <div class="auth__wrapper__content__title">Регистрация</div>
        <div class="auth__wrapper__content__form">
            <div class="auth__wrapper__content__form__input" data-id="name">
                <input placeholder="Имя" type="text" class="auth__wrapper__content__form__input__field" data-id="auth-name">
            </div>
            <div class="auth__wrapper__content__form__input" data-id="surname">
                <input placeholder="Фамилия" type="text" class="auth__wrapper__content__form__input__field" data-id="auth-surname">
            </div>
            <div class="auth__wrapper__content__form__input" data-id="email">
                <input placeholder="Эл.почта" type="text" class="auth__wrapper__content__form__input__field" data-id="auth-email">
            </div>
            <div class="auth__wrapper__content__form__input" data-id="pass">
                <input placeholder="Пароль" type="password" class="auth__wrapper__content__form__input__field" data-id="auth-pass">
                <div class="auth__wrapper__content__form__input__image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#7c7f84" fill-rule="evenodd" d="M15.5817018,10.217288 C15.8494088,10.754062 16,11.3594578 16,12 C16,14.209 14.209,16 12,16 C11.3594578,16 10.754062,15.8494088 10.217288,15.5817018 L8.48536364,17.3136262 C9.58485203,17.7588553 10.7733084,18 12,18 C15.857,18 19.336,15.616 20.86,12 C20.1808436,10.3885634 19.1134329,9.02179652 17.7973358,8.00165407 L15.5817018,10.217288 Z M19.2229364,6.57605345 C20.9352704,7.9668572 22.2593071,9.84134303 23,12 C21.4,16.663 17.078,20 12,20 C10.198616,20 8.49236889,19.5800637 6.9690243,18.8299656 L5.12132034,20.6776695 C4.73079605,21.0681938 4.09763107,21.0681938 3.70710678,20.6776695 C3.31658249,20.2871452 3.31658249,19.6539803 3.70710678,19.263456 L19.263456,3.70710678 C19.6539803,3.31658249 20.2871452,3.31658249 20.6776695,3.70710678 C21.0681938,4.09763107 21.0681938,4.73079605 20.6776695,5.12132034 L19.2229364,6.57605345 Z M5.12012808,15.0220075 L3.70481475,16.4373209 C2.5100928,15.194138 1.57764926,13.6834866 1,12 C2.6,7.337 6.922,4 12,4 C13.2450856,4 14.4447211,4.20061769 15.5699262,4.57220943 L13.9385597,6.20357596 C13.3087024,6.06978167 12.6598834,6 12,6 C8.143,6 4.664,8.384 3.14,12 C3.62148288,13.1424161 4.29810228,14.1618612 5.12012808,15.0220075 Z"/>
                    </svg>
                </div>
            </div>
            <div class="auth__wrapper__content__form__button" data-id="button-signup">Зарегистрироваться</div>
        </div>
        <div class="auth__wrapper__content__switch">Уже есть аккаунт?
            <span class="auth__wrapper__content__switch__span" data-id="switch-signin">Войти</span>
    </div>
    `;
  validateInputs();
},
      // Рендер формы авторизации
signIn = wrapperContent => {
  document.querySelector(wrapperContent).innerHTML = `
    <div class="auth__wrapper__content__title">Вход в аккаунт</div>
        <div class="auth__wrapper__content__form">
            <div class="auth__wrapper__content__form__input" data-id="email">
                <input placeholder="Эл.почта" type="text" class="auth__wrapper__content__form__input__field" data-id="auth-email">
            </div>
            <div class="auth__wrapper__content__form__input" data-id="pass">
                <input placeholder="Пароль" type="password" class="auth__wrapper__content__form__input__field" data-id="auth-pass">
                <div class="auth__wrapper__content__form__input__image">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#7c7f84" fill-rule="evenodd" d="M15.5817018,10.217288 C15.8494088,10.754062 16,11.3594578 16,12 C16,14.209 14.209,16 12,16 C11.3594578,16 10.754062,15.8494088 10.217288,15.5817018 L8.48536364,17.3136262 C9.58485203,17.7588553 10.7733084,18 12,18 C15.857,18 19.336,15.616 20.86,12 C20.1808436,10.3885634 19.1134329,9.02179652 17.7973358,8.00165407 L15.5817018,10.217288 Z M19.2229364,6.57605345 C20.9352704,7.9668572 22.2593071,9.84134303 23,12 C21.4,16.663 17.078,20 12,20 C10.198616,20 8.49236889,19.5800637 6.9690243,18.8299656 L5.12132034,20.6776695 C4.73079605,21.0681938 4.09763107,21.0681938 3.70710678,20.6776695 C3.31658249,20.2871452 3.31658249,19.6539803 3.70710678,19.263456 L19.263456,3.70710678 C19.6539803,3.31658249 20.2871452,3.31658249 20.6776695,3.70710678 C21.0681938,4.09763107 21.0681938,4.73079605 20.6776695,5.12132034 L19.2229364,6.57605345 Z M5.12012808,15.0220075 L3.70481475,16.4373209 C2.5100928,15.194138 1.57764926,13.6834866 1,12 C2.6,7.337 6.922,4 12,4 C13.2450856,4 14.4447211,4.20061769 15.5699262,4.57220943 L13.9385597,6.20357596 C13.3087024,6.06978167 12.6598834,6 12,6 C8.143,6 4.664,8.384 3.14,12 C3.62148288,13.1424161 4.29810228,14.1618612 5.12012808,15.0220075 Z"/>
                    </svg>
                </div>
            </div>
            <div class="auth__wrapper__content__form__button" data-id="button-signin">Войти</div>
        </div>
        <div class="auth__wrapper__content__switch">Нет аккаунта?
            <span class="auth__wrapper__content__switch__span" data-id="switch-signup">Зарегистрироваться</span>
    </div>
    `;
  validateInputs();
},
      // Рендер окна авторизации/регистрации
renderAuthWrapper = wrapperContent => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('auth');
  wrapper.innerHTML = `
          <div class="auth__wrapper">
            <div class="auth__wrapper__exit">&#10006</div>
            <div class="auth__wrapper__content"></div>
          </div>
          `;
  document.body.append(wrapper);
  document.body.style.overflow = 'hidden';

  if (localStorage.getItem('autorized') === 'true') {
    loadUser(wrapperContent);
  } else {
    signUp(wrapperContent);
  }
},
      // Рендер формы успешеной авторизации/регистрации
loadUser = wrapperContent => {
  (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.loadFromDb)(`http://localhost:3000/user/${localStorage.getItem('userid')}`).then(result => {
    document.querySelector(wrapperContent).innerHTML = `
        <div class="auth__wrapper__content__title">Аккаунт</div>
        <div class="auth__wrapper__content__form">
            <div class="auth__wrapper__content__form__meta">
                <div class="auth__wrapper__content__form__meta__block">
                    <div class="auth__wrapper__content__form__meta__block__text">Имя:</div>
                    <div class="auth__wrapper__content__form__meta__block__value" data-id="acc-name">${result.name}</div>
                </div>
                <div class="auth__wrapper__content__form__meta__block">
                    <div class="auth__wrapper__content__form__meta__block__text">Фамилия:</div>
                    <div class="auth__wrapper__content__form__meta__block__value" data-id="acc-surname">${result.surname}</div>
                </div>
                <div class="auth__wrapper__content__form__meta__block">
                    <div class="auth__wrapper__content__form__meta__block__text">E-mail:</div>
                    <div class="auth__wrapper__content__form__meta__block__value" data-id="acc-email">${result.email}</div>
                </div>
            </div>
            <div class="auth__wrapper__content__form__button" data-id="button-logout">Выйти</div>
        </div>
        `;
  }).then(() => {
    (0,_checkaccount__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__client__auth__title');
    (0,_orderscount__WEBPACK_IMPORTED_MODULE_3__["default"])('.header__client__orders__count');
  });
},
      // Проверка соответствия введенных данных пользователя в БД
checkAuth = wrapperContent => {
  const inputEmail = document.querySelector('[data-id="auth-email"]'),
        inputPass = document.querySelector('[data-id="auth-pass"]');
  (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.loadFromDb)(`http://localhost:3000/user?email=${inputEmail.value}&pass=${inputPass.value}`).then(result => {
    if (result.length > 0) {
      localStorage.setItem('userid', result[0].id);
      localStorage.setItem('autorized', 'true');
      loadUser(wrapperContent);
    } else {
      (0,_noty__WEBPACK_IMPORTED_MODULE_1__["default"])('Проверьте введенные данные', 'red');
    }
  });
},
      // Выход из аккаунта
logOut = wrapperContent => {
  localStorage.setItem('autorized', 'false');
  localStorage.removeItem('userid');
  signUp(wrapperContent);
  (0,_checkaccount__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__client__auth__title');
  (0,_orderscount__WEBPACK_IMPORTED_MODULE_3__["default"])('.header__client__orders__count');
},
      auth = wrapperContent => {
  const authBtn = document.querySelector('.header__client__auth');
  authBtn.addEventListener('click', () => {
    renderAuthWrapper(wrapperContent);
  });
  document.addEventListener('click', e => {
    const wrapper = document.querySelector('.auth');

    if (wrapper && (e.target === wrapper || e.target.classList.contains('auth__wrapper__exit'))) {
      wrapper.remove();
      document.body.style.overflow = 'auto';
    }
  });
  document.addEventListener('click', e => {
    if (e.target.getAttribute('data-id') === 'button-signup') {
      const inputName = document.querySelector('[data-id="auth-name"]'),
            inputSurname = document.querySelector('[data-id="auth-surname"]'),
            inputEmail = document.querySelector('[data-id="auth-email"]'),
            inputPass = document.querySelector('[data-id="auth-pass"]'),
            user = {
        "name": inputName.value,
        "surname": inputSurname.value,
        "email": inputEmail.value,
        "pass": inputPass.value
      };
      (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputName, /^[a-zа-я]+$/gi, '[data-id="name"]', 'Только буквы');
      (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputSurname, /^[a-zа-я]+$/gi, '[data-id="surname"]', 'Только буквы');
      (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail');
      (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов');

      if ((0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputName, /^[a-zа-я]+$/gi, '[data-id="name"]', 'Только буквы') && (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputSurname, /^[a-zа-я]+$/gi, '[data-id="surname"]', 'Только буквы') && (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail') && (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов')) {
        (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.postToDb)('http://localhost:3000/user', JSON.stringify(user)).then(result => {
          localStorage.setItem('userid', result.id);
          localStorage.setItem('autorized', 'true');
          loadUser(wrapperContent);
          (0,_noty__WEBPACK_IMPORTED_MODULE_1__["default"])('Вы зарегистрировались!', '#0cb60c');
        });
      }
    }
  });
  document.addEventListener('click', e => {
    if (e.target.getAttribute('data-id') === 'button-logout') {
      logOut(wrapperContent);
      (0,_noty__WEBPACK_IMPORTED_MODULE_1__["default"])('Вы вышли из аккаунта!', '#0cb60c');
    }
  });
  document.addEventListener('click', e => {
    if (e.target.getAttribute('data-id') === 'button-signin') {
      const inputEmail = document.querySelector('[data-id="auth-email"]'),
            inputPass = document.querySelector('[data-id="auth-pass"]');
      (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail');
      (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов');

      if ((0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail') && (0,_modal__WEBPACK_IMPORTED_MODULE_4__.validate)(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов')) {
        checkAuth(wrapperContent);
        (0,_noty__WEBPACK_IMPORTED_MODULE_1__["default"])('Вы вошли в аккаунт!', '#0cb60c');
      }
    }
  });
  document.addEventListener('click', e => {
    if (e.target.getAttribute('data-id') === 'switch-signup') {
      signUp(wrapperContent);
    } else if (e.target.getAttribute('data-id') === 'switch-signin') {
      signIn(wrapperContent);
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (auth);


/***/ }),

/***/ "./js/modules/checkaccount.js":
/*!************************************!*\
  !*** ./js/modules/checkaccount.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetches */ "./js/services/fetches.js");


function checkAccountLogin(text) {
  const accountText = document.querySelector(text);

  if (localStorage.getItem('autorized') === 'true') {
    (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.loadFromDb)(`http://localhost:3000/user/${localStorage.getItem('userid')}`).then(result => {
      accountText.textContent = `${result.name} ${result.surname}`;
    });
  } else {
    accountText.textContent = 'Войти';
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkAccountLogin);

/***/ }),

/***/ "./js/modules/mainwrapper.js":
/*!***********************************!*\
  !*** ./js/modules/mainwrapper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "charsMainWrapper": () => (/* binding */ charsMainWrapper),
/* harmony export */   "hideWrapper": () => (/* binding */ hideWrapper),
/* harmony export */   "mainWrapper": () => (/* binding */ mainWrapper),
/* harmony export */   "sliderMainWrapper": () => (/* binding */ sliderMainWrapper)
/* harmony export */ });
/* harmony import */ var _services_fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetches */ "./js/services/fetches.js");
/* harmony import */ var _scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scroll */ "./js/modules/scroll.js");
/* harmony import */ var _slidermenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slidermenu */ "./js/modules/slidermenu.js");


 // Логика главного контента

function hideWrapper() {
  const wrapper = document.querySelectorAll('.main__content__wrapper'),
        spisok = document.querySelectorAll('.main__movies__list__item');
  wrapper.forEach(function (item) {
    item.classList.add('hide');
    item.classList.remove('show');
    item.classList.remove('fade');
  });
  spisok.forEach(function (item) {
    item.classList.remove('main__movies__list__item__active');
  });
}

function mainWrapper() {
  const wrapper = document.querySelectorAll('.main__content__wrapper'),
        spisok = document.querySelectorAll('.main__movies__list__item'),
        spisokWrapper = document.querySelector('.main__movies__list');
  (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.loadFromDb)('http://localhost:3000/products').then(result => {
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
  (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.loadFromDb)('http://localhost:3000/categories').then(result => {
    result.forEach(item => {
      new _slidermenu__WEBPACK_IMPORTED_MODULE_2__["default"](item, '.main__slider__background__list').render();
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
    spisokWrapper.addEventListener('click', function (e) {
      if (e.target.classList.contains('main__movies__list__item')) {
        spisok.forEach(function (item, i) {
          if (e.target == item) {
            hideWrapper();
            showWrapper(i);
            (0,_scroll__WEBPACK_IMPORTED_MODULE_1__.checkDOMHeight)();
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
    item.style.width = 100 * slImageItem.length / slImageWrapper.length + '%';
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
} //Скрыть/отобразить блок характеристик


function charsMainWrapper() {
  const charsTitleWrapper = document.querySelectorAll('.main__content__wrapper__chars__title'),
        charsTitileWrapperText = document.querySelectorAll('.main__content__wrapper__chars__title__text'),
        charsValuesLeft = document.querySelectorAll('.main__content__wrapper__chars__values__leftblock'),
        charsValuesRight = document.querySelectorAll('.main__content__wrapper__chars__values__rightblock'),
        hideChars = () => {
    charsValuesLeft.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    });
    charsValuesRight.forEach(item => {
      item.classList.add('hide');
      item.classList.remove('show');
    });
    charsTitileWrapperText.forEach(item => {
      item.classList.remove('showed');
      item.classList.add('hided');
    });
  },
        showChars = () => {
    charsValuesLeft.forEach(item => {
      item.classList.add('show');
      item.classList.remove('hide');
    });
    charsValuesRight.forEach(item => {
      item.classList.add('show');
      item.classList.remove('hide');
    });
    charsTitileWrapperText.forEach(item => {
      item.classList.remove('hided');
      item.classList.add('showed');
    });
  };

  charsTitleWrapper.forEach((item, i) => {
    item.addEventListener('click', function (e) {
      if (e.target.classList.contains('hided')) {
        showChars();
      } else {
        hideChars();
      }
    });
  });
}



/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "doModal": () => (/* binding */ doModal),
/* harmony export */   "hideModal": () => (/* binding */ hideModal),
/* harmony export */   "removeInputError": () => (/* binding */ removeInputError),
/* harmony export */   "showModal": () => (/* binding */ showModal),
/* harmony export */   "validate": () => (/* binding */ validate)
/* harmony export */ });
/* harmony import */ var _services_fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetches */ "./js/services/fetches.js");
/* harmony import */ var _orderscount__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./orderscount */ "./js/modules/orderscount.js");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./js/modules/auth.js");


 // Modal

const modal = document.querySelector('.modal'),
      modalExitButton = document.querySelectorAll('.modal__wrapper__content__exit'),
      orderButton = document.querySelectorAll('.main__content__wrapper__order'),
      modalOrderTitle = document.querySelector('.modal__wrapper__content__main__order__title'),
      modalOrderCost = document.querySelector('.modal__wrapper__content__main__order__cost'),
      modalOrderImage = document.querySelector('.modal__wrapper__content__main__order__image'),
      modalMain = document.querySelector('.modal__wrapper__content'),
      modalSubmit = document.querySelector('.modal__wrapper__contentsubmit'),
      modalSendButton = document.querySelector('.modal__wrapper__content__send__button'),
      inputs = document.querySelectorAll('.modal__wrapper__content__main__form__input__field'),
      inputPhone = document.querySelector('[data-id="modal-phone"]'),
      inputEmail = document.querySelector('[data-id="modal-email"]'),
      inputName = document.querySelector('[data-id="modal-name"]'),
      inputSurname = document.querySelector('[data-id="modal-surname"]'),
      modalSubmitImage = document.querySelector('.modal__wrapper__contentsubmit__main__image'),
      modalSubmitText = document.querySelector('.modal__wrapper__contentsubmit__main__text'),
      orders = [],
      orderStatus = {
  load: 'https://icones.pro/wp-content/uploads/2021/06/icone-chargement-grise.png',
  done: 'https://www.seekpng.com/png/full/132-1323669_vector-icon-of-white-checkmark-on-green-circle.png',
  failure: 'https://cdn0.iconfinder.com/data/icons/shift-free/32/Error-512.png'
},
      // Скрыть модальное окно
hideModal = () => {
  modal.classList.add('hide');
  modal.classList.remove('show');
},
      // Открыть модальное окно + проверка на авторизацию
showModal = (contentTitle, contentCost, slImageField, i) => {
  if (localStorage.getItem('autorized') === 'true') {
    modal.classList.remove('hide');
    modal.classList.add('show');
    modalOrderTitle.textContent = document.querySelectorAll(contentTitle)[i].textContent;
    modalOrderCost.textContent = document.querySelectorAll(contentCost)[i].textContent;

    if (document.querySelectorAll(slImageField)[i].firstElementChild) {
      modalOrderImage.src = document.querySelectorAll(slImageField)[i].firstElementChild.src;
    } else {
      modalOrderImage.src = document.querySelectorAll(slImageField)[i].src;
    }

    inputs.forEach(item => {
      item.value = '';
      item.style.border = 'none';

      if (item.nextElementSibling) {
        item.nextElementSibling.remove();
      }
    });
    showModalForm(); // Если не авторизован - открывается форма авторизации
  } else {
    (0,_auth__WEBPACK_IMPORTED_MODULE_2__.renderAuthWrapper)('.auth__wrapper__content');
  }
},
      // Открыть форму в модальном окне
showModalForm = () => {
  modalSubmit.classList.add('hide');
  modalSubmit.classList.remove('show');
  modalMain.classList.add('show');
  modalMain.classList.remove('hide');
},
      // Скрыть форму в модальном окне
hideModalForm = () => {
  modalSubmit.classList.add('show');
  modalSubmit.classList.remove('hide');
  modalSubmitImage.src = orderStatus.load;
  modalSubmitText.textContent = 'Оформляем...';
  modalMain.classList.add('hide');
  modalMain.classList.remove('show');
},
      // Записать состав заказа в массив с заказами
pushValuesToArray = array => {
  array.push(new UserOrders());
},
      // Валидация инпутов
validate = (input, reg, inputContainer, errorText) => {
  const parent = document.querySelector(inputContainer);

  if (!input.value.match(reg) && input.value != '') {
    input.style.border = '2px solid red';

    if (!parent.lastElementChild.classList.contains('modal__wrapper__content__main__form__input__validate')) {
      const inputText = document.createElement('span');
      inputText.classList.add('modal__wrapper__content__main__form__input__validate');
      inputText.textContent = errorText; //parent.append(inputText);

      parent.insertAdjacentElement('beforeend', inputText);
    }
  } else if (input.value === '') {
    input.style.border = '2px solid red';

    if (!parent.lastElementChild.classList.contains('modal__wrapper__content__main__form__input__validate')) {
      const inputText = document.createElement('span');
      inputText.classList.add('modal__wrapper__content__main__form__input__validate');
      inputText.textContent = 'Заполните поле'; //parent.append(inputText);

      parent.insertAdjacentElement('beforeend', inputText);
    }
  } else {
    return true;
  }
},
      // Убрать ошибку с инпута
removeInputError = input => {
  input.style.border = 'none';
  input.parentElement.childNodes.forEach(item => {
    if (item.tagName == 'SPAN') {
      item.remove();
    }
  });
},
      // Modal
doModal = () => {
  hideModal();
  orderButton.forEach((item, i) => {
    item.addEventListener('click', () => {
      showModal('.main__content__wrapper__title', '.main__content__wrapper__cost', '.main__content__wrapper__field', i);
    });
  });
  modalExitButton.forEach(item => {
    item.addEventListener('click', hideModal);
  });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      hideModal();
    }
  });
  inputs.forEach(item => {
    item.addEventListener('blur', () => {
      switch (item.getAttribute('data-id')) {
        case 'modal-phone':
          validate(inputPhone, /[7-8]\d{10}$/g, '[data-id="input-phone"]', 'Только цифры в формате 7XXXXXXXXXX');
          break;

        case 'modal-email':
          validate(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="input-email"]', 'Некорректный формат e-mail');
          break;

        case 'modal-name':
          validate(inputName, /^[a-z]+$/gi, '[data-id="input-name"]', 'Только буквы');
          break;

        case 'modal-surname':
          validate(inputSurname, /^[a-z]+$/gi, '[data-id="input-surname"]', 'Только буквы');
          break;
      }
    });
    item.addEventListener('keydown', () => {
      switch (item.getAttribute('data-id')) {
        case 'modal-phone':
          removeInputError(inputPhone);
          break;

        case 'modal-email':
          removeInputError(inputEmail);
          break;

        case 'modal-name':
          removeInputError(inputName);
          break;

        case 'modal-surname':
          removeInputError(inputSurname);
          break;
      }
    });
  });
  modalSendButton.addEventListener('click', e => {
    e.preventDefault();
    validate(inputPhone, /[7-8]\d{10}$/g, '[data-id="input-phone"]', 'Только цифры в формате 7XXXXXXXXXX');
    validate(inputEmail, /^w+\@\w+\.\w+/g, '[data-id="input-email"]', 'Некорректный формат e-mail');
    validate(inputName, /^[a-z]+$/gi, '[data-id="input-name"]', 'Только буквы');
    validate(inputSurname, /^[a-z]+$/gi, '[data-id="input-surname"]', 'Только буквы');

    if (validate(inputPhone, /[7-8]\d{10}$/g, '[data-id="input-phone"]', 'Только цифры в формате 7XXXXXXXXXX') && validate(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="input-email"]', 'Некорректный формат e-mail') && validate(inputName, /^[a-z]+$/gi, '[data-id="input-name"]', 'Только буквы') && validate(inputSurname, /^[a-z]+$/gi, '[data-id="input-surname"]', 'Только буквы')) {
      (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.postToDb)('http://localhost:3000/response', JSON.stringify(new UserOrders()))
      /* fetch('server.php', {
          method: 'POST',
          headers: {
              'Content-type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify(new UserOrders())
      }) */
      //.then((response) => response.text())
      .then(result => {
        console.log(result);
        pushValuesToArray(orders);
        (0,_orderscount__WEBPACK_IMPORTED_MODULE_1__["default"])('.header__client__orders__count');
        modalSubmitImage.src = orderStatus.done;
        modalSubmitText.textContent = 'Заказ оформлен';
      }).catch(() => {
        modalSubmitImage.src = orderStatus.failure;
        modalSubmitText.textContent = 'Ошибка';
      });
      hideModalForm();
    }
  });
}; // Класс с заказами пользователя


class UserOrders {
  constructor() {
    this.userid = parseInt(localStorage.getItem('userid'));
    this.phone = inputPhone.value;
    this.email = inputEmail.value;
    this.name = inputName.value;
    this.surname = inputSurname.value;
    this.ordertitle = modalOrderTitle.textContent;
    this.ordercost = modalOrderCost.textContent;
    this.orderimage = modalOrderImage.src;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserOrders);


/***/ }),

/***/ "./js/modules/noty.js":
/*!****************************!*\
  !*** ./js/modules/noty.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//Нотификация об успешном/неудачном удалении из окна заказов
function showNoty(text, color) {
  const noty = document.createElement('div');
  noty.classList.add('noty');
  noty.style.backgroundColor = color;
  noty.innerHTML = `
        <div class="noty__content">
            <div class="noty__content__text">
                ${text}
            </div>
        </div>
    `;
  document.body.append(noty);
  setTimeout(() => {
    noty.remove();
  }, 2000);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showNoty);

/***/ }),

/***/ "./js/modules/orderscount.js":
/*!***********************************!*\
  !*** ./js/modules/orderscount.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetches */ "./js/services/fetches.js");
 //Отобразить количество заказов

function getOrdersCount(text) {
  (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.loadFromDb)(`http://localhost:3000/response?userid=${localStorage.getItem('userid')}`).then(data => {
    const ordersCount = document.querySelector(text);
    ordersCount.textContent = data.length;
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getOrdersCount);

/***/ }),

/***/ "./js/modules/ordersform.js":
/*!**********************************!*\
  !*** ./js/modules/ordersform.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _services_fetches__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/fetches */ "./js/services/fetches.js");
/* harmony import */ var _noty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./noty */ "./js/modules/noty.js");
/* harmony import */ var _orderscount__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./orderscount */ "./js/modules/orderscount.js");




function ordersFrom() {
  //Окно с заказами
  const ordersList = document.querySelector('.orders__wrapper__content__list'),
        ordersForm = document.querySelector('.orders'),
        ordersBtn = document.querySelector('.header__client__orders'),
        hideOrdersForm = () => {
    ordersForm.classList.add('hide');
    ordersForm.classList.remove('show');
    document.body.style.overflow = 'auto';
  },
        showOrdersForm = () => {
    ordersForm.classList.remove('hide');
    ordersForm.classList.add('show');
    document.body.style.overflow = 'hidden';
  },
        //Загрузка заказов из сервера в окно с заказами
  getOrders = () => {
    (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.loadFromDb)(`http://localhost:3000/response?userid=${localStorage.getItem('userid')}`).then(data => {
      const wrapper = document.createElement('div');
      wrapper.classList.add('orders');
      wrapper.innerHTML = `
                <div class="orders__wrapper">
                    <span class="orders__wrapper__exit">&#10006</span>
                    <div class="orders__wrapper__content">
                        <div class="orders__wrapper__content__title">Заказы</div>
                        <div class="orders__wrapper__content__list">
                            <div class="orders__wrapper__content__list__total">
                                Количество:
                                <span class="orders__wrapper__content__list__total__count">0</span>
                            </div>
                        </div>
                    </div>
                </div>
                `;
      document.body.append(wrapper);

      if (localStorage.getItem('autorized') === 'true') {
        data.forEach(item => {
          const order = document.createElement('div');
          order.classList.add('orders__wrapper__content__list__item');
          order.setAttribute('data-id', item.id);
          order.innerHTML = `
                        <div class="orders__wrapper__content__list__item__person">
                            <div class="orders__wrapper__content__list__item__person__name">${item.name}</div>
                            <div class="orders__wrapper__content__list__item__person__surname">${item.surname}</div>
                        </div>
                        <div class="orders__wrapper__content__list__item__phone">${item.phone}</div>
                        <div class="orders__wrapper__content__list__item__email">${item.email}</div>
                        <div class="orders__wrapper__content__list__item__good">
                            <div class="orders__wrapper__content__list__item__good__l">
                                <img class="orders__wrapper__content__list__item__good__l__image" src =${item.orderimage}>
                            </div>
                            <div class="orders__wrapper__content__list__item__good__r">
                                <div class="orders__wrapper__content__list__item__good__r__title">${item.ordertitle}</div>
                                <div class="orders__wrapper__content__list__item__good__r__cost">${item.ordercost}</div>
                            </div>
                        </div>
                        <button class="orders__wrapper__content__list__item__exit">&#10006</button> 
                        `;

          if (!document.querySelector(`[data-id="${item.id}"]`)) {
            const ordersList = document.querySelector('.orders__wrapper__content__list');
            ordersList.append(order);
          }
        });
        (0,_orderscount__WEBPACK_IMPORTED_MODULE_2__["default"])('.orders__wrapper__content__list__total__count');
      }
    }).then(() => {
      const orderItems = document.querySelectorAll('.orders__wrapper__content__list__item');
      orderItems.forEach(item => {
        item.addEventListener('click', e => {
          if (e.target.classList.contains('orders__wrapper__content__list__item__exit')) {
            (0,_services_fetches__WEBPACK_IMPORTED_MODULE_0__.deleteFromDb)(`http://localhost:3000/response/${item.getAttribute('data-id')}`).then(() => {
              item.remove();
              (0,_noty__WEBPACK_IMPORTED_MODULE_1__["default"])('Заказ удален!', '#0cb60c');
              (0,_orderscount__WEBPACK_IMPORTED_MODULE_2__["default"])('.header__client__orders__count');
              (0,_orderscount__WEBPACK_IMPORTED_MODULE_2__["default"])('.orders__wrapper__content__list__total__count');
            });
          }
        });
      });
    });
  },
        doOrdersForm = () => {
    //hideOrdersForm();
    ordersBtn.addEventListener('click', () => {
      //showOrdersForm();
      document.body.style.overflow = 'hidden';
      getOrders();
    });
    document.body.addEventListener('click', e => {
      const wrapper = document.querySelector('.orders');

      if (e.target === wrapper) {
        wrapper.remove();
        document.body.style.overflow = 'auto';
      }

      if (e.target.classList.contains('orders__wrapper__exit')) {
        wrapper.remove();
        document.body.style.overflow = 'auto';
      }
    });
  };

  doOrdersForm();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ordersFrom);

/***/ }),

/***/ "./js/modules/scroll.js":
/*!******************************!*\
  !*** ./js/modules/scroll.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkDOMHeight": () => (/* binding */ checkDOMHeight),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let scrollToTopBtn = document.querySelector('.scrolltop__item'); //Если клиентское окно больше окна документа, то скрывает стрелку прокрутки

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
  document.addEventListener('scroll', function () {
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
  }); //Клик по стрелке прокрутке перемещает на начало/конец страницы

  function scrollToTopWindow() {
    scrollToTopBtn.addEventListener('click', function () {
      if (document.documentElement.scrollTop == 0) {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth"
        });
      } else {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  }

  scrollToTopWindow(); //Заполненность верхнего скролла

  function doScroll() {
    let scrollElem = document.querySelector('.header__scroll__line__complete'),
        scrolled = document.documentElement.scrollHeight - document.documentElement.clientHeight,
        total = Math.floor(document.documentElement.scrollTop / scrolled * 100);
    scrollElem.style.width = total + '%';
  }

  document.addEventListener('scroll', function () {
    doScroll();
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);


/***/ }),

/***/ "./js/modules/search.js":
/*!******************************!*\
  !*** ./js/modules/search.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
/* harmony import */ var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_fetches__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/fetches */ "./js/services/fetches.js");
/* harmony import */ var _mainwrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainwrapper */ "./js/modules/mainwrapper.js");




function search() {
  const wrapper = document.querySelectorAll('.main__content__wrapper'),
        spisok = document.querySelectorAll('.main__movies__list__item'),
        input = document.querySelector('[data-id="input-search"]'),
        searchField = document.querySelector('.header__search__field'),
        doSearch = () => {
    (0,_services_fetches__WEBPACK_IMPORTED_MODULE_1__.loadFromDb)(`http://localhost:3000/products?model_like=${input.value}`).then(result => {
      console.log(result);
      const searchResult = document.createElement('div');
      searchResult.classList.add('header__search__field__result');
      searchResult.innerHTML = `
                <div class="header__search__field__result__total">
                    Найдено:
                    <span class="header__search__field__result__total__count">${result.length}</span>
                </div>
                `;
      document.querySelectorAll('.header__search__field__result').forEach(item => {
        item.remove();
      });
      searchField.append(searchResult);
      return result;
    }).then(result => {
      const searchResult = document.querySelector('.header__search__field__result');
      result.forEach(item => {
        const searchItem = document.createElement('div');
        searchItem.classList.add('header__search__field__result__item');
        searchItem.setAttribute('item-id', item.id);
        searchItem.innerHTML = `
                    <div class="header__search__field__result__item__title">${item.model}</div>
                    <div class="header__search__field__result__item__chars">
                        <div class="header__search__field__result__item__chars__color">${item.chars.color}</div>
                        <div class="header__search__field__result__item__chars__mod">${item.chars.mod}</div>
                    </div>
                    `;
        searchResult.append(searchItem);
      }); // Если высота формы результата больше высоты контейнера формы результата, то добавить скролл

      if (searchResult.scrollHeight > searchResult.offsetHeight) {
        searchResult.style.overflowY = 'scroll';
      } // Если значение инпута пустое, то форму результата


      if (input.value == '') {
        searchResult.remove();
      }
    });
  };

  input.addEventListener('input', () => {
    doSearch();
  });
  document.addEventListener('click', e => {
    const searchResult = document.querySelector('.header__search__field__result'); // Если выпадающее меню существует и клик был вне ее области, то меню удалится

    if (searchResult && !e.composedPath().includes(searchField)) {
      searchResult.remove();
    }
  }); // При клике на элемент в выпадающем меню - данный элемент открывается в основном окне

  document.addEventListener('click', e => {
    const searchItem = document.querySelectorAll('.header__search__field__result__item'),
          searchResult = document.querySelector('.header__search__field__result');
    searchItem.forEach(item => {
      if (item.contains(e.target)) {
        wrapper.forEach(wrap => {
          if (item.getAttribute('item-id') == wrap.getAttribute('wrapper-id')) {
            (0,_mainwrapper__WEBPACK_IMPORTED_MODULE_2__.hideWrapper)();
            wrap.classList.add('show');
            wrap.classList.add('fade');
            wrap.classList.remove('hide');
            spisok[wrap.getAttribute('wrapper-id') - 1].classList.add('main__movies__list__item__active');
            searchResult.remove();
            input.value = '';
          }
        });
      }
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (search);

/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/modal */ "./js/modules/modal.js");


function slider(modalOrderTitle, modalOrderCost, modalOrderImage) {
  //Slider
  const mainnew = document.querySelector('.main__new'),
        mainnewprev = document.querySelector('.main__new__previous'),
        mainnewnext = document.querySelector('.main__new__next'),
        mainnewitems = document.querySelector('.main__new__items'),
        mainnewwrapper = document.querySelector('.main__new__wrapper'),
        height = window.getComputedStyle(mainnewitems).height;

  class NewItems {
    constructor(mainitems, src, itemstitle, itemscost, itemstitlefull, desc) {
      this.mainitems = mainitems;
      this.src = src;
      this.itemstitle = itemstitle;
      this.itemscost = itemscost;
      this.itemstitlefull = itemstitlefull;
      this.desc = desc;
    }

    render() {
      const item = document.createElement('div');
      item.classList.add('main__new__items__item');
      item.innerHTML = `
                    <img class="main__new__items__item__image" src="${this.src}">
                    <div class="main__new__items__item__title">${this.itemstitle}</div>
                    <div class="main__new__items__item__cost">${this.itemscost}</div>
                    <div class="main__new__items__item__hover">
                        <div class="main__new__items__item__wrap">
                            <img class="main__new__items__item__wrap__img" src="${this.src}">
                            <div class="main__new__items__item__title hovtit">${this.itemstitlefull}</div>
                            <div class="main__new__items__item__wrap__desc">${this.desc}</div>
                        </div>
                        <div class="main__new__items__item__buy">
                            <div class="main__new__items__item__cost hovcost">${this.itemscost}</div>
                            <div class="main__new__items__item__buy__button">Заказать</div>
                        </div>
                    </div>
            `;
      this.mainitems.append(item);
    }

  }

  new NewItems(mainnewwrapper, 'https://images.biggeek.ru/1/435/84ab/15496-4283555.png', 'Apple AirPods Pro', '16990 RUB', 'Apple AirPods Pro с зарядным футляром MagSafe', 'Наушники AirPods Pro — это активное шумоподавление для иммерсивного звука и комфорт от использования целый день.').render();
  new NewItems(mainnewwrapper, 'https://images.biggeek.ru/1/435/d975/11156-42412-wifi-spacegray.png', 'Apple iPad Pro 12.9', '109990 RUB', 'Apple iPad Pro 12.9" (2020) 128Gb Wi-Fi Space Gray', 'iPad Pro оснащён чипом Apple M1 — это высочайшая производительность и возможность целый день работать без подзарядки.').render();
  new NewItems(mainnewwrapper, 'https://images.biggeek.ru/1/435/0dd7/14102-69912838-645hq-40.jpeg', 'Apple AirPods Max', '54990 RUB', 'Наушники Apple AirPods Max (Серебристый | Silver)', 'AirPods Max полностью меняют представление о полноразмерных наушниках. Драйвер, разработанный Apple, способен воспроизводить звук высокой чёткости.').render();
  new NewItems(mainnewwrapper, 'https://images.biggeek.ru/1/435/b944/12679-472MHKC3.jpeg', 'Чехол Apple MagSafe', '5990 RUB', 'Кожаный чехол Apple MagSafe для iPhone 12', 'MagSafe — это новая экосистема аксессуаров, которые мгновенно примагничиваются и обеспечивают более быструю беспроводную зарядку. Их можно комбинировать друг с другом, создавая любые сочетания.').render();
  new NewItems(mainnewwrapper, 'https://images.biggeek.ru/1/435/0c4a/7691-4427691-286designed_to_do_more__d2elrvad4ju6_large.jpg', 'Стилус Apple Pencil 2', '12990 RUB', 'Стилус Apple Pencil (2-го поколения)', 'Стилус Apple Pencil – аксессуар, который обуславливает возможность создания невероятно четких эскизов и зарисовок. Характеризуется невероятной четкостью и отзывчивостью.').render();
  new NewItems(mainnewwrapper, 'https://images.biggeek.ru/1/435/ae4a/15355-7hero_pods3.jpg', 'Apple AirPods 3', '15490 RUB', 'Наушники Apple AirPods (3-го поколения; 2021)', 'Наушники Apple Airpods 3 – ваш проводник в мир цифрового звука. Модель подарит вам высокодетализированное и объемное звучание, даря яркие эмоции при прослушивании любимых песен или просмотре кино. ').render();
  new NewItems(mainnewwrapper, 'https://images.biggeek.ru/1/435/a6dd/14707-47BLue.jpg', 'Apple iPhone 13 Pro', '96990 RUB', 'Apple iPhone 13 Pro 128GB Sierra Blue', 'iPhone 13 Pro. Грандиозный апгрейд камер Pro. Режим «Киноэффект» делает из видео настоящее кино. Дисплей Super Retina XDR с технологией ProMotion для более быстрого и плавного взаимодействия.').render();
  const mainnewitemsitem = document.querySelectorAll('.main__new__items__item');
  let offset = 0;
  mainnewwrapper.style.height = 100 * mainnewitemsitem.length + '%';
  mainnewitems.style.overflow = 'hidden';
  mainnewwrapper.style.transition = '0.5s all';
  mainnewitemsitem.forEach(item => {
    item.style.height = height.slice(0, height.length - 2) / 3.15 + 'px';
  });
  mainnewprev.addEventListener('click', () => {
    if (offset != 0) {
      offset -= +height.slice(0, height.length - 2) / 3;
    }

    mainnewwrapper.style.transform = `translateY(-${offset}px)`;
    viewArrows();
  });
  mainnewnext.addEventListener('click', () => {
    if (offset != +height.slice(0, height.length - 2) * ((mainnewitemsitem.length - 3) / 3)) {
      offset += +height.slice(0, height.length - 2) / 3;
    }

    mainnewwrapper.style.transform = `translateY(-${offset}px)`;
    viewArrows();
  });

  function viewArrows() {
    if (offset == 0) {
      mainnewprev.classList.add('hide');
      mainnewprev.classList.remove('show');
    } else {
      mainnewprev.classList.add('show');
      mainnewprev.classList.remove('hide');
    }

    if (offset == +height.slice(0, height.length - 2) * ((mainnewitemsitem.length - 3) / 3)) {
      mainnewnext.classList.add('hide');
      mainnewnext.classList.remove('show');
    } else {
      mainnewnext.classList.add('show');
      mainnewnext.classList.remove('hide');
    }
  }

  viewArrows(); // Вызов модалки из слайдера

  const slHovOrderButton = document.querySelectorAll('.main__new__items__item__buy__button');
  slHovOrderButton.forEach((item, i) => {
    item.addEventListener('click', () => {
      (0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__.showModal)('.hovtit', '.hovcost', '.main__new__items__item__wrap__img', i);
    });
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);

/***/ }),

/***/ "./js/modules/slidermenu.js":
/*!**********************************!*\
  !*** ./js/modules/slidermenu.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "silderMenu": () => (/* binding */ silderMenu)
/* harmony export */ });
function silderMenu() {
  const sliderBtn = document.querySelector('.main__slider__open'),
        sliderBackground = document.querySelector('.main__slider__background');

  function hideBackground() {
    sliderBackground.classList.add('hide');
    sliderBackground.classList.remove('show');
  }

  function showBackground() {
    sliderBackground.classList.add('show');
    sliderBackground.classList.remove('hide');
  }

  sliderBtn.addEventListener('click', function () {
    showBackground();
  });
  sliderBackground.addEventListener('click', function (e) {
    if (e.target.classList.contains('main__slider__background__btn')) {
      hideBackground();
    }
  });
  showBackground();
  hideBackground();
} // Создает класс с элементами в выпадающем меню


class SliderItems {
  constructor(text, list) {
    this.text = text;
    this.list = document.querySelector(list);
  }

  render() {
    const item = document.createElement('li');
    item.classList.add('main__slider__background__list__item');
    this.list.append(item);
    item.textContent = this.text;
    item.addEventListener('click', () => {
      alert('qq');
    });
  }

}
/* new SliderItems('Телефоны', '.main__slider__background__list').render();
new SliderItems('Планшеты', '.main__slider__background__list').render();
new SliderItems('Ноутбуки', '.main__slider__background__list').render();
new SliderItems('Смарт-часы', '.main__slider__background__list').render();
new SliderItems('Аксессуары', '.main__slider__background__list').render(); */


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SliderItems);


/***/ }),

/***/ "./js/modules/timer.js":
/*!*****************************!*\
  !*** ./js/modules/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function timer() {
  //timer
  const deadline = '2022-10-31';

  function getRemainTime(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / 1000 % 60);
    return {
      'endtime': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

  function getZero(time) {
    if (time >= 0 && time < 10) {
      return '0' + time;
    } else {
      return time;
    }
  }

  function setRemainTime(endtime) {
    let htmlDays = document.querySelector('#days'),
        htmlHours = document.querySelector('#hours'),
        htmlMinutes = document.querySelector('#minutes'),
        htmlSeconds = document.querySelector('#seconds'),
        timeInterval = setInterval(insertRemainTime, 1000);
    insertRemainTime();

    function insertRemainTime() {
      const t = getRemainTime(endtime);
      htmlDays.textContent = getZero(t.days);
      htmlHours.textContent = getZero(t.hours);
      htmlMinutes.textContent = getZero(t.minutes);
      htmlSeconds.textContent = getZero(t.seconds);

      if (t.endtime <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setRemainTime(deadline);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);

/***/ }),

/***/ "./js/services/fetches.js":
/*!********************************!*\
  !*** ./js/services/fetches.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "deleteFromDb": () => (/* binding */ deleteFromDb),
/* harmony export */   "loadFromDb": () => (/* binding */ loadFromDb),
/* harmony export */   "postToDb": () => (/* binding */ postToDb)
/* harmony export */ });
/* harmony import */ var _modules_noty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/noty */ "./js/modules/noty.js");


const postToDb = async (url, body) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=utf-8'
    },
    body: body
  });

  if (!res.ok) {
    (0,_modules_noty__WEBPACK_IMPORTED_MODULE_0__["default"])(`Could not fetch ${url}, status: ${res.status}`, 'red');
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
},
      loadFromDb = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    (0,_modules_noty__WEBPACK_IMPORTED_MODULE_0__["default"])(`Could not fetch ${url}, status: ${res.status}`, 'red');
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
},
      deleteFromDb = async url => {
  const res = await fetch(url, {
    method: 'DELETE'
  });

  if (!res.ok) {
    (0,_modules_noty__WEBPACK_IMPORTED_MODULE_0__["default"])(`Could not fetch ${url}, status: ${res.status}`, 'red');
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
};



/***/ }),

/***/ "./node_modules/core-js/internals/a-callable.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/a-callable.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var tryToString = __webpack_require__(/*! ../internals/try-to-string */ "./node_modules/core-js/internals/try-to-string.js");

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ "./node_modules/core-js/internals/add-to-unscopables.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/internals/add-to-unscopables.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var defineProperty = (__webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f);

var UNSCOPABLES = wellKnownSymbol('unscopables');
var ArrayPrototype = Array.prototype;

// Array.prototype[@@unscopables]
// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
if (ArrayPrototype[UNSCOPABLES] == undefined) {
  defineProperty(ArrayPrototype, UNSCOPABLES, {
    configurable: true,
    value: create(null)
  });
}

// add a key to Array.prototype[@@unscopables]
module.exports = function (key) {
  ArrayPrototype[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/internals/an-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/an-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ "./node_modules/core-js/internals/array-includes.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-includes.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ "./node_modules/core-js/internals/classof-raw.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/classof-raw.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/internals/copy-constructor-properties.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/copy-constructor-properties.js ***!
  \***********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-non-enumerable-property.js":
/*!**************************************************************************!*\
  !*** ./node_modules/core-js/internals/create-non-enumerable-property.js ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/internals/create-property-descriptor.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/internals/create-property-descriptor.js ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-built-in.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/define-built-in.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var makeBuiltIn = __webpack_require__(/*! ../internals/make-built-in */ "./node_modules/core-js/internals/make-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/define-global-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/define-global-property.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");

// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ "./node_modules/core-js/internals/descriptors.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/descriptors.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/document-create-element.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/document-create-element.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/internals/engine-v8-version.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-v8-version.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ "./node_modules/core-js/internals/enum-bug-keys.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/enum-bug-keys.js ***!
  \*********************************************************/
/***/ ((module) => {

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ "./node_modules/core-js/internals/export.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/export.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var getOwnPropertyDescriptor = (__webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f);
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");
var copyConstructorProperties = __webpack_require__(/*! ../internals/copy-constructor-properties */ "./node_modules/core-js/internals/copy-constructor-properties.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = (global[TARGET] || {}).prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/fails.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/internals/fails.js ***!
  \*************************************************/
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-bind-native.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-bind-native.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es-x/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ "./node_modules/core-js/internals/function-call.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-call.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-name.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/function-name.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ "./node_modules/core-js/internals/function-uncurry-this.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/function-uncurry-this.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_BIND = __webpack_require__(/*! ../internals/function-bind-native */ "./node_modules/core-js/internals/function-bind-native.js");

var FunctionPrototype = Function.prototype;
var bind = FunctionPrototype.bind;
var call = FunctionPrototype.call;
var uncurryThis = NATIVE_BIND && bind.bind(call, call);

module.exports = NATIVE_BIND ? function (fn) {
  return fn && uncurryThis(fn);
} : function (fn) {
  return fn && function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-built-in.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/get-built-in.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ "./node_modules/core-js/internals/get-method.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/get-method.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aCallable = __webpack_require__(/*! ../internals/a-callable */ "./node_modules/core-js/internals/a-callable.js");

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return func == null ? undefined : aCallable(func);
};


/***/ }),

/***/ "./node_modules/core-js/internals/global.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/global.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var check = function (it) {
  return it && it.Math == Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es-x/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ "./node_modules/core-js/internals/has-own-property.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/has-own-property.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es-x/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ "./node_modules/core-js/internals/hidden-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/hidden-keys.js ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/internals/html.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/internals/html.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('document', 'documentElement');


/***/ }),

/***/ "./node_modules/core-js/internals/ie8-dom-define.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/ie8-dom-define.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var createElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/internals/indexed-object.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/indexed-object.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) == 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ "./node_modules/core-js/internals/inspect-source.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/inspect-source.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ "./node_modules/core-js/internals/internal-state.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/internal-state.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var NATIVE_WEAK_MAP = __webpack_require__(/*! ../internals/native-weak-map */ "./node_modules/core-js/internals/native-weak-map.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var shared = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  var wmget = uncurryThis(store.get);
  var wmhas = uncurryThis(store.has);
  var wmset = uncurryThis(store.set);
  set = function (it, metadata) {
    if (wmhas(store, it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    wmset(store, it, metadata);
    return metadata;
  };
  get = function (it) {
    return wmget(store, it) || {};
  };
  has = function (it) {
    return wmhas(store, it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-callable.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/is-callable.js ***!
  \*******************************************************/
/***/ ((module) => {

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
module.exports = function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-forced.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-forced.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value == POLYFILL ? true
    : value == NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ "./node_modules/core-js/internals/is-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ "./node_modules/core-js/internals/is-pure.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/internals/is-pure.js ***!
  \***************************************************/
/***/ ((module) => {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/internals/is-symbol.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/is-symbol.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isPrototypeOf = __webpack_require__(/*! ../internals/object-is-prototype-of */ "./node_modules/core-js/internals/object-is-prototype-of.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/length-of-array-like.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/length-of-array-like.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/make-built-in.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/make-built-in.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(/*! ../internals/function-name */ "./node_modules/core-js/internals/function-name.js").CONFIGURABLE);
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (String(name).slice(0, 7) === 'Symbol(') {
    name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ "./node_modules/core-js/internals/math-trunc.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/math-trunc.js ***!
  \******************************************************/
/***/ ((module) => {

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es-x/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ "./node_modules/core-js/internals/native-symbol.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/native-symbol.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es-x/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(/*! ../internals/engine-v8-version */ "./node_modules/core-js/internals/engine-v8-version.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol();
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  return !String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ "./node_modules/core-js/internals/native-weak-map.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/native-weak-map.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var inspectSource = __webpack_require__(/*! ../internals/inspect-source */ "./node_modules/core-js/internals/inspect-source.js");

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(inspectSource(WeakMap));


/***/ }),

/***/ "./node_modules/core-js/internals/object-create.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/object-create.js ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* global ActiveXObject -- old IE, WSH */
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var definePropertiesModule = __webpack_require__(/*! ../internals/object-define-properties */ "./node_modules/core-js/internals/object-define-properties.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var html = __webpack_require__(/*! ../internals/html */ "./node_modules/core-js/internals/html.js");
var documentCreateElement = __webpack_require__(/*! ../internals/document-create-element */ "./node_modules/core-js/internals/document-create-element.js");
var sharedKey = __webpack_require__(/*! ../internals/shared-key */ "./node_modules/core-js/internals/shared-key.js");

var GT = '>';
var LT = '<';
var PROTOTYPE = 'prototype';
var SCRIPT = 'script';
var IE_PROTO = sharedKey('IE_PROTO');

var EmptyConstructor = function () { /* empty */ };

var scriptTag = function (content) {
  return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
};

// Create object with fake `null` prototype: use ActiveX Object with cleared prototype
var NullProtoObjectViaActiveX = function (activeXDocument) {
  activeXDocument.write(scriptTag(''));
  activeXDocument.close();
  var temp = activeXDocument.parentWindow.Object;
  activeXDocument = null; // avoid memory leak
  return temp;
};

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var NullProtoObjectViaIFrame = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = documentCreateElement('iframe');
  var JS = 'java' + SCRIPT + ':';
  var iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  // https://github.com/zloirock/core-js/issues/475
  iframe.src = String(JS);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(scriptTag('document.F=Object'));
  iframeDocument.close();
  return iframeDocument.F;
};

// Check for document.domain and active x support
// No need to use active x approach when document.domain is not set
// see https://github.com/es-shims/es5-shim/issues/150
// variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
// avoid IE GC bug
var activeXDocument;
var NullProtoObject = function () {
  try {
    activeXDocument = new ActiveXObject('htmlfile');
  } catch (error) { /* ignore */ }
  NullProtoObject = typeof document != 'undefined'
    ? document.domain && activeXDocument
      ? NullProtoObjectViaActiveX(activeXDocument) // old IE
      : NullProtoObjectViaIFrame()
    : NullProtoObjectViaActiveX(activeXDocument); // WSH
  var length = enumBugKeys.length;
  while (length--) delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
  return NullProtoObject();
};

hiddenKeys[IE_PROTO] = true;

// `Object.create` method
// https://tc39.es/ecma262/#sec-object.create
// eslint-disable-next-line es-x/no-object-create -- safe
module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    EmptyConstructor[PROTOTYPE] = anObject(O);
    result = new EmptyConstructor();
    EmptyConstructor[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = NullProtoObject();
  return Properties === undefined ? result : definePropertiesModule.f(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-properties.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-properties.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var definePropertyModule = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var objectKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");

// `Object.defineProperties` method
// https://tc39.es/ecma262/#sec-object.defineproperties
// eslint-disable-next-line es-x/no-object-defineproperties -- safe
exports.f = DESCRIPTORS && !V8_PROTOTYPE_DEFINE_BUG ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var props = toIndexedObject(Properties);
  var keys = objectKeys(Properties);
  var length = keys.length;
  var index = 0;
  var key;
  while (length > index) definePropertyModule.f(O, key = keys[index++], props[key]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-define-property.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-define-property.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(/*! ../internals/v8-prototype-define-bug */ "./node_modules/core-js/internals/v8-prototype-define-bug.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");

var $TypeError = TypeError;
// eslint-disable-next-line es-x/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-descriptor.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-descriptor.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var propertyIsEnumerableModule = __webpack_require__(/*! ../internals/object-property-is-enumerable */ "./node_modules/core-js/internals/object-property-is-enumerable.js");
var createPropertyDescriptor = __webpack_require__(/*! ../internals/create-property-descriptor */ "./node_modules/core-js/internals/create-property-descriptor.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var toPropertyKey = __webpack_require__(/*! ../internals/to-property-key */ "./node_modules/core-js/internals/to-property-key.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ../internals/ie8-dom-define */ "./node_modules/core-js/internals/ie8-dom-define.js");

// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-names.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-names.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es-x/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-get-own-property-symbols.js":
/*!***************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-get-own-property-symbols.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

// eslint-disable-next-line es-x/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-prototype-of.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-prototype-of.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys-internal.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys-internal.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var indexOf = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").indexOf);
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-keys.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/internals/object-keys.js ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var internalObjectKeys = __webpack_require__(/*! ../internals/object-keys-internal */ "./node_modules/core-js/internals/object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ../internals/enum-bug-keys */ "./node_modules/core-js/internals/enum-bug-keys.js");

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
// eslint-disable-next-line es-x/no-object-keys -- safe
module.exports = Object.keys || function keys(O) {
  return internalObjectKeys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/internals/object-property-is-enumerable.js":
/*!*************************************************************************!*\
  !*** ./node_modules/core-js/internals/object-property-is-enumerable.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es-x/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ "./node_modules/core-js/internals/ordinary-to-primitive.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/internals/ordinary-to-primitive.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/internals/own-keys.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/own-keys.js ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertySymbolsModule = __webpack_require__(/*! ../internals/object-get-own-property-symbols */ "./node_modules/core-js/internals/object-get-own-property-symbols.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/internals/require-object-coercible.js":
/*!********************************************************************!*\
  !*** ./node_modules/core-js/internals/require-object-coercible.js ***!
  \********************************************************************/
/***/ ((module) => {

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (it == undefined) throw $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-key.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/shared-key.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/internals/shared-store.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/shared-store.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var defineGlobalProperty = __webpack_require__(/*! ../internals/define-global-property */ "./node_modules/core-js/internals/define-global-property.js");

var SHARED = '__core-js_shared__';
var store = global[SHARED] || defineGlobalProperty(SHARED, {});

module.exports = store;


/***/ }),

/***/ "./node_modules/core-js/internals/shared.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/internals/shared.js ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var IS_PURE = __webpack_require__(/*! ../internals/is-pure */ "./node_modules/core-js/internals/is-pure.js");
var store = __webpack_require__(/*! ../internals/shared-store */ "./node_modules/core-js/internals/shared-store.js");

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: '3.23.3',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2022 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.23.3/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ "./node_modules/core-js/internals/to-absolute-index.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-absolute-index.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-indexed-object.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/to-indexed-object.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(/*! ../internals/indexed-object */ "./node_modules/core-js/internals/indexed-object.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-integer-or-infinity.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/internals/to-integer-or-infinity.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trunc = __webpack_require__(/*! ../internals/math-trunc */ "./node_modules/core-js/internals/math-trunc.js");

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-length.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-length.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  return argument > 0 ? min(toIntegerOrInfinity(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-object.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/internals/to-object.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-primitive.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/internals/to-primitive.js ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ "./node_modules/core-js/internals/to-property-key.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/internals/to-property-key.js ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toPrimitive = __webpack_require__(/*! ../internals/to-primitive */ "./node_modules/core-js/internals/to-primitive.js");
var isSymbol = __webpack_require__(/*! ../internals/is-symbol */ "./node_modules/core-js/internals/is-symbol.js");

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ "./node_modules/core-js/internals/try-to-string.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/internals/try-to-string.js ***!
  \*********************************************************/
/***/ ((module) => {

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/uid.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/internals/uid.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ "./node_modules/core-js/internals/use-symbol-as-uid.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/use-symbol-as-uid.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* eslint-disable es-x/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ "./node_modules/core-js/internals/v8-prototype-define-bug.js":
/*!*******************************************************************!*\
  !*** ./node_modules/core-js/internals/v8-prototype-define-bug.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es-x/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype != 42;
});


/***/ }),

/***/ "./node_modules/core-js/internals/well-known-symbol.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/well-known-symbol.js ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var shared = __webpack_require__(/*! ../internals/shared */ "./node_modules/core-js/internals/shared.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var NATIVE_SYMBOL = __webpack_require__(/*! ../internals/native-symbol */ "./node_modules/core-js/internals/native-symbol.js");
var USE_SYMBOL_AS_UID = __webpack_require__(/*! ../internals/use-symbol-as-uid */ "./node_modules/core-js/internals/use-symbol-as-uid.js");

var WellKnownSymbolsStore = shared('wks');
var Symbol = global.Symbol;
var symbolFor = Symbol && Symbol['for'];
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name) || !(NATIVE_SYMBOL || typeof WellKnownSymbolsStore[name] == 'string')) {
    var description = 'Symbol.' + name;
    if (NATIVE_SYMBOL && hasOwn(Symbol, name)) {
      WellKnownSymbolsStore[name] = Symbol[name];
    } else if (USE_SYMBOL_AS_UID && symbolFor) {
      WellKnownSymbolsStore[name] = symbolFor(description);
    } else {
      WellKnownSymbolsStore[name] = createWellKnownSymbol(description);
    }
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.includes.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.includes.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $includes = (__webpack_require__(/*! ../internals/array-includes */ "./node_modules/core-js/internals/array-includes.js").includes);
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var addToUnscopables = __webpack_require__(/*! ../internals/add-to-unscopables */ "./node_modules/core-js/internals/add-to-unscopables.js");

// FF99+ bug
var BROKEN_ON_SPARSE = fails(function () {
  return !Array(1).includes();
});

// `Array.prototype.includes` method
// https://tc39.es/ecma262/#sec-array.prototype.includes
$({ target: 'Array', proto: true, forced: BROKEN_ON_SPARSE }, {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

// https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
addToUnscopables('includes');


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**************************!*\
  !*** ./js/mainscript.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ "./js/modules/timer.js");
/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ "./js/modules/scroll.js");
/* harmony import */ var _modules_slidermenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/slidermenu */ "./js/modules/slidermenu.js");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/modal */ "./js/modules/modal.js");
/* harmony import */ var _modules_ordersform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ordersform */ "./js/modules/ordersform.js");
/* harmony import */ var _modules_orderscount__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/orderscount */ "./js/modules/orderscount.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");
/* harmony import */ var _modules_mainwrapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/mainwrapper */ "./js/modules/mainwrapper.js");
/* harmony import */ var _modules_auth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/auth */ "./js/modules/auth.js");
/* harmony import */ var _modules_checkaccount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/checkaccount */ "./js/modules/checkaccount.js");
/* harmony import */ var _modules_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/search */ "./js/modules/search.js");














document.addEventListener('DOMContentLoaded', function () {
  // Скрыть главное окно
  (0,_modules_mainwrapper__WEBPACK_IMPORTED_MODULE_7__.hideWrapper)(); // Логика главного контента

  (0,_modules_mainwrapper__WEBPACK_IMPORTED_MODULE_7__.mainWrapper)(); //Слайдер основного изображения

  (0,_modules_mainwrapper__WEBPACK_IMPORTED_MODULE_7__.sliderMainWrapper)(); //Скрыть/отобразить блок характеристик

  (0,_modules_mainwrapper__WEBPACK_IMPORTED_MODULE_7__.charsMainWrapper)(); // Слайдер основного меню

  (0,_modules_slidermenu__WEBPACK_IMPORTED_MODULE_2__.silderMenu)(); // Timer

  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Прокрутка страницы

  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__["default"])(); //Если клиентское окно больше окна документа, то скрывает стрелку прокрутки

  (0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__.checkDOMHeight)(); // Modal

  (0,_modules_modal__WEBPACK_IMPORTED_MODULE_3__.doModal)(); //Slider

  (0,_modules_slider__WEBPACK_IMPORTED_MODULE_6__["default"])(); //Отобразить количество заказов

  (0,_modules_orderscount__WEBPACK_IMPORTED_MODULE_5__["default"])('.header__client__orders__count'); //Окно с заказами

  (0,_modules_ordersform__WEBPACK_IMPORTED_MODULE_4__["default"])(); // Окно с авторизацией/регистрацией

  (0,_modules_auth__WEBPACK_IMPORTED_MODULE_8__["default"])('.auth__wrapper__content'); // Проверка авторизации и вывод значения в кнопку аккаунта

  (0,_modules_checkaccount__WEBPACK_IMPORTED_MODULE_9__["default"])('.header__client__auth__title');
  (0,_modules_search__WEBPACK_IMPORTED_MODULE_10__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map