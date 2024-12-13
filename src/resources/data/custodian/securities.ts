// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Securities extends APIResource {
  /**
   * Returns a list of securities based on the ids passed in
   */
  fetch(params: SecurityFetchParams, options?: Core.RequestOptions): Core.APIPromise<Securities> {
    const { pager, ...body } = params;
    return this._client.post('/data/custodian/securities/fetch', { query: { pager }, body, ...options });
  }

  /**
   * Returns compressed and modified representations of all Securities that are being
   * tracked
   */
  getCompressed(query?: SecurityGetCompressedParams, options?: Core.RequestOptions): Core.APIPromise<string>;
  getCompressed(options?: Core.RequestOptions): Core.APIPromise<string>;
  getCompressed(
    query: SecurityGetCompressedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<string> {
    if (isRequestOptions(query)) {
      return this.getCompressed({}, query);
    }
    return this._client.get('/data/custodian/securities/get-compressed', {
      query,
      ...options,
      headers: { Accept: 'application/json', ...options?.headers },
    });
  }

  /**
   * Returns a list of security ids that belong to the user's household and firm
   */
  managed(
    query?: SecurityManagedParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityManagedResponse>;
  managed(options?: Core.RequestOptions): Core.APIPromise<SecurityManagedResponse>;
  managed(
    query: SecurityManagedParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityManagedResponse> {
    if (isRequestOptions(query)) {
      return this.managed({}, query);
    }
    return this._client.get('/data/custodian/securities/managed', { query, ...options });
  }

  /**
   * Returns a list of normalized custodian reported securities enriched with
   * Intrinio Market data for a provided `reported_date`
   *
   * **Example Records**
   *
   * Below is an example of two security records reported by Schwab, the first is a
   * standard `AAPL` stock and below that is an AAPL option. Option records will have
   * additional data points populated that provided specific information about the
   * option as reported by the custodian.
   *
   * ```json
   * [
   *   {
   *     "reported_date": "2024-07-10",
   *     "source": "SWB",
   *     "cusip": "037833100",
   *     "symbol": "AAPL",
   *     "description": "APPLE INC ",
   *     "security_type": "COM",
   *     "security_type_description": "COMMON STOCK",
   *     "option_root_symbol": "",
   *     "option_expiration_date": "",
   *     "option_code": "",
   *     "strike_price_amount": 0,
   *     "market_data": {
   *       "symbol": "AAPL",
   *       "description": "Apple Inc",
   *       "figi": "BBG000B9Y5X2",
   *       "composite_figi": "BBG000B9XRY4",
   *       "security_type": "Ordinary Shares",
   *       "security_code": "EQS",
   *       "security_code_description": "Equity Shares"
   *     }
   *   },
   *   {
   *     "reported_date": "2024-07-10",
   *     "source": "SWB",
   *     "cusip": "",
   *     "symbol": "AAPL",
   *     "description": "CALL APPLE INC $195        EXP 09/19/25",
   *     "security_type": "OEQ",
   *     "security_type_description": "EQUITY OPTION",
   *     "option_root_symbol": "AAPL",
   *     "option_expiration_date": "2025-09-19",
   *     "option_code": "C",
   *     "strike_price_amount": 195,
   *     "market_data": {
   *       "symbol": "AAPL",
   *       "description": "Apple Inc",
   *       "figi": "BBG000B9Y5X2",
   *       "composite_figi": "BBG000B9XRY4",
   *       "security_type": "Ordinary Shares",
   *       "security_code": "EQS",
   *       "security_code_description": "Equity Shares"
   *     }
   *   }
   * ]
   * ```
   */
  reference(
    body: SecurityReferenceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityReferenceResponse> {
    return this._client.post('/data/custodian/securities/reference', { body, ...options });
  }

  /**
   * Returns modified representations of Securities based on input parameters used
   * for filtering
   */
  search(
    q: string,
    query?: SecuritySearchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecuritySearchResponse>;
  search(q: string, options?: Core.RequestOptions): Core.APIPromise<SecuritySearchResponse>;
  search(
    q: string,
    query: SecuritySearchParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecuritySearchResponse> {
    if (isRequestOptions(query)) {
      return this.search(q, {}, query);
    }
    return this._client.get(`/data/custodian/securities/search/${q}`, { query, ...options });
  }
}

export type Securities = Array<Security>;

export interface Security {
  /**
   * The unique resource id for the Security
   */
  id?: number;

  /**
   * Bond Rating of Bond provided by the custodian (currently only supported for
   * Pershing Securities)
   */
  bond_rating?: string;

  /**
   * @deprecated: The broad code of the Security
   */
  broad_code?: string;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * A unique nine-character code for the security
   */
  cusip?: string;

  /**
   * The description of the Security
   */
  description?: string;

  /**
   * Expiration Date of Options, Rights and Warrants provided by the custodian
   * (currently only supported for Pershing Securities)
   */
  expiration_date?: string;

  /**
   * The primary identifier for the Security
   */
  identifier?: string;

  /**
   * An internal mapping of the Security's issue code
   */
  issue_type?: string;

  /**
   * The Security's issue code
   */
  issue_type_code?: number;

  /**
   * Asset class associated with the security. EQ for Equity Asset Class, DT for
   * Fixed Income Asset Class, CA for Cash Asset Class, CE for Cash Equivalent Asset
   * Class, MX for Mixed Asset Class or Other Class, UC for Unclassified Asset Class,
   * ETF for ETF Asset Class, CR for Crypto Asset Class, and empty string for Unknown
   * Asset Class
   */
  master_asset_class?: 'EQ' | 'DT' | 'CA' | 'CE' | 'MX' | 'UC' | 'ETF' | 'CR';

  /**
   * Maturity Date of Bond provided by the custodian (currently only supported for
   * Pershing Securities)
   */
  maturity_date?: string;

  /**
   * The primary identifier for the Security with a prefix indicating the identifier
   * type. S for Listed Symbol, C for Custodian
   */
  prefixed_identifier?: 'S' | 'C';

  /**
   * The type of this Security. "Alternative" Includes structures products, MBS, CDO,
   * etc. "Option" Includes options on equities and futures. "Fund" Includes a fund
   * that is not a ETF of mutual fund.
   */
  security_type?:
    | 'Stock'
    | 'Bond'
    | 'Cash'
    | 'Cash Equivalent'
    | 'ETF'
    | 'Mutual Fund'
    | 'Alternative'
    | 'Option'
    | 'Fund'
    | 'Crypto'
    | 'Unknown';

  /**
   * The sic code of the security
   */
  sic_code?: string;

  /**
   * The symbol used to represent the Security
   */
  symbol?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type SecurityGetCompressedResponse = string;

export type SecurityManagedResponse = Array<number>;

export type SecurityReferenceResponse = Array<SecurityReferenceResponse.SecurityReferenceResponseItem>;

export namespace SecurityReferenceResponse {
  export interface SecurityReferenceResponseItem {
    /**
     * A unique nine-character code for the security reported by the custodian.
     */
    cusip?: string;

    /**
     * The description of the Security as reported by the custodian.
     */
    description?: string;

    /**
     * Intrinio Market Data for the custodian reported security
     */
    market_data?: SecurityReferenceResponseItem.MarketData;

    /**
     * Populated only for options, this is the option type as reported by the
     * custodian.
     */
    option_code?: string;

    /**
     * Populated only for options, this is the expiration date of the option as
     * reported by the custodian.
     */
    option_expiration_date?: string;

    /**
     * Populated only for options, this is the underlying symbol of the traded option
     * as reported by the custodian.
     */
    option_root_symbol?: string;

    /**
     * The date the custodian reported the security record.
     */
    reported_date?: string;

    /**
     * The security type as reported by the custodian.
     */
    security_type?: string;

    /**
     * A human readable description of the security_type that was provided by the
     * custodian.
     */
    security_type_description?: string;

    /**
     * The custodian code that reported the security.
     */
    source?: 'APX' | 'DST' | 'EGB' | 'FPR' | 'IBK' | 'MLT' | 'NFS' | 'PER' | 'SWB' | 'TIA';

    /**
     * Populated only for options, this is the strike price of the option as reported
     * by the custodian.
     */
    strike_price_amount?: number;

    /**
     * The symbol used to represent the Security reported by the custodian.
     */
    symbol?: string;
  }

  export namespace SecurityReferenceResponseItem {
    /**
     * Intrinio Market Data for the custodian reported security
     */
    export interface MarketData {
      /**
       * Composite Figi of the security provided by Intrinio Market Data
       */
      composite_figi?: string;

      /**
       * Security Description provided by Intrinio Market Data
       */
      description?: string;

      /**
       * Figi of the security provided by Intrinio Market Data
       */
      figi?: string;

      /**
       * Security Code provided by Intrinio Market Data
       */
      security_code?: string;

      /**
       * Enriched description of the Security Code provided by Intrinio Market Data
       */
      security_code_description?: string;

      /**
       * Security Type provided by Intrinio Market Data
       */
      security_type?: string;

      /**
       * Symbol as reported by Intrinio Market Data
       */
      symbol?: string;
    }
  }
}

export interface SecuritySearchResponse {
  current_page?: number;

  data?: Security;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface SecurityFetchParams {
  /**
   * Query param:
   */
  pager?: SecurityFetchParams.Pager;

  /**
   * Body param: List of security ids to be fetched
   */
  ids?: Array<number>;
}

export namespace SecurityFetchParams {
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

export interface SecurityGetCompressedParams {
  pager?: SecurityGetCompressedParams.Pager;
}

export namespace SecurityGetCompressedParams {
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

export interface SecurityManagedParams {
  pager?: SecurityManagedParams.Pager;
}

export namespace SecurityManagedParams {
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

export interface SecurityReferenceParams {
  /**
   * The reported date of custodian provided securities. This field is required.
   */
  reported_date: string;
}

export interface SecuritySearchParams {
  pager?: SecuritySearchParams.Pager;
}

export namespace SecuritySearchParams {
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

export declare namespace Securities {
  export {
    type Securities as Securities,
    type Security as Security,
    type SecurityGetCompressedResponse as SecurityGetCompressedResponse,
    type SecurityManagedResponse as SecurityManagedResponse,
    type SecurityReferenceResponse as SecurityReferenceResponse,
    type SecuritySearchResponse as SecuritySearchResponse,
    type SecurityFetchParams as SecurityFetchParams,
    type SecurityGetCompressedParams as SecurityGetCompressedParams,
    type SecurityManagedParams as SecurityManagedParams,
    type SecurityReferenceParams as SecurityReferenceParams,
    type SecuritySearchParams as SecuritySearchParams,
  };
}
