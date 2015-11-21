var EndPoint = require('api-endpoint'),
    vogels = require('vogels');

EndPoint.vogels = vogels;
EndPoint.localMode = !EndPoint.vogels.AWS.config.credentials;

if (EndPoint.localMode) {
    EndPoint.vogels.AWS.config.update({region: 'us-east-1'});
    EndPoint.vogels.AWS.config.credentials = new EndPoint.vogels.AWS.SharedIniFileCredentials({
        profile: 'personal'
    });
}

EndPoint.definePrototype({
    lambda: function lambda(event, context) {
        var _ = this;

        _.run(event, function(err, data) {
            if (err) {
                context.fail(err);
            } else {
                context.succeed(data);
            }
        });
    }
});

EndPoint.handler = function endPointHandler(endpoint) {
    return function handler(e, c) {
        endpoint.lambda(e, c);
    };
};

module.exports = EndPoint;
