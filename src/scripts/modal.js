let subscribeButton = document.getElementById('subscribe-button');
let cancelButton = document.getElementById('cancel-button');
let modal = document.getElementById('subscribe-modal');

subscribeButton.addEventListener('click', () => {
  modal.classList.add('active');
})

cancelButton.addEventListener('click', () => {
  modal.classList.remove('active');
})
