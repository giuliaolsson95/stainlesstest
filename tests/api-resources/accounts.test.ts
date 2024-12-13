// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('retrieve', async () => {
    const responsePromise = client.accounts.retrieve(1);
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
    await expect(client.accounts.retrieve(1, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.retrieve(1, { pager: { limit: 0, page: 0 } }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.accounts.update({ path_id: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.accounts.update({
      path_id: 1,
      body_id: 0,
      acct_type: 'acct_type',
      address_1: 'address_1',
      address_2: 'address_2',
      address_3: 'address_3',
      advisor_code: 'advisor_code',
      advisor_codes: ['string'],
      benchmarks_ids: [0],
      billing_splits_ids: [0],
      buy_securities_ids: [0],
      city: 'city',
      close_date: '2019-12-27T18:11:19.117Z',
      country: 'country',
      created_at_utc: '2019-12-27T18:11:19.117Z',
      custodian: 'APX',
      custodian_name: 'custodian_name',
      display_name: 'display_name',
      display_number: 'display_number',
      do_not_buy_securities_ids: [0],
      do_not_sell_securities_ids: [0],
      entity_id: 'entity_id',
      fee_structures_ids: [0],
      firm_id: 0,
      first_billable_date: '2019-12-27T18:11:19.117Z',
      first_cost_basis_date: '2019-12-27T18:11:19.117Z',
      first_funded_date: '2019-12-27T18:11:19.117Z',
      first_papered_date: '2019-12-27T18:11:19.117Z',
      first_performance_date: '2019-12-27T18:11:19.117Z',
      first_positions_date: '2019-12-27',
      first_quarantine_date: '2019-12-27',
      first_transactions_date: '2019-12-27',
      has_custodian_name: true,
      household_id: 0,
      inception_date: '2019-12-27T18:11:19.117Z',
      investment_model_id: 0,
      is_account: true,
      is_active: true,
      is_closed: true,
      is_custodian_billed: true,
      is_direct_billed: true,
      is_household: true,
      is_pledged_account: true,
      is_tax_deferred: true,
      is_taxable: true,
      last_cost_basis_date: '2019-12-27T18:11:19.117Z',
      last_portfolio_data_date: '2019-12-27T18:11:19.117Z',
      last_positions_date: '2019-12-27',
      last_reporting_date: '2019-12-27',
      last_transactions_date: '2019-12-27',
      name: 'name',
      notes: 'notes',
      number: 'number',
      payment_source: 'C',
      required_cash: 0,
      required_cash_frequency: '',
      restrictions: 'restrictions',
      sell_securities_ids: [0],
      short_name: 'short_name',
      state: 'state',
      status: 'funded',
      target_allocation_id: 0,
      tax_id_token: 'tax_id_token',
      unsupervised_securities_ids: [0],
      updated_at_utc: '2019-12-27T18:11:19.117Z',
      zip_code: 'zip_code',
    });
  });

  test('list', async () => {
    const responsePromise = client.accounts.list();
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
    await expect(client.accounts.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.list({ pager: { limit: 0, page: 0 } }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('filter', async () => {
    const responsePromise = client.accounts.filter();
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
    await expect(client.accounts.filter({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('filter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.accounts.filter(
        {
          pager: { limit: 0, page: 0 },
          id: 216897,
          acct_type: '401k',
          advisor_code: 'DEMO2',
          city: 'New Irmachester',
          close_date: null,
          custodian: 'APX',
          firm_id: 39,
          household_id: 68778,
          inception_date: null,
          is_tax_deferred: null,
          is_taxable: null,
          name: 'Violet Juns',
          number: 'DEMO3577',
          payment_source: 'C',
          status: 'funded',
          zip_code: '90337',
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
