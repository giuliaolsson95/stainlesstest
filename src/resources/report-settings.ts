// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class ReportSettings extends APIResource {
  /**
   * Returns report settings based on a single ID
   */
  retrieve(
    id: number,
    query?: ReportSettingRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSettingRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<ReportSettingRetrieveResponse>;
  retrieve(
    id: number,
    query: ReportSettingRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSettingRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/reporting/report-settings/${id}`, { query, ...options });
  }

  /**
   * Returns the updated Report Settings
   */
  update(
    id: number,
    params?: ReportSettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSettingUpdateResponse>;
  update(id: number, options?: Core.RequestOptions): Core.APIPromise<ReportSettingUpdateResponse>;
  update(
    id: number,
    params: ReportSettingUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSettingUpdateResponse> {
    if (isRequestOptions(params)) {
      return this.update(id, {}, params);
    }
    const { pager } = params;
    return this._client.put(`/reporting/report-settings/${id}`, { query: { pager }, ...options });
  }

  /**
   * Returns a list of Report Settings within the data field
   */
  list(
    query?: ReportSettingListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSettingListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ReportSettingListResponse>;
  list(
    query: ReportSettingListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSettingListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/reporting/report-settings', { query, ...options });
  }

  /**
   * Returns a filtered list of Report Settings
   */
  filter(
    params?: ReportSettingFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSettingFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<ReportSettingFilterResponse>;
  filter(
    params: ReportSettingFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReportSettingFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/reporting/report-settings/filter', { query: { pager }, body, ...options });
  }
}

export interface ReportSetting {
  /**
   * Unique ID for this report settings object
   */
  id?: number;

  /**
   * Include account summary?
   */
  account_summary?: boolean;

  /**
   * Include appraisals?
   */
  appraisals?: boolean;

  /**
   * Include appraisals without cost basis?
   */
  appraisals_wo_cost_basis?: boolean;

  /**
   * Include asset allocation top holdings?
   */
  asset_allocation_top_holdings?: boolean;

  /**
   * Include benchmark performance summary?
   */
  benchmark_perf_summary?: boolean;

  /**
   * Include buys and sells?
   */
  buy_sells?: boolean;

  /**
   * Specifies to which area these settings apply (i.e., printable reports, the
   * advisor's default settings, the client's default settings). Can either be
   * printable, advisor_defaults, client_defaults, or user
   */
  component?: 'printable' | 'advisor_defaults' | 'client_defaults' | 'user';

  /**
   * Include consolidated summary?
   */
  consolidated_summary?: boolean;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Include deposits and withdrawals?
   */
  deposits_withdrawals?: boolean;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * Include household performance attribute?
   */
  household_performance_attribution?: boolean;

  /**
   * Include income?
   */
  income?: boolean;

  /**
   * Include management fees?
   */
  management_fees?: boolean;

  /**
   * Include net investment chart?
   */
  net_investment_chart?: boolean;

  /**
   * Include performance chart?
   */
  performance_chart?: boolean;

  /**
   * Include performance summary?
   */
  performance_summary?: boolean;

  /**
   * Include portfolio snapshot?
   */
  portfolio_snapshot?: boolean;

  /**
   * Include realized gain loss?
   */
  realized_gain_loss?: boolean;

  /**
   * Include risk return chart?
   */
  risk_return_chart?: boolean;

  /**
   * Include security exclusions?
   */
  security_exclusions?: boolean;

  /**
   * Include security performance?
   */
  security_performance?: boolean;

  /**
   * Include target vs actual allocation?
   */
  target_vs_actual_allocation?: boolean;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;

  /**
   * ID of the user concerned with creating the report. If null, applied settings
   * will be firm-wide. Otherwise, the settings are specific to the given user
   */
  user_id?: number;
}

export type ReportSettings = Array<ReportSetting>;

export interface ReportSettingRetrieveResponse {
  current_page?: number;

  data?: ReportSetting;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ReportSettingUpdateResponse {
  current_page?: number;

  data?: ReportSetting;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ReportSettingListResponse {
  current_page?: number;

  data?: ReportSettings;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ReportSettingFilterResponse {
  current_page?: number;

  data?: ReportSettings;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ReportSettingRetrieveParams {
  pager?: ReportSettingRetrieveParams.Pager;
}

export namespace ReportSettingRetrieveParams {
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

export interface ReportSettingUpdateParams {
  pager?: ReportSettingUpdateParams.Pager;
}

export namespace ReportSettingUpdateParams {
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

export interface ReportSettingListParams {
  pager?: ReportSettingListParams.Pager;
}

export namespace ReportSettingListParams {
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

export interface ReportSettingFilterParams {
  /**
   * Query param:
   */
  pager?: ReportSettingFilterParams.Pager;

  /**
   * Body param: Unique ID for this report settings object
   */
  id?: number;

  /**
   * Body param: Include account summary?
   */
  account_summary?: boolean;

  /**
   * Body param: Include appraisals?
   */
  appraisals?: boolean;

  /**
   * Body param: Include asset allocation top holdings?
   */
  asset_allocation_top_holdings?: boolean;

  /**
   * Body param: Include benchmark performance summary?
   */
  benchmark_perf_summary?: boolean;

  /**
   * Body param: Include buys and sells?
   */
  buy_sells?: boolean;

  /**
   * Body param: Specifies to which area these settings apply (i.e., printable
   * reports, the advisor's default settings, the client's default settings). Can
   * either be printable, advisor_defaults, client_defaults, or user
   */
  component?: 'printable' | 'advisor_defaults' | 'client_defaults' | 'user';

  /**
   * Body param: Include consolidated summary?
   */
  consolidated_summary?: boolean;

  /**
   * Body param: Include deposits and withdrawals?
   */
  deposits_withdrawals?: boolean;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Include income?
   */
  income?: boolean;

  /**
   * Body param: Include management fees?
   */
  management_fees?: boolean;

  /**
   * Body param: Include net investment chart?
   */
  net_investment_chart?: boolean;

  /**
   * Body param: Include performance chart?
   */
  performance_chart?: boolean;

  /**
   * Body param: Include performance summary?
   */
  performance_summary?: boolean;

  /**
   * Body param: Include portfolio snapshot?
   */
  portfolio_snapshot?: boolean;

  /**
   * Body param: Include realized gain loss?
   */
  realized_gain_loss?: boolean;

  /**
   * Body param: ID of the user concerned with creating the report. If null, applied
   * settings will be firm-wide. Otherwise, the settings are specific to the given
   * user
   */
  user_id?: number | null;
}

export namespace ReportSettingFilterParams {
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

export declare namespace ReportSettings {
  export {
    type ReportSetting as ReportSetting,
    type ReportSettings as ReportSettings,
    type ReportSettingRetrieveResponse as ReportSettingRetrieveResponse,
    type ReportSettingUpdateResponse as ReportSettingUpdateResponse,
    type ReportSettingListResponse as ReportSettingListResponse,
    type ReportSettingFilterResponse as ReportSettingFilterResponse,
    type ReportSettingRetrieveParams as ReportSettingRetrieveParams,
    type ReportSettingUpdateParams as ReportSettingUpdateParams,
    type ReportSettingListParams as ReportSettingListParams,
    type ReportSettingFilterParams as ReportSettingFilterParams,
  };
}
