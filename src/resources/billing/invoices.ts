// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Invoices extends APIResource {
  /**
   * Starts and returns a bulk download job
   */
  download(
    params?: InvoiceDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceDownloadResponse>;
  download(options?: Core.RequestOptions): Core.APIPromise<InvoiceDownloadResponse>;
  download(
    params: InvoiceDownloadParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<InvoiceDownloadResponse> {
    if (isRequestOptions(params)) {
      return this.download({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/billing/invoices/download', { query: { pager }, body, ...options });
  }
}

export interface InvoiceDownloadResponse {
  current_page?: number;

  data?: Shared.Job;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface InvoiceDownloadParams {
  /**
   * Query param:
   */
  pager?: InvoiceDownloadParams.Pager;

  /**
   * Body param: A list of PDF Report ids that will be downloaded during the bulk
   * download job.
   */
  ids?: Array<number>;
}

export namespace InvoiceDownloadParams {
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

export declare namespace Invoices {
  export {
    type InvoiceDownloadResponse as InvoiceDownloadResponse,
    type InvoiceDownloadParams as InvoiceDownloadParams,
  };
}
