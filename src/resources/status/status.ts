// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountSummaryAPI from './account-summary';
import { AccountSummary, AccountSummaryListParams, AccountSummaryResource } from './account-summary';
import * as SourceDataAPI from './source-data';
import { SourceData, SourceDataCreateParams, SourceDataCreateResponse } from './source-data';

export class Status extends APIResource {
  accountSummary: AccountSummaryAPI.AccountSummaryResource = new AccountSummaryAPI.AccountSummaryResource(
    this._client,
  );
  sourceData: SourceDataAPI.SourceData = new SourceDataAPI.SourceData(this._client);
}

Status.AccountSummaryResource = AccountSummaryResource;
Status.SourceData = SourceData;

export declare namespace Status {
  export {
    AccountSummaryResource as AccountSummaryResource,
    type AccountSummary as AccountSummary,
    type AccountSummaryListParams as AccountSummaryListParams,
  };

  export {
    SourceData as SourceData,
    type SourceDataCreateResponse as SourceDataCreateResponse,
    type SourceDataCreateParams as SourceDataCreateParams,
  };
}
