// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Indexes extends APIResource {
  /**
   * Returns an idc index based on a single ID
   */
  retrieve(
    id: number,
    query?: IndexRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<IndexRetrieveResponse>;
  retrieve(
    id: number,
    query: IndexRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/data/idc/indexes/${id}`, { query, ...options });
  }

  /**
   * Returns a list of List all IDC Indexes
   */
  list(query?: IndexListParams, options?: Core.RequestOptions): Core.APIPromise<IndexListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<IndexListResponse>;
  list(
    query: IndexListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/data/idc/indexes', { query, ...options });
  }

  /**
   * Return a filtered list of all IDC indexes
   */
  filter(params?: IndexFilterParams, options?: Core.RequestOptions): Core.APIPromise<IndexFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<IndexFilterResponse>;
  filter(
    params: IndexFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IndexFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/data/idc/indexes/filter', { query: { pager }, body, ...options });
  }
}

export interface Index {
  /**
   * The unique resource id of the Index.
   */
  id?: number;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Cusip associated with the index
   */
  cusip?: string;

  /**
   * Our internal name for the index.
   */
  internal_name?: string;

  /**
   * Issuer cusip associated with the index
   */
  issuer_cusip?: string;

  /**
   * Name for the index
   */
  name?: string;

  /**
   * Symbol associated with the index
   */
  symbol?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;

  /**
   * Vendor's name of the index.
   */
  vendor_name?: string;
}

export type Indexes = Array<Index>;

export interface IndexRetrieveResponse {
  current_page?: number;

  data?: Index;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface IndexListResponse {
  current_page?: number;

  data?: Indexes;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface IndexFilterResponse {
  current_page?: number;

  data?: Indexes;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface IndexRetrieveParams {
  pager?: IndexRetrieveParams.Pager;
}

export namespace IndexRetrieveParams {
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

export interface IndexListParams {
  pager?: IndexListParams.Pager;
}

export namespace IndexListParams {
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

export interface IndexFilterParams {
  /**
   * Query param:
   */
  pager?: IndexFilterParams.Pager;

  /**
   * Body param: The unique resource id of the Index.
   */
  id?: number;

  /**
   * Body param: Cusip associated with the index
   */
  cusip?: string;

  /**
   * Body param: Our internal name for the index.
   */
  internal_name?: string;

  /**
   * Body param: Issuer cusip associated with the index
   */
  issuer_cusip?: string;

  /**
   * Body param: Name for the index
   */
  name?: string;

  /**
   * Body param: Symbol associated with the index
   */
  symbol?: string;

  /**
   * Body param: Vendor's name of the index.
   */
  vendor_name?: string;
}

export namespace IndexFilterParams {
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

export declare namespace Indexes {
  export {
    type Index as Index,
    type Indexes as Indexes,
    type IndexRetrieveResponse as IndexRetrieveResponse,
    type IndexListResponse as IndexListResponse,
    type IndexFilterResponse as IndexFilterResponse,
    type IndexRetrieveParams as IndexRetrieveParams,
    type IndexListParams as IndexListParams,
    type IndexFilterParams as IndexFilterParams,
  };
}
