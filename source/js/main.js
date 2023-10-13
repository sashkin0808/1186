import '../sass/style.scss';

// плагин для нестандартного скролла
import 'simplebar';
import ResizeObserver from 'resize-observer-polyfill';
window.ResizeObserver = ResizeObserver;

document.addEventListener('DOMContentLoaded', () => {

  /*открытия-закрытия меню*/
  const btn = document.querySelector('#nav-toggle'),
        menu = document.querySelector('nav');

  btn.addEventListener('click', function (event) {
      event.preventDefault();
      menu.classList.toggle('open');
      btn.classList.toggle('open');
  });

  /*выбор языка*/
  const lang = document.querySelector('.lang__choice'),
        currentLangBtn = document.querySelector('.lang__active'),
        currentLangValue = document.querySelector('.lang__value');

  currentLangBtn.addEventListener('click', function (event) {
    lang.classList.toggle('open');
  });
  lang.addEventListener('click', function (event) {
    if (event.target.dataset.lang) {
      const langActive = event.target.dataset.lang;
      lang.querySelector('.active').classList.remove('active');
      event.target.classList.add('active');
      currentLangValue.textContent = langActive;
    }
    lang.classList.toggle('open');
  });
});



