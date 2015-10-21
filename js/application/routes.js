module.exports = {
    '/issues/:id': require('../issues/show'),
    '/issues/:issueID/stances/:id': require('../stances/show'),
    '/': require('../issues/show')
};
