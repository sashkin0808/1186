import '../sass/style.scss';

// плагин для нестандартного скролла
import 'simplebar';
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

document.addEventListener('DOMContentLoaded', () => {

  /*открытия-закрытия меню*/
  const menuBtn = document.querySelector('#nav-toggle'),
        menu = document.querySelector('nav');

  menuBtn.addEventListener('click', function (event) {
    event.preventDefault();
    menu.classList.toggle('open');
    menuBtn.classList.toggle('open');
  });

  /*выбор языка*/
  const langList = document.querySelector('.lang__choice'),
        currentLangBtn = document.querySelector('.lang__active'),
        currentLangValue = currentLangBtn.querySelector('.lang__value');

  currentLangBtn.addEventListener('click', function (event) {
    langList.classList.toggle('open');
  });
  langList.addEventListener('click', function (event) {
    if (event.target.dataset.lang) {
      const langActive = event.target.dataset.lang;
      langList.querySelector('.active').classList.remove('active');
      event.target.classList.add('active');
      currentLangValue.textContent = langActive;
    }
    langList.classList.toggle('open');
  });
});
