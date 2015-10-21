var Route = require('../../utils/route'),
    transitionSpeed = 222,
    config = {
        templates: {
            index: require('./index.bars')
        },
        partials: {
            sidebar: require('../../application/sidebar.bars')
        },
        interactions: {
            check: {
                event: window.$.browser.event('click'),
                target: 'label',
                listener: function listener(e, $el) {
                    var _ = this;

                    _.$element.find('.checked').removeClass('checked');
                    $el.toggleClass('checked');
                    _.$element.find('.btn')
                        .removeClass('btn-gray')
                        .addClass('btn-green');
                }
            },
            sidebar: {
                event: window.$.browser.event('click'),
                target: '.show-sidebar',
                listener: function listener(e, $el) {
                    var _ = this,
                        $sidebar = _.$element.find('.sidebar'),
                        $issue = _.$element.find('.issue');

                    if (!$sidebar.hasClass('is-visible')) {
                        $sidebar.addClass('is-visible');
                        $('html, body').css('overflow', 'hidden');

                        $sidebar.stop().animate({
                            left: 0
                        }, transitionSpeed);

                        $issue.stop().animate({
                            'margin-left': $sidebar.width()
                        }, transitionSpeed);
                    } else {
                        $sidebar.removeClass('is-visible');
                        $('html, body').css('overflow', '');

                        $sidebar.stop().animate({
                            left: -$sidebar.width()
                        }, transitionSpeed);

                        $issue.stop().animate({
                            'margin-left': 0
                        }, transitionSpeed);
                    }

                    return false;
                }
            }
        }
    };

var IssuesShow = Route.createElement(config, function IssuesShow(options) {
    var _ = this;
    _.supercreate(options);
    _.beforeFilters = [
        function(done) {
            _.set('issue', _.app.issues[_.params.id]);
            _.set('issues', _.app.issues);
            done();
        }
    ];
});

IssuesShow.definePrototype({
});

module.exports = IssuesShow;
