// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class BillingReports extends APIResource {}

export interface BillingReport {
  /**
   * The unique resource ID for this billing report
   */
  id?: number;

  /**
   * Maps the cash amount in the account as of the report run date
   */
  account_cash_on_run_date?: unknown;

  /**
   * Maps the cash amount in the account as of the billing date
   */
  account_cash_on_snapshot_date?: unknown;

  /**
   * A collection of maps for various data points of the billing run keyed on
   * `account_id`
   */
  account_df?: unknown;

  /**
   * The associated accounts ID's for this billing report
   */
  account_ids?: Array<number>;

  /**
   * Maps account ID to total account valuation as of the report run date
   */
  account_value_on_run_date?: unknown;

  /**
   * Maps account ID to total account valuation on a particular date
   */
  account_value_on_snapshot_date?: unknown;

  /**
   * A collection maps for split calculation details for accounts keyed on
   * `account_id`
   */
  agg_splits_by_account_df?: unknown;

  /**
   * A collection maps for split calculation details for billing groups keyed on
   * `group_id`
   */
  agg_splits_by_group_df?: unknown;

  /**
   * A collection of objects detailing billing splits. Keyed on `splitter_slug`
   */
  agg_splits_by_splitter_df?: unknown;

  /**
   * The annual debit amount for this billing report
   */
  annual_debit?: number;

  /**
   * Total fee and debited amount annualized
   */
  annual_fee?: number;

  /**
   * A list of asset adjustments included in the billing run.
   */
  asset_adjustments_serialized?: unknown;

  /**
   * All assets under management on the billing date
   */
  aum_on_billing_date?: number;

  /**
   * The input date to the billing report
   */
  billing_date?: string;

  /**
   * The list of included billing groups in the billing run.
   */
  billing_groups_serialized?: unknown;

  /**
   * The list of billing minimus included in the billing run.
   */
  billing_minimums_serialized?: unknown;

  /**
   * The associated billing split ID's for this billing report
   */
  billing_split_ids?: Array<number>;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * The calendar date on which the report was generated / created
   */
  created_date?: string;

  /**
   * True if invoices were created when the report was created
   */
  created_invoices?: boolean;

  /**
   * The custodian billed period debit for this billing report
   */
  custodian_billed_period_debit?: number;

  /**
   * The direct billed period debit for this billing report
   */
  direct_billed_period_debit?: number;

  /**
   * A map keyed on `account_id` indicating fee structures assigned to accounts.
   */
  fee_structure_assignments?: unknown;

  /**
   * The associated fee structure ID's for this billing report
   */
  fee_structure_ids?: Array<number>;

  /**
   * The list of fee structures included in the billing run.
   */
  fee_structures_serialized?: unknown;

  /**
   * The corresponding fee upload file model instance
   */
  fee_upload_file_id?: number;

  /**
   * The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * The firm's share for the period. Equals period_debit - split_payout.
   */
  firm_share?: number;

  /**
   * Firm's annualized share. Equals annual_debit - split_payout_annualized.
   */
  firm_share_annualized?: number;

  /**
   * Maps group ID to the total cash value of all accounts in the group on the run
   * date
   */
  group_cash_on_run_date?: unknown;

  /**
   * Maps group ID to the total cash value of all accounts in the group on the
   * snapshot date
   */
  group_cash_on_snapshot_date?: unknown;

  /**
   * A collection of maps for various data points of the billing run keyed on
   * `group_id`
   */
  group_df?: unknown;

  /**
   * The associated group ID's for this billing report
   */
  group_ids?: Array<number>;

  /**
   * Maps a group ID to the total value of all accounts in the group on the run date
   */
  group_value_on_run_date?: unknown;

  /**
   * Maps a group ID to the total value of all accounts in the group on the snapshot
   * date
   */
  group_value_on_snapshot_date?: unknown;

  /**
   * Indicates if the billing run is for the entire firm. If `true` all billing
   * groups will be included.
   */
  is_firm_wide_billing?: boolean;

  /**
   * Indicates whether the billing run was selected as rebate
   */
  is_rebate_billing?: boolean;

  /**
   * Detail of a minimum fee if included on the billing run.
   */
  minfee_df?: unknown;

  /**
   * The number of accounts for this billing report
   */
  n_accounts?: number;

  /**
   * The number of fee structures for this billing report
   */
  n_fee_structures?: number;

  /**
   * The number of groups for this billing report
   */
  n_groups?: number;

  /**
   * The number of billing splits for this billing report
   */
  n_splits?: number;

  /**
   * Total debited amount for the period
   */
  period_debit?: number;

  /**
   * The most recent market date corresponding to when the report date
   */
  run_date?: string;

  /**
   * The closest date available to the billing date for which there's data at the
   * time of running the report
   */
  snapshot_date?: string;

  /**
   * A map keyed on `account_id` indicating splitters assigned to accounts.
   */
  split_assignments?: unknown;

  /**
   * Total payout of all splits for this period
   */
  split_payout?: number;

  /**
   * Split payout on an annualized basis
   */
  split_payout_annualized?: number;

  /**
   * A collection of maps detailing the split percentages applied in the billing run.
   */
  splits_df?: unknown;

  /**
   * The list of billing splits included in the billing run
   */
  splits_serialized?: unknown;

  /**
   * Keyed on (1) group id and (2) fee structure id where it is valued on a number
   * representing the structure fee corresponding to that groupid / fee structure
   * combination
   */
  structure_fees_by_group_fs?: unknown;

  /**
   * Sum of all group balances on the billing date
   */
  total_balance?: number;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type BillingReports = Array<BillingReport>;

export declare namespace BillingReports {
  export { type BillingReport as BillingReport, type BillingReports as BillingReports };
}
