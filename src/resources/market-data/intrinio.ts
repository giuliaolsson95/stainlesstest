// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Intrinio extends APIResource {
  /**
   * Endpoint to access market data from Intrinio. Sign up for an API Key
   * [here](https://docs.intrinio.com/documentation/api_v2/getting_started). The
   * endpoint response varies depending on the Intrinio endpoint provided.
   */
  retrieve(
    intrinioEndpoint: string,
    params: IntrinioRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<unknown> {
    const { 'x-Intrinio-Api-Key': xIntrinioAPIKey, ...query } = params;
    return this._client.get(`/market-data/intrinio/${intrinioEndpoint}`, {
      query,
      ...options,
      headers: { 'x-Intrinio-Api-Key': xIntrinioAPIKey, ...options?.headers },
    });
  }
}

export type IntrinioRetrieveResponse = unknown;

export interface IntrinioRetrieveParams {
  /**
   * Header param: Your API Key used for API Access from Intrinio.
   */
  'x-Intrinio-Api-Key': string;

  /**
   * Query param: Intrinio pagination parameter (See
   * [Intrinio Paging Documentation](https://docs.intrinio.com/documentation/api_v2/paging))
   */
  next_page?: string;
}

export declare namespace Intrinio {
  export {
    type IntrinioRetrieveResponse as IntrinioRetrieveResponse,
    type IntrinioRetrieveParams as IntrinioRetrieveParams,
  };
}
