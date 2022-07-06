import { postToDb,  loadFromDb } from '../services/fetches';
import showNoty from './noty';
import checkAccountLogin from './checkaccount';
import getOrdersCount from './orderscount';
import { validate, removeInputError } from './modal';

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
            switch(item.getAttribute('data-id')) {
                case 'auth-name':
                    validate(inputName, /^[a-zа-я]+$/gi, '[data-id="name"]', 'Только буквы');
                    break;
    
                case 'auth-surname':
                    validate(inputSurname, /^[a-zа-я]+$/gi, '[data-id="surname"]', 'Только буквы');
                    break;
                
                case 'auth-email':
                    validate(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail');
                    break;
                
                case 'auth-pass':
                    validate(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов');
                    break;
            }  
        });
        item.addEventListener('keydown', () => {
            switch(item.getAttribute('data-id')) {
                case 'auth-name':
                    removeInputError(inputName);
                    break;
                
                case 'auth-surname':
                    removeInputError(inputSurname);
                    break;
                
                case 'auth-email':
                    removeInputError(inputEmail);
                    break;
    
                case 'auth-pass':
                    removeInputError(inputPass);
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
signUp = (wrapperContent) => {

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
signIn = (wrapperContent) => {

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
renderAuthWrapper = (wrapperContent) => {

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
loadUser = (wrapperContent) => {

    loadFromDb(`http://localhost:3000/user/${localStorage.getItem('userid')}`)
    .then(result => {
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
    })
    .then(() => {
        checkAccountLogin('.header__client__auth__title');
        getOrdersCount('.header__client__orders__count');
    });
},

// Проверка соответствия введенных данных пользователя в БД
checkAuth = (wrapperContent) => {

    const inputEmail = document.querySelector('[data-id="auth-email"]'),
          inputPass = document.querySelector('[data-id="auth-pass"]');

    loadFromDb(`http://localhost:3000/user?email=${inputEmail.value}&pass=${inputPass.value}`)
        .then(result => {
            if (result.length > 0) {
                localStorage.setItem('userid', result[0].id);
                localStorage.setItem('autorized', 'true');
                loadUser(wrapperContent);
            } else {
                showNoty('Проверьте введенные данные', 'red');
            }
        });
},

// Выход из аккаунта
logOut = (wrapperContent) => {
    localStorage.setItem('autorized', 'false');
    localStorage.removeItem('userid');
    signUp(wrapperContent);
    checkAccountLogin('.header__client__auth__title');
    getOrdersCount('.header__client__orders__count');
},

auth = (wrapperContent) => {

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

            validate(inputName, /^[a-zа-я]+$/gi, '[data-id="name"]', 'Только буквы');
            validate(inputSurname, /^[a-zа-я]+$/gi, '[data-id="surname"]', 'Только буквы');
            validate(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail');
            validate(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов');

            if (
                validate(inputName, /^[a-zа-я]+$/gi, '[data-id="name"]', 'Только буквы') &&
                validate(inputSurname, /^[a-zа-я]+$/gi, '[data-id="surname"]', 'Только буквы') &&
                validate(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail') &&
                validate(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов')
            ) {
                postToDb('http://localhost:3000/user', JSON.stringify(user))
                .then((result) => {
                    localStorage.setItem('userid', result.id);
                    localStorage.setItem('autorized', 'true');
                    loadUser(wrapperContent);
                    showNoty('Вы зарегистрировались!', '#0cb60c');
                });
            }     
        }
    });

    document.addEventListener('click', e => {
        if (e.target.getAttribute('data-id') === 'button-logout') {
            logOut(wrapperContent);
            showNoty('Вы вышли из аккаунта!', '#0cb60c');
        }
    });
    
    document.addEventListener('click', e => {
        if (e.target.getAttribute('data-id') === 'button-signin') {

            const inputEmail = document.querySelector('[data-id="auth-email"]'),
                  inputPass = document.querySelector('[data-id="auth-pass"]');

            validate(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail');
            validate(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов');

            if (
                validate(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="email"]', 'Некорректный формат e-mail') &&
                validate(inputPass, /^[a-z0-9!@#$%^&*]{6,}/gi, '[data-id="pass"]', 'Минимум 6 символов')
            ) {
                checkAuth(wrapperContent);
                showNoty('Вы вошли в аккаунт!', '#0cb60c');
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

export default auth;
export {renderAuthWrapper};