// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class FeeStructures extends APIResource {
  /**
   * Returns the created Fee Structure
   */
  create(
    params: FeeStructureCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeeStructureCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/billing/fee-structures', { query: { pager }, body, ...options });
  }

  /**
   * Provide a list of fee structures to update. Then entire fee structure object
   * **must** be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `calculation_type`
   * - `collection_type`
   * - `frequency`
   * - `quarter_cycle`
   * - `balance_type`
   * - `flat_rate`
   * - `flat_dollar_fee`
   * - `semi_annual_cycle`
   * - `annual_cycle`
   * - `tiers`
   */
  update(
    body: FeeStructureUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeeStructureUpdateResponse> {
    return this._client.put('/billing/fee-structures', { body, ...options });
  }

  /**
   * Returns an enveloped list of Fee Structures.
   */
  list(
    query?: FeeStructureListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeeStructureListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FeeStructureListResponse>;
  list(
    query: FeeStructureListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FeeStructureListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/billing/fee-structures', { query, ...options });
  }
}

export interface FeeStructureCreateResponse {
  current_page?: number;

  data?: Shared.FeeStructure;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface FeeStructureUpdateResponse {
  current_page?: number;

  data?: Shared.FeeStructures;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface FeeStructureListResponse {
  current_page?: number;

  data?: Shared.FeeStructures;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface FeeStructureCreateParams {
  /**
   * Query param:
   */
  pager?: FeeStructureCreateParams.Pager;

  /**
   * Body param: E for end of period balance, A for average daily balance, P for
   * ending period balance w/ adjustment for flows, C for ending period balance
   * w/adjustment for flows less cash
   */
  balance_type?: 'E' | 'A' | 'P' | 'C';

  /**
   * Body param: See Billing Calculation Types
   */
  calculation_type?: string;

  /**
   * Body param: R for Flat Rate, A for Flat Amount, G for Flat Group, D for Drop
   * Through, T for Tiered Fee, and F for Free Fee
   */
  collection_type?: 'R' | 'A' | 'G' | 'D' | 'T' | 'F';

  /**
   * Body param: The user ID of the creator User
   */
  created_by_user_id?: number | null;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: The flat dollar fee for this Fee Structure
   */
  flat_dollar_fee?: number | null;

  /**
   * Body param: The flat rate for this Fee Structure. Must be between 0 and 99
   * inclusive. Will be stored and converted to a Percentage. (i.e. 1 -> 1% and 0.25
   * -> 0.25%)
   */
  flat_rate?: number;

  /**
   * Body param: See Frequency Codes
   */
  frequency?: 'M' | 'Q';

  /**
   * Body param: The name of this Fee Structure
   */
  name?: string;

  /**
   * Body param: See Billing Quarter Cycle Codes
   */
  quarter_cycle?: number;

  /**
   * Body param: The slugified name of this Fee Structure
   */
  slug?: string;

  /**
   * Body param: Tiers associated with the fee structure
   */
  tiers?: Array<FeeStructureCreateParams.Tier>;
}

export namespace FeeStructureCreateParams {
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

  export interface Tier {
    /**
     * Id associated with the tier object
     */
    id?: number;

    /**
     * Fee structure id associated with this tier
     */
    fee_structure_id?: number;

    /**
     * Maximum balance for the tier
     */
    max_balance?: number | null;

    /**
     * Minimum balance for the tier
     */
    min_balance?: number;

    /**
     * Rate for the tier
     */
    rate?: number;
  }
}

export type FeeStructureUpdateParams = Shared.FeeStructures;

export interface FeeStructureListParams {
  pager?: FeeStructureListParams.Pager;
}

export namespace FeeStructureListParams {
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

export declare namespace FeeStructures {
  export {
    type FeeStructureCreateResponse as FeeStructureCreateResponse,
    type FeeStructureUpdateResponse as FeeStructureUpdateResponse,
    type FeeStructureListResponse as FeeStructureListResponse,
    type FeeStructureCreateParams as FeeStructureCreateParams,
    type FeeStructureUpdateParams as FeeStructureUpdateParams,
    type FeeStructureListParams as FeeStructureListParams,
  };
}
