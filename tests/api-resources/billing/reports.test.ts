// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource reports', () => {
  test('create: only required params', async () => {
    const responsePromise = client.billing.reports.create({
      firm_id: 20,
      is_invoice_by_client: true,
      period_type: 'S',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.billing.reports.create({
      firm_id: 20,
      is_invoice_by_client: true,
      period_type: 'S',
      pager: { limit: 0, page: 0 },
      billing_date: '2022-08-31',
      create_invoices: true,
      email_notification: true,
      group_ids: [0],
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.billing.reports.retrieve(1);
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
    await expect(client.billing.reports.retrieve(1, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.billing.reports.retrieve(
        1,
        { pager: { limit: 0, page: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('list', async () => {
    const responsePromise = client.billing.reports.list();
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
    await expect(client.billing.reports.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.billing.reports.list({ pager: { limit: 0, page: 0 } }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.billing.reports.delete(1);
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.billing.reports.delete(1, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.billing.reports.delete(
        1,
        { pager: { limit: 0, page: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('deleteMany', async () => {
    const responsePromise = client.billing.reports.deleteMany({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('filter', async () => {
    const responsePromise = client.billing.reports.filter();
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
    await expect(client.billing.reports.filter({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('filter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.billing.reports.filter(
        {
          pager: { limit: 0, page: 0 },
          id: 18444,
          annual_debit: 86748.68,
          annual_fee: 86748.68,
          aum_on_billing_date: 8674867.56,
          billing_date: '2022-09-30T00:00:00Z',
          created_date: '0001-01-01T00:00:00Z',
          created_invoices: true,
          custodian_billed_period_debit: 7229.03,
          direct_billed_period_debit: null,
          fee_upload_file_id: null,
          firm_id: 39,
          firm_share: 7229.03,
          firm_share_annualized: 86748.68,
          n_accounts: 4,
          n_fee_structures: 7,
          n_groups: 1,
          n_splits: 16,
          period_debit: 7229.03,
          run_date: '2022-08-12T00:00:00Z',
          snapshot_date: '2022-09-30T00:00:00Z',
          split_payout: null,
          split_payout_annualized: null,
          total_balance: 8674867.56,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
