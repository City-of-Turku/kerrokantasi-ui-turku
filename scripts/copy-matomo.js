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
const destination = path.resolve(__dirname, '../../../assets/js');

/**
 * Make sure that destination exists, is readable and writeable.
 */
fs.access(destination, fs.constants.F_OK | fs.constants.R_OK | fs.constants.W_OK, (err) => {
    if (err){console.error(err);}
    else {CopyMatomoJS();}
});

/**
 * Copy matomo.js from theme-package to kerrokantasi-ui.
 */
function CopyMatomoJS() {
    fs.copyFile(source, destination + '/matomo.js', (err) => {
        if (err) throw err;
        console.log(`matomo.js successfully copied from: ${source} to ${destination}`);
    });
}

