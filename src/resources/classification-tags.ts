// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class ClassificationTags extends APIResource {
  /**
   * Returns the created classification tag
   */
  create(
    params: ClassificationTagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/class-tags', { query: { pager }, body, ...options });
  }

  /**
   * Returns a classification tag based on a single ID
   */
  retrieve(
    id: number,
    query?: ClassificationTagRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<ClassificationTagRetrieveResponse>;
  retrieve(
    id: number,
    query: ClassificationTagRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/reporting/class-tags/${id}`, { query, ...options });
  }

  /**
   * Provide a Classification Tag to update. The entire Classification Tag object
   * **must** be provided to the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   */
  update(
    params: ClassificationTagUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/reporting/class-tags/${path_id}`, {
      body: { id: body_id, ...body },
      ...options,
    });
  }

  /**
   * Returns a list of Classification Tags within the data field
   */
  list(
    query?: ClassificationTagListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<ClassificationTagListResponse>;
  list(
    query: ClassificationTagListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/reporting/class-tags', { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id of item deleted, if
   * deletion was successful
   */
  delete(
    id: number,
    params?: ClassificationTagDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void>;
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    id: number,
    params: ClassificationTagDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete(id, {}, params);
    }
    const { pager } = params;
    return this._client.delete(`/reporting/class-tags/${id}`, {
      query: { pager },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a list of created Classification Tags
   */
  createMany(
    params: ClassificationTagCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagCreateManyResponse> {
    const { body, pager } = params;
    return this._client.post('/reporting/class-tags/create-many', {
      query: { pager },
      body: body,
      ...options,
    });
  }

  /**
   * Returns the "OK" message and a json object with the number of items deleted, if
   * deletion was successful
   */
  deleteMany(
    params: ClassificationTagDeleteManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    const { pager, ...body } = params;
    return this._client.post('/reporting/class-tags/delete-many', {
      query: { pager },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Returns a filtered list of classification tags
   */
  filter(
    params?: ClassificationTagFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<ClassificationTagFilterResponse>;
  filter(
    params: ClassificationTagFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ClassificationTagFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/reporting/class-tags/filter', { query: { pager }, body, ...options });
  }
}

export interface ClassificationTag {
  /**
   * Unique ID for this class tag object
   */
  id?: number;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Created timestamp in UTC
   */
  created_dt_utc?: string;

  /**
   * ID of the owning firm
   */
  firm_id?: number;

  /**
   * Class tag name
   */
  name?: string;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type ClassificationTags = Array<ClassificationTag>;

export interface ClassificationTagCreateResponse {
  current_page?: number;

  data?: ClassificationTag;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ClassificationTagRetrieveResponse {
  current_page?: number;

  data?: ClassificationTag;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ClassificationTagUpdateResponse {
  current_page?: number;

  data?: ClassificationTag;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ClassificationTagListResponse {
  current_page?: number;

  data?: ClassificationTags;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ClassificationTagCreateManyResponse {
  current_page?: number;

  data?: ClassificationTags;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ClassificationTagFilterResponse {
  current_page?: number;

  data?: ClassificationTags;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface ClassificationTagCreateParams {
  /**
   * Query param:
   */
  pager?: ClassificationTagCreateParams.Pager;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Class tag name
   */
  name?: string;
}

export namespace ClassificationTagCreateParams {
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

export interface ClassificationTagRetrieveParams {
  pager?: ClassificationTagRetrieveParams.Pager;
}

export namespace ClassificationTagRetrieveParams {
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

export interface ClassificationTagUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique ID for this class tag object
   */
  body_id?: number;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: Created timestamp in UTC
   */
  created_dt_utc?: string;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Class tag name
   */
  name?: string;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export interface ClassificationTagListParams {
  pager?: ClassificationTagListParams.Pager;
}

export namespace ClassificationTagListParams {
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

export interface ClassificationTagDeleteParams {
  pager?: ClassificationTagDeleteParams.Pager;
}

export namespace ClassificationTagDeleteParams {
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

export interface ClassificationTagCreateManyParams {
  /**
   * Body param:
   */
  body: Array<ClassificationTagCreateManyParams.Body>;

  /**
   * Query param:
   */
  pager?: ClassificationTagCreateManyParams.Pager;
}

export namespace ClassificationTagCreateManyParams {
  export interface Body {
    /**
     * ID of the owning firm
     */
    firm_id?: number;

    /**
     * Class tag name
     */
    name?: string;
  }

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

export interface ClassificationTagDeleteManyParams {
  /**
   * Query param:
   */
  pager?: ClassificationTagDeleteManyParams.Pager;

  /**
   * Body param: Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export namespace ClassificationTagDeleteManyParams {
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

export interface ClassificationTagFilterParams {
  /**
   * Query param:
   */
  pager?: ClassificationTagFilterParams.Pager;

  /**
   * Body param: Unique ID for this class tag object
   */
  id?: number;

  /**
   * Body param: Created timestamp in UTC
   */
  created_dt_utc?: string;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Class tag name
   */
  name?: string;
}

export namespace ClassificationTagFilterParams {
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

export declare namespace ClassificationTags {
  export {
    type ClassificationTag as ClassificationTag,
    type ClassificationTags as ClassificationTags,
    type ClassificationTagCreateResponse as ClassificationTagCreateResponse,
    type ClassificationTagRetrieveResponse as ClassificationTagRetrieveResponse,
    type ClassificationTagUpdateResponse as ClassificationTagUpdateResponse,
    type ClassificationTagListResponse as ClassificationTagListResponse,
    type ClassificationTagCreateManyResponse as ClassificationTagCreateManyResponse,
    type ClassificationTagFilterResponse as ClassificationTagFilterResponse,
    type ClassificationTagCreateParams as ClassificationTagCreateParams,
    type ClassificationTagRetrieveParams as ClassificationTagRetrieveParams,
    type ClassificationTagUpdateParams as ClassificationTagUpdateParams,
    type ClassificationTagListParams as ClassificationTagListParams,
    type ClassificationTagDeleteParams as ClassificationTagDeleteParams,
    type ClassificationTagCreateManyParams as ClassificationTagCreateManyParams,
    type ClassificationTagDeleteManyParams as ClassificationTagDeleteManyParams,
    type ClassificationTagFilterParams as ClassificationTagFilterParams,
  };
}
