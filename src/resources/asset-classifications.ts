// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class AssetClassifications extends APIResource {
  /**
   * Returns the created asset classification
   */
  create(
    params: AssetClassificationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/asset-classifications', { query: { pager }, body, ...options });
  }

  /**
   * Returns an asset classification based on a single ID
   */
  retrieve(
    id: number,
    query?: AssetClassificationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<AssetClassificationRetrieveResponse>;
  retrieve(
    id: number,
    query: AssetClassificationRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/reporting/asset-classifications/${id}`, { query, ...options });
  }

  /**
   * Provide a list Asset Classifications to update. Then entire Asset Classification
   * object **must** be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `security_id`
   * - `class_tag_id`
   */
  update(
    body: AssetClassificationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationUpdateResponse> {
    return this._client.put('/reporting/asset-classifications', { body, ...options });
  }

  /**
   * Returns a list of asset classifications within the data field
   */
  list(
    query?: AssetClassificationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AssetClassificationListResponse>;
  list(
    query: AssetClassificationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/reporting/asset-classifications', { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id of item deleted, if
   * deletion was successful
   */
  delete(
    id: number,
    params?: AssetClassificationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: AssetClassificationDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/reporting/asset-classifications/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of created Asset Classifications
   */
  createMany(
    params: AssetClassificationCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/reporting/asset-classifications/create-many', {
      query: { pager },
      body: body,
      ...options,
    });
  }

  /**
   * Returns the "OK" message and a json object with the number of items deleted, if
   * deletion was successful
   */
  deleteMany(
    params: AssetClassificationDeleteManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/asset-classifications/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Asset Classifications
   */
  filter(
    params?: AssetClassificationFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<AssetClassificationFilterResponse>;
  filter(
    params: AssetClassificationFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/reporting/asset-classifications/filter', {
      query: { pager },
      body,
      ...options,
    });
  }

  /**
   * Provide an Asset Classification to update. Then entire Asset Classification
   * object **must** be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `security_id`
   * - `class_tag_id`
   */
  updateSingle(
    params: AssetClassificationUpdateSingleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AssetClassificationUpdateSingleResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/reporting/asset-classifications/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }
}

export interface AssetClassification {
  /**
   * Unique ID for this asset classification object
   */
  id?: number;

  /**
   * ID of the class tag for the classification
   */
  class_tag_id?: number;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * ID of the user that created the classification
   */
  created_by_user_id?: number;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * ID of the security being classified
   */
  security_id?: number;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type AssetClassifications = Array<AssetClassification>;

export type AssetClassifications = Array<AssetClassification>;

export interface AssetClassificationCreateResponse {
  current_page?: number;

  data?: AssetClassification;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetClassificationRetrieveResponse {
  current_page?: number;

  data?: AssetClassification;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetClassificationUpdateResponse {
  current_page?: number;

  data?: AssetClassification;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetClassificationListResponse {
  current_page?: number;

  data?: AssetClassifications;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetClassificationCreateManyResponse {
  current_page?: number;

  data?: AssetClassifications;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetClassificationFilterResponse {
  current_page?: number;

  data?: AssetClassifications;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetClassificationUpdateSingleResponse {
  current_page?: number;

  data?: AssetClassification;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AssetClassificationCreateParams {
  /**
   * Query param:
   */
  pager?: AssetClassificationCreateParams.Pager;

  /**
   * Body param: ID of the class tag for the classification
   */
  class_tag_id?: number;

  /**
   * Body param: ID of the user that created the classification
   */
  created_by_user_id?: number;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: ID of the security being classified
   */
  security_id?: number;
}

export namespace AssetClassificationCreateParams {
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

export interface AssetClassificationRetrieveParams {
  pager?: AssetClassificationRetrieveParams.Pager;
}

export namespace AssetClassificationRetrieveParams {
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

export type AssetClassificationUpdateParams = AssetClassifications;

export interface AssetClassificationListParams {
  pager?: AssetClassificationListParams.Pager;
}

export namespace AssetClassificationListParams {
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

export interface AssetClassificationDeleteParams {
  pager?: AssetClassificationDeleteParams.Pager;
}

export namespace AssetClassificationDeleteParams {
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

export interface AssetClassificationCreateManyParams {
  /**
   * Body param:
   */
  body: Array<AssetClassificationCreateManyParams.Body>;

  /**
   * Query param:
   */
  pager?: AssetClassificationCreateManyParams.Pager;
}

export namespace AssetClassificationCreateManyParams {
  export interface Body {
    /**
     * ID of the class tag for the classification
     */
    class_tag_id?: number;

    /**
     * ID of the user that created the classification
     */
    created_by_user_id?: number;

    /**
     * ID of the owning firm
     */
    firm_id?: number;

    /**
     * ID of the security being classified
     */
    security_id?: number;
  }

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

export interface AssetClassificationDeleteManyParams {
  /**
   * Query param:
   */
  pager?: AssetClassificationDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace AssetClassificationDeleteManyParams {
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

export interface AssetClassificationFilterParams {
  /**
   * Query param:
   */
  pager?: AssetClassificationFilterParams.Pager;

  /**
   * Body param: Unique ID for this asset classification object
   */
  id?: number;

  /**
   * Body param: ID of the class tag for the classification
   */
  class_tag_id?: number;

  /**
   * Body param: ID of the user that created the classification
   */
  created_by_user_id?: number;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: ID of the security being classified
   */
  security_id?: number;
}

export namespace AssetClassificationFilterParams {
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

export interface AssetClassificationUpdateSingleParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique ID for this asset classification object
   */
  body_id?: number;

  /**
   * Body param: ID of the class tag for the classification
   */
  class_tag_id?: number;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: ID of the user that created the classification
   */
  created_by_user_id?: number;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: ID of the security being classified
   */
  security_id?: number;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export declare namespace AssetClassifications {
  export {
    type AssetClassification as AssetClassification,
    type AssetClassifications as AssetClassifications,
    type AssetClassificationCreateResponse as AssetClassificationCreateResponse,
    type AssetClassificationRetrieveResponse as AssetClassificationRetrieveResponse,
    type AssetClassificationUpdateResponse as AssetClassificationUpdateResponse,
    type AssetClassificationListResponse as AssetClassificationListResponse,
    type AssetClassificationCreateManyResponse as AssetClassificationCreateManyResponse,
    type AssetClassificationFilterResponse as AssetClassificationFilterResponse,
    type AssetClassificationUpdateSingleResponse as AssetClassificationUpdateSingleResponse,
    type AssetClassificationCreateParams as AssetClassificationCreateParams,
    type AssetClassificationRetrieveParams as AssetClassificationRetrieveParams,
    type AssetClassificationUpdateParams as AssetClassificationUpdateParams,
    type AssetClassificationListParams as AssetClassificationListParams,
    type AssetClassificationDeleteParams as AssetClassificationDeleteParams,
    type AssetClassificationCreateManyParams as AssetClassificationCreateManyParams,
    type AssetClassificationDeleteManyParams as AssetClassificationDeleteManyParams,
    type AssetClassificationFilterParams as AssetClassificationFilterParams,
    type AssetClassificationUpdateSingleParams as AssetClassificationUpdateSingleParams,
  };
}
