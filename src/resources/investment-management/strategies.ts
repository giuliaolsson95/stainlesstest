// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Strategies extends APIResource {
  /**
   * Returns the created strategy
   */
  create(
    params: StrategyCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StrategyCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/investment-management/strategies', { query: { pager }, body, ...options });
  }

  /**
   * Returns a strategy based on a single ID
   */
  retrieve(
    id: number,
    query?: StrategyRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StrategyRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<StrategyRetrieveResponse>;
  retrieve(
    id: number,
    query: StrategyRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StrategyRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/investment-management/strategies/${id}`, { query, ...options });
  }

  /**
   * Provide an Investment Strategy update. Then entire Investment Strategy object
   * **must** be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `description`
   * - `provider`
   * - `investment_minimum`
   * - `fee`
   * - `security_allocations`
   */
  update(
    params: StrategyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StrategyUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/investment-management/strategies/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Returns a list of strategies within the data field
   */
  list(query?: StrategyListParams, options?: Core.RequestOptions): Core.APIPromise<StrategyListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<StrategyListResponse>;
  list(
    query: StrategyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StrategyListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/investment-management/strategies', { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id of item deleted, if
   * deletion was successful
   */
  delete(id: number, params?: StrategyDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: StrategyDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/investment-management/strategies/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of created strategies
   */
  createMany(
    params: StrategyCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StrategyCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/investment-management/strategies/create-many', {
      query: { pager },
      body: body,
      ...options,
    });
  }

  /**
   * Returns the "OK" message and a json object with the number of items deleted, if
   * deletion was successful
   */
  deleteMany(params: StrategyDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/investment-management/strategies/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Strategy
   */
  filter(
    params?: StrategyFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<StrategyFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<StrategyFilterResponse>;
  filter(
    params: StrategyFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StrategyFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/investment-management/strategies/filter', {
      query: { pager },
      body,
      ...options,
    });
  }
}

export interface StrategyCreateResponse {
  current_page?: number;

  data?: Shared.Strategy;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface StrategyRetrieveResponse {
  current_page?: number;

  data?: Shared.Strategy;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface StrategyUpdateResponse {
  current_page?: number;

  data?: Shared.Strategy;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface StrategyListResponse {
  current_page?: number;

  data?: Shared.Strategies;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface StrategyCreateManyResponse {
  current_page?: number;

  data?: Shared.Strategies;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface StrategyFilterResponse {
  current_page?: number;

  data?: Shared.Strategies;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface StrategyCreateParams {
  /**
   * Query param:
   */
  pager?: StrategyCreateParams.Pager;

  /**
   * Body param: Id of the firm this strategy is associated with
   */
  firm_id?: number;

  /**
   * Body param: Name for the strategy
   */
  name?: string;

  /**
   * Body param:
   */
  security_allocations?: Array<StrategyCreateParams.SecurityAllocation>;
}

export namespace StrategyCreateParams {
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

  export interface SecurityAllocation {
    /**
     * Security Id associated with the strategy
     */
    security_id?: number;

    /**
     * Weight of the security allocation associated with the strategy
     */
    weight?: number;
  }
}

export interface StrategyRetrieveParams {
  pager?: StrategyRetrieveParams.Pager;
}

export namespace StrategyRetrieveParams {
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

export interface StrategyUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique ID for this strategy object
   */
  body_id?: number;

  /**
   * Body param: Asset type of the strategy
   */
  asset_type?: string;

  /**
   * Body param: Id of the benchmark associated with this strategy
   */
  benchmark_id?: number;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: Description of the strategy
   */
  description?: string;

  /**
   * Body param: Is environmental, social, governance?
   */
  esg?: boolean;

  /**
   * Body param: Identifier for etc action
   */
  etf_action_identifier?: string;

  /**
   * Body param: Is the fact sheet available?
   */
  fact_sheet_available?: boolean;

  /**
   * Body param: Fee reported on the strategy
   */
  fee?: number;

  /**
   * Body param: Id of the firm this strategy is associated with
   */
  firm_id?: number;

  /**
   * Body param: Investment minimum
   */
  investment_minimum?: number;

  /**
   * Body param: Name for the strategy
   */
  name?: string;

  /**
   * Body param: Provider of the strategy
   */
  provider?: string;

  /**
   * Body param: Risk category of the strategy. CP for Capital Preservation, CO for
   * Conservative, MC for Moderate Conservative, MO for Moderate, MG for Moderate
   * Growth, GR for Growth, AG for Aggressive Growth
   */
  risk_category?: 'CP' | 'CO' | 'MC' | 'MO' | 'MG' | 'GR' | 'AG';

  /**
   * Body param: Search tags for the strategy
   */
  search_tags?: Array<string>;

  /**
   * Body param: Security allocation associated with this model
   */
  security_allocations?: Array<StrategyUpdateParams.SecurityAllocation>;

  /**
   * Body param: Type of the strategy.
   */
  strategy_type?: 'Core' | 'Satellite' | 'Income' | 'Alternatives';

  /**
   * Body param: Is the tax managed?
   */
  tax_managed?: boolean;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace StrategyUpdateParams {
  export interface SecurityAllocation {
    /**
     * Unique ID for this security allocation
     */
    id?: number;

    /**
     * Security Id associated with the strategy
     */
    security_id?: number;

    /**
     * ID of the associated strategy
     */
    strategy_id?: number;

    /**
     * Weight of the security allocation associated with the strategy
     */
    weight?: number;
  }
}

export interface StrategyListParams {
  pager?: StrategyListParams.Pager;
}

export namespace StrategyListParams {
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

export interface StrategyDeleteParams {
  pager?: StrategyDeleteParams.Pager;
}

export namespace StrategyDeleteParams {
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

export interface StrategyCreateManyParams {
  /**
   * Body param:
   */
  body: Array<unknown>;

  /**
   * Query param:
   */
  pager?: StrategyCreateManyParams.Pager;
}

export namespace StrategyCreateManyParams {
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

export interface StrategyDeleteManyParams {
  /**
   * Query param:
   */
  pager?: StrategyDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace StrategyDeleteManyParams {
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

export interface StrategyFilterParams {
  /**
   * Query param:
   */
  pager?: StrategyFilterParams.Pager;

  /**
   * Body param: Unique ID for this strategy object
   */
  id?: number;

  /**
   * Body param: Asset type of the strategy
   */
  asset_type?: string;

  /**
   * Body param: Id of the benchmark associated with this strategy
   */
  benchmark_id?: number;

  /**
   * Body param: The date the model was created
   */
  created_at_utc?: string;

  /**
   * Body param: Description of the strategy
   */
  description?: string;

  /**
   * Body param: Fee reported on the strategy
   */
  fee?: number;

  /**
   * Body param: Id of the firm this strategy is associated with
   */
  firm_id?: number;

  /**
   * Body param: Investment minimum
   */
  investment_minimum?: number;

  /**
   * Body param: Name for the strategy
   */
  name?: string;

  /**
   * Body param: Provider of the strategy
   */
  provider?: string;

  /**
   * Body param: Risk category of the strategy. CP for Capital Preservation, CO for
   * Conservative, MC for Moderate Conservative, MO for Moderate, MG for Moderate
   * Growth, GR for Growth, AG for Aggressive Growth
   */
  risk_category?: 'CP' | 'CO' | 'MC' | 'MO' | 'MG' | 'GR' | 'AG';

  /**
   * Body param: Type of the strategy.
   */
  strategy_type?: 'Core' | 'Satellite' | 'Income' | 'Alternatives';

  /**
   * Body param: Is the tax managed?
   */
  tax_managed?: boolean;

  /**
   * Body param: The date the model was created
   */
  updated_at_utc?: string;
}

export namespace StrategyFilterParams {
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

export declare namespace Strategies {
  export {
    type StrategyCreateResponse as StrategyCreateResponse,
    type StrategyRetrieveResponse as StrategyRetrieveResponse,
    type StrategyUpdateResponse as StrategyUpdateResponse,
    type StrategyListResponse as StrategyListResponse,
    type StrategyCreateManyResponse as StrategyCreateManyResponse,
    type StrategyFilterResponse as StrategyFilterResponse,
    type StrategyCreateParams as StrategyCreateParams,
    type StrategyRetrieveParams as StrategyRetrieveParams,
    type StrategyUpdateParams as StrategyUpdateParams,
    type StrategyListParams as StrategyListParams,
    type StrategyDeleteParams as StrategyDeleteParams,
    type StrategyCreateManyParams as StrategyCreateManyParams,
    type StrategyDeleteManyParams as StrategyDeleteManyParams,
    type StrategyFilterParams as StrategyFilterParams,
  };
}
