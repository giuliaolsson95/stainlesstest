// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AssetAdjustmentsAPI from './asset-adjustments';
import {
  AssetAdjustment,
  AssetAdjustmentCreateParams,
  AssetAdjustmentCreateResponse,
  AssetAdjustmentDeleteParams,
  AssetAdjustmentListParams,
  AssetAdjustmentListResponse,
  AssetAdjustmentRetrieveParams,
  AssetAdjustmentRetrieveResponse,
  AssetAdjustmentUpdateParams,
  AssetAdjustmentUpdateResponse,
  AssetAdjustments,
} from './asset-adjustments';
import * as GroupsAPI from './groups';
import { BillingGroup, BillingGroups, Groups } from './groups';
import * as InvoicesAPI from './invoices';
import { InvoiceDownloadParams, InvoiceDownloadResponse, Invoices } from './invoices';
import * as MinimumsAPI from './minimums';
import {
  MinimumCreateManyParams,
  MinimumCreateManyResponse,
  MinimumCreateParams,
  MinimumCreateResponse,
  MinimumDeleteManyParams,
  MinimumDeleteParams,
  MinimumFilterParams,
  MinimumFilterResponse,
  MinimumListParams,
  MinimumListResponse,
  MinimumRetrieveParams,
  MinimumRetrieveResponse,
  MinimumUpdateParams,
  MinimumUpdateResponse,
  Minimums,
  MinimumsMany,
} from './minimums';
import * as ReportsAPI from './reports';
import {
  ReportCreateParams,
  ReportCreateResponse,
  ReportDeleteManyParams,
  ReportDeleteParams,
  ReportFilterParams,
  ReportFilterResponse,
  ReportListParams,
  ReportListResponse,
  ReportRetrieveParams,
  ReportRetrieveResponse,
  Reports,
} from './reports';
import * as SplitsAPI from './splits';
import {
  Split,
  SplitCreateParams,
  SplitCreateResponse,
  SplitListParams,
  SplitListResponse,
  SplitRetrieveParams,
  SplitRetrieveResponse,
  SplitUpdateParams,
  SplitUpdateResponse,
  Splits,
} from './splits';

export class Billing extends APIResource {
  assetAdjustments: AssetAdjustmentsAPI.AssetAdjustments = new AssetAdjustmentsAPI.AssetAdjustments(
    this._client,
  );
  invoices: InvoicesAPI.Invoices = new InvoicesAPI.Invoices(this._client);
  reports: ReportsAPI.Reports = new ReportsAPI.Reports(this._client);
  minimums: MinimumsAPI.Minimums = new MinimumsAPI.Minimums(this._client);
  splits: SplitsAPI.Splits = new SplitsAPI.Splits(this._client);
  groups: GroupsAPI.Groups = new GroupsAPI.Groups(this._client);
}

Billing.Invoices = Invoices;
Billing.Reports = Reports;
Billing.Splits = Splits;
Billing.Groups = Groups;

export declare namespace Billing {
  export {
    type AssetAdjustments as AssetAdjustments,
    type AssetAdjustment as AssetAdjustment,
    type AssetAdjustmentCreateResponse as AssetAdjustmentCreateResponse,
    type AssetAdjustmentRetrieveResponse as AssetAdjustmentRetrieveResponse,
    type AssetAdjustmentUpdateResponse as AssetAdjustmentUpdateResponse,
    type AssetAdjustmentListResponse as AssetAdjustmentListResponse,
    type AssetAdjustmentCreateParams as AssetAdjustmentCreateParams,
    type AssetAdjustmentRetrieveParams as AssetAdjustmentRetrieveParams,
    type AssetAdjustmentUpdateParams as AssetAdjustmentUpdateParams,
    type AssetAdjustmentListParams as AssetAdjustmentListParams,
    type AssetAdjustmentDeleteParams as AssetAdjustmentDeleteParams,
  };

  export {
    Invoices as Invoices,
    type InvoiceDownloadResponse as InvoiceDownloadResponse,
    type InvoiceDownloadParams as InvoiceDownloadParams,
  };

  export {
    Reports as Reports,
    type ReportCreateResponse as ReportCreateResponse,
    type ReportRetrieveResponse as ReportRetrieveResponse,
    type ReportListResponse as ReportListResponse,
    type ReportFilterResponse as ReportFilterResponse,
    type ReportCreateParams as ReportCreateParams,
    type ReportRetrieveParams as ReportRetrieveParams,
    type ReportListParams as ReportListParams,
    type ReportDeleteParams as ReportDeleteParams,
    type ReportDeleteManyParams as ReportDeleteManyParams,
    type ReportFilterParams as ReportFilterParams,
  };

  export {
    type Minimums as Minimums,
    type MinimumsMany as MinimumsMany,
    type MinimumCreateResponse as MinimumCreateResponse,
    type MinimumRetrieveResponse as MinimumRetrieveResponse,
    type MinimumUpdateResponse as MinimumUpdateResponse,
    type MinimumListResponse as MinimumListResponse,
    type MinimumCreateManyResponse as MinimumCreateManyResponse,
    type MinimumFilterResponse as MinimumFilterResponse,
    type MinimumCreateParams as MinimumCreateParams,
    type MinimumRetrieveParams as MinimumRetrieveParams,
    type MinimumUpdateParams as MinimumUpdateParams,
    type MinimumListParams as MinimumListParams,
    type MinimumDeleteParams as MinimumDeleteParams,
    type MinimumCreateManyParams as MinimumCreateManyParams,
    type MinimumDeleteManyParams as MinimumDeleteManyParams,
    type MinimumFilterParams as MinimumFilterParams,
  };

  export {
    Splits as Splits,
    type Split as Split,
    type SplitCreateResponse as SplitCreateResponse,
    type SplitRetrieveResponse as SplitRetrieveResponse,
    type SplitUpdateResponse as SplitUpdateResponse,
    type SplitListResponse as SplitListResponse,
    type SplitCreateParams as SplitCreateParams,
    type SplitRetrieveParams as SplitRetrieveParams,
    type SplitUpdateParams as SplitUpdateParams,
    type SplitListParams as SplitListParams,
  };

  export { Groups as Groups, type BillingGroup as BillingGroup, type BillingGroups as BillingGroups };
}
