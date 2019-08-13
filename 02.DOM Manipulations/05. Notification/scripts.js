function notify(message) {
  let notificationDiv = document.getElementById('notification');
  let pElement = document.createElement('p');
  pElement.textContent = message;
  notificationDiv.appendChild(pElement);
  notificationDiv.style.display = 'block';

  setTimeout(() => {
    notificationDiv.style.display = 'none';
  }, 2000);
}