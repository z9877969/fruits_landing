const btns = document.querySelectorAll('.js-burger');
const btnsContainer = document.querySelector('.js-burger-container');
const burgerMenu = document.querySelector('.js-burger-menu');

console.log(btnsContainer);

console.log('object');

btnsContainer.addEventListener('click', e => {
  console.log(e.target);
  if (!e.target.closest('.js-burger')) return;
  console.log('click');
  btns.forEach(el => {
    el.classList.toggle('hidden');
  });
  burgerMenu.classList.toggle('hidden');
});
