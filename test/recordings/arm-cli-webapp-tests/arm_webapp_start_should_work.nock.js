// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'fb2c25dc-6bab-45c4-8cc9-cece7c42a95a',
    name: 'antps14',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg1177/providers/Microsoft.Web/sites/webappclitests2910/start?api-version=2015-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '959b3139-bbfa-42bb-843c-e5565dc265c6',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '38a63dbc-d8fd-4e48-82db-7dc9a852211e',
  'x-ms-routing-request-id': 'CENTRALUS:20160831T053434Z:38a63dbc-d8fd-4e48-82db-7dc9a852211e',
  date: 'Wed, 31 Aug 2016 05:34:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/fb2c25dc-6bab-45c4-8cc9-cece7c42a95a/resourceGroups/testrg1177/providers/Microsoft.Web/sites/webappclitests2910/start?api-version=2015-08-01')
  .reply(200, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '959b3139-bbfa-42bb-843c-e5565dc265c6',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '38a63dbc-d8fd-4e48-82db-7dc9a852211e',
  'x-ms-routing-request-id': 'CENTRALUS:20160831T053434Z:38a63dbc-d8fd-4e48-82db-7dc9a852211e',
  date: 'Wed, 31 Aug 2016 05:34:34 GMT',
  connection: 'close' });
 return result; }]];