// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AccountPerformance extends APIResource {
  /**
   * Fetch Account Performance for a list of Account IDs
   */
  fetch(
    body: AccountPerformanceFetchParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountPerformanceFetchResponse> {
    return this._client.post('/analytics/account-performance', { body, ...options });
  }
}

export type AccountPerformanceFetchResponse =
  Array<AccountPerformanceFetchResponse.AccountPerformanceFetchResponseItem>;

export namespace AccountPerformanceFetchResponse {
  export interface AccountPerformanceFetchResponseItem {
    /**
     * Five years return, percentage scale
     */
    five?: unknown;

    /**
     * Inception to date return, percentage scale
     */
    itd?: unknown;

    /**
     * Inception to date annualized return, percentage scale
     */
    itda?: unknown;

    /**
     * Month to date return, percentage scale
     */
    mtd?: AccountPerformanceFetchResponseItem.Mtd;

    /**
     * One year return, percentage scale
     */
    one?: unknown;

    /**
     * Quarter to date return, percentage scale
     */
    qtd?: unknown;

    /**
     * Three years return, percentage scale
     */
    three?: unknown;

    /**
     * Year to date return, percentage scale
     */
    ytd?: unknown;
  }

  export namespace AccountPerformanceFetchResponseItem {
    /**
     * Month to date return, percentage scale
     */
    export interface Mtd {
      /**
       * Account's current balance
       */
      current_balance?: number;

      /**
       * Id of the account entity
       */
      entity_id?: number;

      /**
       * Percentage net return of the account entity
       */
      net_return?: number;
    }
  }
}

export interface AccountPerformanceFetchParams {
  /**
   * Date for which the account performance is calculated
   */
  as_of_date: string;

  /**
   * List of account Ids
   */
  entity_ids: Array<number>;
}

export declare namespace AccountPerformance {
  export {
    type AccountPerformanceFetchResponse as AccountPerformanceFetchResponse,
    type AccountPerformanceFetchParams as AccountPerformanceFetchParams,
  };
}
