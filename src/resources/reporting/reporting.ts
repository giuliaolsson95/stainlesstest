// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as HouseholdsAPI from './households';
import {
  Household,
  HouseholdCreateParams,
  HouseholdCreateResponse,
  HouseholdListParams,
  HouseholdListResponse,
  HouseholdRetrieveParams,
  HouseholdRetrieveResponse,
  HouseholdUpdateParams,
  HouseholdUpdateResponse,
  Households,
} from './households';
import * as PrintableReportsAPI from './printable-reports';
import {
  PrintableReport,
  PrintableReportListParams,
  PrintableReportListResponse,
  PrintableReports,
} from './printable-reports';
import * as TargetAllocationsAPI from './target-allocations';
import {
  TargetAllocation,
  TargetAllocationCreateManyParams,
  TargetAllocationCreateManyResponse,
  TargetAllocationCreateParams,
  TargetAllocationCreateResponse,
  TargetAllocationDeleteManyParams,
  TargetAllocationDeleteParams,
  TargetAllocationFilterParams,
  TargetAllocationFilterResponse,
  TargetAllocationListParams,
  TargetAllocationListResponse,
  TargetAllocationRetrieveParams,
  TargetAllocationRetrieveResponse,
  TargetAllocationUpdateParams,
  TargetAllocationUpdateResponse,
  TargetAllocations,
} from './target-allocations';

export class Reporting extends APIResource {
  households: HouseholdsAPI.Households = new HouseholdsAPI.Households(this._client);
  targetAllocations: TargetAllocationsAPI.TargetAllocations = new TargetAllocationsAPI.TargetAllocations(
    this._client,
  );
  printableReports: PrintableReportsAPI.PrintableReports = new PrintableReportsAPI.PrintableReports(
    this._client,
  );
}

export declare namespace Reporting {
  export {
    type Households as Households,
    type Household as Household,
    type HouseholdCreateResponse as HouseholdCreateResponse,
    type HouseholdRetrieveResponse as HouseholdRetrieveResponse,
    type HouseholdUpdateResponse as HouseholdUpdateResponse,
    type HouseholdListResponse as HouseholdListResponse,
    type HouseholdCreateParams as HouseholdCreateParams,
    type HouseholdRetrieveParams as HouseholdRetrieveParams,
    type HouseholdUpdateParams as HouseholdUpdateParams,
    type HouseholdListParams as HouseholdListParams,
  };

  export {
    type TargetAllocations as TargetAllocations,
    type TargetAllocation as TargetAllocation,
    type TargetAllocationCreateResponse as TargetAllocationCreateResponse,
    type TargetAllocationRetrieveResponse as TargetAllocationRetrieveResponse,
    type TargetAllocationUpdateResponse as TargetAllocationUpdateResponse,
    type TargetAllocationListResponse as TargetAllocationListResponse,
    type TargetAllocationCreateManyResponse as TargetAllocationCreateManyResponse,
    type TargetAllocationFilterResponse as TargetAllocationFilterResponse,
    type TargetAllocationCreateParams as TargetAllocationCreateParams,
    type TargetAllocationRetrieveParams as TargetAllocationRetrieveParams,
    type TargetAllocationUpdateParams as TargetAllocationUpdateParams,
    type TargetAllocationListParams as TargetAllocationListParams,
    type TargetAllocationDeleteParams as TargetAllocationDeleteParams,
    type TargetAllocationCreateManyParams as TargetAllocationCreateManyParams,
    type TargetAllocationDeleteManyParams as TargetAllocationDeleteManyParams,
    type TargetAllocationFilterParams as TargetAllocationFilterParams,
  };

  export {
    type PrintableReports as PrintableReports,
    type PrintableReport as PrintableReport,
    type PrintableReportListResponse as PrintableReportListResponse,
    type PrintableReportListParams as PrintableReportListParams,
  };
}
