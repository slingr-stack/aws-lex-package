/****************************************************
 Listeners
 ****************************************************/

listeners.defaultAwsLex = {
    label: 'Catch HTTP awslex events',
    type: 'service',
    options: {
        service: 'http',
        event: 'webhook',
        matching: {
            path: '/awslex',
        }
    },
    callback: function(event) {
        sys.logs.info('Received AWS Lex webhook. Processing and triggering a package event.');
        var body = JSON.stringify(event.data.body);
        var params = event.data.parameters;
        if(true) {
            sys.logs.info('Valid webhook received. Triggering event.');
            sys.events.triggerEvent('awslex:webhook', {
                body: body,
                params: params
            });
            return "ok";
        }
        else throw new Error("Invalid webhook");
    }
};
