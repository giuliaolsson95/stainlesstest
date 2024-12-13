// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as AccountsAPI from '../accounts';
import * as SecuritiesAPI from './custodian/securities';

export class SourceLots extends APIResource {
  /**
   * Returns a lot record based on its ID
   */
  retrieve(
    id: number,
    query?: SourceLotRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceLotRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SourceLotRetrieveResponse>;
  retrieve(
    id: number,
    query: SourceLotRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceLotRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/data/source/lots/${id}`, { query, ...options });
  }

  /**
   * Returns a list of lots
   */
  list(query: SourceLotListParams, options?: Core.RequestOptions): Core.APIPromise<SourceLotListResponse> {
    return this._client.get('/data/source/lots', { query, ...options });
  }

  /**
   * Returns a filtered list of lot records
   */
  filter(
    params: SourceLotFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceLotFilterResponse> {
    const { body, pager, related } = params;
    return this._client.post('/data/source/lots/filter', {
      query: { pager, related },
      body: body,
      ...options,
    });
  }

  /**
   * Returns a list of the most recent lot records as of the latest date reported by
   * the custodian. Request body fields can be included in request body, or as query
   * parameters for optional filtering.
   */
  latest(
    query?: SourceLotLatestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceLotLatestResponse>;
  latest(options?: Core.RequestOptions): Core.APIPromise<SourceLotLatestResponse>;
  latest(
    query: SourceLotLatestParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceLotLatestResponse> {
    if (isRequestOptions(query)) {
      return this.latest({}, query);
    }
    return this._client.get('/data/source/lots/latest', { query, ...options });
  }
}

export interface Sourcelot {
  /**
   * The unique resource id for the lot
   */
  id?: number;

  /**
   * The total adjusted cost of the shares for the reported lot
   */
  abs_adjusted_cost_basis?: number;

  /**
   * The total cost of the shares for the reported lot
   */
  abs_cost_basis?: number;

  /**
   * The quantity of shares for the reported lot
   */
  abs_current_units?: number;

  /**
   * The market value of the shares for the reported lot using the source-provided
   * price
   */
  abs_current_value?: number;

  /**
   * Current market value as reported directly from source lots
   */
  abs_current_value_reported?: number;

  /**
   * Prevailing price per unit of the security, as determined by the source provider
   */
  abs_current_value_unit_price?: number;

  /**
   * Price as reported directly from source lots
   */
  abs_current_value_unit_price_reported?: number;

  /**
   * The original quantity of shares which opened the corresponding lot, if reported
   */
  abs_original_open_units?: number;

  /**
   * The id of the Account associated with this lot
   */
  account_id?: number;

  /**
   * The account number of the Account associated with this lot
   */
  account_number?: string;

  /**
   * True if the cost basis is certified
   */
  certified?: boolean;

  /**
   * True if the cost basis for this lot is fully known
   */
  cost_basis_fully_known?: boolean;

  /**
   * Source-provided determination of whether cost basis is known. Null if the source
   * doesn't provide such indications of completed cost basis information
   */
  cost_basis_fully_known_reported?: boolean;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Flag to indicate if lot is Long or Short. Potential values, L = Long, S = Short
   */
  direction?: 'L' | 'S';

  /**
   * Lost amount that cannot be used for tax offset, if the lot is part of a wash
   * sale violation
   */
  disallowed_loss_amount?: number;

  /**
   * The feed code of the Account associated with this lot
   */
  feed_code?: string;

  /**
   * The custodian reported lot identifier if applicable
   */
  lot_identifier?: string;

  /**
   * The lot selection method of the lot if reported by the source
   */
  lot_selection_method?: string;

  /**
   * @deprecated: The raw data exactly as reported by the source with original field
   * names
   */
  original_data?: unknown;

  /**
   * The date that the corresponding lot was initially opened (even outside of the
   * current account) if reported
   */
  original_open_date?: string;

  /**
   * Realized gain/loss for partially closed lots as reported by the data source, or
   * null if not provided
   */
  realized_gain_loss_reported?: number;

  /**
   * The date the custodian reports the lot
   */
  reported_date?: string;

  /**
   * The id of the Security associated with this lot
   */
  security_id?: number;

  /**
   * Custodian or source the lot data comes from. APX=Apex Fintech Solutions, DST=DST
   * Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers, NFS=Fidelity
   * Investments, PER=Pershing, SWB=Charles Schwab, TDA=TD Ameritrade (Available
   * prior to Sept. 2, 2023), EGB=Eaglebrook, MLT=Millenium Trust, TIA=TIAA Financial
   * Services
   */
  source?:
    | 'APX'
    | 'DST'
    | 'FPR'
    | 'IBK'
    | 'NFS'
    | 'PER'
    | 'SWB'
    | 'TDA (Available prior to Sept. 2, 2023)'
    | 'EGB'
    | 'MLT'
    | 'TIA';

  /**
   * The cusip of the corresponding security as reported by the source if applicable
   */
  source_security_cusip?: string;

  /**
   * The symbol of the corresponding security as reported by the source if applicable
   */
  source_security_symbol?: string;

  /**
   * Difference between abs_current_value and abs_cost_basis. If either is null, this
   * field will be null, but treated as zero for aggregating unrealized gain/loss
   */
  unrealized_gain_loss?: number;

  /**
   * The current unrealized gains for the lot if reported
   */
  unrealized_gain_loss_reported?: number;

  /**
   * True if the lot is affected by a wash sale
   */
  wash_sale?: boolean;
}

export type Sourcelots = Array<Sourcelot>;

export interface SourceLotRetrieveResponse {
  current_page?: number;

  data?: Sourcelot;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SourceLotListResponse {
  current_page?: number;

  data?: Sourcelots;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceLotListResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceLotListResponse {
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

export interface SourceLotFilterResponse {
  current_page?: number;

  data?: Sourcelot;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceLotFilterResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceLotFilterResponse {
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

export interface SourceLotLatestResponse {
  current_page?: number;

  data?: Sourcelots;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  related?: SourceLotLatestResponse.Related;

  total_items?: number;

  total_pages?: number;
}

export namespace SourceLotLatestResponse {
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

export interface SourceLotRetrieveParams {
  pager?: SourceLotRetrieveParams.Pager;
}

export namespace SourceLotRetrieveParams {
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

export interface SourceLotListParams {
  /**
   * The reported date for these lots
   */
  reported_date: string;

  pager?: SourceLotListParams.Pager;

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

export namespace SourceLotListParams {
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

export interface SourceLotFilterParams {
  /**
   * Body param:
   */
  body: unknown;

  /**
   * Query param:
   */
  pager?: SourceLotFilterParams.Pager;

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

export namespace SourceLotFilterParams {
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

export interface SourceLotLatestParams {
  pager?: SourceLotLatestParams.Pager;
}

export namespace SourceLotLatestParams {
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

export declare namespace SourceLots {
  export {
    type Sourcelot as Sourcelot,
    type Sourcelots as Sourcelots,
    type SourceLotRetrieveResponse as SourceLotRetrieveResponse,
    type SourceLotListResponse as SourceLotListResponse,
    type SourceLotFilterResponse as SourceLotFilterResponse,
    type SourceLotLatestResponse as SourceLotLatestResponse,
    type SourceLotRetrieveParams as SourceLotRetrieveParams,
    type SourceLotListParams as SourceLotListParams,
    type SourceLotFilterParams as SourceLotFilterParams,
    type SourceLotLatestParams as SourceLotLatestParams,
  };
}
