# Moved 
This package is no longer used, it's contents were moved to https://github.com/logigator/logigator

## LogigatorSharedComps

[![Build Status](https://travis-ci.org/logigator/logigator-shared-comps.svg?branch=master)](https://travis-ci.org/logigator/logigator-shared-comps)

Component Library used in [LogigatorHome](https://github.com/logigator/logigator-home) and [LogigatorEditor](https://github.com/logigator/logigator-editor).

In this Libary are all components and styles needed by both projects.

To build the library run `npm run build`;

To serve The library run `npm start`. You can then use the local version of the library in project to take advantage of live-reloading.
In order to do so install the library with `npm i file:../logigator-shared-comps/dist/logigator-shared-comps`.

## Publishing
The Package is automatically published, when code is pushed to the master branch. Before you push code to master, please ensure that the version in `projects/logigator-shared-comps/package.json` is higher than the currently published version.

## License
This Project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
