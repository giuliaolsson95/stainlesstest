// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Splits extends APIResource {
  /**
   * Returns the created Billing Split
   */
  create(params: SplitCreateParams, options?: Core.RequestOptions): Core.APIPromise<SplitCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/billing/splits', { query: { pager }, body, ...options });
  }

  /**
   * Returns the Billing Split record for the provided ID
   */
  retrieve(
    id: number,
    query?: SplitRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SplitRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<SplitRetrieveResponse>;
  retrieve(
    id: number,
    query: SplitRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SplitRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/billing/splits/${id}`, { query, ...options });
  }

  /**
   * Provide a list billing splits to update. Then entire billing split object
   * **must** be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `percentage`
   * - `splitter_name`
   */
  update(body: SplitUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SplitUpdateResponse> {
    return this._client.put('/billing/splits', { body, ...options });
  }

  /**
   * Returns an enveloped list of Billing Split records
   */
  list(query?: SplitListParams, options?: Core.RequestOptions): Core.APIPromise<SplitListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<SplitListResponse>;
  list(
    query: SplitListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SplitListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/billing/splits', { query, ...options });
  }
}

export type Split = Array<unknown>;

export interface SplitCreateResponse {
  current_page?: number;

  data?: unknown;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SplitRetrieveResponse {
  current_page?: number;

  data?: unknown;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SplitUpdateResponse {
  current_page?: number;

  data?: Split;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SplitListResponse {
  current_page?: number;

  data?: Split;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SplitCreateParams {
  /**
   * Query param:
   */
  pager?: SplitCreateParams.Pager;

  /**
   * Body param: The ID of the managing firm for this billing split
   */
  firm_id?: number;

  /**
   * Body param: The name of the billing split, auto-generated if not supplied
   */
  name?: string;

  /**
   * Body param: The percentage of the split stored on the natural scale
   */
  percentage?: number;

  /**
   * Body param: The name originally entered by the user
   */
  splitter_name?: string;

  /**
   * Body param: The sluggified version of the name field
   */
  splitter_slug?: string;
}

export namespace SplitCreateParams {
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

export interface SplitRetrieveParams {
  pager?: SplitRetrieveParams.Pager;
}

export namespace SplitRetrieveParams {
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

export type SplitUpdateParams = Split;

export interface SplitListParams {
  pager?: SplitListParams.Pager;
}

export namespace SplitListParams {
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

export declare namespace Splits {
  export {
    type Split as Split,
    type SplitCreateResponse as SplitCreateResponse,
    type SplitRetrieveResponse as SplitRetrieveResponse,
    type SplitUpdateResponse as SplitUpdateResponse,
    type SplitListResponse as SplitListResponse,
    type SplitCreateParams as SplitCreateParams,
    type SplitRetrieveParams as SplitRetrieveParams,
    type SplitUpdateParams as SplitUpdateParams,
    type SplitListParams as SplitListParams,
  };
}
