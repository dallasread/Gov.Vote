module.exports = {
    '/issues/:id': require('../issues/show'),
    '/issues/suggest': require('../issues/new'),
    '/issues/:issueID/stances/suggest': require('../stances/new'),
    '/issues/:issueID/stances/:id': require('../stances/show'),
    '/issues/:issueID/stances/:id/:filter': require('../stances/show'),
    '/': require('../issues/show')
};
