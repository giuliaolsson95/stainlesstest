// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class AumResource extends APIResource {
  /**
   * Returns values of assets under management Firm-wide by ID.
   */
  retrieve(
    id: number,
    query?: AumRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AumRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<AumRetrieveResponse>;
  retrieve(
    id: number,
    query: AumRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AumRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/analytics/aum/${id}`, { query, ...options });
  }

  /**
   * Returns a list of all firm-wide AUM records that have been calculated over-time.
   * Firm-wide AUM is calculated by BridgeFT daily, stored as a resource and
   * accessible over this API. This enables consumers to view firm AUM as a monthly
   * or daily time-series.
   */
  list(query?: AumListParams, options?: Core.RequestOptions): Core.APIPromise<AumListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AumListResponse>;
  list(
    query: AumListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AumListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/analytics/aum', { query, ...options });
  }

  /**
   * Returns AUM records for requested Account(s) on a selected date. Provide a list
   * of `account_ids` and receive the assets under management value for each account.
   */
  byAccount(body: AumByAccountParams, options?: Core.RequestOptions): Core.APIPromise<AumByAccountResponse> {
    return this._client.post('/analytics/aum/by-account', { body, ...options });
  }

  /**
   * Returns AUM records for requested Household(s) on a selected date. Provide a
   * list of `household_ids` and receive the assets under management value for each
   * household.
   */
  byHousehold(
    body: AumByHouseholdParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AumByHouseholdResponse> {
    return this._client.post('/analytics/aum/by-household', { body, ...options });
  }

  /**
   * Returns a list of all firm-wide AUM records that have been calculated over-time.
   * Firm-wide AUM is calculated by BridgeFT daily, stored as a resource and
   * accessible over this API. This endpoint enables consumers to view firm AUM
   * filtered by various parameters (as of date, frequency and AUM value) provided in
   * the request body.
   */
  filter(params?: AumFilterParams, options?: Core.RequestOptions): Core.APIPromise<AumFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<AumFilterResponse>;
  filter(
    params: AumFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AumFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/analytics/aum/filter', { query: { pager }, body, ...options });
  }

  /**
   * Returns a list of AUM, filtered by frequency and ordered by as_of_date
   */
  getAum(params?: AumGetAumParams, options?: Core.RequestOptions): Core.APIPromise<AumGetAumResponse>;
  getAum(options?: Core.RequestOptions): Core.APIPromise<AumGetAumResponse>;
  getAum(
    params: AumGetAumParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AumGetAumResponse> {
    if (isRequestOptions(params)) {
      return this.getAum({}, params);
    }
    const { pager } = params;
    return this._client.post('/analytics/aum/get-aum', { query: { pager }, ...options });
  }
}

export interface Aum {
  /**
   * The unique resource ID for this AUM
   */
  id?: number;

  /**
   * The current date of the AUM
   */
  as_of_date?: string;

  /**
   * The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Daily (D) or Monthly (M) Frequency
   */
  frequency?: 'D' | 'M';

  /**
   * The total assets under management for the firm.
   */
  total?: number;
}

export type Aums = Array<Aum>;

export interface AumRetrieveResponse {
  current_page?: number;

  data?: Aum;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AumListResponse {
  current_page?: number;

  data?: Aums;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AumByAccountResponse {
  /**
   * The as of date of the account AUM values.
   */
  as_of_date?: string;

  /**
   * The cumulative AUM of the provided `account_ids`.
   */
  total_aum?: number;

  /**
   * Individual AUM Values for the provided `account_ids`.
   */
  values?: Array<AumByAccountResponse.Value>;
}

export namespace AumByAccountResponse {
  export interface Value {
    /**
     * Unique ID of the provided Account.
     */
    account_id?: number;

    /**
     * Total Assets Under Management for the Account.
     */
    aum?: number;
  }
}

export interface AumByHouseholdResponse {
  /**
   * The as of date of the household AUM values.
   */
  as_of_date?: string;

  /**
   * The cumulative AUM of the provided `household_ids`.
   */
  total_aum?: number;

  /**
   * Individual AUM Values for the provided `household_ids`.
   */
  values?: Array<AumByHouseholdResponse.Value>;
}

export namespace AumByHouseholdResponse {
  export interface Value {
    /**
     * Unique ID of the provided Household.
     */
    account_id?: number;

    /**
     * The Assets Under Management for the `household_id`. The value is the sum of the
     * Assets Under Management for all funded accounts in the household.
     */
    aum?: number;
  }
}

export interface AumFilterResponse {
  current_page?: number;

  data?: Aums;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AumGetAumResponse {
  current_page?: number;

  data?: Aums;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AumRetrieveParams {
  pager?: AumRetrieveParams.Pager;
}

export namespace AumRetrieveParams {
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

export interface AumListParams {
  /**
   * Filter AUM on a specific `as_of_date`
   */
  as_of_date?: string;

  /**
   * Filter by a specific `firm_id`
   */
  firm_id?: number;

  /**
   * Filter by Monthly or Daily AUM values (helpful for generating an AUM
   * time-series)
   */
  frequency?: 'D' | 'M';

  pager?: AumListParams.Pager;
}

export namespace AumListParams {
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

export interface AumByAccountParams {
  /**
   * The list of `account_ids` to retrieve AUM values for.
   */
  account_ids: Array<number>;

  /**
   * The as of date for which account AUM is calculated.
   */
  as_of_date?: string;
}

export interface AumByHouseholdParams {
  /**
   * The list of `household_ids` to retrieve AUM values for.
   */
  household_ids: Array<number>;

  /**
   * The as of date for which household AUM is calculated.
   */
  as_of_date?: string;
}

export interface AumFilterParams {
  /**
   * Query param:
   */
  pager?: AumFilterParams.Pager;

  /**
   * Body param: The unique resource ID for this AUM
   */
  id?: number;

  /**
   * Body param: The current date of the AUM
   */
  as_of_date?: string;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: See Frequency Codes
   */
  frequency?: 'D' | 'M';

  /**
   * Body param: The total assets under management for the AUM
   */
  total?: number;
}

export namespace AumFilterParams {
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

export interface AumGetAumParams {
  pager?: AumGetAumParams.Pager;
}

export namespace AumGetAumParams {
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

export declare namespace AumResource {
  export {
    type Aum as Aum,
    type Aums as Aums,
    type AumRetrieveResponse as AumRetrieveResponse,
    type AumListResponse as AumListResponse,
    type AumByAccountResponse as AumByAccountResponse,
    type AumByHouseholdResponse as AumByHouseholdResponse,
    type AumFilterResponse as AumFilterResponse,
    type AumGetAumResponse as AumGetAumResponse,
    type AumRetrieveParams as AumRetrieveParams,
    type AumListParams as AumListParams,
    type AumByAccountParams as AumByAccountParams,
    type AumByHouseholdParams as AumByHouseholdParams,
    type AumFilterParams as AumFilterParams,
    type AumGetAumParams as AumGetAumParams,
  };
}
