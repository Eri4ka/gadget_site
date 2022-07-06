import { showModal } from '../modules/modal';

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

    new NewItems(
        mainnewwrapper,
        'https://images.biggeek.ru/1/435/84ab/15496-4283555.png',
        'Apple AirPods Pro',
        '16990 RUB',
        'Apple AirPods Pro с зарядным футляром MagSafe',
        'Наушники AirPods Pro — это активное шумоподавление для иммерсивного звука и комфорт от использования целый день.'
    ).render();
    new NewItems(
        mainnewwrapper,
        'https://images.biggeek.ru/1/435/d975/11156-42412-wifi-spacegray.png',
        'Apple iPad Pro 12.9',
        '109990 RUB',
        'Apple iPad Pro 12.9" (2020) 128Gb Wi-Fi Space Gray',
        'iPad Pro оснащён чипом Apple M1 — это высочайшая производительность и возможность целый день работать без подзарядки.'
    ).render();
    new NewItems(
        mainnewwrapper,
        'https://images.biggeek.ru/1/435/0dd7/14102-69912838-645hq-40.jpeg',
        'Apple AirPods Max',
        '54990 RUB',
        'Наушники Apple AirPods Max (Серебристый | Silver)',
        'AirPods Max полностью меняют представление о полноразмерных наушниках. Драйвер, разработанный Apple, способен воспроизводить звук высокой чёткости.'
    ).render();
    new NewItems(
        mainnewwrapper,
        'https://images.biggeek.ru/1/435/b944/12679-472MHKC3.jpeg',
        'Чехол Apple MagSafe',
        '5990 RUB',
        'Кожаный чехол Apple MagSafe для iPhone 12',
        'MagSafe — это новая экосистема аксессуаров, которые мгновенно примагничиваются и обеспечивают более быструю беспроводную зарядку. Их можно комбинировать друг с другом, создавая любые сочетания.'
    ).render(); 
    new NewItems(
        mainnewwrapper,
        'https://images.biggeek.ru/1/435/0c4a/7691-4427691-286designed_to_do_more__d2elrvad4ju6_large.jpg',
        'Стилус Apple Pencil 2',
        '12990 RUB',
        'Стилус Apple Pencil (2-го поколения)',
        'Стилус Apple Pencil – аксессуар, который обуславливает возможность создания невероятно четких эскизов и зарисовок. Характеризуется невероятной четкостью и отзывчивостью.'
    ).render(); 
    new NewItems(
        mainnewwrapper,
        'https://images.biggeek.ru/1/435/ae4a/15355-7hero_pods3.jpg',
        'Apple AirPods 3',
        '15490 RUB',
        'Наушники Apple AirPods (3-го поколения; 2021)',
        'Наушники Apple Airpods 3 – ваш проводник в мир цифрового звука. Модель подарит вам высокодетализированное и объемное звучание, даря яркие эмоции при прослушивании любимых песен или просмотре кино. '
    ).render();
    new NewItems(
        mainnewwrapper,
        'https://images.biggeek.ru/1/435/a6dd/14707-47BLue.jpg',
        'Apple iPhone 13 Pro',
        '96990 RUB',
        'Apple iPhone 13 Pro 128GB Sierra Blue',
        'iPhone 13 Pro. Грандиозный апгрейд камер Pro. Режим «Киноэффект» делает из видео настоящее кино. Дисплей Super Retina XDR с технологией ProMotion для более быстрого и плавного взаимодействия.'
    ).render(); 

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
            offset -= +height.slice(0, height.length -2) / 3;
        }
        mainnewwrapper.style.transform = `translateY(-${offset}px)`;
        viewArrows();
    });
    
    mainnewnext.addEventListener('click', () => {
        if (offset != +height.slice(0, height.length -2) * ((mainnewitemsitem.length -3) / 3)) {
            offset += +height.slice(0, height.length -2) / 3;
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
        if (offset == +height.slice(0, height.length -2) * ((mainnewitemsitem.length -3) / 3)) {
            mainnewnext.classList.add('hide');
            mainnewnext.classList.remove('show');
        } else {
            mainnewnext.classList.add('show');
            mainnewnext.classList.remove('hide');
        }
    }
    viewArrows();
    // Вызов модалки из слайдера
    const slHovOrderButton = document.querySelectorAll('.main__new__items__item__buy__button');

    slHovOrderButton.forEach((item, i) => {
        item.addEventListener('click', () => {
            showModal('.hovtit', '.hovcost', '.main__new__items__item__wrap__img', i);
        });
    });
}

export default slider;