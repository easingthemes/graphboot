export const GLOBAL = {
  API_DOMAIN: 'http://localhost:3001',
  API_PATH: 'rest/agile/1.0/',
  API_2_PATH: 'rest/api/2/',
  CONFLUENCE_API_DOMAIN: 'http://localhost:4001',
  CONFLUENCE_API: 'wiki/rest/api/'
};
export const API_URL = `${GLOBAL.API_DOMAIN}/${GLOBAL.API_PATH}`;
export const API_2_URL = `${GLOBAL.API_DOMAIN}/${GLOBAL.API_2_PATH}`;
export const CONFLUENCE_API = `${GLOBAL.CONFLUENCE_API_DOMAIN}/${GLOBAL.CONFLUENCE_API}`;

//http://example.com/rest/api/content?spaceKey=TST&title=Cheese&expand=space,body.view,version,container

export const DEFAULT_ACTION = 'containers/App/DEFAULT_ACTION';
export const GET_USER = 'containers/App/GET_USER';
// user from HR project: rest/api/2/search?jql=project%20%3D%20HR%20AND%20issuetype%20%3D%20Person%20
