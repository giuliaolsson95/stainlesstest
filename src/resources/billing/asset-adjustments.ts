// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class AssetAdjustments extends APIResource {
  /**
   * Returns a created Asset Adjustment
   */
  create(
    params: AssetAdjustmentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/billing/asset-adjustments', { query: { pager }, body, ...options });
  }

  /**
   * Returns an Asset Adjustment based on a single ID
   */
  retrieve(
    id: number,
    query?: AssetAdjustmentRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<AssetAdjustmentRetrieveResponse>;
  retrieve(
    id: number,
    query: AssetAdjustmentRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/billing/asset-adjustments/${id}`, { query, ...options });
  }

  /**
   * Provide an asset adjustment to update. Then entire asset adjustment object
   * **must** be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `adjustment_type`
   * - `level`
   * - `security_ids`
   * - `weight`
   */
  update(
    params: AssetAdjustmentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/billing/asset-adjustments/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Returns a list of Asset Adjustments within the data field
   */
  list(
    query?: AssetAdjustmentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AssetAdjustmentListResponse>;
  list(
    query: AssetAdjustmentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/billing/asset-adjustments', { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id of item deleted, if
   * deletion was successful
   */
  delete(
    id: number,
    params?: AssetAdjustmentDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: AssetAdjustmentDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/billing/asset-adjustments/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AssetAdjustment {
  /**
   * The unique resource ID for this Asset Adjustment
   */
  id?: number;

  /**
   * i for inclusion, e for exclusion
   */
  adjustment_type?: 'i' | 'e';

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * f for firm-wide, a for the account level
   */
  level?: 'f' | 'a';

  /**
   * The name of this Asset Adjustment
   */
  name?: string;

  /**
   * List of security ids associated with this asset adjustment
   */
  security_ids?: Array<number>;

  /**
   * The sluggified name of this Asset Adjustment
   */
  slug?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;

  /**
   * Weight of the adjusted asset
   */
  weight?: number;
}

export type AssetAdjustments = Array<AssetAdjustment>;

export interface AssetAdjustmentCreateResponse {
  current_page?: number;

  data?: AssetAdjustment;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetAdjustmentRetrieveResponse {
  current_page?: number;

  data?: AssetAdjustment;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetAdjustmentUpdateResponse {
  current_page?: number;

  data?: AssetAdjustment;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetAdjustmentListResponse {
  current_page?: number;

  data?: AssetAdjustments;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetAdjustmentCreateParams {
  /**
   * Query param:
   */
  pager?: AssetAdjustmentCreateParams.Pager;

  /**
   * Body param: i for inclusion, e for exclusion
   */
  adjustment_type?: 'i' | 'e';

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: f for firm-wide, a for the account level
   */
  level?: 'f' | 'a';

  /**
   * Body param: The name of this Asset Adjustment
   */
  name?: string;

  /**
   * Body param: The sluggified name of this Asset Adjustment
   */
  slug?: string;

  /**
   * Body param: Weight of the adjusted asset
   */
  weight?: number;
}

export namespace AssetAdjustmentCreateParams {
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

export interface AssetAdjustmentRetrieveParams {
  pager?: AssetAdjustmentRetrieveParams.Pager;
}

export namespace AssetAdjustmentRetrieveParams {
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

export interface AssetAdjustmentUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: The unique resource ID for this Asset Adjustment
   */
  body_id?: number;

  /**
   * Body param: i for inclusion, e for exclusion
   */
  adjustment_type?: 'i' | 'e';

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: f for firm-wide, a for the account level
   */
  level?: 'f' | 'a';

  /**
   * Body param: The name of this Asset Adjustment
   */
  name?: string;

  /**
   * Body param: List of security ids associated with this asset adjustment
   */
  security_ids?: Array<number>;

  /**
   * Body param: The sluggified name of this Asset Adjustment
   */
  slug?: string;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;

  /**
   * Body param: Weight of the adjusted asset
   */
  weight?: number;
}

export interface AssetAdjustmentListParams {
  pager?: AssetAdjustmentListParams.Pager;
}

export namespace AssetAdjustmentListParams {
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

export interface AssetAdjustmentDeleteParams {
  pager?: AssetAdjustmentDeleteParams.Pager;
}

export namespace AssetAdjustmentDeleteParams {
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

export declare namespace AssetAdjustments {
  export {
    type AssetAdjustment as AssetAdjustment,
    type AssetAdjustments as AssetAdjustments,
    type AssetAdjustmentCreateResponse as AssetAdjustmentCreateResponse,
    type AssetAdjustmentRetrieveResponse as AssetAdjustmentRetrieveResponse,
    type AssetAdjustmentUpdateResponse as AssetAdjustmentUpdateResponse,
    type AssetAdjustmentListResponse as AssetAdjustmentListResponse,
    type AssetAdjustmentCreateParams as AssetAdjustmentCreateParams,
    type AssetAdjustmentRetrieveParams as AssetAdjustmentRetrieveParams,
    type AssetAdjustmentUpdateParams as AssetAdjustmentUpdateParams,
    type AssetAdjustmentListParams as AssetAdjustmentListParams,
    type AssetAdjustmentDeleteParams as AssetAdjustmentDeleteParams,
  };
}
