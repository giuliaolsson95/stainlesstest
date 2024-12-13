// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource intrinio', () => {
  test('retrieve: only required params', async () => {
    const responsePromise = client.marketData.intrinio.retrieve('filings', {
      'x-Intrinio-Api-Key': 'INTRINIO_API_KEY',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: required and optional params', async () => {
    const response = await client.marketData.intrinio.retrieve('filings', {
      'x-Intrinio-Api-Key': 'INTRINIO_API_KEY',
      next_page: 'next_page',
    });
  });
});
