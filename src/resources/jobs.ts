// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';
import * as Shared from './shared';

export class Jobs extends APIResource {
  /**
   * Returns a Job based on a single ID
   */
  retrieve(
    id: number,
    query?: JobRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<JobRetrieveResponse>;
  retrieve(
    id: number,
    query: JobRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/jobs/${id}`, { query, ...options });
  }

  /**
   * Returns a list of jobs
   */
  list(query?: JobListParams, options?: Core.RequestOptions): Core.APIPromise<JobListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<JobListResponse>;
  list(
    query: JobListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/jobs/', { query, ...options });
  }

  /**
   * Deletes the Background Jobs associated with the user's profile
   */
  clear(params?: JobClearParams, options?: Core.RequestOptions): Core.APIPromise<JobClearResponse>;
  clear(options?: Core.RequestOptions): Core.APIPromise<JobClearResponse>;
  clear(
    params: JobClearParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobClearResponse> {
    if (isRequestOptions(params)) {
      return this.clear({}, params);
    }
    const { pager } = params;
    return this._client.post('/jobs/clear', { query: { pager }, ...options });
  }

  /**
   * Return a filtered list of all Jobs
   */
  filter(params?: JobFilterParams, options?: Core.RequestOptions): Core.APIPromise<JobFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<JobFilterResponse>;
  filter(
    params: JobFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<JobFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/jobs/filter', { query: { pager }, body, ...options });
  }
}

export interface Delete {
  id?: number;
}

export type Jobs = Array<Shared.Job>;

export interface JobRetrieveResponse {
  current_page?: number;

  data?: Shared.Job;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface JobListResponse {
  current_page?: number;

  data?: Jobs;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface JobClearResponse {
  current_page?: number;

  data?: Delete;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface JobFilterResponse {
  current_page?: number;

  data?: Jobs;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface JobRetrieveParams {
  pager?: JobRetrieveParams.Pager;
}

export namespace JobRetrieveParams {
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

export interface JobListParams {
  pager?: JobListParams.Pager;
}

export namespace JobListParams {
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

export interface JobClearParams {
  pager?: JobClearParams.Pager;
}

export namespace JobClearParams {
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

export interface JobFilterParams {
  /**
   * Query param:
   */
  pager?: JobFilterParams.Pager;

  /**
   * Body param: Unique ID for this background job object
   */
  id?: number;

  /**
   * Body param: The user id for the user who created this Background Job
   */
  created_by_id?: number;

  /**
   * Body param: Create timestamp in UTC
   */
  created_dt_utc?: string;

  /**
   * Body param: Zero corresponds to the job waiting to be processed
   */
  current_step?: number;

  /**
   * Body param: If true, this sends an email notification to the user who created
   * the job
   */
  email_notification?: string;

  /**
   * Body param: The timestamp at which the email notification was sent. Only applies
   * when email_notification is enabled
   */
  email_notification_dt_utc?: string;

  /**
   * Body param: The last date and time this Background Job was failed
   */
  failed_dt_utc?: string;

  /**
   * Body param: The last date and time this Background Job was finished
   */
  finished_dt_utc?: string;

  /**
   * Body param: ID of the owning firm
   */
  firm_id?: number;

  /**
   * Body param: Returns true if the job failed due to an exception
   */
  is_failed?: boolean;

  /**
   * Body param: Returns true if the job is finished
   */
  is_finished?: boolean;

  /**
   * Body param: Returns true if the job was cancelled by the user
   */
  is_revoked?: boolean;

  /**
   * Body param: Returns true if the job has been dequeued and is running
   */
  is_running?: boolean;

  /**
   * Body param: The type of this job. Currently either b for a billing report, pdfrp
   * for a PDF report, or bd for a bulk download
   */
  job_type?: 'b' | 'pdfrp' | 'db';

  /**
   * Body param: The last date and time this Background Job was updated
   */
  last_updated_dt_utc?: string;

  /**
   * Body param: The progress of a job. Note that the number of steps might not be
   * known until the job is dequeued.
   */
  num_steps?: number;

  /**
   * Body param: The last date and time this Background Job was queued
   */
  queued_dt_utc?: string;

  /**
   * Body param: The last date and time this Background Job was started
   */
  started_dt_utc?: string;
}

export namespace JobFilterParams {
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

export declare namespace Jobs {
  export {
    type Delete as Delete,
    type Jobs as Jobs,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobListResponse as JobListResponse,
    type JobClearResponse as JobClearResponse,
    type JobFilterResponse as JobFilterResponse,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobClearParams as JobClearParams,
    type JobFilterParams as JobFilterParams,
  };
}
