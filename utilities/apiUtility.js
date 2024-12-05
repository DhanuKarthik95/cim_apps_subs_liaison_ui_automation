"use strict";

const request = require('request-promise').defaults({ simple: false });
let timeout = 120000;

module.exports = {
    get: async (url) => {
    let headers = { 'Content-Type': 'application/json' };

    let options = {
        url: url,
        method: 'GET',
        headers: headers,
        timeout: timeout,
        json: true
    };
    return await request(options);
   },

   get_auth_token: async () => {
    let req_url = `https://api.ftest.aamc.org/iam/oauth2/access_token?realm=/External`;
    let headers = { "accept": "application/json" };
    let body_data = {
        "client_id": "acquia-cim",
        "client_secret": "J3JN>ecXnPvqRIXt",
        "grant_type": "client_credentials",
        "scope": "CIM_VIEW_SPECIALTY_DETAILS"
    };

    let options = {
      url: req_url,
      method: 'POST',
      headers: headers,
      timeout: timeout,
      form: body_data,
      json: true
    };
    return await request(options);
  },

  get_workforce_data: async (auth_token) => {
    let req_url = `https://api.ftest.aamc.org/cim-apps-service/specialty/140/workforce/USA/DE`;
    let headers = { "Authorization": `Bearer ${auth_token}` };

    let options = {
        url: req_url,
        method: 'GET',
        headers: headers,
        timeout: timeout,
        json: true
    };
    return await request(options);
  }
}
