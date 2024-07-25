const { spawn } = require('child_process');

const yellowBlink = "\x1b[33m\x1b[5m"; // Yellow color and blink
const reset = "\x1b[0m"; // Reset

function logWithColor(message) {
    console.log(`${yellowBlink}${message}${reset}`);
}

function startApp() {
    const app = spawn('node', ['index.js'], { stdio: ['inherit', 'inherit', 'pipe'] });

    app.stderr.on('data', (data) => {
        const errorMessage = data.toString();
        console.error(errorMessage); // Log the error message
        if (errorMessage.includes("TypeError: Cannot destructure property 'user' of '(0 , WABinary_1.jidDecode)(...)' as it is undefined.")) {
            logWithColor('Detected specific error. Restarting application...');
            app.kill(); // This will terminate the current running app
            startApp(); // This will start the app again
        }
    });


    setTimeout(() => {
        logWithColor('Restarting application due to timeout...');
        app.kill(); // This will terminate the current running app
        startApp(); // This will start the app again
    }, 1300000); // 1 hour = 3600000 milliseconds
}

startApp();
