// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '947d47b4-7883-4bb9-9d85-c5e8e2f572ce',
    name: 'nrptest58.westus.validation.partner',
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'southeastasia';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'private',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationResults/delzone636458296659887774622c7894?api-version=2017-09-01',
  'retry-after': '3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone636458296659887774622c7894?api-version=2017-09-01',
  'x-ms-request-id': '4b8daca7-320e-4fc9-8513-bc69f01e25fb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '82e1ba79-24d6-45ae-9843-8b980c9eef71',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130746Z:82e1ba79-24d6-45ae-9843-8b980c9eef71',
  date: 'Thu, 09 Nov 2017 13:07:46 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .delete('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(202, "", { 'cache-control': 'private',
  location: 'https://management.azure.com/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationResults/delzone636458296659887774622c7894?api-version=2017-09-01',
  'retry-after': '3',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'azure-asyncoperation': 'https://management.azure.com:443/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone636458296659887774622c7894?api-version=2017-09-01',
  'x-ms-request-id': '4b8daca7-320e-4fc9-8513-bc69f01e25fb',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': '82e1ba79-24d6-45ae-9843-8b980c9eef71',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130746Z:82e1ba79-24d6-45ae-9843-8b980c9eef71',
  date: 'Thu, 09 Nov 2017 13:07:46 GMT',
  connection: 'close',
  'content-length': '0' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone636458296659887774622c7894?api-version=2017-09-01')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'private',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2da38bf0-f28e-4a93-abdc-96012e91ce72',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'deb3b773-642b-4d3e-9a58-59e6c03bf8d5',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130817Z:deb3b773-642b-4d3e-9a58-59e6c03bf8d5',
  date: 'Thu, 09 Nov 2017 13:08:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsOperationStatuses/delzone636458296659887774622c7894?api-version=2017-09-01')
  .reply(200, "{\"status\":\"Succeeded\"}", { 'cache-control': 'private',
  'content-length': '22',
  'content-type': 'application/json; charset=utf-8',
  'x-content-type-options': 'nosniff',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': '2da38bf0-f28e-4a93-abdc-96012e91ce72',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11999',
  'x-ms-correlation-request-id': 'deb3b773-642b-4d3e-9a58-59e6c03bf8d5',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130817Z:deb3b773-642b-4d3e-9a58-59e6c03bf8d5',
  date: 'Thu, 09 Nov 2017 13:08:16 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/exampledns.com' under resource group 'xplat-test-dns-zone' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '85931b54-ea05-41cb-84f4-13b938e862a8',
  'x-ms-correlation-request-id': '85931b54-ea05-41cb-84f4-13b938e862a8',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130818Z:85931b54-ea05-41cb-84f4-13b938e862a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 09 Nov 2017 13:08:18 GMT',
  connection: 'close',
  'content-length': '164' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/947d47b4-7883-4bb9-9d85-c5e8e2f572ce/resourceGroups/xplat-test-dns-zone/providers/Microsoft.Network/dnsZones/exampledns.com?api-version=2017-09-01')
  .reply(404, "{\"error\":{\"code\":\"ResourceNotFound\",\"message\":\"The Resource 'Microsoft.Network/dnszones/exampledns.com' under resource group 'xplat-test-dns-zone' was not found.\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'x-ms-failure-cause': 'gateway',
  'x-ms-request-id': '85931b54-ea05-41cb-84f4-13b938e862a8',
  'x-ms-correlation-request-id': '85931b54-ea05-41cb-84f4-13b938e862a8',
  'x-ms-routing-request-id': 'WESTEUROPE:20171109T130818Z:85931b54-ea05-41cb-84f4-13b938e862a8',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  date: 'Thu, 09 Nov 2017 13:08:18 GMT',
  connection: 'close',
  'content-length': '164' });
 return result; }]];