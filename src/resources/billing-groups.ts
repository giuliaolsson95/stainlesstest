// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as JobsAPI from './jobs';

export class BillingGroups extends APIResource {
  /**
   * Returns the created billing group
   */
  create(
    params: BillingGroupCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/billing/groups', { query: { pager }, body, ...options });
  }

  /**
   * Returns a billing group record for a provided ID
   */
  retrieve(
    id: number,
    query?: BillingGroupRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<BillingGroupRetrieveResponse>;
  retrieve(
    id: number,
    query: BillingGroupRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/billing/groups/${id}`, { query, ...options });
  }

  /**
   * Provide a billing group to update. Then entire billing group object **must** be
   * provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `minimum_ids`
   * - `household_id`
   * - `assignments`
   */
  update(
    params: BillingGroupUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/billing/groups/${path_id}`, { body: { id: body_id, ...body }, ...options });
  }

  /**
   * Retrieve the enveloped list of Billing Groups
   */
  list(
    query?: BillingGroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BillingGroupListResponse>;
  list(
    query: BillingGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/billing/groups', { query, ...options });
  }

  /**
   * Deletes the billing group record for the provided ID.
   */
  delete(
    id: number,
    params?: BillingGroupDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobsAPI.Delete>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<JobsAPI.Delete>;
  delete(
    id: number,
    params: BillingGroupDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobsAPI.Delete> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/billing/groups/${id}`, { query: { pager }, ...options });
  }

  /**
   * Deletes existing Billing Groups, and recreates for the accounts of each
   * household managed by the firm
   */
  createFromHouseholds(
    params?: BillingGroupCreateFromHouseholdsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupCreateFromHouseholdsResponse>;
  createFromHouseholds(
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupCreateFromHouseholdsResponse>;
  createFromHouseholds(
    params: BillingGroupCreateFromHouseholdsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupCreateFromHouseholdsResponse> {
    if (isRequestOptions(params)) {
      return this.createFromHouseholds({}, params);
    }
    const { pager } = params;
    return this._client.post('/billing/groups/create-from-households', { query: { pager }, ...options });
  }

  /**
   * Returns a list of created Billing Groups
   */
  createMany(
    params: BillingGroupCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/billing/groups/create-many', { query: { pager }, body: body, ...options });
  }

  /**
   * Removes billing group records for the provided `ids`
   */
  deleteMany(
    params: BillingGroupDeleteManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupDeleteManyResponse> {
    const { pager, ...body } = params;
    return this._client.post('/billing/groups/delete-many', { query: { pager }, body, ...options });
  }

  /**
   * Returns a filtered list of Billing Groups
   */
  filter(
    params?: BillingGroupFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<BillingGroupFilterResponse>;
  filter(
    params: BillingGroupFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BillingGroupFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/billing/groups/filter', { query: { pager }, body, ...options });
  }

  /**
   * Delete a single assignment tied to a Billing Group
   */
  removeAssignment(
    params: BillingGroupRemoveAssignmentParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/billing/groups/remove-assignment', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface unnamed_schema_0 {
  current_page?: number;

  data?: unnamed_schema_0.Data;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace unnamed_schema_0 {
  export interface Data {
    /**
     * The unique resource ID for this Billing Group
     */
    id?: number;

    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    assignments?: Data.Assignments;

    /**
     * Timestamp for when the record was created
     */
    created_at_utc?: string;

    /**
     * The firm ID of the managing firm for this Billing Group
     */
    firm_id?: number;

    /**
     * The ID of the associated household for this Billing Group
     */
    household_id?: number;

    /**
     * A list of billing minimum ID's associated with this Billing Group
     */
    minimum_ids?: Array<number>;

    /**
     * The name of this Billing Group
     */
    name?: string;

    /**
     * The sluggified name of this Billing Group
     */
    slug?: string;

    /**
     * Timestamp for when the record was updated
     */
    updated_at_utc?: string;
  }

  export namespace Data {
    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    export interface Assignments {
      /**
       * The unique resource id for this Account Group Assignment
       */
      id?: number;

      /**
       * The related account of this assignment
       */
      account_id?: number;

      /**
       * Numerical indicator for fee location behavior. Options are 0 (charged to
       * itself), -1 (uncharged / charged to the group, where fees are distributed in
       * prorate fashion by size), or a positive integer, which represents the ID of the
       * account being charged.
       */
      fee_location?: 0 | -1;

      /**
       * The desired fee location option. Options are S (self), G (group), or A
       * (account).
       */
      fee_location_option?: 'S' | 'G' | 'A';

      /**
       * The related group of this assignment
       */
      group_id?: number;
    }
  }
}

export interface unnamed_schema_1 {
  current_page?: number;

  data?: unnamed_schema_1.Data;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace unnamed_schema_1 {
  export interface Data {
    /**
     * The unique resource ID for this Billing Group
     */
    id?: number;

    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    assignments?: Data.Assignments;

    /**
     * Timestamp for when the record was created
     */
    created_at_utc?: string;

    /**
     * The firm ID of the managing firm for this Billing Group
     */
    firm_id?: number;

    /**
     * The ID of the associated household for this Billing Group
     */
    household_id?: number;

    /**
     * A list of billing minimum ID's associated with this Billing Group
     */
    minimum_ids?: Array<number>;

    /**
     * The name of this Billing Group
     */
    name?: string;

    /**
     * The sluggified name of this Billing Group
     */
    slug?: string;

    /**
     * Timestamp for when the record was updated
     */
    updated_at_utc?: string;
  }

  export namespace Data {
    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    export interface Assignments {
      /**
       * The unique resource id for this Account Group Assignment
       */
      id?: number;

      /**
       * The related account of this assignment
       */
      account_id?: number;

      /**
       * Numerical indicator for fee location behavior. Options are 0 (charged to
       * itself), -1 (uncharged / charged to the group, where fees are distributed in
       * prorate fashion by size), or a positive integer, which represents the ID of the
       * account being charged.
       */
      fee_location?: 0 | -1;

      /**
       * The desired fee location option. Options are S (self), G (group), or A
       * (account).
       */
      fee_location_option?: 'S' | 'G' | 'A';

      /**
       * The related group of this assignment
       */
      group_id?: number;
    }
  }
}

export interface unnamed_schema_2 {
  current_page?: number;

  data?: unnamed_schema_2.Data;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace unnamed_schema_2 {
  export interface Data {
    /**
     * The unique resource ID for this Billing Group
     */
    id?: number;

    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    assignments?: Data.Assignments;

    /**
     * Timestamp for when the record was created
     */
    created_at_utc?: string;

    /**
     * The firm ID of the managing firm for this Billing Group
     */
    firm_id?: number;

    /**
     * The ID of the associated household for this Billing Group
     */
    household_id?: number;

    /**
     * A list of billing minimum ID's associated with this Billing Group
     */
    minimum_ids?: Array<number>;

    /**
     * The name of this Billing Group
     */
    name?: string;

    /**
     * The sluggified name of this Billing Group
     */
    slug?: string;

    /**
     * Timestamp for when the record was updated
     */
    updated_at_utc?: string;
  }

  export namespace Data {
    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    export interface Assignments {
      /**
       * The unique resource id for this Account Group Assignment
       */
      id?: number;

      /**
       * The related account of this assignment
       */
      account_id?: number;

      /**
       * Numerical indicator for fee location behavior. Options are 0 (charged to
       * itself), -1 (uncharged / charged to the group, where fees are distributed in
       * prorate fashion by size), or a positive integer, which represents the ID of the
       * account being charged.
       */
      fee_location?: 0 | -1;

      /**
       * The desired fee location option. Options are S (self), G (group), or A
       * (account).
       */
      fee_location_option?: 'S' | 'G' | 'A';

      /**
       * The related group of this assignment
       */
      group_id?: number;
    }
  }
}

export interface unnamed_schema_3 {
  current_page?: number;

  data?: Array<unnamed_schema_3.Data>;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace unnamed_schema_3 {
  export interface Data {
    /**
     * The unique resource ID for this Billing Group
     */
    id?: number;

    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    assignments?: Data.Assignments;

    /**
     * Timestamp for when the record was created
     */
    created_at_utc?: string;

    /**
     * The firm ID of the managing firm for this Billing Group
     */
    firm_id?: number;

    /**
     * The ID of the associated household for this Billing Group
     */
    household_id?: number;

    /**
     * A list of billing minimum ID's associated with this Billing Group
     */
    minimum_ids?: Array<number>;

    /**
     * The name of this Billing Group
     */
    name?: string;

    /**
     * The sluggified name of this Billing Group
     */
    slug?: string;

    /**
     * Timestamp for when the record was updated
     */
    updated_at_utc?: string;
  }

  export namespace Data {
    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    export interface Assignments {
      /**
       * The unique resource id for this Account Group Assignment
       */
      id?: number;

      /**
       * The related account of this assignment
       */
      account_id?: number;

      /**
       * Numerical indicator for fee location behavior. Options are 0 (charged to
       * itself), -1 (uncharged / charged to the group, where fees are distributed in
       * prorate fashion by size), or a positive integer, which represents the ID of the
       * account being charged.
       */
      fee_location?: 0 | -1;

      /**
       * The desired fee location option. Options are S (self), G (group), or A
       * (account).
       */
      fee_location_option?: 'S' | 'G' | 'A';

      /**
       * The related group of this assignment
       */
      group_id?: number;
    }
  }
}

export interface unnamed_schema_4 {
  current_page?: number;

  data?: Array<unnamed_schema_4.Data>;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace unnamed_schema_4 {
  export interface Data {
    /**
     * The unique resource ID for this Billing Group
     */
    id?: number;

    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    assignments?: Data.Assignments;

    /**
     * Timestamp for when the record was created
     */
    created_at_utc?: string;

    /**
     * The firm ID of the managing firm for this Billing Group
     */
    firm_id?: number;

    /**
     * The ID of the associated household for this Billing Group
     */
    household_id?: number;

    /**
     * A list of billing minimum ID's associated with this Billing Group
     */
    minimum_ids?: Array<number>;

    /**
     * The name of this Billing Group
     */
    name?: string;

    /**
     * The sluggified name of this Billing Group
     */
    slug?: string;

    /**
     * Timestamp for when the record was updated
     */
    updated_at_utc?: string;
  }

  export namespace Data {
    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    export interface Assignments {
      /**
       * The unique resource id for this Account Group Assignment
       */
      id?: number;

      /**
       * The related account of this assignment
       */
      account_id?: number;

      /**
       * Numerical indicator for fee location behavior. Options are 0 (charged to
       * itself), -1 (uncharged / charged to the group, where fees are distributed in
       * prorate fashion by size), or a positive integer, which represents the ID of the
       * account being charged.
       */
      fee_location?: 0 | -1;

      /**
       * The desired fee location option. Options are S (self), G (group), or A
       * (account).
       */
      fee_location_option?: 'S' | 'G' | 'A';

      /**
       * The related group of this assignment
       */
      group_id?: number;
    }
  }
}

export interface unnamed_schema_5 {
  current_page?: number;

  data?: Array<unnamed_schema_5.Data>;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace unnamed_schema_5 {
  export interface Data {
    /**
     * The unique resource ID for this Billing Group
     */
    id?: number;

    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    assignments?: Data.Assignments;

    /**
     * Timestamp for when the record was created
     */
    created_at_utc?: string;

    /**
     * The firm ID of the managing firm for this Billing Group
     */
    firm_id?: number;

    /**
     * The ID of the associated household for this Billing Group
     */
    household_id?: number;

    /**
     * A list of billing minimum ID's associated with this Billing Group
     */
    minimum_ids?: Array<number>;

    /**
     * The name of this Billing Group
     */
    name?: string;

    /**
     * The sluggified name of this Billing Group
     */
    slug?: string;

    /**
     * Timestamp for when the record was updated
     */
    updated_at_utc?: string;
  }

  export namespace Data {
    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    export interface Assignments {
      /**
       * The unique resource id for this Account Group Assignment
       */
      id?: number;

      /**
       * The related account of this assignment
       */
      account_id?: number;

      /**
       * Numerical indicator for fee location behavior. Options are 0 (charged to
       * itself), -1 (uncharged / charged to the group, where fees are distributed in
       * prorate fashion by size), or a positive integer, which represents the ID of the
       * account being charged.
       */
      fee_location?: 0 | -1;

      /**
       * The desired fee location option. Options are S (self), G (group), or A
       * (account).
       */
      fee_location_option?: 'S' | 'G' | 'A';

      /**
       * The related group of this assignment
       */
      group_id?: number;
    }
  }
}

export interface unnamed_schema_6 {
  ids?: Array<number>;

  n?: number;
}

export interface unnamed_schema_7 {
  current_page?: number;

  data?: Array<unnamed_schema_7.Data>;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace unnamed_schema_7 {
  export interface Data {
    /**
     * The unique resource ID for this Billing Group
     */
    id?: number;

    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    assignments?: Data.Assignments;

    /**
     * Timestamp for when the record was created
     */
    created_at_utc?: string;

    /**
     * The firm ID of the managing firm for this Billing Group
     */
    firm_id?: number;

    /**
     * The ID of the associated household for this Billing Group
     */
    household_id?: number;

    /**
     * A list of billing minimum ID's associated with this Billing Group
     */
    minimum_ids?: Array<number>;

    /**
     * The name of this Billing Group
     */
    name?: string;

    /**
     * The sluggified name of this Billing Group
     */
    slug?: string;

    /**
     * Timestamp for when the record was updated
     */
    updated_at_utc?: string;
  }

  export namespace Data {
    /**
     * A list of AccountGroupAssignment objects associated with this Billing Group
     */
    export interface Assignments {
      /**
       * The unique resource id for this Account Group Assignment
       */
      id?: number;

      /**
       * The related account of this assignment
       */
      account_id?: number;

      /**
       * Numerical indicator for fee location behavior. Options are 0 (charged to
       * itself), -1 (uncharged / charged to the group, where fees are distributed in
       * prorate fashion by size), or a positive integer, which represents the ID of the
       * account being charged.
       */
      fee_location?: 0 | -1;

      /**
       * The desired fee location option. Options are S (self), G (group), or A
       * (account).
       */
      fee_location_option?: 'S' | 'G' | 'A';

      /**
       * The related group of this assignment
       */
      group_id?: number;
    }
  }
}

export interface BillingGroupCreateParams {
  /**
   * Query param:
   */
  pager?: BillingGroupCreateParams.Pager;

  /**
   * Body param:
   */
  assignments?: Array<BillingGroupCreateParams.Assignment>;

  /**
   * Body param:
   */
  firm_id?: number;

  /**
   * Body param:
   */
  household_id?: number;

  /**
   * Body param:
   */
  minimum_ids?: Array<number | null>;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  slug?: string;
}

export namespace BillingGroupCreateParams {
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

  export interface Assignment {
    id?: number;

    account_id?: number;

    fee_location?: number;

    fee_location_option?: string;

    group_id?: number;
  }
}

export interface BillingGroupRetrieveParams {
  pager?: BillingGroupRetrieveParams.Pager;
}

export namespace BillingGroupRetrieveParams {
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

export interface BillingGroupUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: The unique resource ID for this Billing Group
   */
  body_id?: number;

  /**
   * Body param: A list of AccountGroupAssignment objects associated with this
   * Billing Group
   */
  assignments?: BillingGroupUpdateParams.Assignments;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: The firm ID of the managing firm for this Billing Group
   */
  firm_id?: number;

  /**
   * Body param: The ID of the associated household for this Billing Group
   */
  household_id?: number;

  /**
   * Body param: A list of billing minimum ID's associated with this Billing Group
   */
  minimum_ids?: Array<number>;

  /**
   * Body param: The name of this Billing Group
   */
  name?: string;

  /**
   * Body param: The sluggified name of this Billing Group
   */
  slug?: string;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace BillingGroupUpdateParams {
  /**
   * A list of AccountGroupAssignment objects associated with this Billing Group
   */
  export interface Assignments {
    /**
     * The unique resource id for this Account Group Assignment
     */
    id?: number;

    /**
     * The related account of this assignment
     */
    account_id?: number;

    /**
     * Numerical indicator for fee location behavior. Options are 0 (charged to
     * itself), -1 (uncharged / charged to the group, where fees are distributed in
     * prorate fashion by size), or a positive integer, which represents the ID of the
     * account being charged.
     */
    fee_location?: 0 | -1;

    /**
     * The desired fee location option. Options are S (self), G (group), or A
     * (account).
     */
    fee_location_option?: 'S' | 'G' | 'A';

    /**
     * The related group of this assignment
     */
    group_id?: number;
  }
}

export interface BillingGroupListParams {
  pager?: BillingGroupListParams.Pager;
}

export namespace BillingGroupListParams {
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

export interface BillingGroupDeleteParams {
  pager?: BillingGroupDeleteParams.Pager;
}

export namespace BillingGroupDeleteParams {
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

export interface BillingGroupCreateFromHouseholdsParams {
  pager?: BillingGroupCreateFromHouseholdsParams.Pager;
}

export namespace BillingGroupCreateFromHouseholdsParams {
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

export interface BillingGroupCreateManyParams {
  /**
   * Body param:
   */
  body: Array<unknown>;

  /**
   * Query param:
   */
  pager?: BillingGroupCreateManyParams.Pager;
}

export namespace BillingGroupCreateManyParams {
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

export interface BillingGroupDeleteManyParams {
  /**
   * Query param:
   */
  pager?: BillingGroupDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace BillingGroupDeleteManyParams {
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

export interface BillingGroupFilterParams {
  /**
   * Query param:
   */
  pager?: BillingGroupFilterParams.Pager;

  /**
   * Body param: The unique resource ID for this Billing Group
   */
  id?: number;

  /**
   * Body param: The firm ID of the managing firm for this Billing Group
   */
  firm_id?: number;

  /**
   * Body param: The ID of the associated household for this Billing Group
   */
  household_id?: number;

  /**
   * Body param: The name of this Billing Group
   */
  name?: string;

  /**
   * Body param: The sluggified name of this Billing Group
   */
  slug?: string;
}

export namespace BillingGroupFilterParams {
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

export interface BillingGroupRemoveAssignmentParams {
  /**
   * Query param:
   */
  pager?: BillingGroupRemoveAssignmentParams.Pager;

  /**
   * Body param:
   */
  id?: number;

  /**
   * Body param:
   */
  group_id?: number;
}

export namespace BillingGroupRemoveAssignmentParams {
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

export declare namespace BillingGroups {
  export {
    type BillingGroupCreateResponse as BillingGroupCreateResponse,
    type BillingGroupRetrieveResponse as BillingGroupRetrieveResponse,
    type BillingGroupUpdateResponse as BillingGroupUpdateResponse,
    type BillingGroupListResponse as BillingGroupListResponse,
    type BillingGroupCreateFromHouseholdsResponse as BillingGroupCreateFromHouseholdsResponse,
    type BillingGroupCreateManyResponse as BillingGroupCreateManyResponse,
    type BillingGroupDeleteManyResponse as BillingGroupDeleteManyResponse,
    type BillingGroupFilterResponse as BillingGroupFilterResponse,
    type BillingGroupCreateParams as BillingGroupCreateParams,
    type BillingGroupRetrieveParams as BillingGroupRetrieveParams,
    type BillingGroupUpdateParams as BillingGroupUpdateParams,
    type BillingGroupListParams as BillingGroupListParams,
    type BillingGroupDeleteParams as BillingGroupDeleteParams,
    type BillingGroupCreateFromHouseholdsParams as BillingGroupCreateFromHouseholdsParams,
    type BillingGroupCreateManyParams as BillingGroupCreateManyParams,
    type BillingGroupDeleteManyParams as BillingGroupDeleteManyParams,
    type BillingGroupFilterParams as BillingGroupFilterParams,
    type BillingGroupRemoveAssignmentParams as BillingGroupRemoveAssignmentParams,
  };
}
