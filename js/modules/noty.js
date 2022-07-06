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

export default showNoty;