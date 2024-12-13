// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accountPerformance', () => {
  test('fetch: only required params', async () => {
    const responsePromise = client.accountPerformance.fetch({
      as_of_date: '2022-07-31',
      entity_ids: [27585, 28028],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('fetch: required and optional params', async () => {
    const response = await client.accountPerformance.fetch({
      as_of_date: '2022-07-31',
      entity_ids: [27585, 28028],
    });
  });
});
