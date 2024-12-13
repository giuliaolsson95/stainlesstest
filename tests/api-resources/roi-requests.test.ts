// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource roiRequests', () => {
  test('sendRequest: only required params', async () => {
    const responsePromise = client.roiRequests.sendRequest({
      advisor_codes: ['string', 'string'],
      cc_emails: ['string'],
      custodian: 'PER',
      firm_name: 'Acme Financial',
      owner_name: 'John Jonson',
      reply_to_emails: ['string'],
      sender_name: 'Alex Alexen',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('sendRequest: required and optional params', async () => {
    const response = await client.roiRequests.sendRequest({
      advisor_codes: ['string', 'string'],
      cc_emails: ['string'],
      custodian: 'PER',
      firm_name: 'Acme Financial',
      owner_name: 'John Jonson',
      reply_to_emails: ['string'],
      sender_name: 'Alex Alexen',
      pager: { limit: 0, page: 0 },
    });
  });
});
