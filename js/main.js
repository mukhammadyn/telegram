const LOCAL_PASSWORD = 'admin';

let elLockModal = document.querySelector('.lock-modal');
let elLockModalForm = elLockModal.querySelector('.js-lock-modal-form');
let elLockModalPassword = elLockModalForm.querySelector('.js-lock-modal-password-input');   
let elLockModalIncorrectPasswordNotice = elLockModalForm.querySelector('.js-lock-modal-incorrect-password-notice');

elLockModalForm.addEventListener('submit', function(evt) {
  evt.preventDefault();

  let userPassword = elLockModalPassword.value;

  if (userPassword === LOCAL_PASSWORD) {
    $('#lock-modal').modal('hide');
    elLockModalIncorrectPasswordNotice.classList.add('d-none');
    elLockModalPassword.value = '';
  } else {
    elLockModalIncorrectPasswordNotice.classList.remove('d-none');
  }

});
