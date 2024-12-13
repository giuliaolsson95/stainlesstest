// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource tdaToSwbMigrations', () => {
  test('list', async () => {
    const responsePromise = client.accountManagement.tdaToSwbMigrations.list();
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
    await expect(
      client.accountManagement.tdaToSwbMigrations.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accountManagement.tdaToSwbMigrations.list(
        { pager: { limit: 0, page: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('filter', async () => {
    const responsePromise = client.accountManagement.tdaToSwbMigrations.filter();
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
    await expect(
      client.accountManagement.tdaToSwbMigrations.filter({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('filter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accountManagement.tdaToSwbMigrations.filter(
        {
          pager: { limit: 0, page: 0 },
          account_id: 216897,
          account_ids: [216897, 216898],
          schwab_account_number: 'SWBACCOUNT1',
          schwab_account_numbers: ['SWBACCOUNT1', 'SWBACCOUNT2'],
          schwab_master_number: 'SWBMASTERNUMBER1',
          schwab_master_numbers: ['SWBMASTERNUMBER1', 'SWBMASTERNUMBER2'],
          tda_account_number: 'TDAACCOUNT1',
          tda_account_numbers: ['TDAACCOUNT1', 'TDAACCOUNT2'],
          tda_rep_code: 'TDAREPCODE1',
          tda_rep_codes: ['TDAREPCODE1', 'TDAREPCODE2'],
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
