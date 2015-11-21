var Route = require('../../utils/route'),
    API = require('../../../assets/sdk'),
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
            submit: {
                event: window.$.browser.event('submit'),
                target: '.vote',
                listener: function listener(e, $el) {
                    $el.prop('disabled', true);

                    API.votesCreate({
                        issueID: $el.attr('data-issue-id')
                    }, function(err, data) {
                        $el.prop('disabled', false);

                        if (err) {
                            alert(err.join(', '));
                        } else {
                            var $button = $el.find('button'),
                                originalText = $button.text();

                            $button.text('Saved!');

                            setTimeout(function() {
                                $button.text(originalText);
                            }, 1500);
                        }
                    });

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
            _.app.get('issues') || _.set('issues', _.app.issues);
            done();
        }
    ];
});

IssuesShow.definePrototype({
});

module.exports = IssuesShow;
