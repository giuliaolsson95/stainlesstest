// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class SourceRealizedGainLoss extends APIResource {}

export interface Sourcerealizedgainloss {
  /**
   * The unique resource id for the realized gain loss
   */
  id?: number;

  /**
   * The quantity of closed units
   */
  abs_closed_units?: number;

  /**
   * The value of the closed units
   */
  abs_closed_value?: number;

  /**
   * The quantity of originally opened units for the corresponding lot
   */
  abs_opened_units?: number;

  /**
   * The value of the originally opened units
   */
  abs_opened_value?: number;

  /**
   * The id of the Account associated with this Realized gain loss
   */
  account_id?: number;

  /**
   * The account number of the Account associated with this Realized gain loss
   */
  account_number?: string;

  /**
   * The gain or loss from the closed units
   */
  amount?: number;

  /**
   * The long term gain or loss from the closed units
   */
  amount_lt?: number;

  /**
   * The short term gain or loss from the closed units
   */
  amount_st?: number;

  /**
   * The date that the corresponding closed units were closed
   */
  close_date?: string;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Flag to indicate if lot is Long or Short. Potential values, L = Long, S = Short
   */
  direction?: 'L' | 'S';

  /**
   * The feed code of the Account associated with this Realized gain loss
   */
  feed_code?: string;

  /**
   * The lot identifier closed if reported by the source
   */
  lot_identifier?: string;

  /**
   * The lot selection method of the lot if reported by the source
   */
  lot_selection_method?: string;

  /**
   * The date that the units were originally opened
   */
  open_date?: string;

  /**
   * @deprecated: The raw data exactly as reported by the source with original field
   * names
   */
  original_data?: unknown;

  /**
   * The date the custodian reports the realized gain loss
   */
  reported_date?: string;

  /**
   * The id of the Security associated with this Realized gain loss
   */
  security_id?: number;

  /**
   * The date that the corresponding closed units were settled
   */
  settle_date?: string;

  /**
   * Custodian or source the realized gain loss data comes from. APX=Apex Fintech
   * Solutions, DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers,
   * NFS=Fidelity Investments, PER=Pershing, SWB=Charles Schwab, TDA=TD Ameritrade
   * (Available prior to Sept. 2, 2023), EGB=Eaglebrook, MLT=Millenium Trust,
   * TIA=TIAA Financial ServicesAPX=Apex Fintech Solutions, DST=DST Systems,
   * FPR=Fidelity 401k, IBK=Interactive Brokers, NFS=Fidelity Investments,
   * PER=Pershing, SWB=Charles Schwab, TDA=TD Ameritrade (Available prior to Sept. 2,
   * 2023), EGB=Eaglebrook, MLT=Millenium Trust, TIA=TIAA Financial Services
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
   * The cusip of the corresponding security as reported by the source if applicable
   */
  source_security_cusip?: string;

  /**
   * The symbol of the corresponding security as reported by the source if applicable
   */
  source_security_symbol?: string;
}

export type Sourcerealizedgainlosses = Array<Sourcerealizedgainloss>;

export declare namespace SourceRealizedGainLoss {
  export {
    type Sourcerealizedgainloss as Sourcerealizedgainloss,
    type Sourcerealizedgainlosses as Sourcerealizedgainlosses,
  };
}
