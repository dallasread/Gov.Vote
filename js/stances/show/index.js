var Route = require('../../utils/route'),
    config = {
        templates: {
            index: require('./index.bars')
        },
        partials: {
            sidebar: require('../../application/sidebar.bars')
        },
        helpers: {
            'html-safe': function htmlSafe(a) {
                return document.createTextNode(a).textContent;
            }
        }
    };

var StancesShow = Route.createElement(config, function StancesShow(options) {
    var _ = this;
    _.supercreate(options);
    _.beforeFilters = [
        function findStance(done) {
            var issue = _.app.issues[_.params.issueID];
            var stance = issue.stances[_.params.id];

            stance.issue = issue;
            stance.next = issue.stances[parseInt(_.params.id) + 1];
            stance.prev = issue.stances[parseInt(_.params.id) - 1];

            if (!stance.next) stance.next = issue.stances[1];
            if (!stance.prev) stance.prev = issue.stances[Object.keys(issue.stances).length];

            _.set('stance', stance);

            done();
        }
    ];
});

StancesShow.definePrototype({
});

module.exports = StancesShow;
