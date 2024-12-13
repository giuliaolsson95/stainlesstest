// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Benchmarks extends APIResource {
  /**
   * Returns the created Benchmark
   */
  create(
    params: BenchmarkCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarkCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/benchmarks', { query: { pager }, body, ...options });
  }

  /**
   * Returns a Benchmark based on a single ID
   */
  retrieve(
    id: number,
    query?: BenchmarkRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarkRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<BenchmarkRetrieveResponse>;
  retrieve(
    id: number,
    query: BenchmarkRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarkRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/reporting/benchmarks/${id}`, { query, ...options });
  }

  /**
   * Provide a Benchmark to update. Then entire Benchmark object **must** be provided
   * to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `coefficients`
   */
  update(
    params: BenchmarkUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarkUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/reporting/benchmarks/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Returns a list of Benchmarks within the data field
   */
  list(query?: BenchmarkListParams, options?: Core.RequestOptions): Core.APIPromise<BenchmarkListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<BenchmarkListResponse>;
  list(
    query: BenchmarkListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarkListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/reporting/benchmarks', { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id of item deleted, if
   * deletion was successful
   */
  delete(id: number, params?: BenchmarkDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: BenchmarkDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/reporting/benchmarks/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of created Benchmarks
   */
  createMany(
    params: BenchmarkCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarkCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/reporting/benchmarks/create-many', {
      query: { pager },
      body: body,
      ...options,
    });
  }

  /**
   * Returns the "OK" message and a json object with the number of items deleted, if
   * deletion was successful
   */
  deleteMany(params: BenchmarkDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/benchmarks/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of Benchmarks
   */
  filter(
    params?: BenchmarkFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarkFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<BenchmarkFilterResponse>;
  filter(
    params: BenchmarkFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BenchmarkFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/reporting/benchmarks/filter', { query: { pager }, body, ...options });
  }
}

export interface Benchmark {
  /**
   * Unique ID for this benchmark object
   */
  id?: number;

  /**
   * Coefficients associated with this benchmark
   */
  coefficients?: Benchmark.Coefficients;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * Benchmark name
   */
  name?: string;

  /**
   * Slugified benchmark name
   */
  slug?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace Benchmark {
  /**
   * Coefficients associated with this benchmark
   */
  export interface Coefficients {
    /**
     * Unique ID for this benchmark coefficient object
     */
    id?: number;

    /**
     * Benchmark object ID to which this coefficient belongs
     */
    benchmark_id?: number;

    /**
     * ID of the index that the benchmark weight is tied to
     */
    index_id?: number;

    /**
     * The coefficient on the benchmark; stored on the percentage scale (0.0 to 100.0)
     */
    weight?: string;
  }
}

export type Benchmarks = Array<Benchmark>;

export interface BenchmarkCreateResponse {
  current_page?: number;

  data?: Benchmark;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BenchmarkRetrieveResponse {
  current_page?: number;

  data?: Benchmark;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BenchmarkUpdateResponse {
  current_page?: number;

  data?: Benchmark;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BenchmarkListResponse {
  current_page?: number;

  data?: Benchmarks;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BenchmarkCreateManyResponse {
  current_page?: number;

  data?: Benchmarks;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BenchmarkFilterResponse {
  current_page?: number;

  data?: Benchmark;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface BenchmarkCreateParams {
  /**
   * Query param:
   */
  pager?: BenchmarkCreateParams.Pager;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Benchmark name
   */
  name?: string;

  /**
   * Body param: Slugified benchmark name
   */
  slug?: string;
}

export namespace BenchmarkCreateParams {
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

export interface BenchmarkRetrieveParams {
  pager?: BenchmarkRetrieveParams.Pager;
}

export namespace BenchmarkRetrieveParams {
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

export interface BenchmarkUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique ID for this benchmark object
   */
  body_id?: number;

  /**
   * Body param: Coefficients associated with this benchmark
   */
  coefficients?: BenchmarkUpdateParams.Coefficients;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Benchmark name
   */
  name?: string;

  /**
   * Body param: Slugified benchmark name
   */
  slug?: string;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export namespace BenchmarkUpdateParams {
  /**
   * Coefficients associated with this benchmark
   */
  export interface Coefficients {
    /**
     * Unique ID for this benchmark coefficient object
     */
    id?: number;

    /**
     * Benchmark object ID to which this coefficient belongs
     */
    benchmark_id?: number;

    /**
     * ID of the index that the benchmark weight is tied to
     */
    index_id?: number;

    /**
     * The coefficient on the benchmark; stored on the percentage scale (0.0 to 100.0)
     */
    weight?: string;
  }
}

export interface BenchmarkListParams {
  pager?: BenchmarkListParams.Pager;
}

export namespace BenchmarkListParams {
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

export interface BenchmarkDeleteParams {
  pager?: BenchmarkDeleteParams.Pager;
}

export namespace BenchmarkDeleteParams {
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

export interface BenchmarkCreateManyParams {
  /**
   * Body param:
   */
  body: Array<unknown>;

  /**
   * Query param:
   */
  pager?: BenchmarkCreateManyParams.Pager;
}

export namespace BenchmarkCreateManyParams {
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

export interface BenchmarkDeleteManyParams {
  /**
   * Query param:
   */
  pager?: BenchmarkDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace BenchmarkDeleteManyParams {
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

export interface BenchmarkFilterParams {
  /**
   * Query param:
   */
  pager?: BenchmarkFilterParams.Pager;

  /**
   * Body param: Unique ID for this benchmark object
   */
  id?: number;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Benchmark name
   */
  name?: string;

  /**
   * Body param: Slugified benchmark name
   */
  slug?: string;
}

export namespace BenchmarkFilterParams {
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

export declare namespace Benchmarks {
  export {
    type Benchmark as Benchmark,
    type Benchmarks as Benchmarks,
    type BenchmarkCreateResponse as BenchmarkCreateResponse,
    type BenchmarkRetrieveResponse as BenchmarkRetrieveResponse,
    type BenchmarkUpdateResponse as BenchmarkUpdateResponse,
    type BenchmarkListResponse as BenchmarkListResponse,
    type BenchmarkCreateManyResponse as BenchmarkCreateManyResponse,
    type BenchmarkFilterResponse as BenchmarkFilterResponse,
    type BenchmarkCreateParams as BenchmarkCreateParams,
    type BenchmarkRetrieveParams as BenchmarkRetrieveParams,
    type BenchmarkUpdateParams as BenchmarkUpdateParams,
    type BenchmarkListParams as BenchmarkListParams,
    type BenchmarkDeleteParams as BenchmarkDeleteParams,
    type BenchmarkCreateManyParams as BenchmarkCreateManyParams,
    type BenchmarkDeleteManyParams as BenchmarkDeleteManyParams,
    type BenchmarkFilterParams as BenchmarkFilterParams,
  };
}
