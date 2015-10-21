window.$ = require('jquery');
window.$.browser = require('./utils/browser');

var App = require('./application');

window.GovVote = App.create({
    $element: $('#gov-vote')
});
