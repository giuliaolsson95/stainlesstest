// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class TaxID extends APIResource {
  /**
   * Exchange list of `tax_id_tokens` For Their Plain Text Values
   */
  exchange(body: TaxIDExchangeParams, options?: Core.RequestOptions): Core.APIPromise<TaxIDExchangeResponse> {
    return this._client.post('/account-management/tax-id/exchange', { body, ...options });
  }
}

export type TaxIDExchangeResponse = Array<unknown>;

export interface TaxIDExchangeParams {
  /**
   * The list of `tax_id_tokens` to exchange for their original values.
   */
  tax_id_tokens?: Array<string>;
}

export declare namespace TaxID {
  export {
    type TaxIDExchangeResponse as TaxIDExchangeResponse,
    type TaxIDExchangeParams as TaxIDExchangeParams,
  };
}
