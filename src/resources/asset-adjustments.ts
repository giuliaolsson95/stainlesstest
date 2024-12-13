// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as BillingAssetAdjustmentsAPI from './billing/asset-adjustments';

export class AssetAdjustments extends APIResource {
  /**
   * Returns the created Asset Adjustment
   */
  createMany(
    params: AssetAdjustmentCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/billing/asset-adjustments/create-many', {
      query: { pager },
      body: body,
      ...options,
    });
  }

  /**
   * Returns the "OK" message and a json object with the number of items deleted, if
   * deletion was successful
   */
  deleteMany(params: AssetAdjustmentDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/billing/asset-adjustments/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Asset Adjustment
   */
  filter(
    params?: AssetAdjustmentFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<AssetAdjustmentFilterResponse>;
  filter(
    params: AssetAdjustmentFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetAdjustmentFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/billing/asset-adjustments/filter', { query: { pager }, body, ...options });
  }
}

export interface AssetAdjustmentCreateManyResponse {
  current_page?: number;

  data?: BillingAssetAdjustmentsAPI.AssetAdjustments;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetAdjustmentFilterResponse {
  current_page?: number;

  data?: BillingAssetAdjustmentsAPI.AssetAdjustments;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetAdjustmentCreateManyParams {
  /**
   * Body param:
   */
  body: Array<BillingAssetAdjustmentsAPI.AssetAdjustment>;

  /**
   * Query param:
   */
  pager?: AssetAdjustmentCreateManyParams.Pager;
}

export namespace AssetAdjustmentCreateManyParams {
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

export interface AssetAdjustmentDeleteManyParams {
  /**
   * Query param:
   */
  pager?: AssetAdjustmentDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace AssetAdjustmentDeleteManyParams {
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

export interface AssetAdjustmentFilterParams {
  /**
   * Query param:
   */
  pager?: AssetAdjustmentFilterParams.Pager;

  /**
   * Body param: The unique resource ID for this Asset Adjustment
   */
  id?: number;

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
   * Body param: List of security ids associated with this asset adjustment
   */
  security_ids?: Array<number>;

  /**
   * Body param: The sluggified name of this Asset Adjustment
   */
  slug?: string;
}

export namespace AssetAdjustmentFilterParams {
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
    type AssetAdjustmentCreateManyResponse as AssetAdjustmentCreateManyResponse,
    type AssetAdjustmentFilterResponse as AssetAdjustmentFilterResponse,
    type AssetAdjustmentCreateManyParams as AssetAdjustmentCreateManyParams,
    type AssetAdjustmentDeleteManyParams as AssetAdjustmentDeleteManyParams,
    type AssetAdjustmentFilterParams as AssetAdjustmentFilterParams,
  };
}
