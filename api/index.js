const mockServer = require('node-mock-server');
const dest = __dirname + '/rest';

mockServer({
	restPath: dest,
	dirName: __dirname,
  title: 'Jira mock server',
	uiPath: '/',
  urlPath: '/rest/agile/1.0',
	headers: {
		'Global-Custom-Header': 'Global-Custom-Header',
	}
});
