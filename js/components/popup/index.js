var CustomElement = require('../../utils/custom-element'),
    config = {
        templates: {
            index: require('./index')
        }
    };

var Popup = CustomElement.createElement(config, function Popup(options) {
    var _ = this;

    options.closable = options.closable === null ? true : options.closable;
    options.title = 'This is the title';
    options.content = '<b>This is the content!</b>';

    _.supercreate(options);
    _.$element.hide();
});

Popup.definePrototype({
    show: function show() {
        var _ = this;
        _.$element.fadeIn();
    }
});

module.exports = Popup;
