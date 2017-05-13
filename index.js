var App = require('./app'),
    data = require('./data.json'),
    app = new App({
        data: data
    });

window.app = app;

document.body.appendChild(app.element);
