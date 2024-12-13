// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource households', () => {
  test('createMany: only required params', async () => {
    const responsePromise = client.households.createMany({
      body: [
        { name: 'Joe and Rebecca Jones Household', firm_id: 39 },
        { name: 'Tim Blanco Household', firm_id: 39 },
      ],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('createMany: required and optional params', async () => {
    const response = await client.households.createMany({
      body: [
        { name: 'Joe and Rebecca Jones Household', firm_id: 39 },
        { name: 'Tim Blanco Household', firm_id: 39 },
      ],
      pager: { limit: 0, page: 0 },
    });
  });

  test('filter', async () => {
    const responsePromise = client.households.filter();
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
    await expect(client.households.filter({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('filter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.households.filter(
        {
          pager: { limit: 0, page: 0 },
          id: 27585,
          close_date: null,
          entity_id: 'H-90A44DFF',
          firm_id: 39,
          inception_date: '2004-05-14',
          name: 'Rachel and Alex Green-Smith Household',
          opening_date: '2021-12-31',
          short_name: '90A44DFF',
          status: '110',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('remap: only required params', async () => {
    const responsePromise = client.households.remap({ '216895': 77458, '216919': 77458 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('remap: required and optional params', async () => {
    const response = await client.households.remap({ '216895': 77458, '216919': 77458 });
  });
});
