import { loadFromDb } from '../services/fetches';

//Отобразить количество заказов
function getOrdersCount(text) {
    loadFromDb(`http://localhost:3000/response?userid=${localStorage.getItem('userid')}`)
    .then(data => {
        const ordersCount = document.querySelector(text);
        ordersCount.textContent = data.length;
    });
}

export default getOrdersCount;