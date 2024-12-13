// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AdvisorCodesAPI from './advisor-codes';
import {
  AdvisorCodeCreateParams,
  AdvisorCodeCreateResponse,
  AdvisorCodeListParams,
  AdvisorCodeListResponse,
  AdvisorCodes,
} from './advisor-codes';
import * as FirmsAPI from './firms';
import {
  Firm,
  FirmFilterParams,
  FirmFilterResponse,
  FirmListParams,
  FirmListResponse,
  FirmRetrieveParams,
  FirmRetrieveResponse,
  FirmUpdateParams,
  FirmUpdateResponse,
  Firms,
} from './firms';
import * as RoiRequestsAPI from './roi-requests';
import { RoiRequest, RoiRequests } from './roi-requests';

export class Org extends APIResource {
  firms: FirmsAPI.Firms = new FirmsAPI.Firms(this._client);
  advisorCodes: AdvisorCodesAPI.AdvisorCodes = new AdvisorCodesAPI.AdvisorCodes(this._client);
  roiRequests: RoiRequestsAPI.RoiRequests = new RoiRequestsAPI.RoiRequests(this._client);
}

Org.AdvisorCodes = AdvisorCodes;
Org.RoiRequests = RoiRequests;

export declare namespace Org {
  export {
    type Firms as Firms,
    type Firm as Firm,
    type FirmRetrieveResponse as FirmRetrieveResponse,
    type FirmUpdateResponse as FirmUpdateResponse,
    type FirmListResponse as FirmListResponse,
    type FirmFilterResponse as FirmFilterResponse,
    type FirmRetrieveParams as FirmRetrieveParams,
    type FirmUpdateParams as FirmUpdateParams,
    type FirmListParams as FirmListParams,
    type FirmFilterParams as FirmFilterParams,
  };

  export {
    AdvisorCodes as AdvisorCodes,
    type AdvisorCodeCreateResponse as AdvisorCodeCreateResponse,
    type AdvisorCodeListResponse as AdvisorCodeListResponse,
    type AdvisorCodeCreateParams as AdvisorCodeCreateParams,
    type AdvisorCodeListParams as AdvisorCodeListParams,
  };

  export { RoiRequests as RoiRequests, type RoiRequest as RoiRequest };
}
