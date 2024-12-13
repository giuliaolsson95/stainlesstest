// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as AccountsAPI from './accounts';
import * as DataSourceTransactionsAPI from './data/source-transactions';
import * as SecuritiesAPI from './data/custodian/securities';

export class SourceTransactions extends APIResource {
  /**
   * Returns a transaction record based on its ID
   */
  retrieve(
    id: number,
    query?: SourceTransactionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceTransactionRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SourceTransactionRetrieveResponse>;
  retrieve(
    id: number,
    query: SourceTransactionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceTransactionRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/data/source/transactions/${id}`, { query, ...options });
  }

  /**
   * Returns a list of transactions
   */
  list(
    query?: SourceTransactionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceTransactionListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SourceTransactionListResponse>;
  list(
    query: SourceTransactionListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceTransactionListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/source/transactions', { query, ...options });
  }

  /**
   * Returns a filtered list of transaction records
   */
  filter(
    params: SourceTransactionFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceTransactionFilterResponse> {
    const { body, pager, related } = params;
    return this._client.post('/data/source/transactions/filter', {
      query: { pager, related },
      body: body,
      ...options,
    });
  }

  /**
   * Returns a list of the most recent transaction records as of the latest date
   * reported by the custodian. Request body fields can be included in request body,
   * or as query parameters for optional filtering.
   */
  latest(
    query?: SourceTransactionLatestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceTransactionLatestResponse>;
  latest(options?: Core.RequestOptions): Core.APIPromise<SourceTransactionLatestResponse>;
  latest(
    query: SourceTransactionLatestParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceTransactionLatestResponse> {
    if (isRequestOptions(query)) {
      return this.latest({}, query);
    }
    return this._client.get('/data/source/transactions/latest', { query, ...options });
  }
}

export interface SourceTransactionRetrieveResponse {
  current_page?: number;

  data?: DataSourceTransactionsAPI.Sourcetransaction;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SourceTransactionListResponse {
  current_page?: number;

  data?: DataSourceTransactionsAPI.Sourcetransactions;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceTransactionListResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceTransactionListResponse {
  export interface Related {
    accounts?: Related.Accounts;

    securities?: Related.Securities;
  }

  export namespace Related {
    export interface Accounts {
      account_id?: AccountsAPI.Account;
    }

    export interface Securities {
      security_id?: SecuritiesAPI.Security;
    }
  }
}

export interface SourceTransactionFilterResponse {
  current_page?: number;

  data?: DataSourceTransactionsAPI.Sourcetransaction;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceTransactionFilterResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceTransactionFilterResponse {
  export interface Related {
    accounts?: Related.Accounts;

    securities?: Related.Securities;
  }

  export namespace Related {
    export interface Accounts {
      account_id?: AccountsAPI.Account;
    }

    export interface Securities {
      security_id?: SecuritiesAPI.Security;
    }
  }
}

export interface SourceTransactionLatestResponse {
  current_page?: number;

  data?: DataSourceTransactionsAPI.Sourcetransactions;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceTransactionLatestResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceTransactionLatestResponse {
  export interface Related {
    accounts?: Related.Accounts;

    securities?: Related.Securities;
  }

  export namespace Related {
    export interface Accounts {
      account_id?: AccountsAPI.Account;
    }

    export interface Securities {
      security_id?: SecuritiesAPI.Security;
    }
  }
}

export interface SourceTransactionRetrieveParams {
  pager?: SourceTransactionRetrieveParams.Pager;
}

export namespace SourceTransactionRetrieveParams {
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

export interface SourceTransactionListParams {
  pager?: SourceTransactionListParams.Pager;

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
  related?: 'accounts' | 'securities';
}

export namespace SourceTransactionListParams {
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

export interface SourceTransactionFilterParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param:
   */
  pager?: SourceTransactionFilterParams.Pager;

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
  related?: 'accounts' | 'securities';
}

export namespace SourceTransactionFilterParams {
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

export interface SourceTransactionLatestParams {
  pager?: SourceTransactionLatestParams.Pager;
}

export namespace SourceTransactionLatestParams {
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

export declare namespace SourceTransactions {
  export {
    type SourceTransactionRetrieveResponse as SourceTransactionRetrieveResponse,
    type SourceTransactionListResponse as SourceTransactionListResponse,
    type SourceTransactionFilterResponse as SourceTransactionFilterResponse,
    type SourceTransactionLatestResponse as SourceTransactionLatestResponse,
    type SourceTransactionRetrieveParams as SourceTransactionRetrieveParams,
    type SourceTransactionListParams as SourceTransactionListParams,
    type SourceTransactionFilterParams as SourceTransactionFilterParams,
    type SourceTransactionLatestParams as SourceTransactionLatestParams,
  };
}
