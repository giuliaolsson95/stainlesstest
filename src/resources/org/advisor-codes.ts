// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class AdvisorCodes extends APIResource {
  /**
   * Returns the created Advisor Code, if successful.
   *
   * **Note for Advisor Code Mapping in Sandbox Applications** To preserve the data
   * integrity of sandbox applications, the advisor code mapping endpoints are
   * read-only and requests for creation or deletion of advisor codes will not result
   * in updates to advisor code mappings. Sandbox applications can read advisor codes
   * from the `/v2/org/advisor-codes` endpoint, but the changes will not be reflected
   * upon updates.
   *
   * For production applications, full access is granted to the advisor code mapping
   * endpoints. Creations and removals of advisor codes will be applied to the
   * advisor codes mapped to the application.
   */
  create(
    params: AdvisorCodeCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvisorCodeCreateResponse> {
    const { pager, ...body } = params;
    return this._client.post('/org/advisor-codes', { query: { pager }, body, ...options });
  }

  /**
   * Returns a list of all of the advisor codes associated with the application.
   */
  list(
    query?: AdvisorCodeListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvisorCodeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<AdvisorCodeListResponse>;
  list(
    query: AdvisorCodeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvisorCodeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/org/advisor-codes', { query, ...options });
  }

  /**
   * Returns the "OK" message and a json object with the id the advisor codes
   * removed, if deletion was successful
   *
   * **Note for Advisor Code Mapping in Sandbox Applications** To preserve the data
   * integrity of sandbox applications, the advisor code mapping endpoints are
   * read-only and requests for creation or deletion of advisor codes will not result
   * in updates to advisor code mappings. Sandbox applications can read advisor codes
   * from the `/v2/org/advisor-codes` endpoint, but the changes will not be reflected
   * upon updates.
   *
   * For production applications, full access is granted to the advisor code mapping
   * endpoints. Creations and removals of advisor codes will be applied to the
   * advisor codes mapped to the application.
   */
  delete(id: number, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.delete(`/org/advisor-codes/${id}`, {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface AdvisorCodeCreateResponse {
  /**
   * Unique ID for the Advisor Code Object
   */
  id?: number;

  /**
   * The advisor code
   */
  code?: string;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * ID of the Firm that the Advisor Code belongs to
   */
  firm_id?: number;

  /**
   * The custodian the advisor code belongs to APX=Apex Fintech Solutions, DST=DST
   * Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers, NFS=Fidelity
   * Investments, PER=Pershing, SWB=Charles Schwab, EGB=Eaglebrook, MLT=Millenium
   * Trust, TIA=TIAA Financial Services
   */
  source?: 'APX' | 'DST' | 'EGB' | 'FPR' | 'IBK' | 'MLT' | 'NFS' | 'PER' | 'SWB' | 'TIA';

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export interface AdvisorCodeListResponse {
  current_page?: number;

  data?: unknown;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface AdvisorCodeCreateParams {
  /**
   * Body param: The advisor code. Eligible characters are limited to numbers 0-9,
   * letters A-Z (upper and lowercase), and characters `-` and `_`. If your advisor
   * code includes additional characters, please create a support ticket, so that our
   * team can accommodate.
   */
  code: string;

  /**
   * Body param: ID of the Firm that the Advisor Code belongs to. This is required to
   * create the advisor code. Application Firm IDs can be found using the
   * `GET /v2/org/firms endpoint`.
   */
  firm_id: number;

  /**
   * Body param: The custodian the advisor code belongs to. APX=Apex Fintech
   * Solutions, DST=DST Systems, FPR=Fidelity 401k/403b, IBK=Interactive Brokers,
   * NFS=Fidelity Investments, PER=Pershing, SWB=Charles Schwab, EGB=Eaglebrook,
   * MLT=Millenium Trust, TIA=TIAA Financial Services
   */
  source: 'APX' | 'DST' | 'FPR' | 'IBK' | 'NFS' | 'PER' | 'SWB' | 'EGB' | 'MLT' | 'TIA';

  /**
   * Query param:
   */
  pager?: AdvisorCodeCreateParams.Pager;
}

export namespace AdvisorCodeCreateParams {
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

export interface AdvisorCodeListParams {
  pager?: AdvisorCodeListParams.Pager;
}

export namespace AdvisorCodeListParams {
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

export declare namespace AdvisorCodes {
  export {
    type AdvisorCodeCreateResponse as AdvisorCodeCreateResponse,
    type AdvisorCodeListResponse as AdvisorCodeListResponse,
    type AdvisorCodeCreateParams as AdvisorCodeCreateParams,
    type AdvisorCodeListParams as AdvisorCodeListParams,
  };
}
