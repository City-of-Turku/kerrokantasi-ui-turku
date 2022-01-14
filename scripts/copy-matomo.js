const fs = require('fs');
const path = require('path');
/**
 * Path to matomo.js that will be copied to base kerrokantasi-ui.
 * @example ./assets/js/tracker/matomo.js
 * @type {string}
 */
const source = path.resolve(__dirname,'../assets/js/tracker/matomo.js');

/**
 * Path to destination folder that the matomo.js file will be copied to.
 * @example kerrokantasi-ui/assets/js
 * @type {string}
 */
const destination = path.resolve(__dirname, '../../../assets/js/tracker');

/**
 * Creates the destination folder.
 */
fs.mkdir(destination, {recursive: false}, (err) => {
    if (err) {
        // destination folder already exists, so we can proceed to the next step.
        if (err.code === 'EEXIST') {checkAccess();}
        // some other error occurred.
        else {console.error(err);}
    } else {
        // no errors occurred, destination was created successfully, we proceed to next step.
        checkAccess();
    }
});

/**
 * Checks if destination exists, is readable and writable.
 * If all are true then we proceed to actually copying the matomo file.
 */
function checkAccess() {
    fs.access(destination, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
        if (err){console.error(err);}
        else {CopyMatomoJS();}
    });
}

/**
 * Copy matomo.js from theme-package to destination in kerrokantasi-ui project files.
 */
function CopyMatomoJS() {
    fs.copyFile(source, destination + '/matomo.js', (err) => {
        if (err) throw err;
        console.log(`matomo.js successfully copied from: ${source} to ${destination}`);
    });
}

