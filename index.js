var App = require('./app'),
    data = require('./data/data.json'),
    app = new App({
        data: data
    });

window.a =  data;

document.body.appendChild(app.element);
