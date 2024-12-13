// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class SourceTransactions extends APIResource {}

export interface Sourcetransaction {
  /**
   * The unique resource id for the transaction
   */
  id?: number;

  /**
   * The id of the Account associated with this Transaction
   */
  account_id?: number;

  /**
   * The account number of the Account associated with this Transaction
   */
  account_number?: string;

  /**
   * Custodian provided accrued interest associated with a transaction.
   */
  accrued_interest?: number;

  /**
   * The signed amount for the reported transaction
   */
  amount?: number;

  /**
   * BridgeFT transaction categorization. Used in conjunction with classification to
   * classify transaction type. trd = Trade, xfr = Transfer, inc = Income/Expense,
   * crp = Corporate Action, oth = Other
   */
  category?: 'trd' | 'xfr' | 'inc' | 'crp' | 'oth';

  /**
   * BridgeFT transaction categorization. Used in conjunction with classification to
   * classify transaction type. bto = Buy to Open, stc = Sell to Close, btc = Buy to
   * Close, sto = Sell to Open, dvr = Dividend Reinvestment, inc = Other Income, exp
   * = Other Expense, div = Dividend, int = Interest, mfe = Management Fee, tax =
   * Tax, dep = Deposit, wth = Withdrawal, rec = Shares Received, del = Shares
   * Delivered, spl = Split, chg = Symbol Change, jnl = Journal, oth = Other
   */
  classification?:
    | 'bto'
    | 'stc'
    | 'btc'
    | 'sto'
    | 'dvr'
    | 'inc'
    | 'exp'
    | 'div'
    | 'int'
    | 'mfe'
    | 'tax'
    | 'dep'
    | 'wth'
    | 'rec'
    | 'del'
    | 'spl'
    | 'chg'
    | 'jnl'
    | 'oth';

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Extra description for the transaction
   */
  description?: string;

  /**
   * The feed code of the Account associated with this Transaction
   */
  feed_code?: string;

  /**
   * Any fees for the transaction as reported by the custodian
   */
  fees?: number;

  /**
   * True if the transaction is canceled. Canceled transactions are often paired with
   * a matching uncanceled transactions.
   */
  is_cancel?: boolean;

  /**
   * The date the custodian reports the transaction
   */
  reported_date?: string;

  /**
   * The id of the Security associated with this Transaction
   */
  security_id?: number;

  /**
   * The date that the transaction settled if reported
   */
  settle_date?: string;

  /**
   * Custodian or source the transaction data comes from. APX=Apex, EGB=Eaglebrook,
   * FPR=Fidelity 401k, IBK=Interactive Brokers, MLT=MillenniumTrust, NFS=Fidelity,
   * PER=Pershing, SWB=Schwab, TDA=TD Ameritrade, TIA=Tiaa
   */
  source?: 'APX' | 'DST' | 'EGB' | 'FPR' | 'IBK' | 'MLT' | 'NFS' | 'PER' | 'SWB' | 'TDA' | 'TIA';

  /**
   * The cusip of the corresponding security as reported by the source if applicable
   */
  source_security_cusip?: string;

  /**
   * The symbol of the corresponding security as reported by the source if applicable
   */
  source_security_symbol?: string;

  /**
   * The custodian reported transaction code for the transaction
   */
  source_transaction_code?: string;

  /**
   * Indicator to declare if the trade records provided by the custodian is coming
   * from a trade date or settlement date based system of record. T = Trade Date
   * Based, S = Settlement Date Based, and empty values are for non-trade activity or
   * data is not provided by the custodian.
   */
  trade_settle_ind?: 'T' | 'S' | '';

  /**
   * The date of the transaction. May be different from the reported date.
   */
  transaction_date?: string;

  /**
   * The unit price of the transaction if reported
   */
  unit_price?: number;

  /**
   * The signed quantity of shares for the reported transaction
   */
  units?: number;
}

export type Sourcetransactions = Array<Sourcetransaction>;

export declare namespace SourceTransactions {
  export { type Sourcetransaction as Sourcetransaction, type Sourcetransactions as Sourcetransactions };
}
