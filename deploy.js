// Alternative to running `yarn deploy` for deploying to gh pages.
// you can just run `node deploy.js` from within this `git` project
var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});
