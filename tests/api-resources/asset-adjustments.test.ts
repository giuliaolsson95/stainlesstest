// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource assetAdjustments', () => {
  test('createMany: only required params', async () => {
    const responsePromise = client.assetAdjustments.createMany({ body: [{}] });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createMany: required and optional params', async () => {
    const response = await client.assetAdjustments.createMany({
      body: [
        {
          id: 0,
          adjustment_type: 'i',
          created_at_utc: '2019-12-27T18:11:19.117Z',
          firm_id: 0,
          level: 'f',
          name: 'name',
          security_ids: [0],
          slug: 'slug',
          updated_at_utc: '2019-12-27T18:11:19.117Z',
          weight: 0,
        },
      ],
      pager: { limit: 0, page: 0 },
    });
  });

  test('deleteMany', async () => {
    const responsePromise = client.assetAdjustments.deleteMany({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('filter', async () => {
    const responsePromise = client.assetAdjustments.filter();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('filter: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.assetAdjustments.filter({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('filter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.assetAdjustments.filter(
        {
          pager: { limit: 0, page: 0 },
          id: 60,
          adjustment_type: 'i',
          firm_id: 39,
          level: 'f',
          name: 'Exclude Apple',
          security_ids: [62],
          slug: 'exclude-apple',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
