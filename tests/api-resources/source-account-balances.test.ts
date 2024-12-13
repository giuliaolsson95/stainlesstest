// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource sourceAccountBalances', () => {
  test('retrieve', async () => {
    const responsePromise = client.sourceAccountBalances.retrieve(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sourceAccountBalances.retrieve(1, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sourceAccountBalances.retrieve(
        1,
        { pager: { limit: 0, page: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.sourceAccountBalances.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sourceAccountBalances.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sourceAccountBalances.list(
        { pager: { limit: 0, page: 0 }, related: 'accounts' },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('filter: only required params', async () => {
    const responsePromise = client.sourceAccountBalances.filter({ body: {} });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('filter: required and optional params', async () => {
    const response = await client.sourceAccountBalances.filter({
      body: {},
      pager: { limit: 0, page: 0 },
      related: 'accounts',
    });
  });

  test('latest', async () => {
    const responsePromise = client.sourceAccountBalances.latest();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('latest: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.sourceAccountBalances.latest({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('latest: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.sourceAccountBalances.latest(
        { pager: { limit: 0, page: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
