# Plotly Example

## Quick Start

* `npm install`: Download all the dependencies defined in the `package.json` file.
* `npm start`: Build and run the ui for development purposes (this will not work with backend services)
This will update when there are changes to any html or typescript/javascript files, but not css edits.  For css changes, just refresh the browser page.
* `npm run clean`: Cleans out any installed build artifacts for this project. This will delete the `node_modules` and `build` folders.
* `npm run re[start|build|install]`: Runs `npm run clean` to clean out any leftover build artifacts and then runs the specified start/build/install phase.
* `yarn run yre[start|build|install]`: Same as above but use yarn instead of npm.
