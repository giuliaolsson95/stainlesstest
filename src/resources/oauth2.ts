// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class Oauth2 extends APIResource {
  /**
   * Exchange your application's `client_id` and `client_secret` for a secure JWT
   * Token. Please note that the encoded `username:password` in the Basic Auth
   * request corresponds to `client_id:client_secret`.
   */
  exchange(body: Oauth2ExchangeParams, options?: Core.RequestOptions): Core.APIPromise<OAuth> {
    return this._client.post('/oauth2/token', {
      body,
      ...options,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded', ...options?.headers },
    });
  }
}

export interface OAuth {
  /**
   * The token expiry time
   */
  ExpiresIn?: number;

  /**
   * The token id
   */
  IdToken?: string;

  /**
   * The refreshed token id
   */
  RefreshToken?: string;

  /**
   * Type of the token generated. Example, Bearer
   */
  TokenType?: string;
}

export interface Oauth2ExchangeParams {
  /**
   * Grant type
   */
  grant_type: string;
}

export declare namespace Oauth2 {
  export { type OAuth as OAuth, type Oauth2ExchangeParams as Oauth2ExchangeParams };
}
