// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Bridgefttest from 'bridgefttest';
import { Response } from 'node-fetch';

const client = new Bridgefttest({
  bearerToken: 'My Bearer Token',
  username: 'My Username',
  password: 'My Password',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource firms', () => {
  test('retrieve', async () => {
    const responsePromise = client.org.firms.retrieve(1);
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
    await expect(client.org.firms.retrieve(1, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('retrieve: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.org.firms.retrieve(1, { pager: { limit: 0, page: 0 } }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.org.firms.update({ path_id: 1 });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.org.firms.update({
      path_id: 1,
      body_id: 0,
      accent_color: 'accent_color',
      billing_include_accrued_income: true,
      billing_partition_option: 'D',
      brand_colors: ['string'],
      cp_enabled: true,
      cp_heldaways_enabled: true,
      cp_invoices_enabled: true,
      cp_printable_reports_enabled: true,
      cp_shared_files_enabled: true,
      cp_web_reports_enabled: true,
      created_at_utc: '2019-12-27T18:11:19.117Z',
      disclosures: 'disclosures',
      invoice_annualized_effective_rates: true,
      invoice_due_date_option: '30',
      invoice_effective_rates: true,
      invoice_footer: 'invoice_footer',
      invoice_from: 'invoice_from',
      invoice_header: 'invoice_header',
      invoice_include_fee_structures: true,
      invoice_not_a_bill_explanation: true,
      invoice_show_agreement: true,
      is_active: true,
      is_billing_active: true,
      logo_url: 'logo_url',
      name: 'name',
      parent_firm_id: 0,
      permissions: ['string'],
      primary_color: 'primary_color',
      relationship_code: 'relationship_code',
      report_on_heldaway_accounts: true,
      reporting_frequency: 'D',
      short_name: 'short_name',
      show_bridge_logo: true,
      show_firm_logo: true,
      updated_at_utc: '2019-12-27T18:11:19.117Z',
    });
  });

  test('list', async () => {
    const responsePromise = client.org.firms.list();
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
    await expect(client.org.firms.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.org.firms.list({ pager: { limit: 0, page: 0 } }, { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });

  test('filter', async () => {
    const responsePromise = client.org.firms.filter();
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
    await expect(client.org.firms.filter({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      Bridgefttest.NotFoundError,
    );
  });

  test('filter: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.org.firms.filter(
        {
          pager: { limit: 0, page: 0 },
          id: 39,
          billing_include_accrued_income: true,
          billing_partition_option: 'D',
          cp_enabled: true,
          cp_heldaways_enabled: true,
          cp_invoices_enabled: true,
          cp_printable_reports_enabled: true,
          cp_shared_files_enabled: true,
          cp_web_reports_enabled: true,
          disclosures: null,
          invoice_annualized_effective_rates: false,
          invoice_due_date_option: '30',
          invoice_effective_rates: true,
          invoice_footer: '<p>This is a test Footer message.&nbsp;</p>',
          invoice_from: null,
          invoice_header: '<p>This is a test Header message.</p>',
          invoice_include_fee_structures: true,
          invoice_not_a_bill_explanation: true,
          invoice_show_agreement: true,
          is_active: true,
          is_billing_active: false,
          logo_url: 'https://s3.amazonaws.com/com.bridgeft.prod.logos/dem/logo.png',
          parent_firm_id: 315,
          relationship_code: 'DM0717ILPL',
          report_on_heldaway_accounts: true,
          reporting_frequency: 'D',
          short_name: 'dem',
          show_bridge_logo: true,
          show_firm_logo: true,
        },
        { path: '/_stainless_unknown_path' },
      ),
    ).rejects.toThrow(Bridgefttest.NotFoundError);
  });
});
