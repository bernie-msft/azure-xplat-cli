// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: 'e33f361b-53c2-4cc7-b829-78906708387b',
    name: 'Microsoft Azure Internal Consumption',
    user: {
      name: 'user@domain.example',
      type: 'servicePrincipal'
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
  process.env['AZURE_VM_TEST_LOCATION'] = 'eastus';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"ea3708f4-3c0b-4a9d-ae25-69619bb855f4\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clic70a690443b5763d-os-1485672922356\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage1620.blob.core.windows.net/xplatsshstoragecnt11066/clic70a690443b5763d-os-1485672922356.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjTCCAXmgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNzAxMjkwNjQ1MjJa\\r\\nGA8yMDI3MDEyOTA2NDUyMlowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEh\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDgAwggEJAoIBAHYcsuUIdYbmBiJOemdodBDSt8Be\\r\\nt3wyou1twZTKE913GzpMU45lvfu2udKsM8UCVIu3+VsfKNHLmWavUZMKmJlUvZgE\\r\\nRSI/u0EdevMmsfZaH3aKmIwzuTgYotgG1gTI3TdYr1cp2as+ci+VlQ6m98tH5r7k\\r\\nJLe+GegWDTsicj7AOy/Oj+bbrjPQhW0kaNAR/e6F21dRGgQV2V43uv9rum479hLy\\r\\nKx35D1VxpnK1fizCw5wQOcmjbRkfQ8wcZ5HafDBkGbiNMqzNrOi0XQIbjWIK7FvS\\r\\nvotM+EjMF6eXg3QGL/3DAwYrxf+ondpp6WNe/rOvxcGqli2o1jINwGdMcNcCAwEA\\r\\nATAJBgcqhkjOPQQBA4IBAQBHas38bAI6d9SNomaGmak97pMLetJHDzry72hoduAj\\r\\n39dR6qz1lB8FUmG/Pt4nA/adHNzSxKIwDejd0OraZ5BtefLvTmp3MasswBehfgVk\\r\\nBKhRnMmRM4q3o9XlVLcOuLiQ6TVjNXSHx7omsZiegBTQCiRf85VaJSGasrAn4hZ1\\r\\n084ykH5ztHjhfM520kFoXlEBugPBFmJi7cWJ6R52FIwz+9fVwpkuigC8ofCR8A6l\\r\\ncHuySVLecXa1KByQFvymJsd2G7MBnpNmfncpzfGo40MJV3pTNU4YC/cqerpHd9sc\\r\\nxG1kUyH7XmLi3eMwYqH092jEFejC241iRc+Yu93q6z/Y\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatsshstorage1620.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2741',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'd795ffb7-c2fc-42e9-a8f4-7d5517213dbb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '2439591c-6362-40f7-b647-0c5ca8ecabbc',
  'x-ms-routing-request-id': 'WESTUS2:20170129T065940Z:2439591c-6362-40f7-b647-0c5ca8ecabbc',
  date: 'Sun, 29 Jan 2017 06:59:39 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm?api-version=2016-04-30-preview')
  .reply(200, "{\r\n  \"properties\": {\r\n    \"vmId\": \"ea3708f4-3c0b-4a9d-ae25-69619bb855f4\",\r\n    \"hardwareProfile\": {\r\n      \"vmSize\": \"Standard_DS1\"\r\n    },\r\n    \"storageProfile\": {\r\n      \"imageReference\": {\r\n        \"publisher\": \"canonical\",\r\n        \"offer\": \"UbuntuServer\",\r\n        \"sku\": \"16.04.0-LTS\",\r\n        \"version\": \"latest\"\r\n      },\r\n      \"osDisk\": {\r\n        \"osType\": \"Linux\",\r\n        \"name\": \"clic70a690443b5763d-os-1485672922356\",\r\n        \"createOption\": \"FromImage\",\r\n        \"vhd\": {\r\n          \"uri\": \"https://xplatsshstorage1620.blob.core.windows.net/xplatsshstoragecnt11066/clic70a690443b5763d-os-1485672922356.vhd\"\r\n        },\r\n        \"caching\": \"ReadWrite\"\r\n      },\r\n      \"dataDisks\": []\r\n    },\r\n    \"osProfile\": {\r\n      \"computerName\": \"xplatsshvm\",\r\n      \"adminUsername\": \"azureuser\",\r\n      \"linuxConfiguration\": {\r\n        \"disablePasswordAuthentication\": false,\r\n        \"ssh\": {\r\n          \"publicKeys\": [\r\n            {\r\n              \"path\": \"/home/azureuser/.ssh/authorized_keys\",\r\n              \"keyData\": \"MIICjTCCAXmgAwIBAgIBATAJBgcqhkjOPQQBMAAwIhgPMjAxNzAxMjkwNjQ1MjJa\\r\\nGA8yMDI3MDEyOTA2NDUyMlowGTELMAkGA1UEBhMCVVMxCjAIBgNVBAoMAWIwggEh\\r\\nMA0GCSqGSIb3DQEBAQUAA4IBDgAwggEJAoIBAHYcsuUIdYbmBiJOemdodBDSt8Be\\r\\nt3wyou1twZTKE913GzpMU45lvfu2udKsM8UCVIu3+VsfKNHLmWavUZMKmJlUvZgE\\r\\nRSI/u0EdevMmsfZaH3aKmIwzuTgYotgG1gTI3TdYr1cp2as+ci+VlQ6m98tH5r7k\\r\\nJLe+GegWDTsicj7AOy/Oj+bbrjPQhW0kaNAR/e6F21dRGgQV2V43uv9rum479hLy\\r\\nKx35D1VxpnK1fizCw5wQOcmjbRkfQ8wcZ5HafDBkGbiNMqzNrOi0XQIbjWIK7FvS\\r\\nvotM+EjMF6eXg3QGL/3DAwYrxf+ondpp6WNe/rOvxcGqli2o1jINwGdMcNcCAwEA\\r\\nATAJBgcqhkjOPQQBA4IBAQBHas38bAI6d9SNomaGmak97pMLetJHDzry72hoduAj\\r\\n39dR6qz1lB8FUmG/Pt4nA/adHNzSxKIwDejd0OraZ5BtefLvTmp3MasswBehfgVk\\r\\nBKhRnMmRM4q3o9XlVLcOuLiQ6TVjNXSHx7omsZiegBTQCiRf85VaJSGasrAn4hZ1\\r\\n084ykH5ztHjhfM520kFoXlEBugPBFmJi7cWJ6R52FIwz+9fVwpkuigC8ofCR8A6l\\r\\ncHuySVLecXa1KByQFvymJsd2G7MBnpNmfncpzfGo40MJV3pTNU4YC/cqerpHd9sc\\r\\nxG1kUyH7XmLi3eMwYqH092jEFejC241iRc+Yu93q6z/Y\\r\\n\"\r\n            }\r\n          ]\r\n        }\r\n      },\r\n      \"secrets\": []\r\n    },\r\n    \"networkProfile\": {\"networkInterfaces\":[{\"id\":\"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Network/networkInterfaces/xplatsshnic\"}]},\r\n    \"diagnosticsProfile\": {\r\n      \"bootDiagnostics\": {\r\n        \"enabled\": true,\r\n        \"storageUri\": \"https://xplatsshstorage1620.blob.core.windows.net/\"\r\n      }\r\n    },\r\n    \"provisioningState\": \"Succeeded\"\r\n  },\r\n  \"type\": \"Microsoft.Compute/virtualMachines\",\r\n  \"location\": \"eastus\",\r\n  \"tags\": {},\r\n  \"id\": \"/subscriptions/e33f361b-53c2-4cc7-b829-78906708387b/resourceGroups/xplatTestGVMCreateSSH/providers/Microsoft.Compute/virtualMachines/xplatsshvm\",\r\n  \"name\": \"xplatsshvm\"\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '2741',
  'content-type': 'application/json; charset=utf-8',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-served-by': 'db2c81f2-c6fa-41a7-b70e-bc4bed3c3b56_131281305639660111',
  'x-ms-request-id': 'd795ffb7-c2fc-42e9-a8f4-7d5517213dbb',
  server: 'Microsoft-HTTPAPI/2.0, Microsoft-HTTPAPI/2.0',
  'x-ms-ratelimit-remaining-subscription-reads': '14988',
  'x-ms-correlation-request-id': '2439591c-6362-40f7-b647-0c5ca8ecabbc',
  'x-ms-routing-request-id': 'WESTUS2:20170129T065940Z:2439591c-6362-40f7-b647-0c5ca8ecabbc',
  date: 'Sun, 29 Jan 2017 06:59:39 GMT',
  connection: 'close' });
 return result; }]];