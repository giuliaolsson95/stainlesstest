// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class Groups extends APIResource {}

export interface BillingGroup {
  /**
   * The unique resource ID for this Billing Group
   */
  id?: number;

  /**
   * A list of AccountGroupAssignment objects associated with this Billing Group
   */
  assignments?: BillingGroup.Assignments;

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

export namespace BillingGroup {
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

export interface BillingGroup {
  /**
   * The unique resource ID for this Billing Group
   */
  id?: number;

  /**
   * A list of AccountGroupAssignment objects associated with this Billing Group
   */
  assignments?: BillingGroup.Assignments;

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

export namespace BillingGroup {
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

export declare namespace Groups {
  export { type Group as Group, type Groups as Groups };
}
