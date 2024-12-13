// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class AccountSummaryResource extends APIResource {
  /**
   * Fetch account meta status summary for all the source data accross the firm
   */
  list(query?: AccountSummaryListParams, options?: Core.RequestOptions): Core.APIPromise<AccountSummary>;
  list(options?: Core.RequestOptions): Core.APIPromise<AccountSummary>;
  list(
    query: AccountSummaryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountSummary> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/status/account-summary', { query, ...options });
  }
}

export interface AccountSummary {
  /**
   * Custodian or source the account balance data comes from. APX=Apex Fintech
   * Solutions, DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers,
   * NFS=Fidelity Investments, PER=Pershing, SWB=Charles Schwab, EGB=Eaglebrook,
   * MLT=Millenium Trust, TIA=TIAA Financial Services
   */
  source?: AccountSummary.Source;
}

export namespace AccountSummary {
  /**
   * Custodian or source the account balance data comes from. APX=Apex Fintech
   * Solutions, DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers,
   * NFS=Fidelity Investments, PER=Pershing, SWB=Charles Schwab, EGB=Eaglebrook,
   * MLT=Millenium Trust, TIA=TIAA Financial Services
   */
  export interface Source {
    /**
     * The account number of the Account associated with this account balance
     */
    account_number?: Source.AccountNumber;
  }

  export namespace Source {
    /**
     * The account number of the Account associated with this account balance
     */
    export interface AccountNumber {
      /**
       * The id of the Account associated with this account balance
       */
      account_id?: number;

      /**
       * Earliest date at which this account was quarantined for data reconciliation, or
       * null if it's not currently quarantined
       */
      first_quarantine_date?: string;

      /**
       * Number of balance associated with this account
       */
      n_bals?: number;

      /**
       * Number of lots associated with this account
       */
      n_lots?: number;

      /**
       * Number of positions associated with this account
       */
      n_positions?: number;

      /**
       * Date when the source date (positions, lots, balances) are reported
       */
      reported_date?: string;

      /**
       * Custodian or source the account balance data comes from. APX=Apex Fintech
       * Solutions, DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers,
       * NFS=Fidelity Investments, PER=Pershing, SWB=Charles Schwab, EGB=Eaglebrook,
       * MLT=Millenium Trust, TIA=TIAA Financial Services
       */
      source?: 'APX' | 'DST' | 'FPR' | 'IBK' | 'NFS' | 'PER' | 'SWB' | 'EGB' | 'MLT' | 'TIA';

      /**
       * Status of the account. It can be funded, papered, closed or slate. Funded
       * account is considered active account, Papered or Closed account is inactive, and
       * Stale is unknown
       */
      status?: 'funded' | 'papered' | 'closed' | 'stale';
    }
  }
}

export interface AccountSummaryListParams {
  /**
   * Date for the account status summary
   */
  reported_date?: string;
}

export declare namespace AccountSummaryResource {
  export { type AccountSummary as AccountSummary, type AccountSummaryListParams as AccountSummaryListParams };
}
