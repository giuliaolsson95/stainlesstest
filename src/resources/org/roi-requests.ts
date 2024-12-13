// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';

export class RoiRequests extends APIResource {}

export interface RoiRequest {
  /**
   * Unique ID for this roi request object
   */
  id?: number;

  /**
   * The advisor code associated with this ROI request
   */
  advisor_codes?: Array<string>;

  /**
   * Any persons who should be involved in the ROI process and receive a copy of the
   * ROI request. These could include Advisor’s team contacts
   */
  cc_emails?: Array<string>;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Custodian from which the accounts data originates. PER=Pershing,
   * MLT=MillenniumTrust, IBK=InteractiveBrokers, EGB=Eaglebrook Advisors. If you
   * don’t see certain custodians in this list, it indicates that those custodians do
   * not accept ROI requests via emails. As a result, this API does not support such
   * cases
   */
  custodian?: 'PER' | 'MLT' | 'IBK' | 'EGB';

  /**
   * BridgeFT Client Firm Name (this is your firm name), who sending an ROI request
   */
  firm_name?: string;

  /**
   * The representative person (such as the Advisor) on whose behalf you are
   * requesting data feed authorization
   */
  owner_name?: string;

  /**
   * Email addresses of the Advisor or Advisor’s representatives. These email
   * addresses will automatically receive responses from the custodian when they use
   * the “Reply To” function in their email inbox
   */
  reply_to_emails?: Array<string>;

  /**
   * BridgeFT Client representative who triggering this ROI request
   */
  sender_name?: string;

  /**
   * Status to check if an email is in sent or failure state
   */
  status?: 'Sent' | 'Error';

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export declare namespace RoiRequests {
  export { type RoiRequest as RoiRequest };
}
