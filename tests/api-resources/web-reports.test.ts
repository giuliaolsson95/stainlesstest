// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webReports', () => {
  test('run: only required params', async () => {
    const responsePromise = client.webReports.run({
      end: '2022-08-31',
      firm_id: 123,
      start: '2022-08-01',
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

  test('run: required and optional params', async () => {
    const response = await client.webReports.run({
      end: '2022-08-31',
      firm_id: 123,
      start: '2022-08-01',
      sub_reports: ['account_summary', 'consolidated_summary', 'performance_summary'],
      account_id: 123,
      household_id: 123,
      irr_performance: false,
    });
  });
});
