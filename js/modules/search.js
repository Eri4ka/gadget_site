import { loadFromDb } from '../services/fetches';
import { hideWrapper } from './mainwrapper';

function search() {

    const wrapper = document.querySelectorAll('.main__content__wrapper'),
          spisok = document.querySelectorAll('.main__movies__list__item'),
          input = document.querySelector('[data-id="input-search"]'),
          searchField = document.querySelector('.header__search__field'),

    doSearch = () => {
        loadFromDb(`http://localhost:3000/products?model_like=${input.value}`)
            .then(result => {
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
            })
            .then(result => {

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
                });


                // Если высота формы результата больше высоты контейнера формы результата, то добавить скролл
                if (searchResult.scrollHeight > searchResult.offsetHeight) {
                    searchResult.style.overflowY = 'scroll';
                }

                // Если значение инпута пустое, то форму результата
                if (input.value == '') {
                    searchResult.remove();
                }

            });
    };

    input.addEventListener('input', () => {
        doSearch();
    });

    document.addEventListener('click', e => {

        const searchResult = document.querySelector('.header__search__field__result');

        // Если выпадающее меню существует и клик был вне ее области, то меню удалится
        if (searchResult && !e.composedPath().includes(searchField)) {
            searchResult.remove();
        } 
    });

    // При клике на элемент в выпадающем меню - данный элемент открывается в основном окне
    document.addEventListener('click', e => {

        const searchItem = document.querySelectorAll('.header__search__field__result__item'),
              searchResult = document.querySelector('.header__search__field__result');

        searchItem.forEach(item => {
            if (item.contains(e.target)) {
                wrapper.forEach(wrap => {
                    if (item.getAttribute('item-id') == wrap.getAttribute('wrapper-id')) {

                        hideWrapper();
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

export default search;