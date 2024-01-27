// bundle.js
const { exec } = require('child_process');

const webpackCommand = 'npx webpack --config webpack.config.js';

const webpackProcess = exec(webpackCommand);

webpackProcess.stdout.on('data', (data) => {
  console.log(data);
});

webpackProcess.stderr.on('data', (data) => {
  console.error(data);
});

webpackProcess.on('close', (code) => {
  console.log(`Webpack process exited with code ${code}`);
});
