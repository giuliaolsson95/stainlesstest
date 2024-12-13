// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { type Agent } from './_shims/index';
import * as qs from './internal/qs';
import * as Core from './core';
import * as Errors from './error';
import * as Uploads from './uploads';
import * as API from './resources/index';
import {
  AccountPerformance,
  AccountPerformanceFetchParams,
  AccountPerformanceFetchResponse,
} from './resources/account-performance';
import {
  Account,
  AccountFilterParams,
  AccountFilterResponse,
  AccountListParams,
  AccountListResponse,
  AccountRetrieveParams,
  AccountUpdateParams,
  Accounts,
} from './resources/accounts';
import {
  AdvisorCodeCreateManyParams,
  AdvisorCodeCreateManyResponse,
  AdvisorCodeDeleteManyParams,
  AdvisorCodes,
} from './resources/advisor-codes';
import {
  AssetAdjustmentCreateManyParams,
  AssetAdjustmentCreateManyResponse,
  AssetAdjustmentDeleteManyParams,
  AssetAdjustmentFilterParams,
  AssetAdjustmentFilterResponse,
  AssetAdjustments,
} from './resources/asset-adjustments';
import {
  AssetClassification,
  AssetClassificationCreateManyParams,
  AssetClassificationCreateManyResponse,
  AssetClassificationCreateParams,
  AssetClassificationCreateResponse,
  AssetClassificationDeleteManyParams,
  AssetClassificationDeleteParams,
  AssetClassificationFilterParams,
  AssetClassificationFilterResponse,
  AssetClassificationListParams,
  AssetClassificationListResponse,
  AssetClassificationRetrieveParams,
  AssetClassificationRetrieveResponse,
  AssetClassificationUpdateParams,
  AssetClassificationUpdateResponse,
  AssetClassificationUpdateSingleParams,
  AssetClassificationUpdateSingleResponse,
  AssetClassifications,
} from './resources/asset-classifications';
import {
  Benchmark,
  BenchmarkCreateManyParams,
  BenchmarkCreateManyResponse,
  BenchmarkCreateParams,
  BenchmarkCreateResponse,
  BenchmarkDeleteManyParams,
  BenchmarkDeleteParams,
  BenchmarkFilterParams,
  BenchmarkFilterResponse,
  BenchmarkListParams,
  BenchmarkListResponse,
  BenchmarkRetrieveParams,
  BenchmarkRetrieveResponse,
  BenchmarkUpdateParams,
  BenchmarkUpdateResponse,
  Benchmarks,
} from './resources/benchmarks';
import {
  BillingFeeStructureCreateManyParams,
  BillingFeeStructureCreateManyResponse,
  BillingFeeStructureDeleteManyParams,
  BillingFeeStructureDeleteParams,
  BillingFeeStructureFilterParams,
  BillingFeeStructureFilterResponse,
  BillingFeeStructureRetrieveParams,
  BillingFeeStructureRetrieveResponse,
  BillingFeeStructureUpdateParams,
  BillingFeeStructureUpdateResponse,
  BillingFeeStructures,
} from './resources/billing-fee-structures';
import {
  BillingGroupCreateFromHouseholdsParams,
  BillingGroupCreateFromHouseholdsResponse,
  BillingGroupCreateManyParams,
  BillingGroupCreateManyResponse,
  BillingGroupCreateParams,
  BillingGroupCreateResponse,
  BillingGroupDeleteManyParams,
  BillingGroupDeleteManyResponse,
  BillingGroupDeleteParams,
  BillingGroupFilterParams,
  BillingGroupFilterResponse,
  BillingGroupListParams,
  BillingGroupListResponse,
  BillingGroupRemoveAssignmentParams,
  BillingGroupRetrieveParams,
  BillingGroupRetrieveResponse,
  BillingGroupUpdateParams,
  BillingGroupUpdateResponse,
  BillingGroups,
} from './resources/billing-groups';
import {
  BillingInvoiceDownloadParams,
  BillingInvoiceFilterParams,
  BillingInvoiceFilterResponse,
  BillingInvoiceListParams,
  BillingInvoiceListResponse,
  BillingInvoiceRetrieveParams,
  BillingInvoiceRetrieveResponse,
  BillingInvoices,
  Invoice,
  Invoices,
} from './resources/billing-invoices';
import { BillingReport, BillingReports } from './resources/billing-reports';
import {
  BillingSplitCreateManyParams,
  BillingSplitCreateManyResponse,
  BillingSplitDeleteManyParams,
  BillingSplitDeleteParams,
  BillingSplitFilterParams,
  BillingSplitFilterResponse,
  BillingSplitUpdateParams,
  BillingSplitUpdateResponse,
  BillingSplits,
} from './resources/billing-splits';
import {
  ClassificationTag,
  ClassificationTagCreateManyParams,
  ClassificationTagCreateManyResponse,
  ClassificationTagCreateParams,
  ClassificationTagCreateResponse,
  ClassificationTagDeleteManyParams,
  ClassificationTagDeleteParams,
  ClassificationTagFilterParams,
  ClassificationTagFilterResponse,
  ClassificationTagListParams,
  ClassificationTagListResponse,
  ClassificationTagRetrieveParams,
  ClassificationTagRetrieveResponse,
  ClassificationTagUpdateParams,
  ClassificationTagUpdateResponse,
  ClassificationTags,
} from './resources/classification-tags';
import {
  CustodianSecurities,
  CustodianSecurityFilterParams,
  CustodianSecurityFilterResponse,
  CustodianSecurityGetUsdParams,
  CustodianSecurityGetUsdResponse,
  CustodianSecurityListParams,
  CustodianSecurityListResponse,
  CustodianSecurityRetrieveParams,
  CustodianSecurityRetrieveResponse,
} from './resources/custodian-securities';
import {
  FeeStructureCreateParams,
  FeeStructureCreateResponse,
  FeeStructureListParams,
  FeeStructureListResponse,
  FeeStructureUpdateParams,
  FeeStructureUpdateResponse,
  FeeStructures,
} from './resources/fee-structures';
import {
  FeeUpload,
  FeeUploadFileDownloadParams,
  FeeUploadFileFilterParams,
  FeeUploadFileFilterResponse,
  FeeUploadFileListParams,
  FeeUploadFileListResponse,
  FeeUploadFileRetrieveParams,
  FeeUploadFileRetrieveResponse,
  FeeUploadFiles,
  FeeUploads,
} from './resources/fee-upload-files';
import {
  HouseholdCreateManyParams,
  HouseholdCreateManyResponse,
  HouseholdFilterParams,
  HouseholdFilterResponse,
  HouseholdRemapParams,
  HouseholdRemapResponse,
  Households,
} from './resources/households';
import {
  Delete,
  JobClearParams,
  JobClearResponse,
  JobFilterParams,
  JobFilterResponse,
  JobListParams,
  JobListResponse,
  JobRetrieveParams,
  JobRetrieveResponse,
  Jobs,
} from './resources/jobs';
import { OAuth, Oauth2, Oauth2ExchangeParams } from './resources/oauth2';
import {
  PrintableReportBulkDownloadParams,
  PrintableReportBulkDownloadResponse,
  PrintableReportCreateParams,
  PrintableReportCreateResponse,
  PrintableReportDeleteManyParams,
  PrintableReportDeleteParams,
  PrintableReportDownloadParams,
  PrintableReportFilterParams,
  PrintableReportFilterResponse,
  PrintableReportRetrieveParams,
  PrintableReportRetrieveResponse,
  PrintableReports,
} from './resources/printable-reports';
import {
  RelatedPersonFilterParams,
  RelatedPersonFilterResponse,
  RelatedPersonListParams,
  RelatedPersonListResponse,
  RelatedPersons,
} from './resources/related-persons';
import {
  ReportSetting,
  ReportSettingFilterParams,
  ReportSettingFilterResponse,
  ReportSettingListParams,
  ReportSettingListResponse,
  ReportSettingRetrieveParams,
  ReportSettingRetrieveResponse,
  ReportSettingUpdateParams,
  ReportSettingUpdateResponse,
  ReportSettings,
} from './resources/report-settings';
import { RoiRequestSendRequestParams, RoiRequests } from './resources/roi-requests';
import {
  SourceAccountBalanceFilterParams,
  SourceAccountBalanceFilterResponse,
  SourceAccountBalanceLatestParams,
  SourceAccountBalanceLatestResponse,
  SourceAccountBalanceListParams,
  SourceAccountBalanceListResponse,
  SourceAccountBalanceRetrieveParams,
  SourceAccountBalanceRetrieveResponse,
  SourceAccountBalances,
} from './resources/source-account-balances';
import {
  SourcePositionFilterParams,
  SourcePositionFilterResponse,
  SourcePositionLatestParams,
  SourcePositionLatestResponse,
  SourcePositionListParams,
  SourcePositionListResponse,
  SourcePositionRetrieveParams,
  SourcePositionRetrieveResponse,
  SourcePositions,
} from './resources/source-positions';
import {
  SourceRealizedGainLoss,
  SourceRealizedGainLossFilterParams,
  SourceRealizedGainLossFilterResponse,
  SourceRealizedGainLossLatestParams,
  SourceRealizedGainLossLatestResponse,
  SourceRealizedGainLossListParams,
  SourceRealizedGainLossListResponse,
  SourceRealizedGainLossRetrieveParams,
  SourceRealizedGainLossRetrieveResponse,
} from './resources/source-realized-gain-loss';
import {
  SourceTransactionFilterParams,
  SourceTransactionFilterResponse,
  SourceTransactionLatestParams,
  SourceTransactionLatestResponse,
  SourceTransactionListParams,
  SourceTransactionListResponse,
  SourceTransactionRetrieveParams,
  SourceTransactionRetrieveResponse,
  SourceTransactions,
} from './resources/source-transactions';
import { TaxID, TaxIDExchangeResponse, TaxIDs } from './resources/tax-ids';
import { WebReportRunParams, WebReportRunResponse, WebReports } from './resources/web-reports';
import { AccountManagement } from './resources/account-management/account-management';
import {
  Analytics,
  AnalyticsBenchmarkPerformanceParams,
  AnalyticsBenchmarkPerformanceResponse,
  AnalyticsHouseholdPerformanceParams,
  AnalyticsHouseholdPerformanceResponse,
} from './resources/analytics/analytics';
import { Billing } from './resources/billing/billing';
import { Data } from './resources/data/data';
import { InvestmentManagement } from './resources/investment-management/investment-management';
import { MarketData } from './resources/market-data/market-data';
import { Org } from './resources/org/org';
import { Reporting } from './resources/reporting/reporting';
import { Status } from './resources/status/status';

export interface ClientOptions {
  /**
   * Bearer token for authentication
   */
  bearerToken?: string | undefined;

  /**
   * Username for basic auth
   */
  username?: string | undefined;

  /**
   * Password for basic auth
   */
  password?: string | undefined;

  /**
   * Override the default base URL for the API, e.g., "https://api.example.com/v2/"
   *
   * Defaults to process.env['BRIDGEFTTEST_BASE_URL'].
   */
  baseURL?: string | null | undefined;

  /**
   * The maximum amount of time (in milliseconds) that the client should wait for a response
   * from the server before timing out a single request.
   *
   * Note that request timeouts are retried by default, so in a worst-case scenario you may wait
   * much longer than this timeout before the promise succeeds or fails.
   */
  timeout?: number;

  /**
   * An HTTP agent used to manage HTTP(S) connections.
   *
   * If not provided, an agent will be constructed by default in the Node.js environment,
   * otherwise no agent is used.
   */
  httpAgent?: Agent;

  /**
   * Specify a custom `fetch` function implementation.
   *
   * If not provided, we use `node-fetch` on Node.js and otherwise expect that `fetch` is
   * defined globally.
   */
  fetch?: Core.Fetch | undefined;

  /**
   * The maximum number of times that the client will retry a request in case of a
   * temporary failure, like a network error or a 5XX error from the server.
   *
   * @default 2
   */
  maxRetries?: number;

  /**
   * Default headers to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * header to `undefined` or `null` in request options.
   */
  defaultHeaders?: Core.Headers;

  /**
   * Default query parameters to include with every request to the API.
   *
   * These can be removed in individual requests by explicitly setting the
   * param to `undefined` in request options.
   */
  defaultQuery?: Core.DefaultQuery;
}

/**
 * API Client for interfacing with the Bridgefttest API.
 */
export class Bridgefttest extends Core.APIClient {
  bearerToken: string;
  username: string;
  password: string;

  private _options: ClientOptions;

  /**
   * API Client for interfacing with the Bridgefttest API.
   *
   * @param {string | undefined} [opts.bearerToken=process.env['BEARER_TOKEN'] ?? undefined]
   * @param {string | undefined} [opts.username=process.env['BASIC_AUTH_USERNAME'] ?? undefined]
   * @param {string | undefined} [opts.password=process.env['BASIC_AUTH_PASSWORD'] ?? undefined]
   * @param {string} [opts.baseURL=process.env['BRIDGEFTTEST_BASE_URL'] ?? https://api.bridgeft.com/v2] - Override the default base URL for the API.
   * @param {number} [opts.timeout=1 minute] - The maximum amount of time (in milliseconds) the client will wait for a response before timing out.
   * @param {number} [opts.httpAgent] - An HTTP agent used to manage HTTP(s) connections.
   * @param {Core.Fetch} [opts.fetch] - Specify a custom `fetch` function implementation.
   * @param {number} [opts.maxRetries=2] - The maximum number of times the client will retry a request.
   * @param {Core.Headers} opts.defaultHeaders - Default headers to include with every request to the API.
   * @param {Core.DefaultQuery} opts.defaultQuery - Default query parameters to include with every request to the API.
   */
  constructor({
    baseURL = Core.readEnv('BRIDGEFTTEST_BASE_URL'),
    bearerToken = Core.readEnv('BEARER_TOKEN'),
    username = Core.readEnv('BASIC_AUTH_USERNAME'),
    password = Core.readEnv('BASIC_AUTH_PASSWORD'),
    ...opts
  }: ClientOptions = {}) {
    if (bearerToken === undefined) {
      throw new Errors.BridgefttestError(
        "The BEARER_TOKEN environment variable is missing or empty; either provide it, or instantiate the Bridgefttest client with an bearerToken option, like new Bridgefttest({ bearerToken: 'My Bearer Token' }).",
      );
    }
    if (username === undefined) {
      throw new Errors.BridgefttestError(
        "The BASIC_AUTH_USERNAME environment variable is missing or empty; either provide it, or instantiate the Bridgefttest client with an username option, like new Bridgefttest({ username: 'My Username' }).",
      );
    }
    if (password === undefined) {
      throw new Errors.BridgefttestError(
        "The BASIC_AUTH_PASSWORD environment variable is missing or empty; either provide it, or instantiate the Bridgefttest client with an password option, like new Bridgefttest({ password: 'My Password' }).",
      );
    }

    const options: ClientOptions = {
      bearerToken,
      username,
      password,
      ...opts,
      baseURL: baseURL || `https://api.bridgeft.com/v2`,
    };

    super({
      baseURL: options.baseURL!,
      timeout: options.timeout ?? 60000 /* 1 minute */,
      httpAgent: options.httpAgent,
      maxRetries: options.maxRetries,
      fetch: options.fetch,
    });

    this._options = options;

    this.bearerToken = bearerToken;
    this.username = username;
    this.password = password;
  }

  accounts: API.Accounts = new API.Accounts(this);
  taxIds: API.TaxIDs = new API.TaxIDs(this);
  relatedPersons: API.RelatedPersons = new API.RelatedPersons(this);
  accountManagement: API.AccountManagement = new API.AccountManagement(this);
  org: API.Org = new API.Org(this);
  advisorCodes: API.AdvisorCodes = new API.AdvisorCodes(this);
  roiRequests: API.RoiRequests = new API.RoiRequests(this);
  billingGroups: API.BillingGroups = new API.BillingGroups(this);
  billing: API.Billing = new API.Billing(this);
  assetAdjustments: API.AssetAdjustments = new API.AssetAdjustments(this);
  feeUploadFiles: API.FeeUploadFiles = new API.FeeUploadFiles(this);
  feeStructures: API.FeeStructures = new API.FeeStructures(this);
  billingFeeStructures: API.BillingFeeStructures = new API.BillingFeeStructures(this);
  billingInvoices: API.BillingInvoices = new API.BillingInvoices(this);
  billingSplits: API.BillingSplits = new API.BillingSplits(this);
  reporting: API.Reporting = new API.Reporting(this);
  households: API.Households = new API.Households(this);
  assetClassifications: API.AssetClassifications = new API.AssetClassifications(this);
  classificationTags: API.ClassificationTags = new API.ClassificationTags(this);
  benchmarks: API.Benchmarks = new API.Benchmarks(this);
  printableReports: API.PrintableReports = new API.PrintableReports(this);
  reportSettings: API.ReportSettings = new API.ReportSettings(this);
  webReports: API.WebReports = new API.WebReports(this);
  analytics: API.Analytics = new API.Analytics(this);
  accountPerformance: API.AccountPerformance = new API.AccountPerformance(this);
  jobs: API.Jobs = new API.Jobs(this);
  data: API.Data = new API.Data(this);
  sourcePositions: API.SourcePositions = new API.SourcePositions(this);
  sourceRealizedGainLoss: API.SourceRealizedGainLoss = new API.SourceRealizedGainLoss(this);
  sourceAccountBalances: API.SourceAccountBalances = new API.SourceAccountBalances(this);
  sourceTransactions: API.SourceTransactions = new API.SourceTransactions(this);
  custodianSecurities: API.CustodianSecurities = new API.CustodianSecurities(this);
  oauth2: API.Oauth2 = new API.Oauth2(this);
  investmentManagement: API.InvestmentManagement = new API.InvestmentManagement(this);
  status: API.Status = new API.Status(this);
  marketData: API.MarketData = new API.MarketData(this);
  billingReports: API.BillingReports = new API.BillingReports(this);

  protected override defaultQuery(): Core.DefaultQuery | undefined {
    return this._options.defaultQuery;
  }

  protected override defaultHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    return {
      ...super.defaultHeaders(opts),
      ...this._options.defaultHeaders,
    };
  }

  protected override authHeaders(opts: Core.FinalRequestOptions): Core.Headers {
    const bearerAuth = this.bearerAuth(opts);
    const basicAuth = this.basicAuth(opts);

    if (bearerAuth != null && !Core.isEmptyObj(bearerAuth)) {
      return bearerAuth;
    }
    return {};
  }

  protected bearerAuth(opts: Core.FinalRequestOptions): Core.Headers {
    return { Authorization: `Bearer ${this.bearerToken}` };
  }

  protected basicAuth(opts: Core.FinalRequestOptions): Core.Headers {
    if (!this.username) {
      return {};
    }

    if (!this.password) {
      return {};
    }

    const credentials = `${this.username}:${this.password}`;
    const Authorization = `Basic ${Core.toBase64(credentials)}`;
    return { Authorization };
  }

  protected override stringifyQuery(query: Record<string, unknown>): string {
    return qs.stringify(query, { arrayFormat: 'comma' });
  }

  static Bridgefttest = this;
  static DEFAULT_TIMEOUT = 60000; // 1 minute

  static BridgefttestError = Errors.BridgefttestError;
  static APIError = Errors.APIError;
  static APIConnectionError = Errors.APIConnectionError;
  static APIConnectionTimeoutError = Errors.APIConnectionTimeoutError;
  static APIUserAbortError = Errors.APIUserAbortError;
  static NotFoundError = Errors.NotFoundError;
  static ConflictError = Errors.ConflictError;
  static RateLimitError = Errors.RateLimitError;
  static BadRequestError = Errors.BadRequestError;
  static AuthenticationError = Errors.AuthenticationError;
  static InternalServerError = Errors.InternalServerError;
  static PermissionDeniedError = Errors.PermissionDeniedError;
  static UnprocessableEntityError = Errors.UnprocessableEntityError;

  static toFile = Uploads.toFile;
  static fileFromPath = Uploads.fileFromPath;
}

Bridgefttest.RelatedPersons = RelatedPersons;
Bridgefttest.AccountManagement = AccountManagement;
Bridgefttest.Org = Org;
Bridgefttest.AdvisorCodes = AdvisorCodes;
Bridgefttest.RoiRequests = RoiRequests;
Bridgefttest.BillingGroups = BillingGroups;
Bridgefttest.Billing = Billing;
Bridgefttest.AssetAdjustments = AssetAdjustments;
Bridgefttest.FeeUploadFiles = FeeUploadFiles;
Bridgefttest.FeeStructures = FeeStructures;
Bridgefttest.BillingFeeStructures = BillingFeeStructures;
Bridgefttest.BillingInvoices = BillingInvoices;
Bridgefttest.BillingSplits = BillingSplits;
Bridgefttest.Reporting = Reporting;
Bridgefttest.Households = Households;
Bridgefttest.PrintableReports = PrintableReports;
Bridgefttest.WebReports = WebReports;
Bridgefttest.Analytics = Analytics;
Bridgefttest.AccountPerformance = AccountPerformance;
Bridgefttest.Data = Data;
Bridgefttest.SourcePositions = SourcePositions;
Bridgefttest.SourceRealizedGainLoss = SourceRealizedGainLoss;
Bridgefttest.SourceAccountBalances = SourceAccountBalances;
Bridgefttest.SourceTransactions = SourceTransactions;
Bridgefttest.CustodianSecurities = CustodianSecurities;
Bridgefttest.Oauth2 = Oauth2;
Bridgefttest.InvestmentManagement = InvestmentManagement;
Bridgefttest.Status = Status;
Bridgefttest.MarketData = MarketData;
export declare namespace Bridgefttest {
  export type RequestOptions = Core.RequestOptions;

  export {
    type Accounts as Accounts,
    type Account as Account,
    type AccountListResponse as AccountListResponse,
    type AccountFilterResponse as AccountFilterResponse,
    type AccountRetrieveParams as AccountRetrieveParams,
    type AccountUpdateParams as AccountUpdateParams,
    type AccountListParams as AccountListParams,
    type AccountFilterParams as AccountFilterParams,
  };

  export { type TaxIDs as TaxIDs, type TaxID as TaxID, type TaxIDExchangeResponse as TaxIDExchangeResponse };

  export {
    RelatedPersons as RelatedPersons,
    type RelatedPersonListResponse as RelatedPersonListResponse,
    type RelatedPersonFilterResponse as RelatedPersonFilterResponse,
    type RelatedPersonListParams as RelatedPersonListParams,
    type RelatedPersonFilterParams as RelatedPersonFilterParams,
  };

  export { AccountManagement as AccountManagement };

  export { Org as Org };

  export {
    AdvisorCodes as AdvisorCodes,
    type AdvisorCodeCreateManyResponse as AdvisorCodeCreateManyResponse,
    type AdvisorCodeCreateManyParams as AdvisorCodeCreateManyParams,
    type AdvisorCodeDeleteManyParams as AdvisorCodeDeleteManyParams,
  };

  export { RoiRequests as RoiRequests, type RoiRequestSendRequestParams as RoiRequestSendRequestParams };

  export {
    BillingGroups as BillingGroups,
    type BillingGroupCreateResponse as BillingGroupCreateResponse,
    type BillingGroupRetrieveResponse as BillingGroupRetrieveResponse,
    type BillingGroupUpdateResponse as BillingGroupUpdateResponse,
    type BillingGroupListResponse as BillingGroupListResponse,
    type BillingGroupCreateFromHouseholdsResponse as BillingGroupCreateFromHouseholdsResponse,
    type BillingGroupCreateManyResponse as BillingGroupCreateManyResponse,
    type BillingGroupDeleteManyResponse as BillingGroupDeleteManyResponse,
    type BillingGroupFilterResponse as BillingGroupFilterResponse,
    type BillingGroupCreateParams as BillingGroupCreateParams,
    type BillingGroupRetrieveParams as BillingGroupRetrieveParams,
    type BillingGroupUpdateParams as BillingGroupUpdateParams,
    type BillingGroupListParams as BillingGroupListParams,
    type BillingGroupDeleteParams as BillingGroupDeleteParams,
    type BillingGroupCreateFromHouseholdsParams as BillingGroupCreateFromHouseholdsParams,
    type BillingGroupCreateManyParams as BillingGroupCreateManyParams,
    type BillingGroupDeleteManyParams as BillingGroupDeleteManyParams,
    type BillingGroupFilterParams as BillingGroupFilterParams,
    type BillingGroupRemoveAssignmentParams as BillingGroupRemoveAssignmentParams,
  };

  export { Billing as Billing };

  export {
    AssetAdjustments as AssetAdjustments,
    type AssetAdjustmentCreateManyResponse as AssetAdjustmentCreateManyResponse,
    type AssetAdjustmentFilterResponse as AssetAdjustmentFilterResponse,
    type AssetAdjustmentCreateManyParams as AssetAdjustmentCreateManyParams,
    type AssetAdjustmentDeleteManyParams as AssetAdjustmentDeleteManyParams,
    type AssetAdjustmentFilterParams as AssetAdjustmentFilterParams,
  };

  export {
    FeeUploadFiles as FeeUploadFiles,
    type FeeUpload as FeeUpload,
    type FeeUploads as FeeUploads,
    type FeeUploadFileRetrieveResponse as FeeUploadFileRetrieveResponse,
    type FeeUploadFileListResponse as FeeUploadFileListResponse,
    type FeeUploadFileFilterResponse as FeeUploadFileFilterResponse,
    type FeeUploadFileRetrieveParams as FeeUploadFileRetrieveParams,
    type FeeUploadFileListParams as FeeUploadFileListParams,
    type FeeUploadFileDownloadParams as FeeUploadFileDownloadParams,
    type FeeUploadFileFilterParams as FeeUploadFileFilterParams,
  };

  export {
    FeeStructures as FeeStructures,
    type FeeStructureCreateResponse as FeeStructureCreateResponse,
    type FeeStructureUpdateResponse as FeeStructureUpdateResponse,
    type FeeStructureListResponse as FeeStructureListResponse,
    type FeeStructureCreateParams as FeeStructureCreateParams,
    type FeeStructureUpdateParams as FeeStructureUpdateParams,
    type FeeStructureListParams as FeeStructureListParams,
  };

  export {
    BillingFeeStructures as BillingFeeStructures,
    type BillingFeeStructureRetrieveResponse as BillingFeeStructureRetrieveResponse,
    type BillingFeeStructureUpdateResponse as BillingFeeStructureUpdateResponse,
    type BillingFeeStructureCreateManyResponse as BillingFeeStructureCreateManyResponse,
    type BillingFeeStructureFilterResponse as BillingFeeStructureFilterResponse,
    type BillingFeeStructureRetrieveParams as BillingFeeStructureRetrieveParams,
    type BillingFeeStructureUpdateParams as BillingFeeStructureUpdateParams,
    type BillingFeeStructureDeleteParams as BillingFeeStructureDeleteParams,
    type BillingFeeStructureCreateManyParams as BillingFeeStructureCreateManyParams,
    type BillingFeeStructureDeleteManyParams as BillingFeeStructureDeleteManyParams,
    type BillingFeeStructureFilterParams as BillingFeeStructureFilterParams,
  };

  export {
    BillingInvoices as BillingInvoices,
    type Invoice as Invoice,
    type Invoices as Invoices,
    type BillingInvoiceRetrieveResponse as BillingInvoiceRetrieveResponse,
    type BillingInvoiceListResponse as BillingInvoiceListResponse,
    type BillingInvoiceFilterResponse as BillingInvoiceFilterResponse,
    type BillingInvoiceRetrieveParams as BillingInvoiceRetrieveParams,
    type BillingInvoiceListParams as BillingInvoiceListParams,
    type BillingInvoiceDownloadParams as BillingInvoiceDownloadParams,
    type BillingInvoiceFilterParams as BillingInvoiceFilterParams,
  };

  export {
    BillingSplits as BillingSplits,
    type BillingSplitUpdateResponse as BillingSplitUpdateResponse,
    type BillingSplitCreateManyResponse as BillingSplitCreateManyResponse,
    type BillingSplitFilterResponse as BillingSplitFilterResponse,
    type BillingSplitUpdateParams as BillingSplitUpdateParams,
    type BillingSplitDeleteParams as BillingSplitDeleteParams,
    type BillingSplitCreateManyParams as BillingSplitCreateManyParams,
    type BillingSplitDeleteManyParams as BillingSplitDeleteManyParams,
    type BillingSplitFilterParams as BillingSplitFilterParams,
  };

  export { Reporting as Reporting };

  export {
    Households as Households,
    type HouseholdCreateManyResponse as HouseholdCreateManyResponse,
    type HouseholdFilterResponse as HouseholdFilterResponse,
    type HouseholdRemapResponse as HouseholdRemapResponse,
    type HouseholdCreateManyParams as HouseholdCreateManyParams,
    type HouseholdFilterParams as HouseholdFilterParams,
    type HouseholdRemapParams as HouseholdRemapParams,
  };

  export {
    type AssetClassifications as AssetClassifications,
    type AssetClassification as AssetClassification,
    type AssetClassificationCreateResponse as AssetClassificationCreateResponse,
    type AssetClassificationRetrieveResponse as AssetClassificationRetrieveResponse,
    type AssetClassificationUpdateResponse as AssetClassificationUpdateResponse,
    type AssetClassificationListResponse as AssetClassificationListResponse,
    type AssetClassificationCreateManyResponse as AssetClassificationCreateManyResponse,
    type AssetClassificationFilterResponse as AssetClassificationFilterResponse,
    type AssetClassificationUpdateSingleResponse as AssetClassificationUpdateSingleResponse,
    type AssetClassificationCreateParams as AssetClassificationCreateParams,
    type AssetClassificationRetrieveParams as AssetClassificationRetrieveParams,
    type AssetClassificationUpdateParams as AssetClassificationUpdateParams,
    type AssetClassificationListParams as AssetClassificationListParams,
    type AssetClassificationDeleteParams as AssetClassificationDeleteParams,
    type AssetClassificationCreateManyParams as AssetClassificationCreateManyParams,
    type AssetClassificationDeleteManyParams as AssetClassificationDeleteManyParams,
    type AssetClassificationFilterParams as AssetClassificationFilterParams,
    type AssetClassificationUpdateSingleParams as AssetClassificationUpdateSingleParams,
  };

  export {
    type ClassificationTags as ClassificationTags,
    type ClassificationTag as ClassificationTag,
    type ClassificationTagCreateResponse as ClassificationTagCreateResponse,
    type ClassificationTagRetrieveResponse as ClassificationTagRetrieveResponse,
    type ClassificationTagUpdateResponse as ClassificationTagUpdateResponse,
    type ClassificationTagListResponse as ClassificationTagListResponse,
    type ClassificationTagCreateManyResponse as ClassificationTagCreateManyResponse,
    type ClassificationTagFilterResponse as ClassificationTagFilterResponse,
    type ClassificationTagCreateParams as ClassificationTagCreateParams,
    type ClassificationTagRetrieveParams as ClassificationTagRetrieveParams,
    type ClassificationTagUpdateParams as ClassificationTagUpdateParams,
    type ClassificationTagListParams as ClassificationTagListParams,
    type ClassificationTagDeleteParams as ClassificationTagDeleteParams,
    type ClassificationTagCreateManyParams as ClassificationTagCreateManyParams,
    type ClassificationTagDeleteManyParams as ClassificationTagDeleteManyParams,
    type ClassificationTagFilterParams as ClassificationTagFilterParams,
  };

  export {
    type Benchmarks as Benchmarks,
    type Benchmark as Benchmark,
    type BenchmarkCreateResponse as BenchmarkCreateResponse,
    type BenchmarkRetrieveResponse as BenchmarkRetrieveResponse,
    type BenchmarkUpdateResponse as BenchmarkUpdateResponse,
    type BenchmarkListResponse as BenchmarkListResponse,
    type BenchmarkCreateManyResponse as BenchmarkCreateManyResponse,
    type BenchmarkFilterResponse as BenchmarkFilterResponse,
    type BenchmarkCreateParams as BenchmarkCreateParams,
    type BenchmarkRetrieveParams as BenchmarkRetrieveParams,
    type BenchmarkUpdateParams as BenchmarkUpdateParams,
    type BenchmarkListParams as BenchmarkListParams,
    type BenchmarkDeleteParams as BenchmarkDeleteParams,
    type BenchmarkCreateManyParams as BenchmarkCreateManyParams,
    type BenchmarkDeleteManyParams as BenchmarkDeleteManyParams,
    type BenchmarkFilterParams as BenchmarkFilterParams,
  };

  export {
    PrintableReports as PrintableReports,
    type PrintableReportCreateResponse as PrintableReportCreateResponse,
    type PrintableReportRetrieveResponse as PrintableReportRetrieveResponse,
    type PrintableReportBulkDownloadResponse as PrintableReportBulkDownloadResponse,
    type PrintableReportFilterResponse as PrintableReportFilterResponse,
    type PrintableReportCreateParams as PrintableReportCreateParams,
    type PrintableReportRetrieveParams as PrintableReportRetrieveParams,
    type PrintableReportDeleteParams as PrintableReportDeleteParams,
    type PrintableReportBulkDownloadParams as PrintableReportBulkDownloadParams,
    type PrintableReportDeleteManyParams as PrintableReportDeleteManyParams,
    type PrintableReportDownloadParams as PrintableReportDownloadParams,
    type PrintableReportFilterParams as PrintableReportFilterParams,
  };

  export {
    type ReportSettings as ReportSettings,
    type ReportSetting as ReportSetting,
    type ReportSettingRetrieveResponse as ReportSettingRetrieveResponse,
    type ReportSettingUpdateResponse as ReportSettingUpdateResponse,
    type ReportSettingListResponse as ReportSettingListResponse,
    type ReportSettingFilterResponse as ReportSettingFilterResponse,
    type ReportSettingRetrieveParams as ReportSettingRetrieveParams,
    type ReportSettingUpdateParams as ReportSettingUpdateParams,
    type ReportSettingListParams as ReportSettingListParams,
    type ReportSettingFilterParams as ReportSettingFilterParams,
  };

  export {
    WebReports as WebReports,
    type WebReportRunResponse as WebReportRunResponse,
    type WebReportRunParams as WebReportRunParams,
  };

  export {
    Analytics as Analytics,
    type AnalyticsBenchmarkPerformanceResponse as AnalyticsBenchmarkPerformanceResponse,
    type AnalyticsHouseholdPerformanceResponse as AnalyticsHouseholdPerformanceResponse,
    type AnalyticsBenchmarkPerformanceParams as AnalyticsBenchmarkPerformanceParams,
    type AnalyticsHouseholdPerformanceParams as AnalyticsHouseholdPerformanceParams,
  };

  export {
    AccountPerformance as AccountPerformance,
    type AccountPerformanceFetchResponse as AccountPerformanceFetchResponse,
    type AccountPerformanceFetchParams as AccountPerformanceFetchParams,
  };

  export {
    type Jobs as Jobs,
    type Delete as Delete,
    type JobRetrieveResponse as JobRetrieveResponse,
    type JobListResponse as JobListResponse,
    type JobClearResponse as JobClearResponse,
    type JobFilterResponse as JobFilterResponse,
    type JobRetrieveParams as JobRetrieveParams,
    type JobListParams as JobListParams,
    type JobClearParams as JobClearParams,
    type JobFilterParams as JobFilterParams,
  };

  export { Data as Data };

  export {
    SourcePositions as SourcePositions,
    type SourcePositionRetrieveResponse as SourcePositionRetrieveResponse,
    type SourcePositionListResponse as SourcePositionListResponse,
    type SourcePositionFilterResponse as SourcePositionFilterResponse,
    type SourcePositionLatestResponse as SourcePositionLatestResponse,
    type SourcePositionRetrieveParams as SourcePositionRetrieveParams,
    type SourcePositionListParams as SourcePositionListParams,
    type SourcePositionFilterParams as SourcePositionFilterParams,
    type SourcePositionLatestParams as SourcePositionLatestParams,
  };

  export {
    SourceRealizedGainLoss as SourceRealizedGainLoss,
    type SourceRealizedGainLossRetrieveResponse as SourceRealizedGainLossRetrieveResponse,
    type SourceRealizedGainLossListResponse as SourceRealizedGainLossListResponse,
    type SourceRealizedGainLossFilterResponse as SourceRealizedGainLossFilterResponse,
    type SourceRealizedGainLossLatestResponse as SourceRealizedGainLossLatestResponse,
    type SourceRealizedGainLossRetrieveParams as SourceRealizedGainLossRetrieveParams,
    type SourceRealizedGainLossListParams as SourceRealizedGainLossListParams,
    type SourceRealizedGainLossFilterParams as SourceRealizedGainLossFilterParams,
    type SourceRealizedGainLossLatestParams as SourceRealizedGainLossLatestParams,
  };

  export {
    SourceAccountBalances as SourceAccountBalances,
    type SourceAccountBalanceRetrieveResponse as SourceAccountBalanceRetrieveResponse,
    type SourceAccountBalanceListResponse as SourceAccountBalanceListResponse,
    type SourceAccountBalanceFilterResponse as SourceAccountBalanceFilterResponse,
    type SourceAccountBalanceLatestResponse as SourceAccountBalanceLatestResponse,
    type SourceAccountBalanceRetrieveParams as SourceAccountBalanceRetrieveParams,
    type SourceAccountBalanceListParams as SourceAccountBalanceListParams,
    type SourceAccountBalanceFilterParams as SourceAccountBalanceFilterParams,
    type SourceAccountBalanceLatestParams as SourceAccountBalanceLatestParams,
  };

  export {
    SourceTransactions as SourceTransactions,
    type SourceTransactionRetrieveResponse as SourceTransactionRetrieveResponse,
    type SourceTransactionListResponse as SourceTransactionListResponse,
    type SourceTransactionFilterResponse as SourceTransactionFilterResponse,
    type SourceTransactionLatestResponse as SourceTransactionLatestResponse,
    type SourceTransactionRetrieveParams as SourceTransactionRetrieveParams,
    type SourceTransactionListParams as SourceTransactionListParams,
    type SourceTransactionFilterParams as SourceTransactionFilterParams,
    type SourceTransactionLatestParams as SourceTransactionLatestParams,
  };

  export {
    CustodianSecurities as CustodianSecurities,
    type CustodianSecurityRetrieveResponse as CustodianSecurityRetrieveResponse,
    type CustodianSecurityListResponse as CustodianSecurityListResponse,
    type CustodianSecurityFilterResponse as CustodianSecurityFilterResponse,
    type CustodianSecurityGetUsdResponse as CustodianSecurityGetUsdResponse,
    type CustodianSecurityRetrieveParams as CustodianSecurityRetrieveParams,
    type CustodianSecurityListParams as CustodianSecurityListParams,
    type CustodianSecurityFilterParams as CustodianSecurityFilterParams,
    type CustodianSecurityGetUsdParams as CustodianSecurityGetUsdParams,
  };

  export { Oauth2 as Oauth2, type OAuth as OAuth, type Oauth2ExchangeParams as Oauth2ExchangeParams };

  export { InvestmentManagement as InvestmentManagement };

  export { Status as Status };

  export { MarketData as MarketData };

  export { type BillingReports as BillingReports, type BillingReport as BillingReport };

  export type FeeStructure = API.FeeStructure;
  export type FeeStructures = API.FeeStructures;
  export type Job = API.Job;
  export type Strategies = API.Strategies;
  export type Strategy = API.Strategy;
}

export { toFile, fileFromPath } from './uploads';
export {
  BridgefttestError,
  APIError,
  APIConnectionError,
  APIConnectionTimeoutError,
  APIUserAbortError,
  NotFoundError,
  ConflictError,
  RateLimitError,
  BadRequestError,
  AuthenticationError,
  InternalServerError,
  PermissionDeniedError,
  UnprocessableEntityError,
} from './error';

export default Bridgefttest;
