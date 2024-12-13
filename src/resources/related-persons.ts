// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class RelatedPersons extends APIResource {
  /**
   * Returns a list of all related persons for accessible accounts.
   */
  list(
    query?: RelatedPersonListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelatedPersonListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RelatedPersonListResponse>;
  list(
    query: RelatedPersonListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelatedPersonListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/account-management/related-persons', { query, ...options });
  }

  /**
   * Filter related persons
   */
  filter(
    params?: RelatedPersonFilterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelatedPersonFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<RelatedPersonFilterResponse>;
  filter(
    params: RelatedPersonFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelatedPersonFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/account-management/related-persons/filter', {
      query: { pager },
      body,
      ...options,
    });
  }
}

export interface RelatedPersonListResponse {
  current_page?: number;

  data?: Array<RelatedPersonListResponse.Data>;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export namespace RelatedPersonListResponse {
  export interface Data {
    /**
     * Unique ID for this account object
     */
    id?: number;

    /**
     * The unique ID for the account the person record is related to.
     */
    account_id?: number;

    /**
     * List of addresses for the related person. If they are provided by the custodian.
     */
    addresses?: Array<Data.Address>;

    /**
     * Timestamp for when the record was created.
     */
    created_at_utc?: string;

    /**
     * The date of birth of the related person.
     */
    date_of_birth?: string;

    /**
     * The related person's email.
     */
    email?: string;

    /**
     * The related person's entity.
     */
    entity_name?: string;

    /**
     * The related person's first name.
     */
    first_name?: string;

    /**
     * The related person's last name.
     */
    last_name?: string;

    /**
     * The related person's middle initial.
     */
    middle_initial?: string;

    /**
     * List of phone numbers for the related person. If they are provided by the
     * custodian.
     */
    phone_numbers?: Array<Data.PhoneNumber>;

    /**
     * Tokenized representation of the related person's Tax ID.
     */
    tax_id_token?: string;

    /**
     * The related person type provided by the custodian.
     */
    type?: number;

    /**
     * Timestamp for when the record was updated.
     */
    updated_at_utc?: string;
  }

  export namespace Data {
    export interface Address {
      /**
       * Line one of the related person's address record.
       */
      address_1?: string;

      /**
       * Line two of the related person's address record.
       */
      address_2?: string;

      /**
       * Address city
       */
      city?: string;

      /**
       * Address county
       */
      country?: string;

      /**
       * Address postal code
       */
      postal_code?: string;

      /**
       * Address state
       */
      state?: string;

      /**
       * Address type
       */
      type?: string;
    }

    export interface PhoneNumber {
      /**
       * Phone number for the related person.
       */
      phone_number?: string;

      /**
       * The type of phone number.
       */
      type?: string;
    }
  }
}

export interface RelatedPersonFilterResponse {
  current_page?: number;

  data?: unknown;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface RelatedPersonListParams {
  pager?: RelatedPersonListParams.Pager;
}

export namespace RelatedPersonListParams {
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

export interface RelatedPersonFilterParams {
  /**
   * Query param:
   */
  pager?: RelatedPersonFilterParams.Pager;

  /**
   * Body param: Unique ID for this account object
   */
  id?: number;

  /**
   * Body param: The unique ID for the account the person record is related to.
   */
  account_id?: number;

  /**
   * Body param: A list of account IDs to filter on.
   */
  account_ids?: Array<number>;

  /**
   * Body param: The date of birth of the related person.
   */
  date_of_birth?: string;

  /**
   * Body param: The related person's email.
   */
  email?: string;

  /**
   * Body param: The related person's entity.
   */
  entity_name?: string;

  /**
   * Body param: The related person's first name.
   */
  first_name?: string;

  /**
   * Body param: The related person's last name.
   */
  last_name?: string;

  /**
   * Body param: The related person's middle initial.
   */
  middle_initial?: string;

  /**
   * Body param: Tokenized representation of the related person's Tax ID.
   */
  tax_id_token?: string;

  /**
   * Body param: The related person type provided by the custodian.
   */
  type?: number;
}

export namespace RelatedPersonFilterParams {
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

export declare namespace RelatedPersons {
  export {
    type RelatedPersonListResponse as RelatedPersonListResponse,
    type RelatedPersonFilterResponse as RelatedPersonFilterResponse,
    type RelatedPersonListParams as RelatedPersonListParams,
    type RelatedPersonFilterParams as RelatedPersonFilterParams,
  };
}
