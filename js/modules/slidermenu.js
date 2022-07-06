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

    sliderBtn.addEventListener('click', function() {
        showBackground();
    });

    sliderBackground.addEventListener('click', function(e) {
        if (e.target.classList.contains('main__slider__background__btn')) {
            hideBackground();
        }
    });

    showBackground();
    hideBackground();
}

// Создает класс с элементами в выпадающем меню
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

export default SliderItems;
export { silderMenu };