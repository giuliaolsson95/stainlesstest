// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';

export class AdvisorCodes extends APIResource {
  /**
   * Enables the ability create new advisor codes for your application
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
  createMany(
    body: AdvisorCodeCreateManyParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AdvisorCodeCreateManyResponse> {
    return this._client.post('/org/advisor-codes/create-many', { body, ...options });
  }

  /**
   * Gives the ability to remove multiple advisor codes from your application by
   * providing IDs. The `id`'s provided can be found from resources returned from the
   * `GET /v2/org/advisor-codes` endpoint.
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
  deleteMany(body: AdvisorCodeDeleteManyParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.post('/org/advisor-codes/delete-many', {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export type AdvisorCodeCreateManyResponse = Array<unknown>;

export type AdvisorCodeCreateManyParams = Array<unknown>;

export interface AdvisorCodeDeleteManyParams {
  /**
   * Unique list of IDs for the object to delete
   */
  ids?: Array<number>;
}

export declare namespace AdvisorCodes {
  export {
    type AdvisorCodeCreateManyResponse as AdvisorCodeCreateManyResponse,
    type AdvisorCodeCreateManyParams as AdvisorCodeCreateManyParams,
    type AdvisorCodeDeleteManyParams as AdvisorCodeDeleteManyParams,
  };
}
