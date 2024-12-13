// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource printableReports', () => {
  test('create: only required params', async () => {
    const responsePromise = client.printableReports.create({
      end_date: '2022-08-31',
      start_date: '2022-08-01',
      sub_reports: ['account_summary', 'consolidated_summary', 'performance_summary'],
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
    const response = await client.printableReports.create({
      end_date: '2022-08-31',
      start_date: '2022-08-01',
      sub_reports: ['account_summary', 'consolidated_summary', 'performance_summary'],
      pager: { limit: 0, page: 0 },
      account_ids: [1, 2, 3],
      exclude_portfolio_performance_summary: true,
      household_ids: [4, 5, 6],
      irr_performance: true,
      non_inception_performance_chart: true,
      portrait_pdf_orientation: true,
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.printableReports.retrieve(1);
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
    await expect(client.printableReports.retrieve(1, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.printableReports.retrieve(
        1,
        { pager: { limit: 0, page: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.printableReports.delete(1);
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
    await expect(client.printableReports.delete(1, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('delete: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.printableReports.delete(
        1,
        { pager: { limit: 0, page: 0 } },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('bulkDownload', async () => {
    const responsePromise = client.printableReports.bulkDownload();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('bulkDownload: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(client.printableReports.bulkDownload({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('bulkDownload: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.printableReports.bulkDownload(
        { pager: { limit: 0, page: 0 }, ids: [0] },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('deleteMany', async () => {
    const responsePromise = client.printableReports.deleteMany({});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('filter', async () => {
    const responsePromise = client.printableReports.filter();
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
    await expect(client.printableReports.filter({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('filter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.printableReports.filter(
        {
          pager: { limit: 0, page: 0 },
          id: 1290371,
          account_id: null,
          client_accessible: false,
          created_by_user_id: 8882,
          dt_utc: '0001-01-01T00:00:00Z',
          end_date: '2022-08-31',
          error_message: null,
          firm_id: 39,
          frequency: null,
          household_id: 27585,
          report_date: '2022-08-31',
          size_bytes: 115805,
          start_date: '2022-08-01',
          state: '0',
          timestamp_utc: 1660575976,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
