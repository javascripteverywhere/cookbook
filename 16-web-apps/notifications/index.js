Notification.requestPermission(() => {
  setTimeout(() => {
    const notification = new Notification('hey wake up', {
      body: 'your file is done',
      tag: 'preset'
    });
    notification();
  }, 5000);
});
