// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as AccountsAPI from './accounts';
import * as SourceRealizedGainLossAPI from './data/source-realized-gain-loss';
import * as FirmsAPI from './org/firms';
import * as HouseholdsAPI from './reporting/households';
import * as SecuritiesAPI from './data/custodian/securities';

export class WebReports extends APIResource {
  /**
   * Runs a web report and returns the reporting output synchronously
   *
   * **Available Sub Reports**
   *
   * - `account_summary`
   * - `allocation_and_performance_summary`
   * - `appraisals`
   * - `appraisals_wo_cost_basis`
   * - `asset_allocation_top_holdings`
   * - `benchmark_perf_summary`
   * - `buy_sells`
   * - `consolidated_summary`
   * - `deposits_withdrawals`
   * - `household_performance_attribution`
   * - `income`
   * - `management_fees`
   * - `net_investment_chart`
   * - `performance_summary`
   * - `performance_chart`
   * - `portfolio_snapshot`
   * - `realized_gain_loss`
   * - `risk_return_chart`
   * - `security_performance`
   * - `target_vs_actual_allocation`
   */
  run(body: WebReportRunParams, options?: Core.RequestOptions): Core.APIPromise<WebReportRunResponse> {
    return this._client.post('/reporting/web-reports', { body, ...options });
  }
}

export interface WebReportRunResponse {
  /**
   * A collection of reporting-relevant data structures
   */
  entity_info?: WebReportRunResponse.EntityInfo;

  /**
   * Relevant input data for the requested report invocation
   */
  input?: WebReportRunResponse.Input;

  /**
   * A collection of data corresponding to the Atlas subreports that were requested
   */
  sub_report_data?: WebReportRunResponse.SubReportData;
}

export namespace WebReportRunResponse {
  /**
   * A collection of reporting-relevant data structures
   */
  export interface EntityInfo {
    account?: AccountsAPI.Account | null;

    /**
     * A map of all constituent accounts keyed by their ids
     */
    account_by_id?: Record<string, AccountsAPI.Account>;

    /**
     * An array of the constituent account ids
     */
    account_ids?: Array<number>;

    /**
     * An array of the constituent account numbers
     */
    account_numbers?: Array<string>;

    /**
     * A map of all constituent account numbers keyed by their ids
     */
    account_numbers_by_account_id?: Record<string, string>;

    accounts?: AccountsAPI.Accounts;

    /**
     * A json representation of the owning firm
     */
    firm?: FirmsAPI.Firm;

    household?: HouseholdsAPI.Household | null;

    manual_accounts?: AccountsAPI.Accounts | null;

    /**
     * A map of just the manual constituent accounts keyed by their ids
     */
    manual_accounts_by_id?: Record<string, AccountsAPI.Account>;

    /**
     * An array of the ids of all non-manual consituent accounts
     */
    non_manual_account_ids?: Array<number>;
  }

  /**
   * Relevant input data for the requested report invocation
   */
  export interface Input {
    account_id?: number;

    end?: string;

    firm_id?: number;

    household_id?: number;

    /**
     * @deprecated
     */
    standard_period_frequency?: number | null;

    /**
     * @deprecated
     */
    standard_period_month?: number | null;

    /**
     * @deprecated
     */
    standard_period_year?: number | null;

    start?: string;

    sub_reports?: Array<
      | 'account_summary'
      | 'allocation_and_performance_summary'
      | 'appraisals'
      | 'appraisals_wo_cost_basis'
      | 'asset_allocation_top_holdings'
      | 'benchmark_perf_summary'
      | 'buy_sells'
      | 'consolidated_summary'
      | 'deposits_withdrawals'
      | 'household_performance_attribution'
      | 'income'
      | 'management_fees'
      | 'net_investment_chart'
      | 'performance_summary'
      | 'performance_chart'
      | 'portfolio_snapshot'
      | 'realized_gain_loss'
      | 'risk_return_chart'
      | 'security_performance'
      | 'target_vs_actual_allocation'
    >;
  }

  /**
   * A collection of data corresponding to the Atlas subreports that were requested
   */
  export interface SubReportData {
    /**
     * (will not be present if a household report was requested)
     */
    account_summary?: SubReportData.AccountSummary;

    allocation_and_performance_summary?: SubReportData.AllocationAndPerformanceSummary;

    appraisal?: SubReportData.Appraisal;

    buysell?: SubReportData.Buysell;

    deposit_withdrawal?: SubReportData.DepositWithdrawal;

    drift?: SubReportData.Drift;

    gainloss?: SubReportData.Gainloss;

    /**
     * (will not be present if an account report was requested)
     */
    household_summary?: SubReportData.HouseholdSummary;

    income_expense?: SubReportData.IncomeExpense;

    management_fee?: SubReportData.ManagementFee;

    risk_return_chart?: SubReportData.RiskReturnChart;

    /**
     * @deprecated
     */
    security_exclusions?: SubReportData.SecurityExclusions;

    security_performance?: SubReportData.SecurityPerformance;

    snapshot?: SubReportData.Snapshot;

    top_holding?: SubReportData.TopHolding;
  }

  export namespace SubReportData {
    /**
     * (will not be present if a household report was requested)
     */
    export interface AccountSummary {
      /**
       * An array containing the latest_performance for benchmark associated with the
       * household
       */
      benchmark_performance?: Array<unknown>;

      /**
       * Charting data on a daily interval for inception to date
       */
      daily_itd_chart?: unknown;

      /**
       * Charting data on a daily interval for the period to date
       */
      daily_ptd_chart?: unknown;

      /**
       * Top-level summary data since inception
       */
      inception?: unknown;

      /**
       * Portfolio returns over a selection of standard reporting intervals ending on the
       * requested end date
       */
      latest_performance?: unknown;

      /**
       * Charting data on a monthly interval for inception to date
       */
      monthly_itd_chart?: unknown;

      /**
       * Charting data on a monthly interval for the period to date
       */
      monthly_ptd_chart?: unknown;

      /**
       * An array of standard performance reporting intervals for each month-end in the
       * portfolio time series
       */
      performance?: Array<unknown>;

      /**
       * Top-level summary data for the requested report period
       */
      period?: unknown;

      /**
       * A boolean indicating if this subreport has data for the requested period
       */
      period_has_data?: boolean;

      /**
       * Charting data on a weekly interval for inception to date
       */
      weekly_itd_chart?: unknown;

      /**
       * Charting data on a weekly interval for the period to date
       */
      weekly_ptd_chart?: unknown;
    }

    export interface AllocationAndPerformanceSummary {
      allocations?: Array<unknown>;

      allocations_total_value?: number;

      allocations_total_weight?: number;

      benchmark_performance?: AllocationAndPerformanceSummary.BenchmarkPerformance;

      latest_performance?: unknown;

      portfolio_summary?: AllocationAndPerformanceSummary.PortfolioSummary;
    }

    export namespace AllocationAndPerformanceSummary {
      export interface BenchmarkPerformance {
        /**
         * Description of the entity the performance data pertains to
         */
        benchmark_id?: string;

        /**
         * The end of the reporting period
         */
        date?: string;

        /**
         * The performance return for the five-year period to date, on the real scale null
         * if not enough data history is present
         */
        five_yr_return?: number | null;

        /**
         * True if the period is non-standard
         */
        is_custom_period?: boolean;

        /**
         * The performance return from the entity inception to date, on the real scale
         */
        itd_return?: number;

        /**
         * The performance return for the twelve-month period to day, on the real scale;
         */
        ltm_return?: number;

        /**
         * The performance return for the month to date, on the real scale
         */
        mtd_return?: number;

        /**
         * The performance return for the requested period to date, on the real scale
         */
        ptd_return?: number;

        /**
         * The performance return for the quarter to date, on the real scale
         */
        qtd_return?: number;

        /**
         * The performance return for the three-year period to date, on the real scale;
         * null if not enough data history is present
         */
        three_yr_return?: number | null;

        /**
         * The performance return for the year to date, on the real scale
         */
        ytd_return?: number;
      }

      export interface PortfolioSummary {
        /**
         * The balance value at the beginning of the applicable time interval
         */
        beginning_balance?: number;

        /**
         * The date that corresponds to beginning_balance
         */
        beginning_balance_date?: string;

        /**
         * Total contributions over the time interval
         */
        contributions?: number;

        /**
         * The balance value at the end of the applicable time interval
         */
        ending_balance?: number;

        /**
         * The date that corresponds to the ending_balance
         */
        ending_balance_date?: string;

        /**
         * Total income over the time interval
         */
        income?: number;

        /**
         * Income from manual accounts
         */
        manual_account_outside_income?: number;

        /**
         * Market apprecation net of contributions over the time interval
         */
        net_appreciation?: number;

        /**
         * Contributions minus withdrawals
         */
        net_contributions?: number;

        /**
         * Total withdrawals over the time interval
         */
        withdrawals?: number;
      }
    }

    export interface Appraisal {
      /**
       * A map of appraisals keyed on custom asset classification, if there are any
       */
      by_cac?: Record<string, Appraisal.ByCac>;

      /**
       * A map of appraisals keyed on master asset class
       */
      by_mac?: Appraisal.ByMac;

      /**
       * The cash appraisal
       */
      cash?: Appraisal.Cash;

      /**
       * The equity appraisal table
       */
      equity_appraisal?: unknown | null;

      /**
       * The fixed icome appraisal table
       */
      fixed_income_appraisal?: unknown | null;

      /**
       * The money market appraisal table
       */
      money_market_appraisal?: unknown | null;

      /**
       * The "other" appraisal table
       */
      other_appraisal?: unknown | null;

      /**
       * A boolean to indicate if the report entity has appraisal data
       */
      period_has_data?: boolean;

      /**
       * Weighted totals of all the appraisal categories, summing to the current state of
       * the porfolio
       */
      portfolio_total?: Appraisal.PortfolioTotal;

      /**
       * An array of all current positions
       */
      positions?: Array<Appraisal.Position>;
    }

    export namespace Appraisal {
      export interface ByCac {
        /**
         * The custom asset class title the class category has been assigned, if
         * applicable.
         */
        cac?: string | null;

        /**
         * The holdings in this asset class category
         */
        holdings?: Array<ByCac.Holding>;

        /**
         * The master asset class code of the asset class category
         */
        mac?: string;

        /**
         * The holdings in this asset class category orderd by weight in ascending order
         */
        ordered_holdings?: Array<unknown>;

        /**
         * The subtotals of the asset class category
         */
        subtotal?: unknown;

        /**
         * The title of the asset class category
         */
        title?: string;
      }

      export namespace ByCac {
        export interface Holding {
          /**
           * The absolute value of the purhcase cost of this holding
           */
          abs_purchase_cost?: number;

          /**
           * The custom asset code of this holding's asset class category, if one applies
           */
          cac_tag_name?: string;

          /**
           * The date of the holding
           */
          date?: string;

          /**
           * The estimated annual income of this holding
           */
          estimated_annual_income?: number;

          /**
           * A boolean to indicate if this holding has cost basis information
           */
          has_cost_basis?: boolean;

          /**
           * The market unit price of this holding's security
           */
          market_unit_price?: number;

          /**
           * The master asset code of this holding's asset class category
           */
          master_asset_class?: string;

          /**
           * The unit cost of this holding's security at purchase
           */
          purchase_cost_unit_price?: number;

          /**
           * The purchase date of this holding
           */
          purchase_date?: string;

          /**
           * The absolute quantity (shares) of this holding
           */
          qty?: number;

          /**
           * A description of this holding's security
           */
          security_description?: string;

          /**
           * The symbol of this holding's security
           */
          security_symbol?: string;

          /**
           * The yield of this holding's security, if known, on the real scale
           */
          security_yield?: number;

          /**
           * The yield of this holding's security, if known, on the percent scale
           */
          security_yield_percent?: number;

          /**
           * The signed value of the purchase cost of this holding
           */
          signed_purchase_cost?: number;

          /**
           * The signed quantity (shares) of this holding
           */
          signed_units?: number;

          /**
           * The unrealized gain/loss of this holding
           */
          unrealized_gain_loss?: number;

          /**
           * The unrealized return of this holding on the real scale
           */
          unrealized_return?: number;

          /**
           * The weight of this holding out of the entire portfolio
           */
          weight_percent?: number;
        }
      }

      /**
       * A map of appraisals keyed on master asset class
       */
      export interface ByMac {
        /**
         * The cash appraisal table
         */
        CA?: unknown;

        /**
         * The fixed income appraisal table
         */
        DT?: unknown;

        /**
         * The equity appraisal table
         */
        EQ?: unknown;

        /**
         * The "other" appraisal table
         */
        MX?: unknown;
      }

      /**
       * The cash appraisal
       */
      export interface Cash {
        /**
         * The currency value as a dollar ammount
         */
        currency?: number;

        /**
         * The weight of the currency value out of the entire portfolio
         */
        currency_weight?: number;

        /**
         * The cash currency subtotals
         */
        subtotal?: unknown;

        /**
         * The title of the asset class category
         */
        title?: string;
      }

      /**
       * Weighted totals of all the appraisal categories, summing to the current state of
       * the porfolio
       */
      export interface PortfolioTotal {
        /**
         * The total cost basis of the holdings in the given asset class category
         */
        cost?: number;

        /**
         * The total estimated income of the holdings in the given asset class category
         */
        estimated_income?: number;

        /**
         * The total unrealized gain/loss of the holdings in the given asset class category
         */
        unrealized_gain_loss?: number;

        /**
         * The total unrealized return as a percent of the holdings in the given asset
         * class category
         */
        unrealized_return?: number;

        /**
         * The total market value of the holdings in the given asset class category
         */
        value?: number;

        /**
         * The total weight of the holdings in the given asset class category out of the
         * entire portfolio.
         */
        weight?: number;

        /**
         * The total average yield of the holdings in the given asset class category
         */
        yield?: number;
      }

      export interface Position {
        /**
         * The unique resource id for this Position
         */
        id?: number;

        /**
         * Quantity of shares closed
         */
        abs_closed_units?: number;

        /**
         * Quantity of shares for the Position
         */
        abs_open_units?: number;

        /**
         * The id of the Account associated with this Position
         */
        account_id?: number;

        /**
         * Market price of the security on the as_of_date
         */
        appraised_unit_price?: number;

        /**
         * The current date for this Position
         */
        as_of_date?: string;

        /**
         * Is the cost basis known for this position?
         */
        cost_basis_known?: boolean;

        /**
         * Unit cost price for the position (i.e. tax lot)
         */
        cost_basis_unit_price?: number;

        /**
         * Timestamp for when the record was created
         */
        created_at_utc?: string;

        /**
         * Flag to indicate if Holding is Long or Short. Potential values, L = Long, S =
         * Short
         */
        direction?: 'L' | 'S';

        /**
         * The id of the lot associated with this Position
         */
        lot_id?: number;

        /**
         * The date this position was opened in the account.Note that this field may be
         * populated with the special date value ""1900-01-01"" which is to be understood
         * as the absence of cost basis information for the lot associated with this
         * position
         */
        open_date?: string;

        /**
         * The date that this position originated in all time. For example, a position
         * transferred in would have an origination_date of the date that the position was
         * first opened in whichever account it was opened. Note that this field may be
         * populated with the special date value ""1900-01-01"" which is to be understood
         * as the absence of cost basis information for the lot associated with this
         * position
         */
        origination_date?: string;

        /**
         * Dollar gain or loss from trade activity for this security on the as_of_date
         */
        realized_gain_loss?: number;

        /**
         * The id of the Security associated with this Position
         */
        security_id?: number;

        /**
         * The id of the security ledger associated with this Position
         */
        security_ledger_id?: number;

        /**
         * Timestamp for when the record was updated
         */
        updated_at_utc?: string;
      }
    }

    export interface Buysell {
      /**
       * An array of reporting buy sells objects
       */
      items?: Array<Buysell.Item>;

      /**
       * The signed sum total of all buy sells
       */
      total?: number;
    }

    export namespace Buysell {
      export interface Item {
        luca_buy_sells?: unknown;

        /**
         * A description the the security
         */
        security_description?: string;
      }
    }

    export interface DepositWithdrawal {
      items?: Array<DepositWithdrawal.Item>;

      /**
       * The signed sum total of all deposits and withdrawals
       */
      total?: number;
    }

    export namespace DepositWithdrawal {
      export interface Item {
        luca_deposits_withdrawals?: Item.LucaDepositsWithdrawals;

        /**
         * A description of the security
         */
        security_description?: string;
      }

      export namespace Item {
        export interface LucaDepositsWithdrawals {
          security?: SecuritiesAPI.Security;

          transfer?: LucaDepositsWithdrawals.Transfer;
        }

        export namespace LucaDepositsWithdrawals {
          export interface Transfer {
            /**
             * The unique resource id for the Transaction
             */
            id?: number;

            /**
             * The quantity of shares for the Transfer
             */
            abs_units?: number;

            /**
             * The id of the Account associated with this Transaction
             */
            account_id?: number;

            /**
             * Is the cost basis known for this transaction?
             */
            cost_basis_known?: boolean;

            /**
             * The unit cost price for shares being transferred
             */
            cost_basis_unit_price?: number;

            /**
             * Timestamp for when the record was created
             */
            created_at_utc?: string;

            /**
             * Custodian the account data comes from. TDA=TD Ameritrade (Available prior to
             * Sept. 2, 2023), SWB=Schwab, NFS=Fidelity, PER=Pershing, MLT=MillenniumTrust,
             * HDG=Manual
             */
            custodian?:
              | 'TDA (Available prior to Sept. 2, 2023)'
              | 'SWB'
              | 'NFS'
              | 'PER'
              | 'DST'
              | 'MLT'
              | 'HDG';

            /**
             * Description of the transaction from the custodian
             */
            description?: string;

            /**
             * Flag to indicate if this Transaction is a cancel from the custodian
             */
            is_cancel?: boolean;

            /**
             * @deprecated: Raw Meta Data passed through from the custodian
             */
            meta_data?: unknown;

            /**
             * Date when the transaction was originated
             */
            origination_date?: string | null;

            /**
             * @deprecated
             */
            partition_id?: number | null;

            /**
             * @deprecated
             */
            recon_id?: number | null;

            /**
             * The id of the replaced transfer associated with this transaction
             */
            replaced_transfer_id?: number | null;

            /**
             * The date the custodian reports the transaction
             */
            reported_date?: string;

            /**
             * The id of the Security associated with this Transaction
             */
            security_id?: number;

            /**
             * The date of the transaction on a trade basis
             */
            transaction_date?: string;

            /**
             * Fees associated with the Transaction (e.g. commission)
             */
            transaction_fee?: number;

            /**
             * The type of Transfer. Possible values, DEP - cash deposit, WITH - cash
             * withdrawal, TLO - transfer long to open - security transfers into an account,
             * TLC - transfer long to close - security transfers out of an account
             */
            type?: 'DEP' | 'WITH' | 'TLO' | 'TLC';

            /**
             * he closing market price of the security on the transaction_date. Note, for cash,
             * this is always 1
             */
            unit_price?: number;

            /**
             * Timestamp for when the record was updated
             */
            updated_at_utc?: string;
          }
        }
      }
    }

    export interface Drift {
      /**
       * The label of the target allocation
       */
      target_allocation_name?: string;

      /**
       * An array of target deviations
       */
      target_deviations?: Drift.TargetDeviations;
    }

    export namespace Drift {
      /**
       * An array of target deviations
       */
      export interface TargetDeviations {
        /**
         * The dollar value of the actual weight
         */
        actual_value?: number;

        /**
         * The actual allocation for the asset classification category
         */
        actual_weight?: number;

        /**
         * The name of the custom asset classification category, if applicable
         */
        cac?: string;

        /**
         * The label of the given asset classification category
         */
        classification_name?: string;

        /**
         * The master asset class code
         */
        mac?: string;

        /**
         * The amount the actual allocation is allowed to be below the target, by rule
         */
        negative_tolerance?: number;

        /**
         * The target_weight minus the actual_weight
         */
        percent_diff?: number;

        /**
         * The amount the actual allocation is allowed to be above the target, by rule
         */
        positive_tolerance?: number;

        /**
         * The calculated dollar value of the target wieght
         */
        target_value?: number;

        /**
         * The target allocation for the asset classification category
         */
        target_weight?: number;

        /**
         * The target_value minus the actual_value
         */
        value_diff?: number;
      }
    }

    export interface Gainloss {
      /**
       * An array of gain loss objects
       */
      items?: Array<Gainloss.Item>;

      /**
       * The sum total of gain loss object amount values
       */
      total_amount?: number;

      /**
       * The sum total of all gain loss object open values
       */
      total_cost?: number;

      /**
       * The sum total of gain loss object close values
       */
      total_proceeds?: number;

      /**
       * The realized return on the percent scale
       */
      total_return_percent?: number;
    }

    export namespace Gainloss {
      export interface Item {
        luca_gain_loss?: SourceRealizedGainLossAPI.Sourcerealizedgainloss;

        /**
         * The realized return on the real scale
         */
        return?: number;

        /**
         * The description of the associated security
         */
        security_description?: string;

        /**
         * The id of the associated security
         */
        security_id?: number;

        /**
         * The symbol of the associated security
         */
        security_symbol?: string;
      }
    }

    /**
     * (will not be present if an account report was requested)
     */
    export interface HouseholdSummary {
      /**
       * An array holding the performance snapshots of all household accounts
       */
      account_performance?: Array<HouseholdSummary.AccountPerformance>;

      /**
       * An array holding the summaries of all household accounts
       */
      account_summaries?: Array<HouseholdSummary.AccountSummary>;

      /**
       * An array holding the account valuation summaries of all household accounts
       */
      account_valuations?: Array<HouseholdSummary.AccountValuation>;

      /**
       * An array containing the latest_performance for benchmark associated with the
       * household
       */
      benchmark_performance?: Array<unknown>;

      /**
       * Charting data on a daily interval for inception to date
       */
      daily_itd_chart?: unknown;

      /**
       * Charting data on a daily interval for the period to date
       */
      daily_ptd_chart?: unknown;

      /**
       * An array holding the heldaway summaries for all household accounts
       */
      heldaway_valuations?: Array<HouseholdSummary.HeldawayValuation>;

      /**
       * Top-level summary data since inception
       */
      inception?: unknown;

      /**
       * Portfolio returns over a selection of standard reporting intervals ending on the
       * requested end date
       */
      latest_performance?: unknown;

      /**
       * Charting data on a monthly interval for inception to date
       */
      monthly_itd_chart?: unknown;

      /**
       * Charting data on a monthly interval for the period to date
       */
      monthly_ptd_chart?: unknown;

      /**
       * An array of standard performance reporting intervals for each month-end in the
       * portfolio time series
       */
      performance?: Array<unknown>;

      /**
       * Top-level summary data for the requested report period
       */
      period?: unknown;

      /**
       * A boolean indicating if this subreport has data for the requested period
       */
      period_has_data?: boolean;

      /**
       * Charting data on a weekly interval for inception to date
       */
      weekly_itd_chart?: unknown;

      /**
       * Charting data on a weekly interval for the period to date
       */
      weekly_ptd_chart?: unknown;
    }

    export namespace HouseholdSummary {
      export interface AccountPerformance {
        /**
         * A representation of this account
         */
        account?: AccountsAPI.Account;

        /**
         * The end of the reporting period
         */
        date?: string;

        /**
         * The performance return for the five-year period to date, on the real scale null
         * if not enough data history is present
         */
        five_yr_return?: number | null;

        /**
         * True if the period is non-standard
         */
        is_custom_period?: boolean;

        /**
         * The performance return from the entity inception to date, on the real scale
         */
        itd_return?: number;

        /**
         * The performance return for the twelve-month period to day, on the real scale;
         */
        ltm_return?: number;

        /**
         * The performance return for the month to date, on the real scale
         */
        mtd_return?: number;

        /**
         * The performance return for the requested period to date, on the real scale
         */
        ptd_return?: number;

        /**
         * The performance return for the quarter to date, on the real scale
         */
        qtd_return?: number;

        /**
         * Description of the entity the performance data pertains to
         */
        series_id?: string;

        /**
         * The performance return for the three-year period to date, on the real scale;
         * null if not enough data history is present
         */
        three_yr_return?: number | null;

        /**
         * The performance return for the year to date, on the real scale
         */
        ytd_return?: number;
      }

      export interface AccountSummary {
        /**
         * The account representation
         */
        account?: AccountsAPI.Account;

        /**
         * Top-level summary data for said account since inception
         */
        inception?: unknown;

        /**
         * Top-level summary data for said account for the requested report period
         */
        period?: unknown;
      }

      export interface AccountValuation {
        /**
         * A representation of the account
         */
        account?: AccountsAPI.Account;

        /**
         * The cash value of the account balance
         */
        cash?: number;

        /**
         * The equity value of the account balance
         */
        equity?: number;

        /**
         * The fixed income value of the account balance
         */
        fixed_income?: number;

        /**
         * The unclassified value of the account balance
         */
        other?: number;

        /**
         * The total value of the account balance
         */
        total?: number;

        /**
         * When true, the account breakdown by MAC is not available
         */
        valuation_from_balance?: boolean;
      }

      export interface HeldawayValuation {
        /**
         * The masked heldaway account identifier
         */
        account_mask?: string;

        /**
         * The heldaway account type
         */
        account_type?: string;

        /**
         * The heldaway account balance
         */
        balance?: number;

        /**
         * The name of the heldaway institution
         */
        institution_name?: string;

        /**
         * The heldaway account name
         */
        name?: string;
      }
    }

    export interface IncomeExpense {
      /**
       * An array of all income expense transactions in the reporting period
       */
      items?: Array<IncomeExpense.Item>;

      /**
       * Signed total of all income expense transactions in the reporting period
       */
      total?: number;
    }

    export namespace IncomeExpense {
      export interface Item {
        luca_income?: Item.LucaIncome;

        /**
         * The security description of the income/expense
         */
        security_description?: string;

        /**
         * The classification of the income/expense transaction
         */
        transaction_type_display?:
          | 'Dividend'
          | 'Interest'
          | 'Management Fee'
          | 'Tax'
          | 'Income'
          | 'Expense'
          | 'Other';
      }

      export namespace Item {
        export interface LucaIncome {
          /**
           * An income/expense object
           */
          income_expense?: LucaIncome.IncomeExpense;

          /**
           * The security associated with the income/expense
           */
          security?: SecuritiesAPI.Security;
        }

        export namespace LucaIncome {
          /**
           * An income/expense object
           */
          export interface IncomeExpense {
            /**
             * The unique resource id for the Transaction
             */
            id?: number;

            /**
             * The dollar amount associated with the Transaction
             */
            abs_amount?: number;

            /**
             * The id of the Account associated with this Transaction
             */
            account_id?: number;

            /**
             * Timestamp for when the record was created
             */
            created_at_utc?: string;

            /**
             * Custodian the account data comes from. TDA=TD Ameritrade (Available prior to
             * Sept. 2, 2023), SWB=Schwab, NFS=Fidelity, PER=Pershing, MLT=MillenniumTrust,
             * HDG=Manual
             */
            custodian?:
              | 'TDA (Available prior to Sept. 2, 2023)'
              | 'SWB'
              | 'NFS'
              | 'PER'
              | 'DST'
              | 'MLT'
              | 'HDG';

            /**
             * Description of the transaction from the custodian
             */
            description?: string;

            /**
             * Flag to indicate if this Transaction is a cancel from the custodian
             */
            is_cancel?: boolean;

            /**
             * @deprecated
             */
            is_outside?: boolean | null;

            /**
             * Flag to indicate if the Transaction affects the time-weighted return performance
             * calculation
             */
            is_performance_impact?: boolean;

            /**
             * Flag to indicate if the Transaction increases the cash balance
             */
            is_positive_cash_impact?: boolean;

            /**
             * @deprecated: Raw Meta Data passed through from the custodian
             */
            meta_data?: unknown;

            /**
             * @deprecated
             */
            partition_id?: number | null;

            /**
             * @deprecated
             */
            recon_id?: number | null;

            /**
             * The date the custodian reports the transaction
             */
            reported_date?: string;

            /**
             * The id of the Security associated with this Transaction
             */
            security_id?: number;

            /**
             * The date of the transaction on a trade basis
             */
            transaction_date?: string;

            /**
             * Fees associated with the Transaction (e.g. commission)
             */
            transaction_fee?: number;

            /**
             * The type of transaction. Possible values, INC=income, EXP=expense
             */
            type?: 'INC' | 'EXP';

            /**
             * Timestamp for when the record was updated
             */
            updated_at_utc?: string;
          }
        }
      }
    }

    export interface ManagementFee {
      /**
       * An array of all the management fee transactions in the reporting period
       */
      items?: Array<unknown>;

      /**
       * The absolute value of management fee transactions in the report period
       */
      total?: number;
    }

    export interface RiskReturnChart {
      /**
       * The inception date of the reporting entity
       */
      inception_date?: string;

      /**
       * An array containing the risk return data for each account and benchmark series
       * for the entity
       */
      monthly_risk_return_data?: Array<RiskReturnChart.MonthlyRiskReturnData>;
    }

    export namespace RiskReturnChart {
      export interface MonthlyRiskReturnData {
        /**
         * The average monthly return of the given entity, on the real scale
         */
        AvgReturn?: number;

        /**
         * The end date of the risk return report range
         */
        EndDate?: string;

        /**
         * The frequency interval being used for risk/return observation
         */
        Frequency?: string;

        /**
         * An length-1 array holding a length-2 array which holds an [x,y] pair of
         * [avgerage return, standard deviation] for the given entity
         */
        HighChartTuple?: Array<Array<number>>;

        /**
         * The name of the entity the risk data applies to
         */
        Name?: string;

        /**
         * The Sharpe Ratio calulated for the given entity
         */
        SharpeRatio?: number;

        /**
         * The start date of the risk return report range
         */
        StartDate?: string;

        /**
         * The standard deviation of monthly returns of the given entity, on the real scale
         */
        StdDev?: number;
      }
    }

    /**
     * @deprecated
     */
    export interface SecurityExclusions {
      /**
       * An array of excluded asset subtotals
       */
      excluded_assets_subtotal?: Array<SecurityExclusions.ExcludedAssetsSubtotal>;

      /**
       * A boolean to indicate if the report entity has appraisal data
       */
      period_has_data?: boolean;

      /**
       * An array of the applicable security exclusions
       */
      security_exclusions?: Array<SecurityExclusions.SecurityExclusion>;

      /**
       * The grand total of excluded assets
       */
      total?: SecurityExclusions.Total;
    }

    export namespace SecurityExclusions {
      export interface ExcludedAssetsSubtotal {
        /**
         * The name of the asset classification
         */
        asset_class?: string;

        /**
         * An array of excluded assets
         */
        excluded_assets?: Array<ExcludedAssetsSubtotal.ExcludedAsset>;

        /**
         * The subtotal of excluded assets for the given asset class category
         */
        subtotal?: unknown;
      }

      export namespace ExcludedAssetsSubtotal {
        export interface ExcludedAsset {
          /**
           * The asset classification of the excluded asset
           */
          asset_class?: string;

          /**
           * A description of the excluded asset
           */
          description?: string;

          /**
           * The market price of the excluded asset
           */
          market_price?: number;

          /**
           * The market value of the excluded asset
           */
          market_value?: number;

          /**
           * The symbol of the excluded asset
           */
          symbol?: string;

          /**
           * The weight of the excluded asset out of the entire portfolio
           */
          weight?: number;
        }
      }

      export interface SecurityExclusion {
        /**
         * Unique ID for this security exclusion object
         */
        id?: number;

        /**
         * ID of the account the exclusions applies to, if applicable
         */
        account_id?: number | null;

        /**
         * Timestamp of the record's creation
         */
        created_at_utc?: string;

        /**
         * The end date of the optional exclusion applicability window
         */
        end_date?: string | null;

        /**
         * ID of the owning firm
         */
        firm_id?: number;

        /**
         * A percentage value representation of the exclusions
         */
        percent?: number;

        /**
         * The cusip of the excluded security
         */
        security_cusip?: string;

        /**
         * The description of the excluded security
         */
        security_description?: string;

        /**
         * ID of the excluded security
         */
        security_id?: number;

        /**
         * The ticker/symbol of the excluded security
         */
        security_symbol?: string;

        /**
         * The start date of the optional exclusion applicability window
         */
        start_date?: string | null;

        /**
         * A share quantity representation of the exclusion
         */
        units?: number;

        /**
         * Timestamp of the record's last update
         */
        updated_at_utc?: string;

        /**
         * A dollar amount representation of the exclusion
         */
        value?: number;
      }

      /**
       * The grand total of excluded assets
       */
      export interface Total {
        /**
         * The total of the excluded asset market values
         */
        market_value?: number;

        /**
         * The total of the excluded asset weights
         */
        weight?: number;
      }
    }

    export interface SecurityPerformance {
      /**
       * A map of buy sells keyed on security id
       */
      buy_sells_by_security_id?: Record<string, Array<SecurityPerformance.BuySellsBySecurityID>>;

      /**
       * A map of security performance summaries keyed on custom asset classification, if
       * there are any
       */
      by_cac?: Record<string, SecurityPerformance.ByCac>;

      /**
       * A map of security performance summaries keyed on master asset class
       */
      by_mac?: SecurityPerformance.ByMac;

      /**
       * An array containing a high-level performance summary of each security in the
       * portfolio
       */
      performance?: Array<SecurityPerformance.Performance>;

      /**
       * The grand totals of all security performance summaries
       */
      total?: SecurityPerformance.Total;

      /**
       * A map of transfers keyed on security id
       */
      transfers_by_security_id?: Record<string, Array<SecurityPerformance.TransfersBySecurityID>>;
    }

    export namespace SecurityPerformance {
      export interface BuySellsBySecurityID {
        buy_sell?: BuySellsBySecurityID.BuySell;

        security?: SecuritiesAPI.Security;
      }

      export namespace BuySellsBySecurityID {
        export interface BuySell {
          /**
           * The unique resource id for the Transaction
           */
          id?: number;

          /**
           * The dollar amount associated with the Transaction
           */
          abs_amount?: number;

          /**
           * The quantity of shares for the Transaction
           */
          abs_units?: number;

          /**
           * The id of the Account associated with this Transaction
           */
          account_id?: number;

          /**
           * Timestamp for when the record was created
           */
          created_at_utc?: string;

          /**
           * Custodian the account data comes from. TDA=TD Ameritrade (Available prior to
           * Sept. 2, 2023), SWB=Schwab, NFS=Fidelity, PER=Pershing, MLT=MillenniumTrust,
           * HDG=Manual
           */
          custodian?:
            | 'TDA (Available prior to Sept. 2, 2023)'
            | 'SWB'
            | 'NFS'
            | 'PER'
            | 'DST'
            | 'MLT'
            | 'HDG';

          /**
           * Description of the transaction from the custodian
           */
          description?: string;

          /**
           * Flag to indicate if this Transaction is a cancel from the custodian
           */
          is_cancel?: boolean;

          /**
           * @deprecated: Raw Meta Data passed through from the custodian
           */
          meta_data?: unknown;

          /**
           * @deprecated
           */
          partition_id?: number | null;

          /**
           * @deprecated
           */
          recon_id?: number | null;

          /**
           * The date the custodian reports the transaction
           */
          reported_date?: string;

          /**
           * The id of the Security associated with this Transaction
           */
          security_id?: number;

          /**
           * The date of the transaction on a trade basis
           */
          transaction_date?: string;

          /**
           * Fees associated with the Transaction (e.g. commission)
           */
          transaction_fee?: number;

          /**
           * The type of transaction. Possible values, BTO - buy to open, BTC - buy to close,
           * STO - sell to open, STC - sell to close
           */
          type?: 'BTO' | 'BTC' | 'STO' | 'STC';

          /**
           * Timestamp for when the record was updated
           */
          updated_at_utc?: string;
        }
      }

      export interface ByCac {
        /**
         * An array containing all the summary records for securities in the given
         * classification category
         */
        rows?: Array<unknown>;

        /**
         * The label of the given asset classification category
         */
        title?: string;

        /**
         * The subtotals of the the given asset classification category
         */
        total?: unknown;
      }

      /**
       * A map of security performance summaries keyed on master asset class
       */
      export interface ByMac {
        /**
         * The fixed income security performance table
         */
        DT?: unknown;

        /**
         * The equity security performance table
         */
        EQ?: unknown;

        /**
         * The "other" security performance table
         */
        MX?: unknown;
      }

      export interface Performance {
        /**
         * The beginning market value of the security's time series
         */
        beginning_market_value?: number;

        /**
         * The cumulative capital gains of the security
         */
        capital_gains?: number;

        /**
         * The cusip of the security
         */
        cusip?: string;

        /**
         * The description of the security
         */
        description?: string;

        /**
         * The end market value of the securit's time series
         */
        ending_market_value?: number;

        /**
         * The cumullative income of the security
         */
        income?: number;

        /**
         * Cumulative net additions in the security's time series
         */
        net_additions?: number;

        /**
         * The estimated annual income of the security
         */
        projected_annual_income?: number;

        /**
         * The id of the security
         */
        security_id?: number;

        /**
         * The symbol of the security
         */
        symbol?: string;

        /**
         * The total return of the security
         */
        total_return?: number;
      }

      /**
       * The grand totals of all security performance summaries
       */
      export interface Total {
        /**
         * The beginning market value of the security's time series
         */
        beginning_market_value?: number;

        /**
         * The cumulative capital gains of the security
         */
        capital_gains?: number;

        /**
         * The end market value of the securit's time series
         */
        ending_market_value?: number;

        /**
         * The cumullative income of the security
         */
        income?: number;

        /**
         * Cumulative net additions in the security's time series
         */
        net_additions?: number;

        /**
         * The estimated annual income of the security
         */
        projected_annual_income?: number;

        /**
         * The total return of the security
         */
        total_return?: number;
      }

      export interface TransfersBySecurityID {
        security?: SecuritiesAPI.Security;

        transfer?: TransfersBySecurityID.Transfer;
      }

      export namespace TransfersBySecurityID {
        export interface Transfer {
          /**
           * The unique resource id for the Transaction
           */
          id?: number;

          /**
           * The quantity of shares for the Transfer
           */
          abs_units?: number;

          /**
           * The id of the Account associated with this Transaction
           */
          account_id?: number;

          /**
           * Is the cost basis known for this transaction?
           */
          cost_basis_known?: boolean;

          /**
           * The unit cost price for shares being transferred
           */
          cost_basis_unit_price?: number;

          /**
           * Timestamp for when the record was created
           */
          created_at_utc?: string;

          /**
           * Custodian the account data comes from. TDA=TD Ameritrade (Available prior to
           * Sept. 2, 2023), SWB=Schwab, NFS=Fidelity, PER=Pershing, MLT=MillenniumTrust,
           * HDG=Manual
           */
          custodian?:
            | 'TDA (Available prior to Sept. 2, 2023)'
            | 'SWB'
            | 'NFS'
            | 'PER'
            | 'DST'
            | 'MLT'
            | 'HDG';

          /**
           * Description of the transaction from the custodian
           */
          description?: string;

          /**
           * Flag to indicate if this Transaction is a cancel from the custodian
           */
          is_cancel?: boolean;

          /**
           * @deprecated: Raw Meta Data passed through from the custodian
           */
          meta_data?: unknown;

          /**
           * Date when the transaction was originated
           */
          origination_date?: string | null;

          /**
           * @deprecated
           */
          partition_id?: number | null;

          /**
           * @deprecated
           */
          recon_id?: number | null;

          /**
           * The id of the replaced transfer associated with this transaction
           */
          replaced_transfer_id?: number | null;

          /**
           * The date the custodian reports the transaction
           */
          reported_date?: string;

          /**
           * The id of the Security associated with this Transaction
           */
          security_id?: number;

          /**
           * The date of the transaction on a trade basis
           */
          transaction_date?: string;

          /**
           * Fees associated with the Transaction (e.g. commission)
           */
          transaction_fee?: number;

          /**
           * The type of Transfer. Possible values, DEP - cash deposit, WITH - cash
           * withdrawal, TLO - transfer long to open - security transfers into an account,
           * TLC - transfer long to close - security transfers out of an account
           */
          type?: 'DEP' | 'WITH' | 'TLO' | 'TLC';

          /**
           * he closing market price of the security on the transaction_date. Note, for cash,
           * this is always 1
           */
          unit_price?: number;

          /**
           * Timestamp for when the record was updated
           */
          updated_at_utc?: string;
        }
      }
    }

    export interface Snapshot {
      account_summary?: unknown | null;

      allocations?: Array<Snapshot.Allocation>;

      benchmark_performance?: Array<unknown>;

      chart?: Snapshot.Chart;

      'household-summary'?: unknown | null;

      is_household?: boolean;

      latest_performance?: Snapshot.LatestPerformance;

      max_latest_date?: string;

      show_3_yr?: boolean;

      show_5_yr?: boolean;

      summary?: Snapshot.Summary;
    }

    export namespace Snapshot {
      export interface Allocation {
        /**
         * Custom asset classification
         */
        cac?: string;

        /**
         * Master asset classification
         */
        master_asset_class?: 'EQ' | 'DT' | 'CA' | 'CE' | 'MX' | 'UC' | 'ETF' | 'CR';

        /**
         * Total value of the allocation
         */
        total_value?: number;

        /**
         * Percent weight of the allocation out of the total portfolio value
         */
        weight_percent?: number;
      }

      export interface Chart {
        /**
         * The charting points for the portfolio value time series since inception
         */
        balance?: unknown;

        /**
         * The beginning of the chart time series
         */
        beginning_date?: string;

        /**
         * An array containing the performance charting points for each benchmark
         * associated with the portfolio, inception to date
         */
        benchmark_inception_return?: Array<unknown>;

        /**
         * An array containing the performance charting points for each benchmark
         * associated with the portfolio, period to date
         */
        benchmark_period_return?: Array<Chart.BenchmarkPeriodReturn>;

        /**
         * The charting points for the portfolio cumumulative net contribution time series
         * since inception
         */
        cumulative_contribution?: unknown;

        /**
         * The interval frequency of the chart
         */
        frequency?: 'M' | 'W' | 'D';

        /**
         * The charting points for portfolio performance since inception
         */
        inception_return?: unknown;

        /**
         * The charting points for portfolio performance for the reporting period
         */
        period_return?: unknown;
      }

      export namespace Chart {
        export interface BenchmarkPeriodReturn {
          /**
           * The id of the chart time series
           */
          id?: string;

          /**
           * The name of the chart time series
           */
          name?: string;

          /**
           * An array of chart points
           */
          points?: Array<BenchmarkPeriodReturn.Point> | null;
        }

        export namespace BenchmarkPeriodReturn {
          export interface Point {
            /**
             * The date of the chart point
             */
            time?: string;

            /**
             * The y value of the chart point
             */
            value?: number;
          }
        }
      }

      export interface LatestPerformance {
        /**
         * The end of the reporting period
         */
        date?: string;

        /**
         * The performance return for the five-year period to date, on the real scale null
         * if not enough data history is present
         */
        five_yr_return?: number | null;

        /**
         * True if the period is non-standard
         */
        is_custom_period?: boolean;

        /**
         * The performance return from the entity inception to date, on the real scale
         */
        itd_return?: number;

        /**
         * The performance return for the twelve-month period to day, on the real scale;
         */
        ltm_return?: number;

        /**
         * The performance return for the month to date, on the real scale
         */
        mtd_return?: number;

        /**
         * The performance return for the requested period to date, on the real scale
         */
        ptd_return?: number;

        /**
         * The performance return for the quarter to date, on the real scale
         */
        qtd_return?: number;

        /**
         * Description of the entity the performance data pertains to
         */
        series_id?: string;

        /**
         * The performance return for the three-year period to date, on the real scale;
         * null if not enough data history is present
         */
        three_yr_return?: number | null;

        /**
         * The performance return for the year to date, on the real scale
         */
        ytd_return?: number;
      }

      export interface Summary {
        itd?: unknown;

        ltm?: unknown;

        qtd?: Summary.Qtd;

        ytd?: unknown;
      }

      export namespace Summary {
        export interface Qtd {
          beginning_value?: number;

          ending_value?: number;

          manual_account_outside_income?: number;

          net_appreciation?: number;

          net_contribution?: number;

          net_return?: number;

          total_income?: number;
        }
      }
    }

    export interface TopHolding {
      /**
       * An array of asset allocations
       */
      allocations?: Array<unknown>;

      /**
       * False if there is no report data
       */
      has_data?: boolean;

      /**
       * An array of the top ten latest holdings in the portfolio
       */
      holdings?: Array<TopHolding.Holding>;

      /**
       * The date of the holdings
       */
      max_latest_date?: string;
    }

    export namespace TopHolding {
      export interface Holding {
        /**
         * The number of shares of the security in the holding
         */
        abs_units?: number;

        /**
         * The absolute values of the holding
         */
        abs_value?: number;

        /**
         * The security description for the holding
         */
        description?: string;

        /**
         * True if the holding is cash or equivalent
         */
        is_cash_or_equivalent?: boolean;

        /**
         * The signed value of the holding
         */
        signed_value?: number;

        /**
         * The weight of the holding out of the entire portfolio
         */
        weight?: number;
      }
    }
  }
}

export interface WebReportRunParams {
  /**
   * The end date of the report data to be generated
   */
  end: string;

  /**
   * The firm id for which report data will be generated
   */
  firm_id: number | null;

  /**
   * The start date of the report data to be generated
   */
  start: string;

  /**
   * The list of sub reports to generate data for
   */
  sub_reports: Array<string>;

  /**
   * The account id for which report data will be generated; null for a household
   * report
   */
  account_id?: number | null;

  /**
   * The household id for which report data will be generated; null for an account
   * report
   */
  household_id?: number | null;

  /**
   * True for internal rate of return performance calculations; false for time
   * weighted return performance calculations
   */
  irr_performance?: boolean | null;
}

export declare namespace WebReports {
  export { type WebReportRunResponse as WebReportRunResponse, type WebReportRunParams as WebReportRunParams };
}
