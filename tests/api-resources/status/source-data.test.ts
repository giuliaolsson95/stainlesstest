// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sourceData', () => {
  test('create', async () => {
    const responsePromise = client.status.sourceData.create();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.status.sourceData.create({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('create: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.status.sourceData.create({ as_of_date: '2006-01-02' }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
