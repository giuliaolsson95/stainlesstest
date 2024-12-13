// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IntrinioAPI from './intrinio';
import { Intrinio, IntrinioRetrieveParams, IntrinioRetrieveResponse } from './intrinio';

export class MarketData extends APIResource {
  intrinio: IntrinioAPI.Intrinio = new IntrinioAPI.Intrinio(this._client);
}

MarketData.Intrinio = Intrinio;

export declare namespace MarketData {
  export {
    Intrinio as Intrinio,
    type IntrinioRetrieveResponse as IntrinioRetrieveResponse,
    type IntrinioRetrieveParams as IntrinioRetrieveParams,
  };
}
