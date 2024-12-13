// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class SourcePositions extends APIResource {}

export interface Sourceposition {
  /**
   * The unique resource id for the position
   */
  id?: number;

  /**
   * The total cost basis value of the position as aggregated from reported open lots
   */
  abs_cost_basis?: number;

  /**
   * The sum of the cost basis among open lots with fully known cost basis that were
   * originated over 365 days ago
   */
  abs_cost_basis_lt?: number;

  /**
   * The sum of the cost basis among open lots with fully known cost basis that were
   * originated over within the last year
   */
  abs_cost_basis_st?: number;

  /**
   * The quantity of settled shares for the reported position
   */
  abs_settled_units?: number;

  /**
   * The quantity of shares for the reported position
   */
  abs_units?: number;

  /**
   * The market value using source-provided prices on the reported date
   */
  abs_value?: number;

  /**
   * The portion of the market value that is known to belong to a long-term lot
   */
  abs_value_lt?: number;

  /**
   * The current market value as reported directly from the source
   */
  abs_value_reported?: number;

  /**
   * The portion of the market value that is known to belong to a long-term lot
   */
  abs_value_st?: number;

  /**
   * Price per unit (qty) using source-provided market prices of the security
   */
  abs_value_unit_price?: number;

  /**
   * The price as reported on source positions
   */
  abs_value_unit_price_reported?: number;

  /**
   * The id of the Account associated with this Position
   */
  account_id?: number;

  /**
   * The account number of the Account associated with this Position
   */
  account_number?: string;

  /**
   * True if the cost basis for all shares in this positions are fully known
   */
  cost_basis_fully_known?: boolean;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Flag to indicate if position is Long or Short. Potential values, L = Long, S =
   * Short
   */
  direction?: 'L' | 'S';

  /**
   * The feed code of the Account associated with this Position
   */
  feed_code?: string;

  /**
   * The minimum open date among all lots with known open date
   */
  first_open_date?: string;

  /**
   * Total number of open lots reported by the source
   */
  open_lots?: number;

  /**
   * Total number of long-term open lots reported by the source
   */
  open_lots_lt?: number;

  /**
   * Total number of short-term open lots reported by the source
   */
  open_lots_st?: number;

  /**
   * Total number of open lots reported by the source with fully known cost basis
   */
  open_lots_with_cost_basis?: number;

  /**
   * Total number of long-term open lots reported by the source with fully known cost
   * basis
   */
  open_lots_with_cost_basis_lt?: number;

  /**
   * Total number of short-term open lots reported by the source with fully known
   * cost basis
   */
  open_lots_with_cost_basis_st?: number;

  /**
   * Total number of open units reported by the source
   */
  open_units?: number;

  /**
   * Total number of long-term open units reported by the source
   */
  open_units_lt?: number;

  /**
   * Total number of short-term open units reported by the source
   */
  open_units_st?: number;

  /**
   * Total number of open units reported by the source with fully known cost basis
   */
  open_units_with_cost_basis?: number;

  /**
   * Total number of long-term open units reported by the source with fully known
   * cost basis
   */
  open_units_with_cost_basis_lt?: number;

  /**
   * Total number of short-term open units reported by the source with fully known
   * cost basis
   */
  open_units_with_cost_basis_st?: number;

  /**
   * @deprecated: The raw data exactly as reported by the source with original field
   * names
   */
  original_data?: unknown;

  /**
   * The date the custodian reports the position
   */
  reported_date?: string;

  /**
   * The id of the Security associated with this Position
   */
  security_id?: number;

  /**
   * Custodian or source the position data comes from. APX=Apex Fintech Solutions,
   * DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers, NFS=Fidelity
   * Investments, PER=Pershing, SWB=Charles Schwab, TDA=TD Ameritrade (Available
   * prior to Sept. 2, 2023), EGB=Eaglebrook, MLT=Millenium Trust, TIA=TIAA Financial
   * Services
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

  /**
   * The unrealized gains or losses of the position as calculated by comparing
   * current market value to aggregated cost basis
   */
  unrealized_gain_loss?: number;

  /**
   * The portion of unrealized gain/loss known to be a long-term holding.
   */
  unrealized_gain_loss_lt?: number;

  /**
   * The portion of unrealized gain/loss known to be a long-term holding if reported
   * by the source
   */
  unrealized_gain_loss_lt_reported?: number;

  /**
   * The unrealized gains or losses of the position if reported by the source
   */
  unrealized_gain_loss_reported?: number;

  /**
   * The portion of unrealized gain/loss known to be a short-term holding.
   */
  unrealized_gain_loss_st?: number;

  /**
   * The portion of unrealized gain/loss known to be a short-term holding if reported
   * by the source
   */
  unrealized_gain_loss_st_reported?: number;
}

export type Sourcepositions = Array<Sourceposition>;

export declare namespace SourcePositions {
  export { type Sourceposition as Sourceposition, type Sourcepositions as Sourcepositions };
}
