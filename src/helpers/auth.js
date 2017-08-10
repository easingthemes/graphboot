import axios from 'axios';
const Client = require('node-rest-client').Client;
const client = new Client();
// 1. Try basic auth
// 2. Configure oAuth
// Current issue: CORS - 'Access-Control-Allow-Origin'
export function basicAuth() {
  const config = {
    host: 'https://domain.com',
    port: '',
    user: 'admin',
    password: 'admin',
    version: '2'
  };

  const restUrl = `${config.host}/rest/auth/1/session?os_authType=basic`;
  const username = config.user;
  const password = config.password;
  const base64UserPass = new Buffer(`${username}:${password}`).toString('base64');


  // 1. Set base64 headers, as described on Jira api website
  axios.post(restUrl, {
      headers: {
        'Authorization': `Basic ${base64UserPass}`,
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'application/json',
        'X-Atlassian-Token': 'nocheck'
      }
   })
  .then(response => {
    console.log('response1', response.data);
  })
  .catch(error => {
    console.log('error1', error);
  });

  // 2. Use axios suggested Basic auth
  axios.post(restUrl, {
    auth: {
        username: username,
        password: password
    },
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'X-Atlassian-Token': 'nocheck'
    }
  })
  .then(response => {
    console.log('response2', response.data);
  })
  .catch(error => {
    console.log('error2', error);
  });
}

export function clientAuth() {
  const config = {
    host: 'domain.com',
    port: '',
    user: 'admin',
    password: 'admin',
    version: '2'
  };

  const restUrl = `https://${config.host}/rest/auth/1/session?os_authType=basic`;
  const username = config.user;
  const password = config.password;
  const base64UserPass = new Buffer(`${username}:${password}`).toString('base64');

  const loginArgs = {
    data: {
      "username": username,
      "password": password
    },
    headers: {
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json',
      'X-Atlassian-Token': 'nocheck',
      'Authorization': `Basic ${base64UserPass}`,
    }
  };

  client.get(restUrl, loginArgs, function(data, response){
    if (response.statusCode === 200) {
      console.log('succesfully logged in, session:', data.session);
      var session = data.session;
      // Get the session information and store it in a cookie in the header
      var searchArgs = {
        headers: {
          // Set the cookie from the session information
          cookie: session.name + '=' + session.value,
          "Content-Type": "application/json",
          'X-Atlassian-Token': 'nocheck',
          'Authorization': `Basic ${base64UserPass}`,
        }
      };
      // Make the request return the search results, passing the header information including the cookie.
      client.get('http://localhost:3000/', searchArgs, function(data, response) {
        console.log('status code:', response.statusCode);
        console.log('Data:', data.toString());
      });
    } else {
       console.log('login failed');
    }
  });
}

