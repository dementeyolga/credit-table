const callbackButtons =
  document.querySelectorAll<HTMLButtonElement>('.credits__button');
const modalWrapper = document.querySelector<HTMLDivElement>('.modal__wrapper');
const modalForm = document.querySelector<HTMLFormElement>('.modal__form');
const closeBtn = document.querySelector<HTMLDivElement>('.modal__close-btn');

callbackButtons.forEach((button) => {
  button.addEventListener('click', () => {
    modalWrapper?.classList.add('active');
  });
});

function closeModal() {
  modalWrapper?.addEventListener(
    'animationend',
    () => {
      modalWrapper?.classList.remove('inactive');
      modalWrapper?.classList.remove('active');
    },
    {
      once: true,
    }
  );

  modalWrapper?.classList.add('inactive');
}

modalForm?.addEventListener('submit', (e: SubmitEvent) => {
  e.preventDefault();

  if (e.currentTarget instanceof HTMLFormElement) {
    const data = new FormData(e.currentTarget);
    console.log(Object.fromEntries(data));
    closeModal();
  }
});

closeBtn?.addEventListener('click', () => {
  closeModal();
});

modalWrapper?.addEventListener('click', (e: MouseEvent) => {
  if (e.currentTarget && e.target === e.currentTarget) {
    closeModal();
  }
});
