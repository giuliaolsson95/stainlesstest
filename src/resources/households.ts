// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as ReportingHouseholdsAPI from './reporting/households';

export class Households extends APIResource {
  /**
   * Returns a list of created Households
   */
  createMany(
    params: HouseholdCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HouseholdCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/reporting/households/create-many', {
      query: { pager },
      body: body,
      ...options,
    });
  }

  /**
   * Return a filtered list of all Households
   */
  filter(
    params?: HouseholdFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HouseholdFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<HouseholdFilterResponse>;
  filter(
    params: HouseholdFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HouseholdFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/reporting/households/filter', { query: { pager }, body, ...options });
  }

  /**
   * Provide a map keyed on string `account_id` with value of the `household` the
   * `account_id` should be mapped to.
   *
   * **Example Request Body:**
   *
   * ```json
   * {
   *   "123456": 23,
   *   "123457": 23,
   *   "123458": 23,
   *   "123459": 24,
   *   "123460": 24,
   *   "123461": 24
   * }
   * ```
   *
   * The above payload would assign account IDs `123456`, `123457`, and `123458` to
   * `household_id` 23. While the following accounts are mapped to `household_id` 24.
   *
   * **NOTE:** The `/reporting/households/remap` endpoint does not support removing
   * accounts from households, only mapping accounts to specific households or
   * assigning an account from one household to another.
   *
   * Alternatively, accounts can be assigned/unassigned households by updating the
   * `household_id` on account(s) records directly via `PUT` requests.
   *
   * [Update a single account](https://docs.bridgeft.com/reference/readupdatedaccount-1)
   * [Update multiple accounts](https://docs.bridgeft.com/reference/readupdatedaccounts-1)
   */
  remap(body: HouseholdRemapParams, options?: Core.RequestOptions): Core.APIPromise<unknown> {
    return this._client.post('/reporting/households/remap', { body, ...options });
  }
}

export interface HouseholdCreateManyResponse {
  current_page?: number;

  data?: ReportingHouseholdsAPI.Households;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface HouseholdFilterResponse {
  current_page?: number;

  data?: ReportingHouseholdsAPI.Households;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export type HouseholdRemapResponse = unknown;

export interface HouseholdCreateManyParams {
  /**
   * Body param:
   */
  body: Array<unknown>;

  /**
   * Query param:
   */
  pager?: HouseholdCreateManyParams.Pager;
}

export namespace HouseholdCreateManyParams {
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

export interface HouseholdFilterParams {
  /**
   * Query param:
   */
  pager?: HouseholdFilterParams.Pager;

  /**
   * Body param: Unique household identifier
   */
  id?: number;

  /**
   * Body param: Date the household was closed, if applicable
   */
  close_date?: string | null;

  /**
   * Body param: See Entiti ID Prefixes
   */
  entity_id?: string;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Date of household inception, if applicable. May differ from opening
   * date
   */
  inception_date?: string;

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
}

export namespace HouseholdFilterParams {
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

export type HouseholdRemapParams = unknown;

export declare namespace Households {
  export {
    type HouseholdCreateManyResponse as HouseholdCreateManyResponse,
    type HouseholdFilterResponse as HouseholdFilterResponse,
    type HouseholdRemapResponse as HouseholdRemapResponse,
    type HouseholdCreateManyParams as HouseholdCreateManyParams,
    type HouseholdFilterParams as HouseholdFilterParams,
    type HouseholdRemapParams as HouseholdRemapParams,
  };
}
