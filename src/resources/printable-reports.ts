// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';
import * as ReportingPrintableReportsAPI from './reporting/printable-reports';
import { type Response } from '../_shims/index';

export class PrintableReports extends APIResource {
  /**
   * Starts a Background Job for PDF Reporting and returns the created Background Job
   * Instance
   *
   * **Available Sub Reports**
   *
   * - `account_summary`
   * - `allocation_and_performance_summary`
   * - `appraisals`
   * - `appraisals_wo_cost_basis`
   * - `asset_allocation_top_holdings`
   * - `benchmark_perf_summary`
   * - `buy_sells`
   * - `consolidated_summary`
   * - `deposits_withdrawals`
   * - `household_performance_attribution`
   * - `income`
   * - `management_fees`
   * - `net_investment_chart`
   * - `performance_summary`
   * - `performance_chart`
   * - `portfolio_snapshot`
   * - `realized_gain_loss`
   * - `risk_return_chart`
   * - `security_performance`
   * - `target_vs_actual_allocation`
   */
  create(
    params: PrintableReportCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/printable-reports/create', { query: { pager }, body, ...options });
  }

  /**
   * Returns a Printable Report based on a single ID
   */
  retrieve(
    id: number,
    query?: PrintableReportRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<PrintableReportRetrieveResponse>;
  retrieve(
    id: number,
    query: PrintableReportRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/reporting/printable-reports/${id}`, { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id of item deleted, if
   * deletion was successful
   */
  delete(
    id: number,
    params?: PrintableReportDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: PrintableReportDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/reporting/printable-reports/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Starts and returns a bulk download job
   */
  bulkDownload(
    params?: PrintableReportBulkDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportBulkDownloadResponse>;
  bulkDownload(options?: Core.RequestOptions): Core.APIPromise<PrintableReportBulkDownloadResponse>;
  bulkDownload(
    params: PrintableReportBulkDownloadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportBulkDownloadResponse> {
    if (isRequestOptions(params)) {
      return this.bulkDownload({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/reporting/printable-reports/download', { query: { pager }, body, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the number of items deleted, if
   * deletion was successful
   */
  deleteMany(params: PrintableReportDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/printable-reports/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns the PDF for the provided printable report ID.
   */
  download(
    id: number,
    params: PrintableReportDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { pager, ...body } = params;
    return this._client.post(`/reporting/printable-reports/download/${id}`, {
      query: { pager },
      body,
      ...options,
      __binaryResponse: true,
    });
  }

  /**
   * Returns a filtered list of Printable Reports
   */
  filter(
    params?: PrintableReportFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<PrintableReportFilterResponse>;
  filter(
    params: PrintableReportFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/reporting/printable-reports/filter', { query: { pager }, body, ...options });
  }
}

export interface PrintableReportCreateResponse {
  current_page?: number;

  data?: Shared.Job;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface PrintableReportRetrieveResponse {
  current_page?: number;

  data?: ReportingPrintableReportsAPI.PrintableReport;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface PrintableReportBulkDownloadResponse {
  current_page?: number;

  data?: Shared.Job;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface PrintableReportFilterResponse {
  current_page?: number;

  data?: ReportingPrintableReportsAPI.PrintableReports;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface PrintableReportCreateParams {
  /**
   * Body param: Date to end the PDF Report calculations for this job
   */
  end_date: string;

  /**
   * Body param: Date to start the PDF Report calculations for this job
   */
  start_date: string;

  /**
   * Body param: The list of sub reports to create during PDF Report generation
   */
  sub_reports: Array<string>;

  /**
   * Query param:
   */
  pager?: PrintableReportCreateParams.Pager;

  /**
   * Body param: List of account ids to run a PDF Report for
   */
  account_ids?: Array<number> | null;

  /**
   * Body param: If true is passed, the Asset Allocation and Performance Summary
   * Report will be exclude the Portfolio Performance Summary section. The Portfolio
   * Performance Summary includes calculates from the inception date of the
   * account/household, so users may want to exclude the report to only show values
   * for the reporting period.
   */
  exclude_portfolio_performance_summary?: boolean;

  /**
   * Body param: List of household ids to run a PDF Report for
   */
  household_ids?: Array<number> | null;

  /**
   * Body param: If true is passed, performance calculations will use IRR methodology
   * instead of the default TWR
   */
  irr_performance?: boolean;

  /**
   * Body param: If true is passed, the performance chart will be PTD instead of the
   * default ITD
   */
  non_inception_performance_chart?: boolean;

  /**
   * Body param: If true is passed, the pdf will be rendered in portrait orientation
   * instead of the default landscape
   */
  portrait_pdf_orientation?: boolean;
}

export namespace PrintableReportCreateParams {
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

export interface PrintableReportRetrieveParams {
  pager?: PrintableReportRetrieveParams.Pager;
}

export namespace PrintableReportRetrieveParams {
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

export interface PrintableReportDeleteParams {
  pager?: PrintableReportDeleteParams.Pager;
}

export namespace PrintableReportDeleteParams {
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

export interface PrintableReportBulkDownloadParams {
  /**
   * Query param:
   */
  pager?: PrintableReportBulkDownloadParams.Pager;

  /**
   * Body param: A list of PDF Report ids that will be archived during the bulk
   * download job.
   */
  ids?: Array<number>;
}

export namespace PrintableReportBulkDownloadParams {
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

export interface PrintableReportDeleteManyParams {
  /**
   * Query param:
   */
  pager?: PrintableReportDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace PrintableReportDeleteManyParams {
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

export interface PrintableReportDownloadParams {
  /**
   * Query param:
   */
  pager?: PrintableReportDownloadParams.Pager;

  /**
   * Body param: application/pdf
   */
  Accept?: string;

  /**
   * Body param: application/pdf
   */
  'Content-Type'?: string;
}

export namespace PrintableReportDownloadParams {
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

export interface PrintableReportFilterParams {
  /**
   * Query param:
   */
  pager?: PrintableReportFilterParams.Pager;

  /**
   * Body param: Unique ID for this printable report object
   */
  id?: number;

  /**
   * Body param: ID of the account that the report is on. Null if household_id is
   * non-null.
   */
  account_id?: number | null;

  /**
   * Body param: If true, the report is accessible in the client portal
   */
  client_accessible?: boolean;

  /**
   * Body param: ID of the user that created the report
   */
  created_by_user_id?: number;

  /**
   * Body param: Created/last updated timestamp in datetime UTC
   */
  dt_utc?: string;

  /**
   * Body param: end date
   */
  end_date?: string;

  /**
   * Body param: Error message if in error state E
   */
  error_message?: string | null;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: See Frequency Codes
   */
  frequency?: string | null;

  /**
   * Body param: ID of the household that the report is on. Null if account_id is
   * non-null.
   */
  household_id?: number;

  /**
   * Body param: report date
   */
  report_date?: string;

  /**
   * Body param: Size of the printable report in bytes
   */
  size_bytes?: number;

  /**
   * Body param: start date
   */
  start_date?: string;

  /**
   * Body param: 0 if the report is generating, R if it's ready, and E if it's failed
   */
  state?: string;

  /**
   * Body param: Created/last updated timestamp in UTC
   */
  timestamp_utc?: number;
}

export namespace PrintableReportFilterParams {
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

export declare namespace PrintableReports {
  export {
    type PrintableReportCreateResponse as PrintableReportCreateResponse,
    type PrintableReportRetrieveResponse as PrintableReportRetrieveResponse,
    type PrintableReportBulkDownloadResponse as PrintableReportBulkDownloadResponse,
    type PrintableReportFilterResponse as PrintableReportFilterResponse,
    type PrintableReportCreateParams as PrintableReportCreateParams,
    type PrintableReportRetrieveParams as PrintableReportRetrieveParams,
    type PrintableReportDeleteParams as PrintableReportDeleteParams,
    type PrintableReportBulkDownloadParams as PrintableReportBulkDownloadParams,
    type PrintableReportDeleteManyParams as PrintableReportDeleteManyParams,
    type PrintableReportDownloadParams as PrintableReportDownloadParams,
    type PrintableReportFilterParams as PrintableReportFilterParams,
  };
}
