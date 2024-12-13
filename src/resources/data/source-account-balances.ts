// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class SourceAccountBalances extends APIResource {}

export interface Sourceaccountbalance {
  /**
   * The unique resource id for the account balance
   */
  id?: number;

  /**
   * The value of transfers in of cash and cash equivalents (i.e., money market
   * assets) on the reported date
   */
  abs_cash_contribution?: number;

  /**
   * The value of transfers out of cash and cash equivalents on the reported date
   */
  abs_cash_withdrawal?: number;

  /**
   * The total expenses from held securities on the reported date
   */
  abs_expense?: number;

  /**
   * The total income from held securities on the reported date
   */
  abs_income?: number;

  /**
   * The value of management fees applied to the account on the reported date
   */
  abs_management_fee?: number;

  /**
   * The total expense exempt from performance impact on the reported date
   */
  abs_non_performing_expense?: number;

  /**
   * The total income exempt from performance impact on the reported date
   */
  abs_non_performing_income?: number;

  /**
   * The value of transfers in of securities on the reported date
   */
  abs_security_contribution?: number;

  /**
   * The value of transfers out of securities on the reported date
   */
  abs_security_withdrawal?: number;

  /**
   * The id of the Account associated with this account balance
   */
  account_id?: number;

  /**
   * The account number of the Account associated with this account balance
   */
  account_number?: string;

  /**
   * The cash value as aggregated by source positions
   */
  cash_value?: number;

  /**
   * The cash value as reported by the source
   */
  cash_value_reported?: number;

  /**
   * True only if all cost basis is fully known across all positions in the account
   */
  cost_basis_fully_known?: boolean;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * The feed code of the Account associated with this account balance
   */
  feed_code?: string;

  /**
   * The total net income from held securities on the reported date
   */
  net_income?: number;

  /**
   * The net income exempt from performance impact on the reported date
   */
  net_non_performing_income?: number;

  /**
   * @deprecated: The raw data exactly as reported by the source with original field
   * names
   */
  original_data?: unknown;

  /**
   * The date the source reports the account balance
   */
  reported_date?: string;

  /**
   * The securities value as aggregated by source positions
   */
  securities_value?: number;

  /**
   * The securities value as reported by the source
   */
  securities_value_reported?: number;

  /**
   * Custodian or source the account balance data comes from. APX=Apex Fintech
   * Solutions, DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers,
   * NFS=Fidelity Investments, PER=Pershing, SWB=Charles Schwab, TDA=TD Ameritrade
   * (Available prior to Sept. 2, 2023), EGB=Eaglebrook, MLT=Millenium Trust,
   * TIA=TIAA Financial Services
   */
  source?:
    | 'APX'
    | 'DST'
    | 'FPR'
    | 'IBK'
    | 'NFS'
    | 'PER'
    | 'SWB'
    | 'TDA (Available prior to Sept. 2, 2023)'
    | 'EGB'
    | 'MLT'
    | 'TIA';

  /**
   * The total value of cash and security contributions on the reported date
   */
  total_abs_contribution?: number;

  /**
   * The total value of cash and security withdrawals on the reported date
   */
  total_abs_withdrawal?: number;

  /**
   * Total net contributions made to the account on the reported date
   */
  total_net_contribution?: number;

  /**
   * The total unrealized gain/loss as aggregated by source lots
   */
  total_unrealized_gain_loss?: number;

  /**
   * The total unrealized gain/loss as aggregated from reported unrealized gain
   * losses on source lots
   */
  total_unrealized_gain_loss_reported?: number;

  /**
   * The total cash and security value as aggregated by source positions
   */
  total_value?: number;

  /**
   * The total cash and security value as reported by the source
   */
  total_value_reported?: number;

  /**
   * The total unrealized gain/loss as aggregated by source lots known to be
   * long-term lots
   */
  unrealized_gain_loss_lt?: number;

  /**
   * The total unrealized gain/loss as aggregated from reported unrealized gain
   * losses on source lots known to be long-term lots
   */
  unrealized_gain_loss_lt_reported?: number;

  /**
   * The total unrealized gain/loss as aggregated by source lots known to be
   * short-term lots
   */
  unrealized_gain_loss_st?: number;

  /**
   * The total unrealized gain/loss as aggregated from reported unrealized gain
   * losses on source lots known to be short-term lots
   */
  unrealized_gain_loss_st_reported?: number;
}

export type Sourceaccountbalances = Array<Sourceaccountbalance>;

export declare namespace SourceAccountBalances {
  export {
    type Sourceaccountbalance as Sourceaccountbalance,
    type Sourceaccountbalances as Sourceaccountbalances,
  };
}
