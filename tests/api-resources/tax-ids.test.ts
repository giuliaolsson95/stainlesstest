// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource taxIds', () => {
  test('exchange', async () => {
    const responsePromise = client.taxIds.exchange('account_tax_id_token');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('exchange: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.taxIds.exchange('account_tax_id_token', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
