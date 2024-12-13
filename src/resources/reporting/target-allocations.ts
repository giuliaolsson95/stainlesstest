// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class TargetAllocations extends APIResource {
  /**
   * Returns the created Target Allocation
   */
  create(
    params: TargetAllocationCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/target-allocations', { query: { pager }, body, ...options });
  }

  /**
   * Returns a Target Allocation based on a single ID
   */
  retrieve(
    id: number,
    query?: TargetAllocationRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<TargetAllocationRetrieveResponse>;
  retrieve(
    id: number,
    query: TargetAllocationRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/reporting/target-allocations/${id}`, { query, ...options });
  }

  /**
   * Provide a Target Allocation to update. Then entire Target Allocation object
   * **must** be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `coefficients`
   */
  update(
    params: TargetAllocationUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/reporting/target-allocations/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Returns a list of Target Allocations within the data field
   */
  list(
    query?: TargetAllocationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TargetAllocationListResponse>;
  list(
    query: TargetAllocationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/reporting/target-allocations', { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id of item deleted, if
   * deletion was successful
   */
  delete(
    id: number,
    params?: TargetAllocationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: TargetAllocationDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/reporting/target-allocations/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of created Target Allocations
   */
  createMany(
    params: TargetAllocationCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/reporting/target-allocations/create-many', {
      query: { pager },
      body: body,
      ...options,
    });
  }

  /**
   * Returns the "OK" message and a json object with the number of items deleted, if
   * deletion was successful
   */
  deleteMany(params: TargetAllocationDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/target-allocations/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Target Allocations
   */
  filter(
    params?: TargetAllocationFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<TargetAllocationFilterResponse>;
  filter(
    params: TargetAllocationFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TargetAllocationFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/reporting/target-allocations/filter', { query: { pager }, body, ...options });
  }
}

export interface TargetAllocation {
  /**
   * Unique ID for this target allocation object
   */
  id?: number;

  /**
   * Target allocation coefficient
   */
  coefficients?: Array<TargetAllocation.Coefficient>;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * Name for the target allocation
   */
  name?: number;

  /**
   * Slugified target allocation name
   */
  slug?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace TargetAllocation {
  export interface Coefficient {
    /**
     * Unique ID for this target allocation coefficient object
     */
    id?: number;

    /**
     * Asset classification tag id associated with the coefficient
     */
    class_tag_id?: number;

    /**
     * Master asset class associated with this coefficient
     */
    mac?: number;

    /**
     * Value of negative tolerance
     */
    negative_tolerance?: number;

    /**
     * Value of positive tolerance
     */
    positive_tolerance?: number;

    /**
     * Weight of the coefficient
     */
    weight?: number;
  }
}

export type TargetAllocations = Array<TargetAllocation>;

export interface TargetAllocationCreateResponse {
  current_page?: number;

  data?: TargetAllocation;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface TargetAllocationRetrieveResponse {
  current_page?: number;

  data?: TargetAllocation;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface TargetAllocationUpdateResponse {
  current_page?: number;

  data?: TargetAllocation;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface TargetAllocationListResponse {
  current_page?: number;

  data?: TargetAllocations;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface TargetAllocationCreateManyResponse {
  current_page?: number;

  data?: TargetAllocations;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface TargetAllocationFilterResponse {
  current_page?: number;

  data?: TargetAllocation;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface TargetAllocationCreateParams {
  /**
   * Query param:
   */
  pager?: TargetAllocationCreateParams.Pager;

  /**
   * Body param: Target allocation coefficient
   */
  coefficients?: Array<TargetAllocationCreateParams.Coefficient>;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Name for the target allocation
   */
  name?: string;

  /**
   * Body param: Slugified target allocation name
   */
  slug?: string;
}

export namespace TargetAllocationCreateParams {
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

  export interface Coefficient {
    /**
     * Asset classification tag id associated with the coefficient
     */
    class_tag_id?: number | null;

    /**
     * Master asset class associated with this coefficient
     */
    mac?: string;

    /**
     * Value of negative tolerance
     */
    negative_tolerance?: number;

    /**
     * Value of positive tolerance
     */
    positive_tolerance?: number;

    /**
     * Weight of the coefficient
     */
    weight?: number;
  }
}

export interface TargetAllocationRetrieveParams {
  pager?: TargetAllocationRetrieveParams.Pager;
}

export namespace TargetAllocationRetrieveParams {
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

export interface TargetAllocationUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique ID for this target allocation object
   */
  body_id?: number;

  /**
   * Body param: Target allocation coefficient
   */
  coefficients?: Array<TargetAllocationUpdateParams.Coefficient>;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Name for the target allocation
   */
  name?: number;

  /**
   * Body param: Slugified target allocation name
   */
  slug?: string;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace TargetAllocationUpdateParams {
  export interface Coefficient {
    /**
     * Unique ID for this target allocation coefficient object
     */
    id?: number;

    /**
     * Asset classification tag id associated with the coefficient
     */
    class_tag_id?: number;

    /**
     * Master asset class associated with this coefficient
     */
    mac?: number;

    /**
     * Value of negative tolerance
     */
    negative_tolerance?: number;

    /**
     * Value of positive tolerance
     */
    positive_tolerance?: number;

    /**
     * Weight of the coefficient
     */
    weight?: number;
  }
}

export interface TargetAllocationListParams {
  pager?: TargetAllocationListParams.Pager;
}

export namespace TargetAllocationListParams {
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

export interface TargetAllocationDeleteParams {
  pager?: TargetAllocationDeleteParams.Pager;
}

export namespace TargetAllocationDeleteParams {
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

export interface TargetAllocationCreateManyParams {
  /**
   * Body param:
   */
  body: Array<unknown>;

  /**
   * Query param:
   */
  pager?: TargetAllocationCreateManyParams.Pager;
}

export namespace TargetAllocationCreateManyParams {
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

export interface TargetAllocationDeleteManyParams {
  /**
   * Query param:
   */
  pager?: TargetAllocationDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace TargetAllocationDeleteManyParams {
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

export interface TargetAllocationFilterParams {
  /**
   * Query param:
   */
  pager?: TargetAllocationFilterParams.Pager;

  /**
   * Body param: Unique ID for this target allocation object
   */
  id?: number;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Name for the target allocation
   */
  name?: string;

  /**
   * Body param: Slugified target allocation name
   */
  slug?: string;
}

export namespace TargetAllocationFilterParams {
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

export declare namespace TargetAllocations {
  export {
    type TargetAllocation as TargetAllocation,
    type TargetAllocations as TargetAllocations,
    type TargetAllocationCreateResponse as TargetAllocationCreateResponse,
    type TargetAllocationRetrieveResponse as TargetAllocationRetrieveResponse,
    type TargetAllocationUpdateResponse as TargetAllocationUpdateResponse,
    type TargetAllocationListResponse as TargetAllocationListResponse,
    type TargetAllocationCreateManyResponse as TargetAllocationCreateManyResponse,
    type TargetAllocationFilterResponse as TargetAllocationFilterResponse,
    type TargetAllocationCreateParams as TargetAllocationCreateParams,
    type TargetAllocationRetrieveParams as TargetAllocationRetrieveParams,
    type TargetAllocationUpdateParams as TargetAllocationUpdateParams,
    type TargetAllocationListParams as TargetAllocationListParams,
    type TargetAllocationDeleteParams as TargetAllocationDeleteParams,
    type TargetAllocationCreateManyParams as TargetAllocationCreateManyParams,
    type TargetAllocationDeleteManyParams as TargetAllocationDeleteManyParams,
    type TargetAllocationFilterParams as TargetAllocationFilterParams,
  };
}
