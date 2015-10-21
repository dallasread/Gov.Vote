var CustomElement = require('../utils/custom-element'),
    Bindable = require('generate-js-bindings');

var config = {
    templates: {
        index: 'No template set {{key}}.'
    }
};

var Route = CustomElement.createElement(config, function Route(options) {
    var _ = this;

    _.supercreate(options);

    _.$element.addClass(
        (options.blueprint + '')
            .substring(1)
            .replace(/\//g, '-')
            .replace(/[^-0-9A-Za-z]/g, '') +
            '-controller'
    );

    _.defineProperties({
        writable: true
    }, {
        cacheable: true
    });
});

Bindable.generateGetters(Route, ['app', 'params']);

Route.definePrototype({
    _getApp: function _getApp() {
        var _ = this;

        return _.get('app');
    },
    _getParams: function _getParams() {
        var _ = this;

        return _.get('params');
    }
    // onShow: function onShow() {}
});

module.exports = Route;
