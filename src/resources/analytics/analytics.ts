// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AumAPI from './aum';
import {
  Aum,
  AumByAccountParams,
  AumByAccountResponse,
  AumByHouseholdParams,
  AumByHouseholdResponse,
  AumFilterParams,
  AumFilterResponse,
  AumGetAumParams,
  AumGetAumResponse,
  AumListParams,
  AumListResponse,
  AumResource,
  AumRetrieveParams,
  AumRetrieveResponse,
  Aums,
} from './aum';

export class Analytics extends APIResource {
  aum: AumAPI.AumResource = new AumAPI.AumResource(this._client);

  /**
   * Fetch Benchmark Performance for a list of Benchmark IDs
   */
  benchmarkPerformance(
    body: AnalyticsBenchmarkPerformanceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalyticsBenchmarkPerformanceResponse> {
    return this._client.post('/analytics/benchmark-performance', { body, ...options });
  }

  /**
   * Fetch Household Performance for a list of Household IDs
   */
  householdPerformance(
    body: AnalyticsHouseholdPerformanceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AnalyticsHouseholdPerformanceResponse> {
    return this._client.post('/analytics/household-performance', { body, ...options });
  }
}

export type AnalyticsBenchmarkPerformanceResponse =
  Array<AnalyticsBenchmarkPerformanceResponse.AnalyticsBenchmarkPerformanceResponseItem>;

export namespace AnalyticsBenchmarkPerformanceResponse {
  export interface AnalyticsBenchmarkPerformanceResponseItem {
    /**
     * ID for the benchmark object
     */
    benchmark_id?: number;

    /**
     * Date for which the benchmark is calculated
     */
    date?: string;

    /**
     * Benchmark five year return, percentage scale
     */
    five_yr_return?: number;

    /**
     * Benchmark inception to date annualized return, percentage scale
     */
    itd_annual_return?: number;

    /**
     * Benchmark inception to date return, percentage scale
     */
    itd_return?: number;

    /**
     * Benchmark month to date return, percentage scale
     */
    mtd_return?: number;

    /**
     * Name for the benchmark object
     */
    name?: string;

    /**
     * Benchmark one year return, percentage scale
     */
    one_yr_return?: number;

    /**
     * Benchmark quarter to date return, percentage scale
     */
    qtd_return?: number;

    /**
     * Benchmark three year return, percentage scale
     */
    three_yr_return?: number;

    /**
     * Benchmark year to date return, percentage scale
     */
    ytd_return?: number;
  }
}

export type AnalyticsHouseholdPerformanceResponse =
  Array<AnalyticsHouseholdPerformanceResponse.AnalyticsHouseholdPerformanceResponseItem>;

export namespace AnalyticsHouseholdPerformanceResponse {
  export interface AnalyticsHouseholdPerformanceResponseItem {
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
    mtd?: AnalyticsHouseholdPerformanceResponseItem.Mtd;

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

  export namespace AnalyticsHouseholdPerformanceResponseItem {
    /**
     * Month to date return, percentage scale
     */
    export interface Mtd {
      /**
       * Household's current balance
       */
      current_balance?: number;

      /**
       * Id of the household entity
       */
      entity_id?: number;

      /**
       * Percentage net return of the household entity
       */
      net_return?: number;
    }
  }
}

export interface AnalyticsBenchmarkPerformanceParams {
  /**
   * End date for the household performance calcuation
   */
  end_date: string;

  /**
   * Start date for the household performance calcuation
   */
  start_date: string;

  /**
   * List of benchmark Ids
   */
  benchmarks_ids?: Array<number>;
}

export interface AnalyticsHouseholdPerformanceParams {
  /**
   * Date for which the household performance is calculated
   */
  as_of_date: string;

  /**
   * List of household Ids
   */
  entity_ids: Array<number>;
}

Analytics.AumResource = AumResource;

export declare namespace Analytics {
  export {
    type AnalyticsBenchmarkPerformanceResponse as AnalyticsBenchmarkPerformanceResponse,
    type AnalyticsHouseholdPerformanceResponse as AnalyticsHouseholdPerformanceResponse,
    type AnalyticsBenchmarkPerformanceParams as AnalyticsBenchmarkPerformanceParams,
    type AnalyticsHouseholdPerformanceParams as AnalyticsHouseholdPerformanceParams,
  };

  export {
    AumResource as AumResource,
    type Aum as Aum,
    type Aums as Aums,
    type AumRetrieveResponse as AumRetrieveResponse,
    type AumListResponse as AumListResponse,
    type AumByAccountResponse as AumByAccountResponse,
    type AumByHouseholdResponse as AumByHouseholdResponse,
    type AumFilterResponse as AumFilterResponse,
    type AumGetAumResponse as AumGetAumResponse,
    type AumRetrieveParams as AumRetrieveParams,
    type AumListParams as AumListParams,
    type AumByAccountParams as AumByAccountParams,
    type AumByHouseholdParams as AumByHouseholdParams,
    type AumFilterParams as AumFilterParams,
    type AumGetAumParams as AumGetAumParams,
  };
}
