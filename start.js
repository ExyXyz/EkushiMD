const { spawn } = require('child_process');

const yellowBlink = "\x1b[33m\x1b[5m"; // Yellow color and blink
const reset = "\x1b[0m"; // Reset

function logWithColor(message) {
    console.log(`${yellowBlink}${message}${reset}`);
}

function startApp() {
    const app = spawn('node', ['index.js'], { stdio: 'inherit' });

    app.on('close', (code) => {
        logWithColor(`Application exited with code ${code}`);
    });

    setTimeout(() => {
        logWithColor('Restarting application...');
        app.kill(); // This will terminate the current running app
        startApp(); // This will start the app again
    }, 3600000); // 1 hour = 3600000 milliseconds
}

startApp();

