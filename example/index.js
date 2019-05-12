const keypress = require('../dist/').keypress;

(async () => {
  await keypress('Press any key to continue.');
  console.log('Good job!');
  process.exit(0);
})()
