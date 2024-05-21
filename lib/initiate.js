const config = require('../config.json');

async function initiateAuth(req, res) {
    const options = {
        requestType: "code",
        redirectUri: "http://kenhroi.github.com/oauth-demo/lib/callback",
        clientId: config.clientId,
        scopes: [
            "calendars.readonly",
            "campaigns.readonly",
            "contacts.readonly"
        ]
    };

    return res.redirect(`${config.baseUrl}/oauth/chooselocation?response_type=${options.requestType}&redirect_uri=${options.redirectUri}&client_id=${options.clientId}&scope=${options.scopes.join(' ')}`);
}

module.exports = initiateAuth;
