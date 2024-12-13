// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Households extends APIResource {
  /**
   * Returns the created Household
   */
  create(
    params: HouseholdCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HouseholdCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/households', { query: { pager }, body, ...options });
  }

  /**
   * Returns a household based on a single ID
   */
  retrieve(
    id: number,
    query?: HouseholdRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HouseholdRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<HouseholdRetrieveResponse>;
  retrieve(
    id: number,
    query: HouseholdRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HouseholdRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/reporting/households/${id}`, { query, ...options });
  }

  /**
   * Provide a Household to update. Then entire Household object **must** be provided
   * to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `benchmarks_ids`
   */
  update(
    params: HouseholdUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HouseholdUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/reporting/households/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Returns a list of households within the data field
   */
  list(query?: HouseholdListParams, options?: Core.RequestOptions): Core.APIPromise<HouseholdListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<HouseholdListResponse>;
  list(
    query: HouseholdListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HouseholdListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/reporting/households', { query, ...options });
  }
}

export interface Household {
  /**
   * Unique household identifier
   */
  id?: number;

  /**
   * List of ids for benchmarks associated with the household
   */
  benchmarks_ids?: Array<number>;

  /**
   * Date the household was closed, if applicable
   */
  close_date?: string;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * See Entiti ID Prefixes
   */
  entity_id?: string;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * Earliest date that portfolio data was processed among accounts in this household
   */
  first_account_reporting_date?: string;

  /**
   * Date of household inception, if applicable. May differ from opening date
   */
  inception_date?: string;

  /**
   * Is this entity an account? (No)
   */
  is_account?: boolean;

  /**
   * Is this entity a household? (Yes)
   */
  is_household?: boolean;

  /**
   * Most recent date that portfolio data was processed among accounts in this
   * household
   */
  last_account_reporting_date?: string;

  /**
   * Most recent date that portfolio data was processed for this household
   */
  last_reporting_date?: string;

  /**
   * Populated from custodian data but can be modified by users
   */
  name?: string;

  /**
   * Date the household was opened
   */
  opening_date?: string;

  /**
   * @deprecated: Short name for the household object
   */
  short_name?: string;

  /**
   * @deprecated: See Account and Household Status Codes.
   */
  status?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type Households = Array<Household>;

export interface HouseholdCreateResponse {
  current_page?: number;

  data?: Household;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface HouseholdRetrieveResponse {
  current_page?: number;

  data?: Household;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface HouseholdUpdateResponse {
  current_page?: number;

  data?: Household;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface HouseholdListResponse {
  current_page?: number;

  data?: Households;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface HouseholdCreateParams {
  /**
   * Query param:
   */
  pager?: HouseholdCreateParams.Pager;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: the name of the household
   */
  name?: string;
}

export namespace HouseholdCreateParams {
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

export interface HouseholdRetrieveParams {
  pager?: HouseholdRetrieveParams.Pager;
}

export namespace HouseholdRetrieveParams {
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

export interface HouseholdUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique household identifier
   */
  body_id?: number;

  /**
   * Body param: List of ids for benchmarks associated with the household
   */
  benchmarks_ids?: Array<number>;

  /**
   * Body param: Date the household was closed, if applicable
   */
  close_date?: string;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: See Entiti ID Prefixes
   */
  entity_id?: string;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Earliest date that portfolio data was processed among accounts in
   * this household
   */
  first_account_reporting_date?: string;

  /**
   * Body param: Date of household inception, if applicable. May differ from opening
   * date
   */
  inception_date?: string;

  /**
   * Body param: Is this entity an account? (No)
   */
  is_account?: boolean;

  /**
   * Body param: Is this entity a household? (Yes)
   */
  is_household?: boolean;

  /**
   * Body param: Most recent date that portfolio data was processed among accounts in
   * this household
   */
  last_account_reporting_date?: string;

  /**
   * Body param: Most recent date that portfolio data was processed for this
   * household
   */
  last_reporting_date?: string;

  /**
   * Body param: Populated from custodian data but can be modified by users
   */
  name?: string;

  /**
   * Body param: Date the household was opened
   */
  opening_date?: string;

  /**
   * Body param: Short name for the household object
   */
  short_name?: string;

  /**
   * Body param: See Account and Household Status Codes.
   */
  status?: string;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export interface HouseholdListParams {
  pager?: HouseholdListParams.Pager;
}

export namespace HouseholdListParams {
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

export declare namespace Households {
  export {
    type Household as Household,
    type Households as Households,
    type HouseholdCreateResponse as HouseholdCreateResponse,
    type HouseholdRetrieveResponse as HouseholdRetrieveResponse,
    type HouseholdUpdateResponse as HouseholdUpdateResponse,
    type HouseholdListResponse as HouseholdListResponse,
    type HouseholdCreateParams as HouseholdCreateParams,
    type HouseholdRetrieveParams as HouseholdRetrieveParams,
    type HouseholdUpdateParams as HouseholdUpdateParams,
    type HouseholdListParams as HouseholdListParams,
  };
}
