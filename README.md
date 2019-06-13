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
3. Edit files in `kerrokantasi-ui/node_modules/kerrokantasi-ui-turku` for changes to be reflected


Production installation:
1. Add the project to the local `kerrokantasi-ui` project either by installing it
   the same way as in the dev environment, or from GitHub or if this package is published
   to npm, then install it from there.

## Creating favicons

Place the original favicon image (512px by 512px) in /assets/favicon/turku-favicon-orig.png

Run: `yarn build-favicons`
