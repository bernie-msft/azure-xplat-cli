// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'ace9b607-25c7-4695-b94d-9bfc8fde73d9',
    managementCertificate: {
      key: 'mockedKey',
      cert: 'mockedCert'
    },
    name: 'Azure Test',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
  process.env['AZURE_VM_TEST_LOCATION'] = 'West US';
  process.env['SSHCERT'] = 'test/myCert.pem';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/123/deployments/123/migration?comp=prepare', '*')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The deployment name '123' does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '206',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c99526dd3e3475c18fda009701925d16',
  date: 'Sat, 18 Mar 2017 20:42:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/123/deployments/123/migration?comp=prepare', '*')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The deployment name '123' does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '206',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c99526dd3e3475c18fda009701925d16',
  date: 'Sat, 18 Mar 2017 20:42:47 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .post('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/123/deployments/123/migration?comp=commit')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The deployment name '123' does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '206',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8df7ce6664b079bda7fa7eac403ea3d2',
  date: 'Sat, 18 Mar 2017 20:42:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .post('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/123/deployments/123/migration?comp=commit')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The deployment name '123' does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '206',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '8df7ce6664b079bda7fa7eac403ea3d2',
  date: 'Sat, 18 Mar 2017 20:42:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.core.windows.net:443')
  .post('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/123/deployments/123/migration?comp=abort')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The deployment name '123' does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '206',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '717a7cdecd3175ad973aae9cd711d4fe',
  date: 'Sat, 18 Mar 2017 20:42:49 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.core.windows.net:443')
  .post('/ace9b607-25c7-4695-b94d-9bfc8fde73d9/services/hostedservices/123/deployments/123/migration?comp=abort')
  .reply(404, "<Error xmlns=\"http://schemas.microsoft.com/windowsazure\" xmlns:i=\"http://www.w3.org/2001/XMLSchema-instance\"><Code>ResourceNotFound</Code><Message>The deployment name '123' does not exist.</Message></Error>", { 'cache-control': 'no-cache',
  'content-length': '206',
  'content-type': 'application/xml; charset=utf-8',
  server: '1.0.6198.492 (rd_rdfe_stable.170314-1904) Microsoft-HTTPAPI/2.0 Microsoft-HTTPAPI/2.0',
  'x-ms-servedbyregion': 'ussouth2',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '717a7cdecd3175ad973aae9cd711d4fe',
  date: 'Sat, 18 Mar 2017 20:42:49 GMT',
  connection: 'close' });
 return result; }]];
 exports.randomTestIdsGenerated = function() { return ['cliVmMigr2125'];};