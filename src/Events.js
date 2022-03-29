/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        '<button>Удали меня</button>',
    );
    const button = document.body.getElementsByTagName('button')[0];
    button.onclick = function () {
        button.remove();
    };
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    document.body.insertAdjacentHTML('afterbegin', '<ul></ul>');
    const spisok = document.body.getElementsByTagName('ul')[0];
    for (let i = 0; i < arr.length; ++i) {
        spisok.insertAdjacentHTML('beforeend', '<li>' + arr[i] + '</li>');
        let li = spisok.getElementsByTagName('li')[i];
        li.addEventListener('mouseover', function (e) {
            e.target.setAttribute('title', e.target.innerHTML);
        });
    }
}

/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    document.body.insertAdjacentHTML(
        'afterbegin',
        '<a href="https://tensor.ru/">tensor</a>',
    );
    let obj = document.body.getElementsByTagName('a')[0];
    obj.addEventListener('click', function () {
        obj.text += ' https://tensor.ru/';
    });
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    document.body.insertAdjacentHTML(
        'beforeend',
        '<button>Добавить пункт</button>',
    );
    let button = document.body.getElementsByTagName('button')[0];
    document.body.insertAdjacentHTML('afterbegin', '<ul></ul>');
    let ul = document.body.getElementsByTagName('ul')[0];
    ul.insertAdjacentHTML('afterbegin', '<li>Пункт</li>');
    ul.addEventListener('click', function (event) {
        if (event.target && event.target.nodeName === 'LI') {
            event.target.innerHTML += '!';
        }
    });
    button.onclick = function () {
        ul.insertAdjacentHTML('beforeend', '<li>Пункт</li>');
    };
}
