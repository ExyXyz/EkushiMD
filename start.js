const { spawn } = require('child_process');

const yellowBlink = "\x1b[33m\x1b[5m"; 
const reset = "\x1b[0m"; 

function logWithColor(message) {
    console.log(`${yellowBlink}${message}${reset}`);
}

function startApp() {
    const app = spawn('node', ['index.js'], { stdio: ['inherit', 'inherit', 'pipe'] });

    app.stderr.on('data', (data) => {
        const errorMessage = data.toString();
        console.error(errorMessage); 

        if (errorMessage.includes("TypeError: Cannot destructure property 'user' of '(0 , WABinary_1.jidDecode)(...)' as it is undefined.") ||
            errorMessage.includes("Rate limit error detected. Exiting...") ||
            errorMessage.includes("undefined:1") ||
            errorMessage.includes("error code: 502")) {
            logWithColor('Detected specific error. Restarting application...');
            app.kill(); 
            startApp(); 
        }
    });

    setTimeout(() => {
        logWithColor('Restarting application due to timeout...');
        app.kill(); 
        startApp(); 
    }, 1300000); 
}

startApp();
