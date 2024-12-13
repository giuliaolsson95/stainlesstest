// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as IndexesAPI from './indexes';
import {
  Index,
  IndexFilterParams,
  IndexFilterResponse,
  IndexListParams,
  IndexListResponse,
  IndexRetrieveParams,
  IndexRetrieveResponse,
  Indexes,
} from './indexes';

export class Idc extends APIResource {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
}

export declare namespace Idc {
  export {
    type Indexes as Indexes,
    type Index as Index,
    type IndexRetrieveResponse as IndexRetrieveResponse,
    type IndexListResponse as IndexListResponse,
    type IndexFilterResponse as IndexFilterResponse,
    type IndexRetrieveParams as IndexRetrieveParams,
    type IndexListParams as IndexListParams,
    type IndexFilterParams as IndexFilterParams,
  };
}
