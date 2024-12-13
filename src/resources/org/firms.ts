// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Firms extends APIResource {
  /**
   * Returns a firm based on a single ID
   */
  retrieve(
    id: number,
    query?: FirmRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirmRetrieveResponse>;
  retrieve(id: number, options?: Core.RequestOptions): Core.APIPromise<FirmRetrieveResponse>;
  retrieve(
    id: number,
    query: FirmRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirmRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve(id, {}, query);
    }
    return this._client.get(`/org/firms/${id}`, { query, ...options });
  }

  /**
   * Provide an firm object update. Then entire firm object **must** be provided to
   * the `PUT` request.
   *
   * **Editable Fields:**
   *
   * - `name`
   * - `disclosures`
   * - `reporting_frequency`
   * - `invoice_header`
   * - `invoice_footer`
   * - `invoice_from`
   * - `invoice_due_date_option`
   * - `invoice_include_fee_structures`
   * - `invoice_effective_rates`
   * - `invoice_annualized_effective_rates`
   * - `invoice_show_agreement`
   * - `invoice_not_a_bill_explanation`
   * - `billing_partition_option`
   * - `billing_include_accrued_income`
   */
  update(params: FirmUpdateParams, options?: Core.RequestOptions): Core.APIPromise<FirmUpdateResponse> {
    const { path_id, body_id, ...body } = params;
    return this._client.put(`/org/firms/${path_id}`, { body: { id: body_id, ...body }, ...options });
  }

  /**
   * Returns a list of firms within the data field
   */
  list(query?: FirmListParams, options?: Core.RequestOptions): Core.APIPromise<FirmListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<FirmListResponse>;
  list(
    query: FirmListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirmListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/org/firms', { query, ...options });
  }

  /**
   * Return a filtered list of all Firms
   */
  filter(params?: FirmFilterParams, options?: Core.RequestOptions): Core.APIPromise<FirmFilterResponse>;
  filter(options?: Core.RequestOptions): Core.APIPromise<FirmFilterResponse>;
  filter(
    params: FirmFilterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FirmFilterResponse> {
    if (isRequestOptions(params)) {
      return this.filter({}, params);
    }
    const { pager, ...body } = params;
    return this._client.post('/org/firms/filter', { query: { pager }, body, ...options });
  }
}

export interface Firm {
  /**
   * Unique ID for this firm object
   */
  id?: number;

  /**
   * Accent color is occasionally used in elements such as checkboxes
   */
  accent_color?: string;

  /**
   * Is accrued income included?
   */
  billing_include_accrued_income?: boolean;

  /**
   * See Frequency Codes
   */
  billing_partition_option?: 'D' | 'W' | 'M' | 'Q' | 'Y';

  /**
   * Brand colors are used in charts generated from reporting
   */
  brand_colors?: Array<string>;

  /**
   * Is the client portal is enabled for the firm's customers?
   */
  cp_enabled?: boolean;

  /**
   * Can clients access and add heldaway assets?
   */
  cp_heldaways_enabled?: boolean;

  /**
   * Can clients view their invoices?
   */
  cp_invoices_enabled?: boolean;

  /**
   * Can clients download printable reports?
   */
  cp_printable_reports_enabled?: boolean;

  /**
   * Can clients access shared files?
   */
  cp_shared_files_enabled?: boolean;

  /**
   * Can clients access their own web reports from the portal?
   */
  cp_web_reports_enabled?: boolean;

  /**
   * Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * HTML-encoded disclosures intended for reporting
   */
  disclosures?: string;

  /**
   * Whether to show the effective rate as an annual percentage
   */
  invoice_annualized_effective_rates?: boolean;

  /**
   * Option to use for calculating due date. Choices are 30 (30 days from the invoice
   * date), E (end of next month), or the empty string.
   */
  invoice_due_date_option?: '30' | 'E';

  /**
   * Whether to include effective rates (total billed divided by total assets) in the
   * invoice
   */
  invoice_effective_rates?: boolean;

  /**
   * HTML invoice footer
   */
  invoice_footer?: string;

  /**
   * The address of the firm
   */
  invoice_from?: string;

  /**
   * HTML invoice header
   */
  invoice_header?: string;

  /**
   * Whether to include a description of the fee structures used in the billing
   */
  invoice_include_fee_structures?: boolean;

  /**
   * If true and the invoice doesn't represent a bill (because it'll be withdrawn
   * directly)
   */
  invoice_not_a_bill_explanation?: boolean;

  /**
   * Whether to show the disclaimer agreement text, standard from V2 invoices
   */
  invoice_show_agreement?: boolean;

  /**
   * Is the firm active?
   */
  is_active?: boolean;

  /**
   * Is the billing state active?
   */
  is_billing_active?: boolean;

  /**
   * Public URL of the firm's logo
   */
  logo_url?: string;

  /**
   * Firm name
   */
  name?: string;

  /**
   * ID of the parent firm, if applicable
   */
  parent_firm_id?: number;

  /**
   * List of permissions accessible to the firm. See Permissions Overview.
   */
  permissions?: Array<string>;

  /**
   * Primary color is the main color used on Atlas
   */
  primary_color?: string;

  /**
   * A system-generated code used for storage purposes
   */
  relationship_code?: string;

  /**
   * Option to include held-away assets in PDF reports
   */
  report_on_heldaway_accounts?: boolean;

  /**
   * See Frequency Codes
   */
  reporting_frequency?: 'D' | 'W' | 'M' | 'Q' | 'Y';

  /**
   * The firm short name or "SNAM"
   */
  short_name?: string;

  /**
   * Show bridge logo?
   */
  show_bridge_logo?: boolean;

  /**
   * Show firm logo?
   */
  show_firm_logo?: boolean;

  /**
   * Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export type Firms = Array<Firm>;

export interface FirmRetrieveResponse {
  current_page?: number;

  data?: Firm;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface FirmUpdateResponse {
  current_page?: number;

  data?: Firm;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface FirmListResponse {
  current_page?: number;

  data?: Firms;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface FirmFilterResponse {
  current_page?: number;

  data?: Firms;

  has_next?: boolean;

  has_previous?: boolean;

  object?: string;

  page_size_limit?: number;

  total_items?: number;

  total_pages?: number;
}

export interface FirmRetrieveParams {
  pager?: FirmRetrieveParams.Pager;
}

export namespace FirmRetrieveParams {
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

export interface FirmUpdateParams {
  /**
   * Path param: Unique ID for the object
   */
  path_id: number;

  /**
   * Body param: Unique ID for this firm object
   */
  body_id?: number;

  /**
   * Body param: Accent color is occasionally used in elements such as checkboxes
   */
  accent_color?: string;

  /**
   * Body param: Is accrued income included?
   */
  billing_include_accrued_income?: boolean;

  /**
   * Body param: See Frequency Codes
   */
  billing_partition_option?: 'D' | 'W' | 'M' | 'Q' | 'Y';

  /**
   * Body param: Brand colors are used in charts generated from reporting
   */
  brand_colors?: Array<string>;

  /**
   * Body param: Is the client portal is enabled for the firm's customers?
   */
  cp_enabled?: boolean;

  /**
   * Body param: Can clients access and add heldaway assets?
   */
  cp_heldaways_enabled?: boolean;

  /**
   * Body param: Can clients view their invoices?
   */
  cp_invoices_enabled?: boolean;

  /**
   * Body param: Can clients download printable reports?
   */
  cp_printable_reports_enabled?: boolean;

  /**
   * Body param: Can clients access shared files?
   */
  cp_shared_files_enabled?: boolean;

  /**
   * Body param: Can clients access their own web reports from the portal?
   */
  cp_web_reports_enabled?: boolean;

  /**
   * Body param: Timestamp for when the record was created
   */
  created_at_utc?: string;

  /**
   * Body param: HTML-encoded disclosures intended for reporting
   */
  disclosures?: string;

  /**
   * Body param: Whether to show the effective rate as an annual percentage
   */
  invoice_annualized_effective_rates?: boolean;

  /**
   * Body param: Option to use for calculating due date. Choices are 30 (30 days from
   * the invoice date), E (end of next month), or the empty string.
   */
  invoice_due_date_option?: '30' | 'E';

  /**
   * Body param: Whether to include effective rates (total billed divided by total
   * assets) in the invoice
   */
  invoice_effective_rates?: boolean;

  /**
   * Body param: HTML invoice footer
   */
  invoice_footer?: string;

  /**
   * Body param: The address of the firm
   */
  invoice_from?: string;

  /**
   * Body param: HTML invoice header
   */
  invoice_header?: string;

  /**
   * Body param: Whether to include a description of the fee structures used in the
   * billing
   */
  invoice_include_fee_structures?: boolean;

  /**
   * Body param: If true and the invoice doesn't represent a bill (because it'll be
   * withdrawn directly)
   */
  invoice_not_a_bill_explanation?: boolean;

  /**
   * Body param: Whether to show the disclaimer agreement text, standard from V2
   * invoices
   */
  invoice_show_agreement?: boolean;

  /**
   * Body param: Is the firm active?
   */
  is_active?: boolean;

  /**
   * Body param: Is the billing state active?
   */
  is_billing_active?: boolean;

  /**
   * Body param: Public URL of the firm's logo
   */
  logo_url?: string;

  /**
   * Body param: Firm name
   */
  name?: string;

  /**
   * Body param: ID of the parent firm, if applicable
   */
  parent_firm_id?: number;

  /**
   * Body param: List of permissions accessible to the firm. See Permissions
   * Overview.
   */
  permissions?: Array<string>;

  /**
   * Body param: Primary color is the main color used on Atlas
   */
  primary_color?: string;

  /**
   * Body param: A system-generated code used for storage purposes
   */
  relationship_code?: string;

  /**
   * Body param: Option to include held-away assets in PDF reports
   */
  report_on_heldaway_accounts?: boolean;

  /**
   * Body param: See Frequency Codes
   */
  reporting_frequency?: 'D' | 'W' | 'M' | 'Q' | 'Y';

  /**
   * Body param: The firm short name or "SNAM"
   */
  short_name?: string;

  /**
   * Body param: Show bridge logo?
   */
  show_bridge_logo?: boolean;

  /**
   * Body param: Show firm logo?
   */
  show_firm_logo?: boolean;

  /**
   * Body param: Timestamp for when the record was updated
   */
  updated_at_utc?: string;
}

export interface FirmListParams {
  pager?: FirmListParams.Pager;
}

export namespace FirmListParams {
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

export interface FirmFilterParams {
  /**
   * Query param:
   */
  pager?: FirmFilterParams.Pager;

  /**
   * Body param: Unique ID for this firm object
   */
  id?: number;

  /**
   * Body param: Is accrued income included?
   */
  billing_include_accrued_income?: boolean;

  /**
   * Body param: See Frequency Codes
   */
  billing_partition_option?: 'D' | 'W' | 'M' | 'Q' | 'Y';

  /**
   * Body param: Is the client portal is enabled for the firm's customers?
   */
  cp_enabled?: boolean;

  /**
   * Body param: Can clients access and add heldaway assets?
   */
  cp_heldaways_enabled?: boolean;

  /**
   * Body param: Can clients view their invoices?
   */
  cp_invoices_enabled?: boolean;

  /**
   * Body param: Can clients download printable reports?
   */
  cp_printable_reports_enabled?: boolean;

  /**
   * Body param: Can clients access shared files?
   */
  cp_shared_files_enabled?: boolean;

  /**
   * Body param: Can clients access their own web reports from the portal?
   */
  cp_web_reports_enabled?: boolean;

  /**
   * Body param: HTML-encoded disclosures intended for reporting
   */
  disclosures?: string | null;

  /**
   * Body param: Whether to show the effective rate as an annual percentage
   */
  invoice_annualized_effective_rates?: boolean;

  /**
   * Body param: Option to use for calculating due date. Choices are 30 (30 days from
   * the invoice date), E (end of next month), or the empty string.
   */
  invoice_due_date_option?: '30' | 'E' | null;

  /**
   * Body param: Whether to include effective rates (total billed divided by total
   * assets) in the invoice
   */
  invoice_effective_rates?: boolean;

  /**
   * Body param: HTML invoice footer
   */
  invoice_footer?: string;

  /**
   * Body param: The address of the firm
   */
  invoice_from?: string | null;

  /**
   * Body param: HTML invoice header
   */
  invoice_header?: string;

  /**
   * Body param: Whether to include a description of the fee structures used in the
   * billing
   */
  invoice_include_fee_structures?: boolean;

  /**
   * Body param: If true and the invoice doesn't represent a bill (because it'll be
   * withdrawn directly)
   */
  invoice_not_a_bill_explanation?: boolean;

  /**
   * Body param: Whether to show the disclaimer agreement text, standard from V2
   * invoices
   */
  invoice_show_agreement?: boolean;

  /**
   * Body param: Is the firm active?
   */
  is_active?: boolean;

  /**
   * Body param: Is the billing state active?
   */
  is_billing_active?: boolean;

  /**
   * Body param: Public URL of the firm's logo
   */
  logo_url?: string;

  /**
   * Body param: ID of the parent firm, if applicable
   */
  parent_firm_id?: number;

  /**
   * Body param: A system-generated code used for storage purposes
   */
  relationship_code?: string;

  /**
   * Body param: Option to include held-away assets in PDF reports
   */
  report_on_heldaway_accounts?: boolean;

  /**
   * Body param: See Frequency Codes
   */
  reporting_frequency?: 'D' | 'W' | 'M' | 'Q' | 'Y';

  /**
   * Body param: The firm short name or "SNAM"
   */
  short_name?: string;

  /**
   * Body param: Show bridge logo?
   */
  show_bridge_logo?: boolean;

  /**
   * Body param: Show firm logo?
   */
  show_firm_logo?: boolean;
}

export namespace FirmFilterParams {
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

export declare namespace Firms {
  export {
    type Firm as Firm,
    type Firms as Firms,
    type FirmRetrieveResponse as FirmRetrieveResponse,
    type FirmUpdateResponse as FirmUpdateResponse,
    type FirmListResponse as FirmListResponse,
    type FirmFilterResponse as FirmFilterResponse,
    type FirmRetrieveParams as FirmRetrieveParams,
    type FirmUpdateParams as FirmUpdateParams,
    type FirmListParams as FirmListParams,
    type FirmFilterParams as FirmFilterParams,
  };
}
