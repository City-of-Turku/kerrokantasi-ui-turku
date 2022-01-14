# Kerrokantasi UI for Turku

## Using the "theme"

Currently the process of using the theme is not super developer friendly as it does
not support the use of `yarn link`. This means that to do development on the project
it will have to be installed in the kerrokantasi-ui project and then edited within 
the kerrokantasi-ui `node_modules/kerrokantasi-ui-turku` folder. If someone can find
a solution to this, please fix.

Development steps:
1. Place the `kerrokantasi-ui-turku` folder next to the `kerrokantasi-ui` folder
    * The structure should look like this:
      ```
      /
        /kerrokantasi-ui
        /kerrokantasi-ui-turku
      ```
2. In the `kerrokantasi-ui` project run `yarn add ../kerrokantasi-ui-turku`
   1. Once the package has been added, a post-install script will attempt to copy `assets/js/tracker/matomo.js`
   from `kerrokantasi-ui-turku` into `kerrokantasi-ui` `assets/js/tracker/matomo.js`.
   The `kerrokantasi-ui` `tracker` folder is created if it doesn't exist and `tracker/matomo.js` is replaced if it already exists.
   If this script doesn't work then the copy operations must be done manually.
3. Edit files in `kerrokantasi-ui/node_modules/kerrokantasi-ui-turku` for changes to be reflected


Production installation:
1. Add the project to the local `kerrokantasi-ui` project either by installing it
   the same way as in the dev environment, or from GitHub or if this package is published
   to npm, then install it from there.

## Creating favicons

Place the original favicon image (512px by 512px) in /assets/favicon/turku-favicon-orig.png

Run: `yarn build-favicons`

## Adding tracking code

City specific tracking/analytics code such as Matomo or Piwik must be added directly
 in `kerrokantasi-ui` project under `/assets/js/tracker` folder. Currently this 
 project's `urls.json`'s analytics url points to path `/assets/js/tracker/matomo.js`.

A post-install(runs after package has been added) script will copy `/assets/js/tracker/matomo.js` directly into `kerrokantasi-ui`
`/assets/js/tracker` creating the `tracker` folder if it doesn't exist and replacing `matomo.js` if it already exists.
