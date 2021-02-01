const { spawn } = require('child_process');

const identify = spawn('identify', ['-verbose', 'osprey.jpg']);

identify.stdout.on('data', data => {
  console.log(`stdout: ${data}`);
});

identify.stderr.on('data', data => {
  console.log(`stderr: ${data}`);
});

identify.on('exit', code => {
  console.log(`child process exited with code ${code}`);
});
