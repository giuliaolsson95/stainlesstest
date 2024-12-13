// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import { type Response } from '../_shims/index';

export class BillingInvoices extends APIResource {
  /**
   * Returns an invoice detail object for the provided ID.
   */
  retrieve(
    id: number,
    query?: BillingInvoiceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingInvoiceRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<BillingInvoiceRetrieveResponse>;
  retrieve(
    id: number,
    query: BillingInvoiceRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingInvoiceRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/billing/invoices/${id}`, { query, ...options });
  }

  /**
   * Returns an enveloped list of invoices generated from Billing Reports.
   */
  list(
    query?: BillingInvoiceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingInvoiceListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BillingInvoiceListResponse>;
  list(
    query: BillingInvoiceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingInvoiceListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/billing/invoices', { query, ...options });
  }

  /**
   * Returns the binary data for a specified invoice. This endpoint allows you to
   * download the PDF file corresponding to the provided invoice ID.
   */
  download(
    id: number,
    params: BillingInvoiceDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { pager, ...body } = params;
    return this._client.post(`/billing/invoices/download/${id}`, {
      query: { pager },
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Returns a filtered list of Invoices
   */
  filter(
    params?: BillingInvoiceFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingInvoiceFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<BillingInvoiceFilterResponse>;
  filter(
    params: BillingInvoiceFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingInvoiceFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/billing/invoices/filter', { query: { pager }, body, ...options });
  }
}

export interface Invoice {
  /**
   * The unique resource ID for this Invoice
   */
  id?: number;

  /**
   * Maps the cash amount in the account as of the report run date
   */
  account_cash_on_run_date?: unknown;

  /**
   * Maps the cash amount in the account as of the billing date
   */
  account_cash_on_snapshot_date?: unknown;

  /**
   * Serialized from the account_df data-frame on the billing calculator
   */
  account_df?: unknown;

  /**
   * Serialized from the account_fs_df dataframe on the billing calculator
   */
  account_fs_df?: unknown;

  /**
   * The list of account ID's associated with this Invoice
   */
  account_ids?: Array<number>;

  /**
   * Maps account ID to total account valuation as of the report run date
   */
  account_value_on_run_date?: unknown;

  /**
   * Maps account ID to total account valuation on a particular date
   */
  account_value_on_snapshot_date?: unknown;

  /**
   * The annual debit for this Invoice
   */
  annual_debit?: number;

  /**
   * The total fee and debited amount annualized just for this billing group
   */
  annual_fee?: number;

  /**
   * Serialized asset adjustments at the time the report was generated
   */
  asset_adjustments_serialized?: unknown;

  /**
   * Billing date for this Invoice
   */
  billing_date?: string;

  /**
   * The billing group ID for this Invoice
   */
  billing_group_id?: number;

  /**
   * Serialized billing group at the time the invoice was created
   */
  billing_group_serialized?: unknown;

  /**
   * The associated billing report ID for this Invoice
   */
  billing_report_id?: number;

  /**
   * Name of the client associated with this invoice
   */
  client_name?: string;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * The custodian billed period debit for this Invoice
   */
  custodian_billed_period_debit?: number;

  /**
   * The direct billed period debit for this Invoice.
   */
  direct_billed_period_debit?: number;

  /**
   * Download link which specifies the url to generate and return a binary stream for
   * the Invoice PDF.
   */
  download_url?: string;

  /**
   * Invoice due date, calculated using firm settings at the time the invoice was
   * generated
   */
  due_date?: string;

  /**
   * Serialized fee structure assignments at the time the invoice was created
   */
  fee_structure_assignments?: unknown;

  /**
   * The list of fee structure ID's associated with this Invoice
   */
  fee_structure_ids?: Array<number>;

  /**
   * A serialization of fee structures as they existed at the time the report was
   * generated
   */
  fee_structures_serialized?: unknown;

  /**
   * The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Maps group ID to the total cash value of all accounts in the group on the run
   * date
   */
  group_cash_on_run_date?: unknown;

  /**
   * Maps group ID to the total cash value of all accounts in the group on the
   * snapshot date
   */
  group_cash_on_snapshot_date?: unknown;

  /**
   * Serialized from group_df on the billing calculator
   */
  group_df?: unknown;

  /**
   * Group Id of this invoice
   */
  group_id?: number;

  /**
   * Maps a group ID to the total value of all accounts in the group on the run date
   */
  group_value_on_run_date?: unknown;

  /**
   * Maps a group ID to the total value of all accounts in the group on the snapshot
   * date
   */
  group_value_on_snapshot_date?: unknown;

  /**
   * Household id associated with the invoice
   */
  household_id?: number;

  /**
   * Is the invoice paid?
   */
  is_paid?: boolean;

  /**
   * Serialized from minimum fee on the billing calculator
   */
  minfee_df?: unknown;

  /**
   * The list of minumum ID's associated with this Invoice
   */
  minimum_ids?: Array<number>;

  /**
   * The number of accounts in the report
   */
  n_accounts?: number;

  /**
   * The number of fee structures in the report
   */
  n_fee_structures?: number;

  /**
   * State of the billing invoice pdf state. 0 for does not exist, 1 for created, 2
   * for generating, 3 for success, -1 for failed
   */
  pdf_state?: string;

  /**
   * The total debited amount for the period just for this billing group on the
   * snapshot date
   */
  period_debit?: number;

  /**
   * The snapshot date for this Invoice
   */
  snapshot_date?: string;

  /**
   * The total group balance on the snapshot date
   */
  total_balance?: number;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type Invoices = Array<Invoice>;

export interface BillingInvoiceRetrieveResponse {
  current_page?: number;

  data?: Invoice;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingInvoiceListResponse {
  current_page?: number;

  data?: Invoices;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingInvoiceFilterResponse {
  current_page?: number;

  data?: Invoices;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingInvoiceRetrieveParams {
  pager?: BillingInvoiceRetrieveParams.Pager;
}

export namespace BillingInvoiceRetrieveParams {
  export interface Pager {
    /**
     * Number of items to return per page
     */
    limit?: number;

    /**
     * Current page number
     */
    page?: number;
  }
}

export interface BillingInvoiceListParams {
  pager?: BillingInvoiceListParams.Pager;
}

export namespace BillingInvoiceListParams {
  export interface Pager {
    /**
     * Number of items to return per page
     */
    limit?: number;

    /**
     * Current page number
     */
    page?: number;
  }
}

export interface BillingInvoiceDownloadParams {
  /**
   * Query param:
   */
  pager?: BillingInvoiceDownloadParams.Pager;

  /**
   * Body param: application/pdf
   */
  Accept?: string;

  /**
   * Body param: application/pdf
   */
  'Content-Type'?: string;
}

export namespace BillingInvoiceDownloadParams {
  export interface Pager {
    /**
     * Number of items to return per page
     */
    limit?: number;

    /**
     * Current page number
     */
    page?: number;
  }
}

export interface BillingInvoiceFilterParams {
  /**
   * Query param:
   */
  pager?: BillingInvoiceFilterParams.Pager;

  /**
   * Body param: The unique resource ID for this Invoice
   */
  id?: number;

  /**
   * Body param: The annual debit for this Invoice
   */
  annual_debit?: number;

  /**
   * Body param: The total fee and debited amount annualized just for this billing
   * group
   */
  annual_fee?: number;

  /**
   * Body param: The billing group ID for this Invoice
   */
  billing_group_id?: number;

  /**
   * Body param: The associated billing report ID for this Invoice
   */
  billing_report_id?: number;

  /**
   * Body param: The custodian billed period debit for this Invoice
   */
  custodian_billed_period_debit?: number;

  /**
   * Body param: The direct billed period debit for this Invoice.
   */
  direct_billed_period_debit?: number;

  /**
   * Body param: Invoice due date, calculated using firm settings at the time the
   * invoice was generated
   */
  due_date?: string;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: Group Id of this invoice
   */
  group_id?: number;

  /**
   * Body param: Is the invoice paid?
   */
  is_paid?: boolean;

  /**
   * Body param: The number of accounts in the report
   */
  n_accounts?: number;

  /**
   * Body param: The number of fee structures in the report
   */
  n_fee_structures?: number;

  /**
   * Body param: The total debited amount for the period just for this billing group
   * on the snapshot date
   */
  period_debit?: number;

  /**
   * Body param: The snapshot date for this Invoice
   */
  snapshot_date?: string;

  /**
   * Body param: The total group balance on the snapshot date
   */
  total_balance?: number;
}

export namespace BillingInvoiceFilterParams {
  export interface Pager {
    /**
     * Number of items to return per page
     */
    limit?: number;

    /**
     * Current page number
     */
    page?: number;
  }
}

export declare namespace BillingInvoices {
  export {
    type Invoice as Invoice,
    type Invoices as Invoices,
    type BillingInvoiceRetrieveResponse as BillingInvoiceRetrieveResponse,
    type BillingInvoiceListResponse as BillingInvoiceListResponse,
    type BillingInvoiceFilterResponse as BillingInvoiceFilterResponse,
    type BillingInvoiceRetrieveParams as BillingInvoiceRetrieveParams,
    type BillingInvoiceListParams as BillingInvoiceListParams,
    type BillingInvoiceDownloadParams as BillingInvoiceDownloadParams,
    type BillingInvoiceFilterParams as BillingInvoiceFilterParams,
  };
}
