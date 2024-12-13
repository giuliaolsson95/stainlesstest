// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class PrintableReports extends APIResource {
  /**
   * Returns a list of Printable Reports within the data field
   */
  list(
    query?: PrintableReportListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PrintableReportListResponse>;
  list(
    query: PrintableReportListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrintableReportListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/reporting/printable-reports', { query, ...options });
  }
}

export interface PrintableReport {
  /**
   * Unique ID for this printable report object
   */
  id?: number;

  /**
   * ID of the account that the report is on. Null if household_id is non-null
   */
  account_id?: number;

  /**
   * If true, the report is accessible in the client portal
   */
  client_accessible?: boolean;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * @deprecated: ID of the user that created the report
   */
  created_by_user_id?: number;

  /**
   * Download link which specifies the url to generate and return a binary stream for
   * the Printable PDF
   */
  download_url?: string;

  /**
   * Created/last updated timestamp in datetime UTC
   */
  dt_utc?: string;

  /**
   * End date
   */
  end_date?: string;

  /**
   * Error message if in error state E
   */
  error_message?: string;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * See Frequency Codes
   */
  frequency?: string;

  /**
   * ID of the household that the report is on. Null if account_id is non-null
   */
  household_id?: number;

  /**
   * Report date
   */
  report_date?: string;

  /**
   * Size of the printable report in bytes
   */
  size_bytes?: number;

  /**
   * start date
   */
  start_date?: string;

  /**
   * 0 if the report is generating, R if it's ready, and E if it's failed
   */
  state?: string;

  /**
   * List of sub-reports included in this printable report
   */
  sub_reports?: Array<string>;

  /**
   * List of specified tags, if applicable (system-generated reports are always
   * untagged)
   */
  tags?: Array<string>;

  /**
   * Created/last updated timestamp in UTC
   */
  timestamp_utc?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type PrintableReports = Array<PrintableReport>;

export interface PrintableReportListResponse {
  current_page?: number;

  data?: PrintableReports;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface PrintableReportListParams {
  pager?: PrintableReportListParams.Pager;
}

export namespace PrintableReportListParams {
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
    type PrintableReport as PrintableReport,
    type PrintableReports as PrintableReports,
    type PrintableReportListResponse as PrintableReportListResponse,
    type PrintableReportListParams as PrintableReportListParams,
  };
}
