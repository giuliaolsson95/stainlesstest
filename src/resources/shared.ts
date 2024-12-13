// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

export interface FeeStructure {
  /**
   * The unique resource ID for this Fee Structure
   */
  id?: number;

  /**
   * E for end of period balance, A for average daily balance, P for ending period
   * balance w/ adjustment for flows, C for ending period balance w/adjustment for
   * flows less cash
   */
  balance_type?: 'E' | 'A' | 'P' | 'C';

  /**
   * See Billing Calculation Types
   */
  calculation_type?: string;

  /**
   * R for Flat Rate, A for Flat Amount, G for Flat Group, D for Drop Through, T for
   * Tiered Fee, and F for Free Fee
   */
  collection_type?: 'R' | 'A' | 'G' | 'D' | 'T' | 'F';

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * @deprecated: The user ID of the creator User
   */
  created_by_user_id?: number;

  /**
   * The firm ID of the managing firm
   */
  firm_id?: number;

  /**
   * The flat dollar fee for this Fee Structure
   */
  flat_dollar_fee?: number;

  /**
   * The flat rate for this Fee Structure. Must be between 0 and 99 inclusive. Will
   * be stored and converted to a Percentage. (i.e. 1 -> 1% and 0.25 -> 0.25%)
   */
  flat_rate?: number;

  /**
   * See Frequency Codes
   */
  frequency?: 'M' | 'Q';

  /**
   * The name of this Fee Structure
   */
  name?: string;

  /**
   * See Billing Quarter Cycle Codes
   */
  quarter_cycle?: number;

  /**
   * The slugified name of this Fee Structure
   */
  slug?: string;

  /**
   * Tiers associated with the fee structure
   */
  tiers?: Array<FeeStructure.Tier>;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace FeeStructure {
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

export type FeeStructures = Array<FeeStructure>;

export interface Job {
  /**
   * Unique ID for this background job object
   */
  id?: number;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * The user id for the user who created this Background Job
   */
  created_by_id?: number;

  /**
   * Create timestamp in UTC
   */
  created_dt_utc?: string;

  /**
   * Zero corresponds to the job waiting to be processed
   */
  current_step?: number;

  /**
   * @deprecated: If true, this sends an email notification to the user who created
   * the job
   */
  email_notification?: string;

  /**
   * @deprecated: The timestamp at which the email notification was sent. Only
   * applies when email_notification is enabled
   */
  email_notification_dt_utc?: string;

  /**
   * The last date and time this Background Job was failed
   */
  failed_dt_utc?: string;

  /**
   * The last date and time this Background Job was finished
   */
  finished_dt_utc?: string;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * Returns true if the job failed due to an exception
   */
  is_failed?: boolean;

  /**
   * Returns true if the job is finished
   */
  is_finished?: boolean;

  /**
   * Returns true if the job was cancelled by the user
   */
  is_revoked?: boolean;

  /**
   * Returns true if the job has been dequeued and is running
   */
  is_running?: boolean;

  /**
   * The type of this job. Currently either b for a billing report, pdfrp for a PDF
   * report, or bd for a bulk download
   */
  job_type?: 'b' | 'pdfrp' | 'db';

  /**
   * The last date and time this Background Job was updated
   */
  last_updated_dt_utc?: string;

  /**
   * The progress of a job. Note that the number of steps might not be known until
   * the job is dequeued.
   */
  num_steps?: number;

  /**
   * The last date and time this Background Job was queued
   */
  queued_dt_utc?: string;

  /**
   * The last date and time this Background Job was started
   */
  started_dt_utc?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type Strategies = Array<Strategy>;

export interface Strategy {
  /**
   * Unique ID for this strategy object
   */
  id?: number;

  /**
   * Asset type of the strategy
   */
  asset_type?: string;

  /**
   * Id of the benchmark associated with this strategy
   */
  benchmark_id?: number;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Description of the strategy
   */
  description?: string;

  /**
   * Is environmental, social, governance?
   */
  esg?: boolean;

  /**
   * Identifier for etc action
   */
  etf_action_identifier?: string;

  /**
   * Is the fact sheet available?
   */
  fact_sheet_available?: boolean;

  /**
   * Fee reported on the strategy
   */
  fee?: number;

  /**
   * Id of the firm this strategy is associated with
   */
  firm_id?: number;

  /**
   * Investment minimum
   */
  investment_minimum?: number;

  /**
   * Name for the strategy
   */
  name?: string;

  /**
   * Provider of the strategy
   */
  provider?: string;

  /**
   * Risk category of the strategy. CP for Capital Preservation, CO for Conservative,
   * MC for Moderate Conservative, MO for Moderate, MG for Moderate Growth, GR for
   * Growth, AG for Aggressive Growth
   */
  risk_category?: 'CP' | 'CO' | 'MC' | 'MO' | 'MG' | 'GR' | 'AG';

  /**
   * Search tags for the strategy
   */
  search_tags?: Array<string>;

  /**
   * Security allocation associated with this model
   */
  security_allocations?: Array<Strategy.SecurityAllocation>;

  /**
   * Type of the strategy.
   */
  strategy_type?: 'Core' | 'Satellite' | 'Income' | 'Alternatives';

  /**
   * Is the tax managed?
   */
  tax_managed?: boolean;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace Strategy {
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
