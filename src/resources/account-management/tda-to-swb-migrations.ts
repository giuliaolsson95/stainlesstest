// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class TdaToSwbMigrations extends APIResource {
  /**
   * Retrieve the list of all your TDA Accounts which are subjected to be migrated to
   * Schwab.
   */
  list(
    query?: TdaToSwbMigrationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TdaToSwbMigrationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TdaToSwbMigrationListResponse>;
  list(
    query: TdaToSwbMigrationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TdaToSwbMigrationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/account-management/tda-to-swb-migrations', { query, ...options });
  }

  /**
   * Filter out to find particular TDA Account and its respective new Schwab account
   * number.
   */
  filter(
    params?: TdaToSwbMigrationFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TdaToSwbMigrationFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<TdaToSwbMigrationFilterResponse>;
  filter(
    params: TdaToSwbMigrationFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TdaToSwbMigrationFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/account-management/tda-to-swb-migrations/filter', {
      query: { pager },
      body,
      ...options,
    });
  }
}

export interface TdaToSwbMigrationListResponse {
  current_page?: number;

  data?: Array<TdaToSwbMigrationListResponse.Data>;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace TdaToSwbMigrationListResponse {
  export interface Data {
    /**
     * BridgeFT's internal ID of the account record this mapping pertains to.
     */
    account_id?: number;

    /**
     * The new account number for the migrated TDA account.
     */
    schwab_account_number?: string;

    /**
     * The master number that the new Schwab account falls under.
     */
    schwab_master_number?: string;

    /**
     * The account number from TDA.
     */
    tda_account_number?: string;

    /**
     * The Rep code the TDA account was assigned to.
     */
    tda_rep_code?: string;
  }
}

export interface TdaToSwbMigrationFilterResponse {
  current_page?: number;

  data?: unknown;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface TdaToSwbMigrationListParams {
  pager?: TdaToSwbMigrationListParams.Pager;
}

export namespace TdaToSwbMigrationListParams {
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

export interface TdaToSwbMigrationFilterParams {
  /**
   * Query param:
   */
  pager?: TdaToSwbMigrationFilterParams.Pager;

  /**
   * Body param: Provide an ID of an Account to filter.
   */
  account_id?: number;

  /**
   * Body param: Provide a list of Account IDs to filter.
   */
  account_ids?: Array<number>;

  /**
   * Body param: Provide a Schwab Account Number to filter.
   */
  schwab_account_number?: string;

  /**
   * Body param: Provide a list of Schwab Account Numbers to filter.
   */
  schwab_account_numbers?: Array<string>;

  /**
   * Body param: Provide a Schwab Master Number to filter.
   */
  schwab_master_number?: string;

  /**
   * Body param: Provide a list of Schwab Master Numbers to filter.
   */
  schwab_master_numbers?: Array<string>;

  /**
   * Body param: Provide a TDA Account Number to filter.
   */
  tda_account_number?: string;

  /**
   * Body param: Provide a list of TDA Account Numbers to filter.
   */
  tda_account_numbers?: Array<string>;

  /**
   * Body param: Provide a TDA Rep Code to filter.
   */
  tda_rep_code?: string;

  /**
   * Body param: Provide a list of TDA Rep Codes to filter.
   */
  tda_rep_codes?: Array<string>;
}

export namespace TdaToSwbMigrationFilterParams {
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

export declare namespace TdaToSwbMigrations {
  export {
    type TdaToSwbMigrationListResponse as TdaToSwbMigrationListResponse,
    type TdaToSwbMigrationFilterResponse as TdaToSwbMigrationFilterResponse,
    type TdaToSwbMigrationListParams as TdaToSwbMigrationListParams,
    type TdaToSwbMigrationFilterParams as TdaToSwbMigrationFilterParams,
  };
}
