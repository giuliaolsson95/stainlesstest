// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as SplitsAPI from './billing/splits';

export class BillingSplits extends APIResource {
  /**
   * Provide a billing split to update. Then entire billing split object **must** be
   * provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `percentage`
   * - `splitter_name`
   */
  update(
    params: BillingSplitUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingSplitUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/billing/splits/${path_id}`, { body: { id: body_id, ...body }, ...options });
  }

  /**
   * Delete the billing split record for the provided ID
   */
  delete(id: number, params?: BillingSplitDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: BillingSplitDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/billing/splits/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of created Billing Splits
   */
  createMany(
    params: BillingSplitCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingSplitCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/billing/splits/create-many', { query: { pager }, body: body, ...options });
  }

  /**
   * Delete billing split records for the provided `ids`
   */
  deleteMany(params: BillingSplitDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/billing/splits/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Billing Splits
   */
  filter(
    params?: BillingSplitFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingSplitFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<BillingSplitFilterResponse>;
  filter(
    params: BillingSplitFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingSplitFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/billing/splits/filter', { query: { pager }, body, ...options });
  }
}

export interface BillingSplitUpdateResponse {
  current_page?: number;

  data?: unknown;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingSplitCreateManyResponse {
  current_page?: number;

  data?: SplitsAPI.Split;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingSplitFilterResponse {
  current_page?: number;

  data?: SplitsAPI.Split;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingSplitUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: The unique resource ID for the billing split
   */
  body_id?: number;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

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

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export interface BillingSplitDeleteParams {
  pager?: BillingSplitDeleteParams.Pager;
}

export namespace BillingSplitDeleteParams {
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

export interface BillingSplitCreateManyParams {
  /**
   * Body param:
   */
  body: Array<unknown>;

  /**
   * Query param:
   */
  pager?: BillingSplitCreateManyParams.Pager;
}

export namespace BillingSplitCreateManyParams {
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

export interface BillingSplitDeleteManyParams {
  /**
   * Query param:
   */
  pager?: BillingSplitDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace BillingSplitDeleteManyParams {
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

export interface BillingSplitFilterParams {
  /**
   * Query param:
   */
  pager?: BillingSplitFilterParams.Pager;

  /**
   * Body param: The unique resource ID for the billing split
   */
  id?: number;

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

export namespace BillingSplitFilterParams {
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

export declare namespace BillingSplits {
  export {
    type BillingSplitUpdateResponse as BillingSplitUpdateResponse,
    type BillingSplitCreateManyResponse as BillingSplitCreateManyResponse,
    type BillingSplitFilterResponse as BillingSplitFilterResponse,
    type BillingSplitUpdateParams as BillingSplitUpdateParams,
    type BillingSplitDeleteParams as BillingSplitDeleteParams,
    type BillingSplitCreateManyParams as BillingSplitCreateManyParams,
    type BillingSplitDeleteManyParams as BillingSplitDeleteManyParams,
    type BillingSplitFilterParams as BillingSplitFilterParams,
  };
}
