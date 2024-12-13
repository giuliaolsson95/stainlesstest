// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SecuritiesAPI from './securities';
import {
  Securities,
  Security,
  SecurityFetchParams,
  SecurityGetCompressedParams,
  SecurityGetCompressedResponse,
  SecurityManagedParams,
  SecurityManagedResponse,
  SecurityReferenceParams,
  SecurityReferenceResponse,
  SecuritySearchParams,
  SecuritySearchResponse,
} from './securities';

export class Custodian extends APIResource {
  securities: SecuritiesAPI.Securities = new SecuritiesAPI.Securities(this._client);
}

export declare namespace Custodian {
  export {
    type Securities as Securities,
    type Security as Security,
    type SecurityGetCompressedResponse as SecurityGetCompressedResponse,
    type SecurityManagedResponse as SecurityManagedResponse,
    type SecurityReferenceResponse as SecurityReferenceResponse,
    type SecuritySearchResponse as SecuritySearchResponse,
    type SecurityFetchParams as SecurityFetchParams,
    type SecurityGetCompressedParams as SecurityGetCompressedParams,
    type SecurityManagedParams as SecurityManagedParams,
    type SecurityReferenceParams as SecurityReferenceParams,
    type SecuritySearchParams as SecuritySearchParams,
  };
}
