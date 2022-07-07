import { postToDb } from '../services/fetches';
import getOrdersCount from './orderscount';
import { renderAuthWrapper } from './auth';

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
    
            inputs.forEach((item) => {
                item.value = '';
                item.style.border = 'none';
                    if (item.nextElementSibling) {
                        item.nextElementSibling.remove();
                    }
            });

            showModalForm();
        
        // Если не авторизован - открывается форма авторизации
        } else {
            renderAuthWrapper('.auth__wrapper__content');
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
    pushValuesToArray = (array) => {
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
                inputText.textContent = errorText;
                //parent.append(inputText);
                parent.insertAdjacentElement('beforeend', inputText);
                
            }
        } else if (input.value === '') {
            input.style.border = '2px solid red';
            if (!parent.lastElementChild.classList.contains('modal__wrapper__content__main__form__input__validate')) {
                const inputText = document.createElement('span');
                inputText.classList.add('modal__wrapper__content__main__form__input__validate');
                inputText.textContent = 'Заполните поле';
                //parent.append(inputText);
                parent.insertAdjacentElement('beforeend', inputText);
            }
        } else {
            return true;
        }
    },

    // Убрать ошибку с инпута
    removeInputError = (input) => {
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

        modalExitButton.forEach((item) => {
            item.addEventListener('click', hideModal);
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('show')) {
                hideModal();
            }
        });

        inputs.forEach(item => {
            item.addEventListener('blur', () => {
                switch(item.getAttribute('data-id')) {
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
                switch(item.getAttribute('data-id')) {
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

        modalSendButton.addEventListener('click', (e) => {
            e.preventDefault();
            validate(inputPhone, /[7-8]\d{10}$/g, '[data-id="input-phone"]', 'Только цифры в формате 7XXXXXXXXXX');
            validate(inputEmail, /^w+\@\w+\.\w+/g, '[data-id="input-email"]', 'Некорректный формат e-mail');
            validate(inputName, /^[a-z]+$/gi, '[data-id="input-name"]', 'Только буквы');
            validate(inputSurname, /^[a-z]+$/gi, '[data-id="input-surname"]', 'Только буквы');

            if (
                validate(inputPhone, /[7-8]\d{10}$/g, '[data-id="input-phone"]', 'Только цифры в формате 7XXXXXXXXXX') &&
                validate(inputEmail, /^\w+\@\w+\.\w+/g, '[data-id="input-email"]', 'Некорректный формат e-mail') &&
                validate(inputName, /^[a-z]+$/gi, '[data-id="input-name"]', 'Только буквы') &&
                validate(inputSurname, /^[a-z]+$/gi, '[data-id="input-surname"]', 'Только буквы')
               ) {
                postToDb('http://localhost:3000/response', JSON.stringify(new UserOrders()))
                /* fetch('server.php', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json; charset=utf-8',
                    },
                    body: JSON.stringify(new UserOrders())
                }) */
                //.then((response) => response.text())
                .then((result) => {
                    console.log(result); 
                    pushValuesToArray(orders);
                    getOrdersCount('.header__client__orders__count');
                    modalSubmitImage.src = orderStatus.done;
                    modalSubmitText.textContent = 'Заказ оформлен';
                })
                .catch(() => {
                    modalSubmitImage.src = orderStatus.failure;
                    modalSubmitText.textContent = 'Ошибка';
                });

                hideModalForm();
            }
        });           
    };

// Класс с заказами пользователя
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

export default UserOrders;
export { doModal, hideModal, showModal, validate, removeInputError };