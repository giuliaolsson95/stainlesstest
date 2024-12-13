// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class SourceData extends APIResource {
  /**
   * Status of source data ingestion. TDA availability status is applicable prior to
   * Sept. 2, 2023.
   */
  create(
    body?: SourceDataCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceDataCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<SourceDataCreateResponse>;
  create(
    body: SourceDataCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SourceDataCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/status/source-data', { body, ...options });
  }
}

export interface SourceDataCreateResponse {
  APX?: SourceDataCreateResponse.Apx;

  DST?: unknown;

  EGB?: unknown;

  FPR?: unknown;

  IBK?: unknown;

  MLT?: unknown;

  NFS?: unknown;

  PER?: unknown;

  SWB?: unknown;

  'TDA (Available prior to Sept. 2, 2023)'?: unknown;
}

export namespace SourceDataCreateResponse {
  export interface Apx {
    /**
     * Availability status for balance type source data
     */
    balances?: Apx.Balances;

    /**
     * Availability status for lot type source data
     */
    lots?: Apx.Lots;

    /**
     * Availability status for position type source data
     */
    positions?: Apx.Positions;

    /**
     * Availability status for realized gain loss type source data
     */
    realized_gain_losses?: Apx.RealizedGainLosses;

    /**
     * Availability status for transaction type source data
     */
    transactions?: Apx.Transactions;
  }

  export namespace Apx {
    /**
     * Availability status for balance type source data
     */
    export interface Balances {
      /**
       * Flag whether all accessible balance data is processed and available
       */
      available?: boolean;
    }

    /**
     * Availability status for lot type source data
     */
    export interface Lots {
      /**
       * Flag whether all accessible lot data is processed and available
       */
      available?: boolean;
    }

    /**
     * Availability status for position type source data
     */
    export interface Positions {
      /**
       * Flag whether all accessible position data is processed and available
       */
      available?: boolean;
    }

    /**
     * Availability status for realized gain loss type source data
     */
    export interface RealizedGainLosses {
      /**
       * Flag whether all accessible realized gain loss data is processed and available
       */
      available?: boolean;
    }

    /**
     * Availability status for transaction type source data
     */
    export interface Transactions {
      /**
       * Flag whether all accessible transaction data is processed and available
       */
      available?: boolean;
    }
  }
}

export interface SourceDataCreateParams {
  /**
   * Reported date for which to retrieve source data status
   */
  as_of_date?: string;
}

export declare namespace SourceData {
  export {
    type SourceDataCreateResponse as SourceDataCreateResponse,
    type SourceDataCreateParams as SourceDataCreateParams,
  };
}
