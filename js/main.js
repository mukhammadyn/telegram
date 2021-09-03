const LOCAL_PASSWORD = 'admin';

// SIDEBAR MODAL
let elsSidebarModalProfilesToggler = document.querySelectorAll('.js-sidebar-modal-profiles-toggler');
let elSidebarModalProfilesIcon = document.querySelector('.sidebar-modal__toggle-icon');

// LOCK MODAL
let elLockModal = document.querySelector('.lock-modal');
let elLockModalForm = elLockModal.querySelector('.js-lock-modal-form');
let elLockModalPassword = elLockModalForm.querySelector('.js-lock-modal-password-input');   
let elLockModalIncorrectPasswordNotice = elLockModalForm.querySelector('.js-lock-modal-incorrect-password-notice');

// VOICE CHAT MODAL
let elsUserAccountJs = document.querySelectorAll('.js-choose-user-account');

if(elsUserAccountJs.length > 0) {
  elsUserAccountJs.forEach(function (link) {
    link.addEventListener('click', function() {
      elsUserAccountJs.forEach(function(elclass) {
        elclass.classList.remove('modal-body__item-inner--active');
      });
      link.classList.add('modal-body__item-inner--active');
    });
  });
}


// SIDEMAR MODAL
if(elsSidebarModalProfilesToggler.length > 0) {
  elsSidebarModalProfilesToggler.forEach(function (toggler) {
    toggler.addEventListener('click', function() {
      elSidebarModalProfilesIcon.classList.toggle('sidebar-modal__toggle-icon--open');
    }); 
  });

}


// LOCK MODAL
if(elLockModalForm) {
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
}
