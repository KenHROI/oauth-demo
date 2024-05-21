const config = require('../config.json');

async function initiateAuth(req, res) {
    const options = {
        requestType: "code",
        redirectUri: "https://kenhroi.github.io/oauth-demo/lib/callback",
        clientId: config.clientId,
        scopes: [
            "campaigns.readonly",
  "contacts.write",
  "contacts.readonly",
  "locations/tags.readonly",
  "locations/tags.write",
  "opportunities.readonly",
  "opportunities.write",
  "users.readonly",
  "workflows.readonly",
  "forms.readonly"
        ]
    };

    return res.redirect(`${config.baseUrl}/oauth/chooselocation?response_type=${options.requestType}&redirect_uri=${options.redirectUri}&client_id=${options.clientId}&scope=${options.scopes.join(' ')}`);
}

module.exports = initiateAuth;
