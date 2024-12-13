// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SecuritiesAPI from './data/custodian/securities';

export class CustodianSecurities extends APIResource {
  /**
   * Returns a single security based on an ID
   */
  retrieve(
    id: number,
    query?: CustodianSecurityRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustodianSecurityRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<CustodianSecurityRetrieveResponse>;
  retrieve(
    id: number,
    query: CustodianSecurityRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustodianSecurityRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/data/custodian/securities/${id}`, { query, ...options });
  }

  /**
   * Returns a list of securities
   */
  list(
    query?: CustodianSecurityListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustodianSecurityListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CustodianSecurityListResponse>;
  list(
    query: CustodianSecurityListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustodianSecurityListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/custodian/securities', { query, ...options });
  }

  /**
   * Returns a filtered list of Securities
   */
  filter(
    params?: CustodianSecurityFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustodianSecurityFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<CustodianSecurityFilterResponse>;
  filter(
    params: CustodianSecurityFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustodianSecurityFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/data/custodian/securities/filter', { query: { pager }, body, ...options });
  }

  /**
   * Returns the first security object where the issue_type_code is 1
   */
  getUsd(
    query?: CustodianSecurityGetUsdParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustodianSecurityGetUsdResponse>;
  getUsd(options?: Core.RequestOptions): Core.APIPromise<CustodianSecurityGetUsdResponse>;
  getUsd(
    query: CustodianSecurityGetUsdParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustodianSecurityGetUsdResponse> {
    if (isRequestOptions(query)) {
      return this.getUsd({}, query);
    }
    return this._client.get('/data/custodian/securities/get-usd', { query, ...options });
  }
}

export interface CustodianSecurityRetrieveResponse {
  current_page?: number;

  data?: SecuritiesAPI.Security;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface CustodianSecurityListResponse {
  current_page?: number;

  data?: SecuritiesAPI.Securities;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface CustodianSecurityFilterResponse {
  current_page?: number;

  data?: SecuritiesAPI.Securities;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface CustodianSecurityGetUsdResponse {
  current_page?: number;

  data?: SecuritiesAPI.Security;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface CustodianSecurityRetrieveParams {
  pager?: CustodianSecurityRetrieveParams.Pager;
}

export namespace CustodianSecurityRetrieveParams {
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

export interface CustodianSecurityListParams {
  pager?: CustodianSecurityListParams.Pager;
}

export namespace CustodianSecurityListParams {
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

export interface CustodianSecurityFilterParams {
  /**
   * Query param:
   */
  pager?: CustodianSecurityFilterParams.Pager;

  /**
   * Body param: The unique resource id for the Security
   */
  id?: number;

  /**
   * Body param: The broad code of the Security
   */
  broad_code?: string;

  /**
   * Body param: A unique nine-character code for the security
   */
  cusip?: string;

  /**
   * Body param: The description of the Security
   */
  description?: string;

  /**
   * Body param: An internal mapping of the Security's issue code
   */
  issue_code?: string;

  /**
   * Body param: Asset class associated with the security. EQ for Equity Asset Class,
   * DT for Fixed Income Asset Class, CA for Cash Asset Class, CE for Cash Equivalent
   * Asset Class, MX for Mixed Asset Class or Other Class, UC for Unclassified Asset
   * Class, ETF for ETF Asset Class, CR for Crypto Asset Class, and empty string for
   * Unknown Asset Class
   */
  master_asset_class?: 'EQ' | 'DT' | 'CA' | 'CE' | 'MX' | 'UC' | 'ETF' | 'CR';

  /**
   * Body param: The sic code of the security
   */
  sic_code?: string;

  /**
   * Body param: The symbol used to represent the Security
   */
  symbol?: string;
}

export namespace CustodianSecurityFilterParams {
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

export interface CustodianSecurityGetUsdParams {
  pager?: CustodianSecurityGetUsdParams.Pager;
}

export namespace CustodianSecurityGetUsdParams {
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

export declare namespace CustodianSecurities {
  export {
    type CustodianSecurityRetrieveResponse as CustodianSecurityRetrieveResponse,
    type CustodianSecurityListResponse as CustodianSecurityListResponse,
    type CustodianSecurityFilterResponse as CustodianSecurityFilterResponse,
    type CustodianSecurityGetUsdResponse as CustodianSecurityGetUsdResponse,
    type CustodianSecurityRetrieveParams as CustodianSecurityRetrieveParams,
    type CustodianSecurityListParams as CustodianSecurityListParams,
    type CustodianSecurityFilterParams as CustodianSecurityFilterParams,
    type CustodianSecurityGetUsdParams as CustodianSecurityGetUsdParams,
  };
}
