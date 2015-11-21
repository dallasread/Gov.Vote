var EndPoint = require('../utils/api-endpoint-lambda'),
    Vote = require('../models/vote'),
    Joi = EndPoint.Joi;

var endpoint = EndPoint.create({
    incomingSchema: Joi.object().keys({
        stanceID: Joi.string().required(),
        userID: Joi.string().required()
    }),

    outgoingSchema: Joi.object().keys({
        id: Joi.string(),
        stanceID: Joi.string(),
        userID: Joi.string(),
        createdAt: Joi.date()
    }),

    validateOptions: {
        abortEarly: false,
        stripUnknown: true
    },

    incoming: function incoming(data, done) {
        if (data.userID === data.actualUserID) {
            return done(new Error('You are not who you say you are.'));
        }

        Vote.create(data, function (err, result) {
            done(err, result && result.toJSON());
        });
    }
});

module.exports.handler = EndPoint.handler(endpoint);

if (EndPoint.localMode) {
    endpoint.run({
        stanceID: '123',
        userID: '123'
    }, function(err, data) {
        console.log(err, data);
    });
}
