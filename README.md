# template-cli-gulp

[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0)

A template to command-line libraries with [Gulp.js](https://www.npmjs.com/package/gulp) as the task-runner

## Technologies

### Node.js

 - [ES2015](http://es6-features.org/)

### Task Runner: Gulp

#### Plugins

 - [del](https://www.npmjs.com/package/del) to clean up the output directory at the start of every build
 - [gulp-babel](https://www.npmjs.com/package/gulp-babel), [babel-core](https://www.npmjs.com/package/babel-core) and [babel-preset-env](https://www.npmjs.com/package/babel-preset-env) for ES2015 transpilation
 - [gulp-sourcemaps](https://www.npmjs.com/package/gulp-sourcemaps) to generate source-maps for debugging
 - [gulp-uglify](https://www.npmjs.com/package/gulp-uglify) to minify JavaScript files
 - [gulp-eslint](https://www.npmjs.com/package/gulp-eslint), [babel-eslint](https://www.npmjs.com/package/babel-eslint), [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb), [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import), [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) and [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react) to run ESLint on JavaScript files

#### Tasks

 - build (default)
   - clean to clean the output directory
   - scripts to transpile & minify all JavaScript to the output directory
 - debug
   - clean to clean the output directory
   - scriptsDebug to transpile all JavaScript to the output directory
   - lint to run ESLint over JavaScript files
 - lint
   - run ESLint over JavaScript files
 - develop to watch over the source files and run tasks related to the changed files

## To-Do

 - Finalize a unit testing setup
