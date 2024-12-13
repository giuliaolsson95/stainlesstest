// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Accounts extends APIResource {
  /**
   * Returns an account based on a single ID
   */
  retrieve(
    id: number,
    query?: AccountRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Account>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<Account>;
  retrieve(
    id: number,
    query: AccountRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Account> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/account-management/accounts/${id}`, { query, ...options });
  }

  /**
   * Provide an account to update. Then entire account object **must** be provided to
   * the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `benchmark_ids`
   * - `fee_structure_ids`
   * - `billing_split_ids`
   * - `notes`
   * - `nickname`
   * - `household_id` To remove an account from a household, provide `null` in this
   *   field.
   * - `target_allocation_id`
   * - `first_performance_date`
   * - `payment_source`
   * - `first_billable_date`
   * - `investment_model_id`
   * - `required_cash`
   * - `unsupervised_securities_ids`
   * - `buy_securities_ids`
   * - `sell_securities_ids`
   * - `do_not_buy_securities_ids`
   * - `do_not_sell_securities_ids`
   * - `required_cash_frequency`
   */
  update(params: AccountUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/account-management/accounts/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Return an enveloped list of Accounts accessible to your application
   */
  list(query?: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<AccountListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AccountListResponse>;
  list(
    query: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/account-management/accounts', { query, ...options });
  }

  /**
   * Filter accounts
   */
  filter(params?: AccountFilterParams, options?: Core.RequestOptions): Core.APIPromise<AccountFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<AccountFilterResponse>;
  filter(
    params: AccountFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/account-management/accounts/filter', { query: { pager }, body, ...options });
  }
}

export interface Account {
  /**
   * Unique ID for this account object
   */
  id?: number;

  /**
   * Type of account. Example, IRA Roth, 401k, etc.
   */
  acct_type?: string;

  /**
   * First line address
   */
  address_1?: string;

  /**
   * Second line address
   */
  address_2?: string;

  /**
   * Third line address
   */
  address_3?: string;

  /**
   * @deprecated: [Deprecated] Please refer to the `advisor_codes` field.
   * `advisor_code` will be removed in future versions.
   */
  advisor_code?: string;

  /**
   * The list of Advisor Codes that the account is associated with.
   */
  advisor_codes?: Array<string>;

  /**
   * List of ids for benchmarks associated with the account
   */
  benchmarks_ids?: Array<number>;

  /**
   * List of ids of splits associated with this account
   */
  billing_splits_ids?: Array<number>;

  /**
   * Securities specifically to buy
   */
  buy_securities_ids?: Array<number>;

  /**
   * City of the account-holder
   */
  city?: string;

  /**
   * @deprecated: Date the account was closed, if applicable
   */
  close_date?: string;

  /**
   * Country of the account-holder
   */
  country?: string;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Custodian the account data comes from. APX=Apex Fintech Solutions, DST=DST
   * Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers, NFS=Fidelity
   * Investments, PER=Pershing, SWB=Charles Schwab, EGB=Eaglebrook, MLT=Millenium
   * Trust, TIA=TIAA Financial Services
   */
  custodian?: 'APX' | 'DST' | 'FPR' | 'IBK' | 'NFS' | 'PER' | 'SWB' | 'EGB' | 'MLT' | 'TIA';

  /**
   * Full name of the custodian the account data comes from
   */
  custodian_name?: string;

  /**
   * Display name of the account
   */
  display_name?: string;

  /**
   * Display number of the account
   */
  display_number?: string;

  /**
   * Securities specifically to not buy
   */
  do_not_buy_securities_ids?: Array<number>;

  /**
   * Securities specifically to not sell
   */
  do_not_sell_securities_ids?: Array<number>;

  /**
   * @deprecated: See Entity ID Prefixes
   */
  entity_id?: string;

  /**
   * List of ids of fee structures associated with this account
   */
  fee_structures_ids?: Array<number>;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * The date at which this account begins accruing advisor fees
   */
  first_billable_date?: string;

  /**
   * First date when cost basis information is known for this account
   */
  first_cost_basis_date?: string;

  /**
   * @deprecated: Date when the account was first funded
   */
  first_funded_date?: string;

  /**
   * @deprecated: Date when the account was first papered
   */
  first_papered_date?: string;

  /**
   * First performance date for this account
   */
  first_performance_date?: string;

  /**
   * First date when positions information is known for this account
   */
  first_positions_date?: string;

  /**
   * @deprecated: Earliest date at which this account was quarantined for data
   * reconciliation, or null if it's not currently quarantined
   */
  first_quarantine_date?: string;

  /**
   * First date when transaction information was recorded for this account
   */
  first_transactions_date?: string;

  /**
   * Does this account have a custodian name?
   */
  has_custodian_name?: boolean;

  /**
   * Household Id this account belongs to
   */
  household_id?: number;

  /**
   * Date of account inception, if applicable. May differ from opening date.
   */
  inception_date?: string;

  /**
   * Investment model id associated with this account
   */
  investment_model_id?: number;

  /**
   * Is this entity an account? (Yes)
   */
  is_account?: boolean;

  /**
   * @deprecated: Is this an active account?
   */
  is_active?: boolean;

  /**
   * @deprecated: Is this a closed account?
   */
  is_closed?: boolean;

  /**
   * Is this account billed at the custodian level?
   */
  is_custodian_billed?: boolean;

  /**
   * Is this account directly billed?
   */
  is_direct_billed?: boolean;

  /**
   * Is this entity a household? (No)
   */
  is_household?: boolean;

  /**
   * Boolean that determines whether or not an account is a pledged account.
   */
  is_pledged_account?: boolean;

  /**
   * True if this account is tax deferrable. This data is typically provided by the
   * financial institution
   */
  is_tax_deferred?: boolean;

  /**
   * True if this account is taxable. This data is typically provided by the
   * financial institution
   */
  is_taxable?: boolean;

  /**
   * Most recent date when cost basis information is known for this account
   */
  last_cost_basis_date?: string;

  /**
   * Date for the last portfolio data for this account object
   */
  last_portfolio_data_date?: string;

  /**
   * Most recent date when positions information is known for this account
   */
  last_positions_date?: string;

  /**
   * Lastest date when the reporting information was recorded for this account
   */
  last_reporting_date?: string;

  /**
   * Latest date when transaction information was recorded for this account
   */
  last_transactions_date?: string;

  /**
   * Populated from custodian data
   */
  name?: string;

  /**
   * General notes on account entered by user
   */
  notes?: string;

  /**
   * Account number
   */
  number?: string;

  /**
   * C=billed at the custodian D=billed directly
   */
  payment_source?: 'C' | 'D';

  /**
   * Required cash amount in dollars to be set aside for withdrawals
   */
  required_cash?: number;

  /**
   * Required cash frequency for this account object. M for monthly, Q for quarterly,
   * O for one time
   */
  required_cash_frequency?: '' | 'M' | 'Q' | 'O';

  /**
   * List of restriction descriptions or restriction codes as provided by the
   * custodian.
   */
  restrictions?: string;

  /**
   * Securities specifically to sell
   */
  sell_securities_ids?: Array<number>;

  /**
   * @deprecated: The account short name or "SNAM"
   */
  short_name?: string;

  /**
   * State of the account-holder
   */
  state?: string;

  /**
   * Status of the account object. It can be funded, papered, closed or slate. Funded
   * account is considered active account, Papered or Closed account is inactive, and
   * Stale is unknown
   */
  status?: 'funded' | 'papered' | 'closed' | 'stale';

  /**
   * Target allocation id associated with this account
   */
  target_allocation_id?: number;

  /**
   * Tokenized representation of the account's owning tax ID.
   */
  tax_id_token?: string;

  /**
   * Securities to be excluded in trading integrations (e.g. rebalancing
   * calculations)
   */
  unsupervised_securities_ids?: Array<number>;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;

  /**
   * Zip code of the account-holder
   */
  zip_code?: string;
}

export type Accounts = Array<Account>;

export interface AccountListResponse {
  current_page?: number;

  data?: Accounts;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AccountFilterResponse {
  current_page?: number;

  data?: Accounts;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AccountRetrieveParams {
  pager?: AccountRetrieveParams.Pager;
}

export namespace AccountRetrieveParams {
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

export interface AccountUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique ID for this account object
   */
  body_id?: number;

  /**
   * Body param: Type of account. Example, IRA Roth, 401k, etc.
   */
  acct_type?: string;

  /**
   * Body param: First line address
   */
  address_1?: string;

  /**
   * Body param: Second line address
   */
  address_2?: string;

  /**
   * Body param: Third line address
   */
  address_3?: string;

  /**
   * Body param: [Deprecated] Please refer to the `advisor_codes` field.
   * `advisor_code` will be removed in future versions.
   */
  advisor_code?: string;

  /**
   * Body param: The list of Advisor Codes that the account is associated with.
   */
  advisor_codes?: Array<string>;

  /**
   * Body param: List of ids for benchmarks associated with the account
   */
  benchmarks_ids?: Array<number>;

  /**
   * Body param: List of ids of splits associated with this account
   */
  billing_splits_ids?: Array<number>;

  /**
   * Body param: Securities specifically to buy
   */
  buy_securities_ids?: Array<number>;

  /**
   * Body param: City of the account-holder
   */
  city?: string;

  /**
   * Body param: Date the account was closed, if applicable
   */
  close_date?: string;

  /**
   * Body param: Country of the account-holder
   */
  country?: string;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: Custodian the account data comes from. APX=Apex Fintech Solutions,
   * DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers, NFS=Fidelity
   * Investments, PER=Pershing, SWB=Charles Schwab, EGB=Eaglebrook, MLT=Millenium
   * Trust, TIA=TIAA Financial Services
   */
  custodian?: 'APX' | 'DST' | 'FPR' | 'IBK' | 'NFS' | 'PER' | 'SWB' | 'EGB' | 'MLT' | 'TIA';

  /**
   * Body param: Full name of the custodian the account data comes from
   */
  custodian_name?: string;

  /**
   * Body param: Display name of the account
   */
  display_name?: string;

  /**
   * Body param: Display number of the account
   */
  display_number?: string;

  /**
   * Body param: Securities specifically to not buy
   */
  do_not_buy_securities_ids?: Array<number>;

  /**
   * Body param: Securities specifically to not sell
   */
  do_not_sell_securities_ids?: Array<number>;

  /**
   * Body param: See Entity ID Prefixes
   */
  entity_id?: string;

  /**
   * Body param: List of ids of fee structures associated with this account
   */
  fee_structures_ids?: Array<number>;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: The date at which this account begins accruing advisor fees
   */
  first_billable_date?: string;

  /**
   * Body param: First date when cost basis information is known for this account
   */
  first_cost_basis_date?: string;

  /**
   * Body param: Date when the account was first funded
   */
  first_funded_date?: string;

  /**
   * Body param: Date when the account was first papered
   */
  first_papered_date?: string;

  /**
   * Body param: First performance date for this account
   */
  first_performance_date?: string;

  /**
   * Body param: First date when positions information is known for this account
   */
  first_positions_date?: string;

  /**
   * Body param: Earliest date at which this account was quarantined for data
   * reconciliation, or null if it's not currently quarantined
   */
  first_quarantine_date?: string;

  /**
   * Body param: First date when transaction information was recorded for this
   * account
   */
  first_transactions_date?: string;

  /**
   * Body param: Does this account have a custodian name?
   */
  has_custodian_name?: boolean;

  /**
   * Body param: Household Id this account belongs to
   */
  household_id?: number;

  /**
   * Body param: Date of account inception, if applicable. May differ from opening
   * date.
   */
  inception_date?: string;

  /**
   * Body param: Investment model id associated with this account
   */
  investment_model_id?: number;

  /**
   * Body param: Is this entity an account? (Yes)
   */
  is_account?: boolean;

  /**
   * Body param: Is this an active account?
   */
  is_active?: boolean;

  /**
   * Body param: Is this a closed account?
   */
  is_closed?: boolean;

  /**
   * Body param: Is this account billed at the custodian level?
   */
  is_custodian_billed?: boolean;

  /**
   * Body param: Is this account directly billed?
   */
  is_direct_billed?: boolean;

  /**
   * Body param: Is this entity a household? (No)
   */
  is_household?: boolean;

  /**
   * Body param: Boolean that determines whether or not an account is a pledged
   * account.
   */
  is_pledged_account?: boolean;

  /**
   * Body param: True if this account is tax deferrable. This data is typically
   * provided by the financial institution
   */
  is_tax_deferred?: boolean;

  /**
   * Body param: True if this account is taxable. This data is typically provided by
   * the financial institution
   */
  is_taxable?: boolean;

  /**
   * Body param: Most recent date when cost basis information is known for this
   * account
   */
  last_cost_basis_date?: string;

  /**
   * Body param: Date for the last portfolio data for this account object
   */
  last_portfolio_data_date?: string;

  /**
   * Body param: Most recent date when positions information is known for this
   * account
   */
  last_positions_date?: string;

  /**
   * Body param: Lastest date when the reporting information was recorded for this
   * account
   */
  last_reporting_date?: string;

  /**
   * Body param: Latest date when transaction information was recorded for this
   * account
   */
  last_transactions_date?: string;

  /**
   * Body param: Populated from custodian data
   */
  name?: string;

  /**
   * Body param: General notes on account entered by user
   */
  notes?: string;

  /**
   * Body param: Account number
   */
  number?: string;

  /**
   * Body param: C=billed at the custodian D=billed directly
   */
  payment_source?: 'C' | 'D';

  /**
   * Body param: Required cash amount in dollars to be set aside for withdrawals
   */
  required_cash?: number;

  /**
   * Body param: Required cash frequency for this account object. M for monthly, Q
   * for quarterly, O for one time
   */
  required_cash_frequency?: '' | 'M' | 'Q' | 'O';

  /**
   * Body param: List of restriction descriptions or restriction codes as provided by
   * the custodian.
   */
  restrictions?: string;

  /**
   * Body param: Securities specifically to sell
   */
  sell_securities_ids?: Array<number>;

  /**
   * Body param: The account short name or "SNAM"
   */
  short_name?: string;

  /**
   * Body param: State of the account-holder
   */
  state?: string;

  /**
   * Body param: Status of the account object. It can be funded, papered, closed or
   * slate. Funded account is considered active account, Papered or Closed account is
   * inactive, and Stale is unknown
   */
  status?: 'funded' | 'papered' | 'closed' | 'stale';

  /**
   * Body param: Target allocation id associated with this account
   */
  target_allocation_id?: number;

  /**
   * Body param: Tokenized representation of the account's owning tax ID.
   */
  tax_id_token?: string;

  /**
   * Body param: Securities to be excluded in trading integrations (e.g. rebalancing
   * calculations)
   */
  unsupervised_securities_ids?: Array<number>;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;

  /**
   * Body param: Zip code of the account-holder
   */
  zip_code?: string;
}

export interface AccountListParams {
  pager?: AccountListParams.Pager;
}

export namespace AccountListParams {
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

export interface AccountFilterParams {
  /**
   * Query param:
   */
  pager?: AccountFilterParams.Pager;

  /**
   * Body param: Unique ID for this account object
   */
  id?: number;

  /**
   * Body param: Type of account. Example, IRA Roth, 401k, etc.
   */
  acct_type?: string;

  /**
   * Body param: Advisor code for this account object
   */
  advisor_code?: string;

  /**
   * Body param: City of the account-holder
   */
  city?: string;

  /**
   * Body param: Date the account was closed, if applicable
   */
  close_date?: string | null;

  /**
   * Body param: Custodian the account data comes from. APX=Apex Fintech Solutions,
   * DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers, NFS=Fidelity
   * Investments, PER=Pershing, SWB=Charles Schwab, EGB=Eaglebrook, MLT=Millenium
   * Trust, TIA=TIAA Financial Services
   */
  custodian?: 'APX' | 'DST' | 'FPR' | 'IBK' | 'NFS' | 'PER' | 'SWB' | 'EGB' | 'MLT' | 'TIA';

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Household Id this account belongs to
   */
  household_id?: number;

  /**
   * Body param: Date of account inception, if applicable. May differ from opening
   * date.
   */
  inception_date?: string | null;

  /**
   * Body param: True if this account is tax deferrable. This data is typically
   * provided by the financial institution
   */
  is_tax_deferred?: boolean | null;

  /**
   * Body param: True if this account is taxable. This data is typically provided by
   * the financial insitution
   */
  is_taxable?: boolean | null;

  /**
   * Body param: Populated from custodian data but can be modified by users
   */
  name?: string;

  /**
   * Body param: Account number
   */
  number?: string;

  /**
   * Body param: C=billed at the custodian D=billed directly
   */
  payment_source?: 'C' | 'D';

  /**
   * Body param: Status of the account object. It can be funded, papered, closed or
   * slate. Funded account is considered active account, Papered or Closed account is
   * inactive, and Stale is unknown
   */
  status?: 'funded' | 'papered' | 'closed' | 'stale';

  /**
   * Body param: Zip code of the account-holder
   */
  zip_code?: string;
}

export namespace AccountFilterParams {
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

export declare namespace Accounts {
  export {
    type Account as Account,
    type Accounts as Accounts,
    type AccountListResponse as AccountListResponse,
    type AccountFilterResponse as AccountFilterResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountFilterParams as AccountFilterParams,
  };
}
