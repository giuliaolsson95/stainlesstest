// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as AccountsAPI from './accounts';
import * as DataSourceAccountBalancesAPI from './data/source-account-balances';

export class SourceAccountBalances extends APIResource {
  /**
   * Returns an account balance record based on its ID
   */
  retrieve(
    id: number,
    query?: SourceAccountBalanceRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceAccountBalanceRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SourceAccountBalanceRetrieveResponse>;
  retrieve(
    id: number,
    query: SourceAccountBalanceRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceAccountBalanceRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/data/source/account-balances/${id}`, { query, ...options });
  }

  /**
   * Returns a list of account balances
   */
  list(
    query?: SourceAccountBalanceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceAccountBalanceListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SourceAccountBalanceListResponse>;
  list(
    query: SourceAccountBalanceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceAccountBalanceListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/source/account-balances', { query, ...options });
  }

  /**
   * Returns a filtered list of account balance records
   */
  filter(
    params: SourceAccountBalanceFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceAccountBalanceFilterResponse> {
    const { body, pager, related } = params;
    return this._client.post('/data/source/account-balances/filter', {
      query: { pager, related },
      body: body,
      ...options,
    });
  }

  /**
   * Returns a list of the most recent account balance records as of the latest date
   * reported by the custodian. Endpoint Supports optional filtering.
   */
  latest(
    query?: SourceAccountBalanceLatestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceAccountBalanceLatestResponse>;
  latest(options?: Core.RequestOptions): Core.APIPromise<SourceAccountBalanceLatestResponse>;
  latest(
    query: SourceAccountBalanceLatestParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceAccountBalanceLatestResponse> {
    if (isRequestOptions(query)) {
      return this.latest({}, query);
    }
    return this._client.get('/data/source/account-balances/latest', { query, ...options });
  }
}

export interface SourceAccountBalanceRetrieveResponse {
  current_page?: number;

  data?: DataSourceAccountBalancesAPI.Sourceaccountbalance;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SourceAccountBalanceListResponse {
  current_page?: number;

  data?: DataSourceAccountBalancesAPI.Sourceaccountbalances;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceAccountBalanceListResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceAccountBalanceListResponse {
  export interface Related {
    accounts?: Related.Accounts;
  }

  export namespace Related {
    export interface Accounts {
      account_id?: AccountsAPI.Account;
    }
  }
}

export interface SourceAccountBalanceFilterResponse {
  current_page?: number;

  data?: DataSourceAccountBalancesAPI.Sourceaccountbalance;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceAccountBalanceFilterResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceAccountBalanceFilterResponse {
  export interface Related {
    accounts?: Related.Accounts;
  }

  export namespace Related {
    export interface Accounts {
      account_id?: AccountsAPI.Account;
    }
  }
}

export interface SourceAccountBalanceLatestResponse {
  current_page?: number;

  data?: DataSourceAccountBalancesAPI.Sourceaccountbalances;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceAccountBalanceLatestResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceAccountBalanceLatestResponse {
  export interface Related {
    accounts?: Related.Accounts;
  }

  export namespace Related {
    export interface Accounts {
      account_id?: AccountsAPI.Account;
    }
  }
}

export interface SourceAccountBalanceRetrieveParams {
  pager?: SourceAccountBalanceRetrieveParams.Pager;
}

export namespace SourceAccountBalanceRetrieveParams {
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

export interface SourceAccountBalanceListParams {
  pager?: SourceAccountBalanceListParams.Pager;

  /**
   * Select data related to identifiers in the response data. When a related query
   * parameter is selected, a new json field will be populated in the response with a
   * map of the relevant related data.
   *
   * ** Example **
   *
   * GET `https://api.bridgeft.com/v2/{selectedResource}?related=accounts`
   *
   * Response:
   *
   * ```
   * {
   *   "object": "object"
   *   "has_next": true,
   *   "has_previous": false,
   *   "current_page": 1,
   *   "total_pages": 10,
   *   "page_size_limit": 100,
   *   "has_next": true,
   *   "data": [
   *     {
   *       id: 1,
   *       account_id": "SOMEACCOUNTID1",
   *       ...
   *     },
   *     {
   *       id: 1,
   *       account_id": "SOMEACCOUNTID2",
   *       ...
   *     }
   *   ]
   *   "accounts": {
   *     "SOMEACCOUNTID1": {
   *       id: "SOMEACCOUNTID1",
   *       ...
   *     },
   *     "SOMEACCOUNTID2": {
   *       id: "SOMEACCOUNTID2",
   *       ...
   *     }
   *   }
   * }
   * ```
   *
   * Populating the related query parameter will pull additional information in the
   * request for supported related data without reaching out to an additional
   * endpoint.
   *
   * See dropdown for the supported related fields for the resource.
   */
  related?: 'accounts';
}

export namespace SourceAccountBalanceListParams {
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

export interface SourceAccountBalanceFilterParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param:
   */
  pager?: SourceAccountBalanceFilterParams.Pager;

  /**
   * Query param: Select data related to identifiers in the response data. When a
   * related query parameter is selected, a new json field will be populated in the
   * response with a map of the relevant related data.
   *
   * ** Example **
   *
   * GET `https://api.bridgeft.com/v2/{selectedResource}?related=accounts`
   *
   * Response:
   *
   * ```
   * {
   *   "object": "object"
   *   "has_next": true,
   *   "has_previous": false,
   *   "current_page": 1,
   *   "total_pages": 10,
   *   "page_size_limit": 100,
   *   "has_next": true,
   *   "data": [
   *     {
   *       id: 1,
   *       account_id": "SOMEACCOUNTID1",
   *       ...
   *     },
   *     {
   *       id: 1,
   *       account_id": "SOMEACCOUNTID2",
   *       ...
   *     }
   *   ]
   *   "accounts": {
   *     "SOMEACCOUNTID1": {
   *       id: "SOMEACCOUNTID1",
   *       ...
   *     },
   *     "SOMEACCOUNTID2": {
   *       id: "SOMEACCOUNTID2",
   *       ...
   *     }
   *   }
   * }
   * ```
   *
   * Populating the related query parameter will pull additional information in the
   * request for supported related data without reaching out to an additional
   * endpoint.
   *
   * See dropdown for the supported related fields for the resource.
   */
  related?: 'accounts';
}

export namespace SourceAccountBalanceFilterParams {
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

export interface SourceAccountBalanceLatestParams {
  pager?: SourceAccountBalanceLatestParams.Pager;
}

export namespace SourceAccountBalanceLatestParams {
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

export declare namespace SourceAccountBalances {
  export {
    type SourceAccountBalanceRetrieveResponse as SourceAccountBalanceRetrieveResponse,
    type SourceAccountBalanceListResponse as SourceAccountBalanceListResponse,
    type SourceAccountBalanceFilterResponse as SourceAccountBalanceFilterResponse,
    type SourceAccountBalanceLatestResponse as SourceAccountBalanceLatestResponse,
    type SourceAccountBalanceRetrieveParams as SourceAccountBalanceRetrieveParams,
    type SourceAccountBalanceListParams as SourceAccountBalanceListParams,
    type SourceAccountBalanceFilterParams as SourceAccountBalanceFilterParams,
    type SourceAccountBalanceLatestParams as SourceAccountBalanceLatestParams,
  };
}
