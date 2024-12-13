// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as AccountsAPI from './accounts';
import * as DataSourceRealizedGainLossAPI from './data/source-realized-gain-loss';
import * as SecuritiesAPI from './data/custodian/securities';

export class SourceRealizedGainLoss extends APIResource {
  /**
   * Returns a Realized Gain Loss record based on its ID
   */
  retrieve(
    id: number,
    query?: SourceRealizedGainLossRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceRealizedGainLossRetrieveResponse>;
  retrieve(
    id: number,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceRealizedGainLossRetrieveResponse>;
  retrieve(
    id: number,
    query: SourceRealizedGainLossRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceRealizedGainLossRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/data/source/realized-gain-loss/${id}`, { query, ...options });
  }

  /**
   * Returns a list of Realized Gain Losses
   */
  list(
    query: SourceRealizedGainLossListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceRealizedGainLossListResponse> {
    return this._client.get('/data/source/realized-gain-loss', { query, ...options });
  }

  /**
   * Returns a filtered list of Realized Gain Loss records
   */
  filter(
    params: SourceRealizedGainLossFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceRealizedGainLossFilterResponse> {
    const { body, pager, related } = params;
    return this._client.post('/data/source/realized-gain-loss/filter', {
      query: { pager, related },
      body: body,
      ...options,
    });
  }

  /**
   * Returns a list of the most recent realized gain loss records as of the latest
   * date reported by the custodian. Request body fields can be included in request
   * body, or as query parameters for optional filtering.
   */
  latest(
    query?: SourceRealizedGainLossLatestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceRealizedGainLossLatestResponse>;
  latest(options?: Core.RequestOptions): Core.APIPromise<SourceRealizedGainLossLatestResponse>;
  latest(
    query: SourceRealizedGainLossLatestParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceRealizedGainLossLatestResponse> {
    if (isRequestOptions(query)) {
      return this.latest({}, query);
    }
    return this._client.get('/data/source/realized-gain-loss/latest', { query, ...options });
  }
}

export interface SourceRealizedGainLossRetrieveResponse {
  current_page?: number;

  data?: DataSourceRealizedGainLossAPI.Sourcerealizedgainloss;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SourceRealizedGainLossListResponse {
  current_page?: number;

  data?: DataSourceRealizedGainLossAPI.Sourcerealizedgainlosses;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceRealizedGainLossListResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceRealizedGainLossListResponse {
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

export interface SourceRealizedGainLossFilterResponse {
  current_page?: number;

  data?: DataSourceRealizedGainLossAPI.Sourcerealizedgainloss;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceRealizedGainLossFilterResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceRealizedGainLossFilterResponse {
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

export interface SourceRealizedGainLossLatestResponse {
  current_page?: number;

  data?: DataSourceRealizedGainLossAPI.Sourcerealizedgainlosses;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceRealizedGainLossLatestResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceRealizedGainLossLatestResponse {
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

export interface SourceRealizedGainLossRetrieveParams {
  pager?: SourceRealizedGainLossRetrieveParams.Pager;
}

export namespace SourceRealizedGainLossRetrieveParams {
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

export interface SourceRealizedGainLossListParams {
  /**
   * The reported date for Realized Gain Losses
   */
  reported_date: string;

  pager?: SourceRealizedGainLossListParams.Pager;

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

export namespace SourceRealizedGainLossListParams {
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

export interface SourceRealizedGainLossFilterParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param:
   */
  pager?: SourceRealizedGainLossFilterParams.Pager;

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

export namespace SourceRealizedGainLossFilterParams {
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

export interface SourceRealizedGainLossLatestParams {
  pager?: SourceRealizedGainLossLatestParams.Pager;
}

export namespace SourceRealizedGainLossLatestParams {
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

export declare namespace SourceRealizedGainLoss {
  export {
    type SourceRealizedGainLossRetrieveResponse as SourceRealizedGainLossRetrieveResponse,
    type SourceRealizedGainLossListResponse as SourceRealizedGainLossListResponse,
    type SourceRealizedGainLossFilterResponse as SourceRealizedGainLossFilterResponse,
    type SourceRealizedGainLossLatestResponse as SourceRealizedGainLossLatestResponse,
    type SourceRealizedGainLossRetrieveParams as SourceRealizedGainLossRetrieveParams,
    type SourceRealizedGainLossListParams as SourceRealizedGainLossListParams,
    type SourceRealizedGainLossFilterParams as SourceRealizedGainLossFilterParams,
    type SourceRealizedGainLossLatestParams as SourceRealizedGainLossLatestParams,
  };
}
