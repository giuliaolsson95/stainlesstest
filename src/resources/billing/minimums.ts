// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Minimums extends APIResource {
  /**
   * Returns the created Minimums
   */
  create(params: MinimumCreateParams, options?: Core.RequestOptions): Core.APIPromise<MinimumCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/billing/minimums', { query: { pager }, body, ...options });
  }

  /**
   * Returns a Billing Minimum record for the provided ID.
   */
  retrieve(
    id: number,
    query?: MinimumRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinimumRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<MinimumRetrieveResponse>;
  retrieve(
    id: number,
    query: MinimumRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinimumRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/billing/minimums/${id}`, { query, ...options });
  }

  /**
   * Provide a billing minimum to update. Then entire billing minimum object **must**
   * be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `value`
   * - `value_type`
   */
  update(params: MinimumUpdateParams, options?: Core.RequestOptions): Core.APIPromise<MinimumUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/billing/minimums/${path_id}`, { body: { id: body_id, ...body }, ...options });
  }

  /**
   * Returns an enveloped list of Billing Minimums.
   */
  list(query?: MinimumListParams, options?: Core.RequestOptions): Core.APIPromise<MinimumListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MinimumListResponse>;
  list(
    query: MinimumListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinimumListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/billing/minimums', { query, ...options });
  }

  /**
   * Deletes the billing minimum record for the provided ID.
   */
  delete(id: number, params?: MinimumDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: MinimumDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/billing/minimums/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of created Minimums
   */
  createMany(
    params: MinimumCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinimumCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/billing/minimums/create-many', { query: { pager }, body: body, ...options });
  }

  /**
   * Deletes the corresponding billing minimum records for the provided IDs.
   */
  deleteMany(params: MinimumDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/billing/minimums/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Minimums
   */
  filter(params?: MinimumFilterParams, options?: Core.RequestOptions): Core.APIPromise<MinimumFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<MinimumFilterResponse>;
  filter(
    params: MinimumFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinimumFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/billing/minimums/filter', { query: { pager }, body, ...options });
  }
}

export interface Minimums {
  /**
   * The unique resource ID for this Billing Minimum
   */
  id?: number;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * The name of this Billing Minimum
   */
  name?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;

  /**
   * The value of this Billing Minimum
   */
  value?: number;

  /**
   * F for flat amount, P for percentage
   */
  value_type?: 'F' | 'P';
}

export type MinimumsMany = Array<Minimums>;

export interface MinimumCreateResponse {
  current_page?: number;

  data?: Minimums;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface MinimumRetrieveResponse {
  current_page?: number;

  data?: Minimums;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface MinimumUpdateResponse {
  current_page?: number;

  data?: Minimums;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface MinimumListResponse {
  current_page?: number;

  data?: MinimumsMany;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface MinimumCreateManyResponse {
  current_page?: number;

  data?: MinimumsMany;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface MinimumFilterResponse {
  current_page?: number;

  data?: MinimumsMany;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface MinimumCreateParams {
  /**
   * Query param:
   */
  pager?: MinimumCreateParams.Pager;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: The name of this Billing Minimum
   */
  name?: string;

  /**
   * Body param: The value of this Billing Minimum
   */
  value?: number;

  /**
   * Body param: F for flat amount, P for percentage
   */
  value_type?: 'F' | 'P';
}

export namespace MinimumCreateParams {
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

export interface MinimumRetrieveParams {
  pager?: MinimumRetrieveParams.Pager;
}

export namespace MinimumRetrieveParams {
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

export interface MinimumUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: The unique resource ID for this Billing Minimum
   */
  body_id?: number;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: The name of this Billing Minimum
   */
  name?: string;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;

  /**
   * Body param: The value of this Billing Minimum
   */
  value?: number;

  /**
   * Body param: F for flat amount, P for percentage
   */
  value_type?: 'F' | 'P';
}

export interface MinimumListParams {
  pager?: MinimumListParams.Pager;
}

export namespace MinimumListParams {
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

export interface MinimumDeleteParams {
  pager?: MinimumDeleteParams.Pager;
}

export namespace MinimumDeleteParams {
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

export interface MinimumCreateManyParams {
  /**
   * Body param:
   */
  body: Array<unknown>;

  /**
   * Query param:
   */
  pager?: MinimumCreateManyParams.Pager;
}

export namespace MinimumCreateManyParams {
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

export interface MinimumDeleteManyParams {
  /**
   * Query param:
   */
  pager?: MinimumDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace MinimumDeleteManyParams {
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

export interface MinimumFilterParams {
  /**
   * Query param:
   */
  pager?: MinimumFilterParams.Pager;

  /**
   * Body param: The unique resource ID for this Billing Minimum
   */
  id?: number;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: The name of this Billing Minimum
   */
  name?: string;

  /**
   * Body param: The value of this Billing Minimum
   */
  value?: number;

  /**
   * Body param: F for flat amount, P for percentage
   */
  value_type?: 'F' | 'P';
}

export namespace MinimumFilterParams {
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

export declare namespace Minimums {
  export {
    type Minimums as Minimums,
    type MinimumsMany as MinimumsMany,
    type MinimumCreateResponse as MinimumCreateResponse,
    type MinimumRetrieveResponse as MinimumRetrieveResponse,
    type MinimumUpdateResponse as MinimumUpdateResponse,
    type MinimumListResponse as MinimumListResponse,
    type MinimumCreateManyResponse as MinimumCreateManyResponse,
    type MinimumFilterResponse as MinimumFilterResponse,
    type MinimumCreateParams as MinimumCreateParams,
    type MinimumRetrieveParams as MinimumRetrieveParams,
    type MinimumUpdateParams as MinimumUpdateParams,
    type MinimumListParams as MinimumListParams,
    type MinimumDeleteParams as MinimumDeleteParams,
    type MinimumCreateManyParams as MinimumCreateManyParams,
    type MinimumDeleteManyParams as MinimumDeleteManyParams,
    type MinimumFilterParams as MinimumFilterParams,
  };
}
