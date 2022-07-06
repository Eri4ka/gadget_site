import { loadFromDb } from '../services/fetches';

function checkAccountLogin(text) {
    const accountText = document.querySelector(text);
    if (localStorage.getItem('autorized') === 'true') {
        loadFromDb(`http://localhost:3000/user/${localStorage.getItem('userid')}`)
        .then(result => {
            accountText.textContent = `${result.name} ${result.surname}`;
        });
    } else {
        accountText.textContent = 'Войти'; 
    }
}

export default checkAccountLogin;