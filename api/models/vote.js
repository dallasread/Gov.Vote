var vogels = require('vogels'),
    Joi = require('joi');

var Vote = vogels.define('Votes', {
    tableName: 'GovVote-Votes',
    hashKey: 'id',
    timestamps: true,
    schema: {
        id: vogels.types.uuid(),
        stanceID: Joi.string(),
        userID: Joi.string()
    }
});

module.exports = Vote;
