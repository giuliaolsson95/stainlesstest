// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as OrgRoiRequestsAPI from './org/roi-requests';

export class RoiRequests extends APIResource {
  /**
   * Automatically generates and sends an email to selected Custodian in order to
   * authorize Release of Information between Custodian and BridgeFT.
   */
  sendRequest(
    params: RoiRequestSendRequestParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<OrgRoiRequestsAPI.RoiRequest> {
    const { pager, ...body } = params;
    return this._client.post('/org/roi-requests/send-request', { query: { pager }, body, ...options });
  }
}

export interface RoiRequestSendRequestParams {
  /**
   * Body param: The advisor code associated with this ROI request
   */
  advisor_codes: Array<string>;

  /**
   * Body param: Any persons who should be involved in the ROI process and receive a
   * copy of the ROI request. These could include Advisor’s team contacts
   */
  cc_emails: Array<string>;

  /**
   * Body param: Custodian from which the accounts data originates. PER=Pershing,
   * MLT=MillenniumTrust, IBK=InteractiveBrokers, EGB=Eaglebrook Advisors. If you
   * don’t see certain custodians in this list, it indicates that those custodians do
   * not accept ROI requests via emails. As a result, this API does not support such
   * cases
   */
  custodian: 'PER' | 'MLT' | 'IBK' | 'EGB';

  /**
   * Body param: BridgeFT Client Firm Name (this is your firm name), who sending an
   * ROI request
   */
  firm_name: string;

  /**
   * Body param: The representative person (such as the Advisor) on whose behalf you
   * are requesting data feed authorization
   */
  owner_name: string;

  /**
   * Body param: Email addresses of the Advisor or Advisor’s representatives. These
   * email addresses will automatically receive responses from the custodian when
   * they use the “Reply To” function in their email inbox
   */
  reply_to_emails: Array<string>;

  /**
   * Body param: BridgeFT Client representative who triggering this ROI request
   */
  sender_name: string;

  /**
   * Query param:
   */
  pager?: RoiRequestSendRequestParams.Pager;
}

export namespace RoiRequestSendRequestParams {
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

export declare namespace RoiRequests {
  export { type RoiRequestSendRequestParams as RoiRequestSendRequestParams };
}
