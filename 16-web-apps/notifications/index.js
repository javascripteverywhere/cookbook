const notificationButton = document.getElementById('notification-button');

const showNotification = permission => {
  // if the user didn't grant permission, exit the function
  if (permission !== 'granted') return;

  // content of the notification
  const notification = new Notification('Title', {
    body: 'Check out this super cool thing'
  });

  // optional: action to take when a user click's the notification
  notification.onclick = () => {
    window.open('https://example.com');
  };
};

const notificationCheck = () => {
  // if notifications aren't supported return
  // alternately you could perform a different action
  // like redirect the user to email sign up
  if (!window.Notification) return;

  // request permission from the user
  Notification.requestPermission().then(showNotification);
};

// on click, call the `notificationCheck` function
notificationButton.addEventListener('click', notificationCheck);
