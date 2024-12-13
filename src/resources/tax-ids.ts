// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class TaxIDs extends APIResource {
  /**
   * Exchange`tax_id_token` For Plain Text Value
   */
  exchange(taxIdToken: string, options?: Core.RequestOptions): Core.APIPromise<TaxIDExchangeResponse> {
    return this._client.post(`/account-management/tax-id/exchange/${taxIdToken}`, options);
  }
}

export type TaxID = string;

export type TaxIDs = Array<TaxID>;

export interface TaxIDExchangeResponse {
  /**
   * The original value of the provided `tax_id_token`
   */
  original_value?: string;

  /**
   * The Tax ID Token provided
   */
  tax_id_token?: string;

  /**
   * The type of tax identifier. Can be a social security number or a tax ID.
   */
  type?: 'ssn' | 'tax_id';
}

export declare namespace TaxIDs {
  export { type TaxID as TaxID, type TaxIDs as TaxIDs, type TaxIDExchangeResponse as TaxIDExchangeResponse };
}
