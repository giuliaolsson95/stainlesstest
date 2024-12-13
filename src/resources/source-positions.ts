// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as AccountsAPI from './accounts';
import * as DataSourcePositionsAPI from './data/source-positions';
import * as SecuritiesAPI from './data/custodian/securities';

export class SourcePositions extends APIResource {
  /**
   * Returns a position record based on its ID
   */
  retrieve(
    id: number,
    query?: SourcePositionRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourcePositionRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SourcePositionRetrieveResponse>;
  retrieve(
    id: number,
    query: SourcePositionRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourcePositionRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/data/source/positions/${id}`, { query, ...options });
  }

  /**
   * Returns a list of positions
   */
  list(
    query: SourcePositionListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourcePositionListResponse> {
    return this._client.get('/data/source/positions', { query, ...options });
  }

  /**
   * Returns a filtered list of position records
   */
  filter(
    params: SourcePositionFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourcePositionFilterResponse> {
    const { body, pager, related } = params;
    return this._client.post('/data/source/positions/filter', {
      query: { pager, related },
      body: body,
      ...options,
    });
  }

  /**
   * Returns a list of the most recent position records as of the latest date
   * reported by the custodian. Request body fields can be included in request body,
   * or as query parameters for optional filtering.
   */
  latest(
    query?: SourcePositionLatestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourcePositionLatestResponse>;
  latest(options?: Core.RequestOptions): Core.APIPromise<SourcePositionLatestResponse>;
  latest(
    query: SourcePositionLatestParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourcePositionLatestResponse> {
    if (isRequestOptions(query)) {
      return this.latest({}, query);
    }
    return this._client.get('/data/source/positions/latest', { query, ...options });
  }
}

export interface SourcePositionRetrieveResponse {
  current_page?: number;

  data?: DataSourcePositionsAPI.Sourceposition;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SourcePositionListResponse {
  current_page?: number;

  data?: DataSourcePositionsAPI.Sourcepositions;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourcePositionListResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourcePositionListResponse {
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

export interface SourcePositionFilterResponse {
  current_page?: number;

  data?: DataSourcePositionsAPI.Sourceposition;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourcePositionFilterResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourcePositionFilterResponse {
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

export interface SourcePositionLatestResponse {
  current_page?: number;

  data?: DataSourcePositionsAPI.Sourcepositions;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourcePositionLatestResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourcePositionLatestResponse {
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

export interface SourcePositionRetrieveParams {
  pager?: SourcePositionRetrieveParams.Pager;
}

export namespace SourcePositionRetrieveParams {
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

export interface SourcePositionListParams {
  /**
   * The reported date for this Position
   */
  reported_date: string;

  pager?: SourcePositionListParams.Pager;

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

export namespace SourcePositionListParams {
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

export interface SourcePositionFilterParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param:
   */
  pager?: SourcePositionFilterParams.Pager;

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

export namespace SourcePositionFilterParams {
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

export interface SourcePositionLatestParams {
  pager?: SourcePositionLatestParams.Pager;
}

export namespace SourcePositionLatestParams {
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

export declare namespace SourcePositions {
  export {
    type SourcePositionRetrieveResponse as SourcePositionRetrieveResponse,
    type SourcePositionListResponse as SourcePositionListResponse,
    type SourcePositionFilterResponse as SourcePositionFilterResponse,
    type SourcePositionLatestResponse as SourcePositionLatestResponse,
    type SourcePositionRetrieveParams as SourcePositionRetrieveParams,
    type SourcePositionListParams as SourcePositionListParams,
    type SourcePositionFilterParams as SourcePositionFilterParams,
    type SourcePositionLatestParams as SourcePositionLatestParams,
  };
}
