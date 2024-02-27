// Для домашки в навигационным меню, сделать чтобы пункты меню добавлялись из JS из массива (и сами пункты названия, и ссылки куда они должны вести), а не прописывались в HTML.

// Пример массива:

const array = [
  {
    title: 'Javarush',
    link: 'https://javarush.com/'
  },
  {
    title: 'Html5 Doktor',
    link: 'https://html5doctor.com'
  },
   {
    title: 'Youtube',
    link: 'https://www.youtube.com/'
  },
  {
    title: 'JS Шпаргалка',
    link: 'https://frontend-stuff.com/blog/javascript-cheatsheet/'
  },
  {
    title: 'CSS Шпаргалка',
    link: 'https://tpverstak.ru/flex-cheatsheet/'
  },
  {
    title: 'Chat GPT',
    link: 'https://chat.openai.com/auth/login'
  }
];

const carPartsElements = document.querySelector('.header');


const arrToList = (array) => {

    const temp = array.map(element => {
        const newListItem = document.createElement('a');
        newListItem.classList.add('flex-item');
        newListItem.textContent = element.title;
        newListItem.href = element.link;
        return newListItem;
    })
    carPartsElements.append(...temp);
};

arrToList(array);
