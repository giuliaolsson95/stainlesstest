// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as BillingReportsAPI from '../billing-reports';
import * as Shared from '../shared';

export class Reports extends APIResource {
  /**
   * Starts a Billing Job with PDF Reporting and returns the created Background Job
   * Instance
   */
  create(params: ReportCreateParams, options?: Core.RequestOptions): Core.APIPromise<ReportCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/billing/reports', { query: { pager }, body, ...options });
  }

  /**
   * Returns a Billing Report based on a single ID
   */
  retrieve(
    id: number,
    query?: ReportRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<ReportRetrieveResponse>;
  retrieve(
    id: number,
    query: ReportRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/billing/reports/${id}`, { query, ...options });
  }

  /**
   * Returns a list of Billing Reports within the data field
   */
  list(query?: ReportListParams, options?: Core.RequestOptions): Core.APIPromise<ReportListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ReportListResponse>;
  list(
    query: ReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/billing/reports', { query, ...options });
  }

  /**
   * Deletes the billing report record for the provided ID.
   */
  delete(id: number, params?: ReportDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: ReportDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/billing/reports/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Deletes the corresponding billing report records for the provided list of
   * `"ids"` in the request body.
   */
  deleteMany(params: ReportDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/billing/reports/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Billing Reports
   */
  filter(params?: ReportFilterParams, options?: Core.RequestOptions): Core.APIPromise<ReportFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<ReportFilterResponse>;
  filter(
    params: ReportFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/billing/reports/filter', { query: { pager }, body, ...options });
  }
}

export interface ReportCreateResponse {
  current_page?: number;

  data?: Shared.Job;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ReportRetrieveResponse {
  current_page?: number;

  data?: BillingReportsAPI.BillingReport;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ReportListResponse {
  current_page?: number;

  data?: BillingReportsAPI.BillingReports;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ReportFilterResponse {
  current_page?: number;

  data?: BillingReportsAPI.BillingReports;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ReportCreateParams {
  /**
   * Body param: Unique ID for the object
   */
  firm_id: number;

  /**
   * Body param: When this option is true, invoices will be created at the household
   * level. Each household in the billing run will receive an invoice with billing
   * details included for each individual account in that respective household. If
   * accounts in the billing run do not belong to a household, each individual
   * account will receive their own invoice. When this option is false, invoices will
   * be generated for each billing group containing billing details for each account
   * in the respective billing group.
   */
  is_invoice_by_client: boolean;

  /**
   * Body param: Whether to create an invoice using the standard (S) or exact (E)
   * billing period
   */
  period_type: 'S' | 'E';

  /**
   * Query param:
   */
  pager?: ReportCreateParams.Pager;

  /**
   * Body param: The date to run a billing calculation on
   */
  billing_date?: string;

  /**
   * Body param: Whether to create Invoice PDFs during the billing calculation job
   */
  create_invoices?: boolean;

  /**
   * Body param: If true, this sends an email notification to the user who created
   * the job
   */
  email_notification?: boolean;

  /**
   * Body param: An array of billing group ids
   */
  group_ids?: Array<number> | null;
}

export namespace ReportCreateParams {
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

export interface ReportRetrieveParams {
  pager?: ReportRetrieveParams.Pager;
}

export namespace ReportRetrieveParams {
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

export interface ReportListParams {
  pager?: ReportListParams.Pager;
}

export namespace ReportListParams {
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

export interface ReportDeleteParams {
  pager?: ReportDeleteParams.Pager;
}

export namespace ReportDeleteParams {
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

export interface ReportDeleteManyParams {
  /**
   * Query param:
   */
  pager?: ReportDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace ReportDeleteManyParams {
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

export interface ReportFilterParams {
  /**
   * Query param:
   */
  pager?: ReportFilterParams.Pager;

  /**
   * Body param: The unique resource ID for this billing report
   */
  id?: number;

  /**
   * Body param: The annual debit amount for this billing report
   */
  annual_debit?: number;

  /**
   * Body param: Total fee and debited amount annualized
   */
  annual_fee?: number;

  /**
   * Body param: All assets under management on the billing date
   */
  aum_on_billing_date?: number;

  /**
   * Body param: The input date to the billing report
   */
  billing_date?: string;

  /**
   * Body param: The calendar date on which the report was generated / created
   */
  created_date?: string;

  /**
   * Body param: True if invoices were created when the report was created
   */
  created_invoices?: boolean;

  /**
   * Body param: The custodian billed period debit for this billing report
   */
  custodian_billed_period_debit?: number;

  /**
   * Body param: The direct billed period debit for this billing report
   */
  direct_billed_period_debit?: number | null;

  /**
   * Body param: The corresponding fee upload file model instance
   */
  fee_upload_file_id?: number | null;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: The firm's share for the period. Equals period_debit - split_payout.
   */
  firm_share?: number;

  /**
   * Body param: Firm's annualized share. Equals annual_debit -
   * split_payout_annualized.
   */
  firm_share_annualized?: number;

  /**
   * Body param: The number of accounts for this billing report
   */
  n_accounts?: number;

  /**
   * Body param: The number of fee structures for this billing report
   */
  n_fee_structures?: number;

  /**
   * Body param: The number of groups for this billing report
   */
  n_groups?: number;

  /**
   * Body param: The number of billing splits for this billing report
   */
  n_splits?: number;

  /**
   * Body param: Total debited amount for the period
   */
  period_debit?: number;

  /**
   * Body param: The most recent market date corresponding to when the report date
   */
  run_date?: string;

  /**
   * Body param: The closest date available to the billing date for which there's
   * data at the time of running the report
   */
  snapshot_date?: string;

  /**
   * Body param: Total payout of all splits for this period
   */
  split_payout?: number | null;

  /**
   * Body param: Split payout on an annualized basis
   */
  split_payout_annualized?: number | null;

  /**
   * Body param: Sum of all group balances on the billing date
   */
  total_balance?: number;
}

export namespace ReportFilterParams {
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

export declare namespace Reports {
  export {
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportListResponse as ReportListResponse,
    type ReportFilterResponse as ReportFilterResponse,
    type ReportCreateParams as ReportCreateParams,
    type ReportRetrieveParams as ReportRetrieveParams,
    type ReportListParams as ReportListParams,
    type ReportDeleteParams as ReportDeleteParams,
    type ReportDeleteManyParams as ReportDeleteManyParams,
    type ReportFilterParams as ReportFilterParams,
  };
}
