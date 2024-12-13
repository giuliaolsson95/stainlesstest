// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class BillingFeeStructures extends APIResource {
  /**
   * Returns the fee structure record for the provided ID
   */
  retrieve(
    id: number,
    query?: BillingFeeStructureRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingFeeStructureRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<BillingFeeStructureRetrieveResponse>;
  retrieve(
    id: number,
    query: BillingFeeStructureRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingFeeStructureRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/billing/fee-structures/${id}`, { query, ...options });
  }

  /**
   * Provide a fee structure to update. Then entire fee structure object **must** be
   * provided to the `PUT` request.
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
    params: BillingFeeStructureUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingFeeStructureUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/billing/fee-structures/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Deletes the record for the provided fee structure ID.
   */
  delete(
    id: number,
    params?: BillingFeeStructureDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: BillingFeeStructureDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/billing/fee-structures/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of created Fee Structures
   */
  createMany(
    params: BillingFeeStructureCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingFeeStructureCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/billing/fee-structures/create-many', {
      query: { pager },
      body: body,
      ...options,
    });
  }

  /**
   * Deletes the records for the provided Fee Structure `ids`
   */
  deleteMany(
    params: BillingFeeStructureDeleteManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/billing/fee-structures/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Fee Structure
   */
  filter(
    params?: BillingFeeStructureFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingFeeStructureFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<BillingFeeStructureFilterResponse>;
  filter(
    params: BillingFeeStructureFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingFeeStructureFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/billing/fee-structures/filter', { query: { pager }, body, ...options });
  }
}

export interface BillingFeeStructureRetrieveResponse {
  current_page?: number;

  data?: Shared.FeeStructure;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingFeeStructureUpdateResponse {
  current_page?: number;

  data?: Shared.FeeStructure;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingFeeStructureCreateManyResponse {
  current_page?: number;

  data?: Shared.FeeStructures;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingFeeStructureFilterResponse {
  current_page?: number;

  data?: Shared.FeeStructures;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BillingFeeStructureRetrieveParams {
  pager?: BillingFeeStructureRetrieveParams.Pager;
}

export namespace BillingFeeStructureRetrieveParams {
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

export interface BillingFeeStructureUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: The unique resource ID for this Fee Structure
   */
  body_id?: number;

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
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: The user ID of the creator User
   */
  created_by_user_id?: number;

  /**
   * Body param: The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * Body param: The flat dollar fee for this Fee Structure
   */
  flat_dollar_fee?: number;

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
  tiers?: Array<BillingFeeStructureUpdateParams.Tier>;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace BillingFeeStructureUpdateParams {
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
    max_balance?: number;

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

export interface BillingFeeStructureDeleteParams {
  pager?: BillingFeeStructureDeleteParams.Pager;
}

export namespace BillingFeeStructureDeleteParams {
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

export interface BillingFeeStructureCreateManyParams {
  /**
   * Body param:
   */
  body: Array<unknown>;

  /**
   * Query param:
   */
  pager?: BillingFeeStructureCreateManyParams.Pager;
}

export namespace BillingFeeStructureCreateManyParams {
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

export interface BillingFeeStructureDeleteManyParams {
  /**
   * Query param:
   */
  pager?: BillingFeeStructureDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace BillingFeeStructureDeleteManyParams {
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

export interface BillingFeeStructureFilterParams {
  /**
   * Query param:
   */
  pager?: BillingFeeStructureFilterParams.Pager;

  /**
   * Body param: The unique resource ID for this Fee Structure
   */
  id?: number;

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
}

export namespace BillingFeeStructureFilterParams {
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

export declare namespace BillingFeeStructures {
  export {
    type BillingFeeStructureRetrieveResponse as BillingFeeStructureRetrieveResponse,
    type BillingFeeStructureUpdateResponse as BillingFeeStructureUpdateResponse,
    type BillingFeeStructureCreateManyResponse as BillingFeeStructureCreateManyResponse,
    type BillingFeeStructureFilterResponse as BillingFeeStructureFilterResponse,
    type BillingFeeStructureRetrieveParams as BillingFeeStructureRetrieveParams,
    type BillingFeeStructureUpdateParams as BillingFeeStructureUpdateParams,
    type BillingFeeStructureDeleteParams as BillingFeeStructureDeleteParams,
    type BillingFeeStructureCreateManyParams as BillingFeeStructureCreateManyParams,
    type BillingFeeStructureDeleteManyParams as BillingFeeStructureDeleteManyParams,
    type BillingFeeStructureFilterParams as BillingFeeStructureFilterParams,
  };
}
