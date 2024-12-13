// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Models extends APIResource {
  /**
   * Returns the created model
   */
  create(params: ModelCreateParams, options?: Core.RequestOptions): Core.APIPromise<ModelCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/investment-management/models', { query: { pager }, body, ...options });
  }

  /**
   * Returns a model based on a single ID
   */
  retrieve(
    id: number,
    query?: ModelRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<ModelRetrieveResponse>;
  retrieve(
    id: number,
    query: ModelRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/investment-management/models/${id}`, { query, ...options });
  }

  /**
   * Provide an Investment Model update. Then entire Investment Model object **must**
   * be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `strategy_allocations`
   */
  update(params: ModelUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ModelUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/investment-management/models/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Returns a list of models within the data field
   */
  list(query?: ModelListParams, options?: Core.RequestOptions): Core.APIPromise<ModelListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ModelListResponse>;
  list(
    query: ModelListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/investment-management/models', { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id of item deleted, if
   * deletion was successful
   */
  delete(id: number, params?: ModelDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: ModelDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/investment-management/models/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns the "OK" message and a json object with the number of items deleted, if
   * deletion was successful
   */
  deleteMany(params: ModelDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/investment-management/models/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Model
   */
  filter(params?: ModelFilterParams, options?: Core.RequestOptions): Core.APIPromise<ModelFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<ModelFilterResponse>;
  filter(
    params: ModelFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ModelFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/investment-management/models/filter', { query: { pager }, body, ...options });
  }
}

export interface Model {
  /**
   * Unique ID for this model object
   */
  id?: number;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Id of the firm this model is associated with
   */
  firm_id?: number;

  /**
   * Name for the model
   */
  name?: string;

  /**
   * Strategy allocation associated with this model
   */
  strategy_allocations?: Array<Model.StrategyAllocation>;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace Model {
  export interface StrategyAllocation {
    /**
     * Unique ID for this strategy allocation
     */
    id?: number;

    /**
     * Model Id for this strategy allocation
     */
    model_id?: number;

    /**
     * Strategy ID for this strategy allocation
     */
    strategy_id?: number;

    /**
     * Weight of the strategy allocation associated to the investment model
     */
    weight?: number;
  }
}

export type Models = Array<Model>;

export interface ModelCreateResponse {
  current_page?: number;

  data?: Model;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ModelRetrieveResponse {
  current_page?: number;

  data?: Model;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ModelUpdateResponse {
  current_page?: number;

  data?: Model;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ModelListResponse {
  current_page?: number;

  data?: Models;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ModelFilterResponse {
  current_page?: number;

  data?: Models;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ModelCreateParams {
  /**
   * Query param:
   */
  pager?: ModelCreateParams.Pager;

  /**
   * Body param: Id of the firm this model is associated with
   */
  firm_id?: number;

  /**
   * Body param: Name for the model
   */
  name?: string;

  /**
   * Body param: Strategy allocation associated with this model
   */
  strategy_allocations?: Array<ModelCreateParams.StrategyAllocation>;
}

export namespace ModelCreateParams {
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

  export interface StrategyAllocation {
    /**
     * Strategy ID for this strategy allocation
     */
    strategy_id?: number;

    /**
     * Weight of the strategy allocation associated to the investment model
     */
    weight?: number;
  }
}

export interface ModelRetrieveParams {
  pager?: ModelRetrieveParams.Pager;
}

export namespace ModelRetrieveParams {
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

export interface ModelUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique ID for this model object
   */
  body_id?: number;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: Id of the firm this model is associated with
   */
  firm_id?: number;

  /**
   * Body param: Name for the model
   */
  name?: string;

  /**
   * Body param: Strategy allocation associated with this model
   */
  strategy_allocations?: Array<ModelUpdateParams.StrategyAllocation>;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace ModelUpdateParams {
  export interface StrategyAllocation {
    /**
     * Unique ID for this strategy allocation
     */
    id?: number;

    /**
     * Model Id for this strategy allocation
     */
    model_id?: number;

    /**
     * Strategy ID for this strategy allocation
     */
    strategy_id?: number;

    /**
     * Weight of the strategy allocation associated to the investment model
     */
    weight?: number;
  }
}

export interface ModelListParams {
  pager?: ModelListParams.Pager;
}

export namespace ModelListParams {
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

export interface ModelDeleteParams {
  pager?: ModelDeleteParams.Pager;
}

export namespace ModelDeleteParams {
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

export interface ModelDeleteManyParams {
  /**
   * Query param:
   */
  pager?: ModelDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace ModelDeleteManyParams {
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

export interface ModelFilterParams {
  /**
   * Query param:
   */
  pager?: ModelFilterParams.Pager;

  /**
   * Body param: Unique ID for this model object
   */
  id?: number;

  /**
   * Body param: The date the model was created
   */
  created_at_utc?: string;

  /**
   * Body param: Id of the firm this model is associated with
   */
  firm_id?: number;

  /**
   * Body param: Name for the model
   */
  name?: string;

  /**
   * Body param: The date the model was created
   */
  updated_at_utc?: string;
}

export namespace ModelFilterParams {
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

export declare namespace Models {
  export {
    type Model as Model,
    type Models as Models,
    type ModelCreateResponse as ModelCreateResponse,
    type ModelRetrieveResponse as ModelRetrieveResponse,
    type ModelUpdateResponse as ModelUpdateResponse,
    type ModelListResponse as ModelListResponse,
    type ModelFilterResponse as ModelFilterResponse,
    type ModelCreateParams as ModelCreateParams,
    type ModelRetrieveParams as ModelRetrieveParams,
    type ModelUpdateParams as ModelUpdateParams,
    type ModelListParams as ModelListParams,
    type ModelDeleteParams as ModelDeleteParams,
    type ModelDeleteManyParams as ModelDeleteManyParams,
    type ModelFilterParams as ModelFilterParams,
  };
}
