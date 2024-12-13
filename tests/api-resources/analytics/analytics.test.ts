// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource analytics', () => {
  test('benchmarkPerformance: only required params', async () => {
    const responsePromise = client.analytics.benchmarkPerformance({
      end_date: '2022-07-31',
      start_date: '2022-07-01',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('benchmarkPerformance: required and optional params', async () => {
    const response = await client.analytics.benchmarkPerformance({
      end_date: '2022-07-31',
      start_date: '2022-07-01',
      benchmarks_ids: [11149, 11150],
    });
  });

  test('householdPerformance: only required params', async () => {
    const responsePromise = client.analytics.householdPerformance({
      as_of_date: '2022-07-31',
      entity_ids: [27585, 28028],
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('householdPerformance: required and optional params', async () => {
    const response = await client.analytics.householdPerformance({
      as_of_date: '2022-07-31',
      entity_ids: [27585, 28028],
    });
  });
});
