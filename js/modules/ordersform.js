import { loadFromDb, deleteFromDb} from '../services/fetches';
import showNoty from './noty';
import getOrdersCount from './orderscount';

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
            loadFromDb(`http://localhost:3000/response?userid=${localStorage.getItem('userid')}`)
            .then(data => {
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
                getOrdersCount('.orders__wrapper__content__list__total__count');       
                }
            })
            .then(() => {
                const orderItems = document.querySelectorAll('.orders__wrapper__content__list__item');
                
                orderItems.forEach(item => {
                    item.addEventListener('click', (e) => {
                        if (e.target.classList.contains('orders__wrapper__content__list__item__exit')) {
                            deleteFromDb(`http://localhost:3000/response/${item.getAttribute('data-id')}`)
                                .then(() => {
                                    item.remove();
                                    showNoty('Заказ удален!', '#0cb60c');
                                    getOrdersCount('.header__client__orders__count');
                                    getOrdersCount('.orders__wrapper__content__list__total__count');
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

            document.body.addEventListener('click', (e) => {
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

export default ordersFrom;