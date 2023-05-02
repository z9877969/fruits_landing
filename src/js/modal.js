const buttonsOpenModal = document.querySelectorAll('.js-open-modal');
const buttonsCloseModal = document.querySelectorAll('.js-close-modal');

const toggleModal = selector => {
  const modal = document.querySelector('.modal-' + selector);
  modal.classList.toggle('modal-close');
  if (!modal.classList.contains('modal-close')) {
    modal.style.top = window.pageYOffset + 'px';
  }
  document.body.classList.toggle('body-stop');
};

buttonsOpenModal.forEach(el => {
  el.addEventListener('click', () => {
    const selectorBlockName = el.classList[0].split('__')[0];
    toggleModal(selectorBlockName);
  });
});

buttonsCloseModal.forEach(el => {
  el.addEventListener('click', () => {
    const selectorBlockName = [...el.closest('.backdrop').classList]
      .find(el => el.includes('modal-'))
      .split('-')[1];
    toggleModal(selectorBlockName);
  });
});

document
  .querySelector('form')
  .addEventListener('submit', e => e.preventDefault());
