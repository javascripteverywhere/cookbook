const cron = require('node-cron');

cron.schedule('* * * * *', () => {
  console.log('Log to the console every minute');
});
