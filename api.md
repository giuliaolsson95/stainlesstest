# Shared

Types:

- <code><a href="./src/resources/shared.ts">FeeStructure</a></code>
- <code><a href="./src/resources/shared.ts">FeeStructures</a></code>
- <code><a href="./src/resources/shared.ts">Job</a></code>
- <code><a href="./src/resources/shared.ts">Strategies</a></code>
- <code><a href="./src/resources/shared.ts">Strategy</a></code>

# Accounts

Types:

- <code><a href="./src/resources/accounts.ts">Account</a></code>
- <code><a href="./src/resources/accounts.ts">Accounts</a></code>
- <code><a href="./src/resources/accounts.ts">AccountListResponse</a></code>
- <code><a href="./src/resources/accounts.ts">AccountFilterResponse</a></code>

Methods:

- <code title="get /account-management/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">retrieve</a>(id, { ...params }) -> Account</code>
- <code title="put /account-management/accounts/{id}">client.accounts.<a href="./src/resources/accounts.ts">update</a>({ ...params }) -> Account</code>
- <code title="get /account-management/accounts">client.accounts.<a href="./src/resources/accounts.ts">list</a>({ ...params }) -> AccountListResponse</code>
- <code title="post /account-management/accounts/filter">client.accounts.<a href="./src/resources/accounts.ts">filter</a>({ ...params }) -> AccountFilterResponse</code>

# TaxIDs

Types:

- <code><a href="./src/resources/tax-ids.ts">TaxID</a></code>
- <code><a href="./src/resources/tax-ids.ts">TaxIDs</a></code>
- <code><a href="./src/resources/tax-ids.ts">TaxIDExchangeResponse</a></code>

Methods:

- <code title="post /account-management/tax-id/exchange/{tax_id_token}">client.taxIds.<a href="./src/resources/tax-ids.ts">exchange</a>(taxIdToken) -> TaxIDExchangeResponse</code>

# RelatedPersons

Types:

- <code><a href="./src/resources/related-persons.ts">RelatedPersonListResponse</a></code>
- <code><a href="./src/resources/related-persons.ts">RelatedPersonFilterResponse</a></code>

Methods:

- <code title="get /account-management/related-persons">client.relatedPersons.<a href="./src/resources/related-persons.ts">list</a>({ ...params }) -> RelatedPersonListResponse</code>
- <code title="post /account-management/related-persons/filter">client.relatedPersons.<a href="./src/resources/related-persons.ts">filter</a>({ ...params }) -> RelatedPersonFilterResponse</code>

# AccountManagement

## TaxID

Types:

- <code><a href="./src/resources/account-management/tax-id.ts">TaxIDExchangeResponse</a></code>

Methods:

- <code title="post /account-management/tax-id/exchange">client.accountManagement.taxId.<a href="./src/resources/account-management/tax-id.ts">exchange</a>({ ...params }) -> TaxIDExchangeResponse</code>

## TdaToSwbMigrations

Types:

- <code><a href="./src/resources/account-management/tda-to-swb-migrations.ts">TdaToSwbMigrationListResponse</a></code>
- <code><a href="./src/resources/account-management/tda-to-swb-migrations.ts">TdaToSwbMigrationFilterResponse</a></code>

Methods:

- <code title="get /account-management/tda-to-swb-migrations">client.accountManagement.tdaToSwbMigrations.<a href="./src/resources/account-management/tda-to-swb-migrations.ts">list</a>({ ...params }) -> TdaToSwbMigrationListResponse</code>
- <code title="post /account-management/tda-to-swb-migrations/filter">client.accountManagement.tdaToSwbMigrations.<a href="./src/resources/account-management/tda-to-swb-migrations.ts">filter</a>({ ...params }) -> TdaToSwbMigrationFilterResponse</code>

# Org

## Firms

Types:

- <code><a href="./src/resources/org/firms.ts">Firm</a></code>
- <code><a href="./src/resources/org/firms.ts">Firms</a></code>
- <code><a href="./src/resources/org/firms.ts">FirmRetrieveResponse</a></code>
- <code><a href="./src/resources/org/firms.ts">FirmUpdateResponse</a></code>
- <code><a href="./src/resources/org/firms.ts">FirmListResponse</a></code>
- <code><a href="./src/resources/org/firms.ts">FirmFilterResponse</a></code>

Methods:

- <code title="get /org/firms/{id}">client.org.firms.<a href="./src/resources/org/firms.ts">retrieve</a>(id, { ...params }) -> FirmRetrieveResponse</code>
- <code title="put /org/firms/{id}">client.org.firms.<a href="./src/resources/org/firms.ts">update</a>({ ...params }) -> FirmUpdateResponse</code>
- <code title="get /org/firms">client.org.firms.<a href="./src/resources/org/firms.ts">list</a>({ ...params }) -> FirmListResponse</code>
- <code title="post /org/firms/filter">client.org.firms.<a href="./src/resources/org/firms.ts">filter</a>({ ...params }) -> FirmFilterResponse</code>

## AdvisorCodes

Types:

- <code><a href="./src/resources/org/advisor-codes.ts">AdvisorCodeCreateResponse</a></code>
- <code><a href="./src/resources/org/advisor-codes.ts">AdvisorCodeListResponse</a></code>

Methods:

- <code title="post /org/advisor-codes">client.org.advisorCodes.<a href="./src/resources/org/advisor-codes.ts">create</a>({ ...params }) -> AdvisorCodeCreateResponse</code>
- <code title="get /org/advisor-codes">client.org.advisorCodes.<a href="./src/resources/org/advisor-codes.ts">list</a>({ ...params }) -> AdvisorCodeListResponse</code>
- <code title="delete /org/advisor-codes/{id}">client.org.advisorCodes.<a href="./src/resources/org/advisor-codes.ts">delete</a>(id) -> void</code>

## RoiRequests

Types:

- <code><a href="./src/resources/org/roi-requests.ts">RoiRequest</a></code>

# AdvisorCodes

Types:

- <code><a href="./src/resources/advisor-codes.ts">AdvisorCodeCreateManyResponse</a></code>

Methods:

- <code title="post /org/advisor-codes/create-many">client.advisorCodes.<a href="./src/resources/advisor-codes.ts">createMany</a>([ ...body ]) -> AdvisorCodeCreateManyResponse</code>
- <code title="post /org/advisor-codes/delete-many">client.advisorCodes.<a href="./src/resources/advisor-codes.ts">deleteMany</a>({ ...params }) -> void</code>

# RoiRequests

Methods:

- <code title="post /org/roi-requests/send-request">client.roiRequests.<a href="./src/resources/roi-requests.ts">sendRequest</a>({ ...params }) -> RoiRequest</code>

# BillingGroups

Types:

- <code><a href="./src/resources/billing-groups.ts">BillingGroupCreateResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupRetrieveResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupUpdateResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupListResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupCreateFromHouseholdsResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupCreateManyResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupDeleteManyResponse</a></code>
- <code><a href="./src/resources/billing-groups.ts">BillingGroupFilterResponse</a></code>

Methods:

- <code title="post /billing/groups">client.billingGroups.<a href="./src/resources/billing-groups.ts">create</a>({ ...params }) -> BillingGroupCreateResponse</code>
- <code title="get /billing/groups/{id}">client.billingGroups.<a href="./src/resources/billing-groups.ts">retrieve</a>(id, { ...params }) -> BillingGroupRetrieveResponse</code>
- <code title="put /billing/groups/{id}">client.billingGroups.<a href="./src/resources/billing-groups.ts">update</a>({ ...params }) -> BillingGroupUpdateResponse</code>
- <code title="get /billing/groups">client.billingGroups.<a href="./src/resources/billing-groups.ts">list</a>({ ...params }) -> BillingGroupListResponse</code>
- <code title="delete /billing/groups/{id}">client.billingGroups.<a href="./src/resources/billing-groups.ts">delete</a>(id, { ...params }) -> Delete</code>
- <code title="post /billing/groups/create-from-households">client.billingGroups.<a href="./src/resources/billing-groups.ts">createFromHouseholds</a>({ ...params }) -> BillingGroupCreateFromHouseholdsResponse</code>
- <code title="post /billing/groups/create-many">client.billingGroups.<a href="./src/resources/billing-groups.ts">createMany</a>([ ...body ]) -> BillingGroupCreateManyResponse</code>
- <code title="post /billing/groups/delete-many">client.billingGroups.<a href="./src/resources/billing-groups.ts">deleteMany</a>({ ...params }) -> BillingGroupDeleteManyResponse</code>
- <code title="post /billing/groups/filter">client.billingGroups.<a href="./src/resources/billing-groups.ts">filter</a>({ ...params }) -> BillingGroupFilterResponse</code>
- <code title="post /billing/groups/remove-assignment">client.billingGroups.<a href="./src/resources/billing-groups.ts">removeAssignment</a>({ ...params }) -> void</code>

# Billing

## AssetAdjustments

Types:

- <code><a href="./src/resources/billing/asset-adjustments.ts">AssetAdjustment</a></code>
- <code><a href="./src/resources/billing/asset-adjustments.ts">AssetAdjustments</a></code>
- <code><a href="./src/resources/billing/asset-adjustments.ts">AssetAdjustmentCreateResponse</a></code>
- <code><a href="./src/resources/billing/asset-adjustments.ts">AssetAdjustmentRetrieveResponse</a></code>
- <code><a href="./src/resources/billing/asset-adjustments.ts">AssetAdjustmentUpdateResponse</a></code>
- <code><a href="./src/resources/billing/asset-adjustments.ts">AssetAdjustmentListResponse</a></code>

Methods:

- <code title="post /billing/asset-adjustments">client.billing.assetAdjustments.<a href="./src/resources/billing/asset-adjustments.ts">create</a>({ ...params }) -> AssetAdjustmentCreateResponse</code>
- <code title="get /billing/asset-adjustments/{id}">client.billing.assetAdjustments.<a href="./src/resources/billing/asset-adjustments.ts">retrieve</a>(id, { ...params }) -> AssetAdjustmentRetrieveResponse</code>
- <code title="put /billing/asset-adjustments/{id}">client.billing.assetAdjustments.<a href="./src/resources/billing/asset-adjustments.ts">update</a>({ ...params }) -> AssetAdjustmentUpdateResponse</code>
- <code title="get /billing/asset-adjustments">client.billing.assetAdjustments.<a href="./src/resources/billing/asset-adjustments.ts">list</a>({ ...params }) -> AssetAdjustmentListResponse</code>
- <code title="delete /billing/asset-adjustments/{id}">client.billing.assetAdjustments.<a href="./src/resources/billing/asset-adjustments.ts">delete</a>(id, { ...params }) -> void</code>

## Invoices

Types:

- <code><a href="./src/resources/billing/invoices.ts">InvoiceDownloadResponse</a></code>

Methods:

- <code title="post /billing/invoices/download">client.billing.invoices.<a href="./src/resources/billing/invoices.ts">download</a>({ ...params }) -> InvoiceDownloadResponse</code>

## Reports

Types:

- <code><a href="./src/resources/billing/reports.ts">ReportCreateResponse</a></code>
- <code><a href="./src/resources/billing/reports.ts">ReportRetrieveResponse</a></code>
- <code><a href="./src/resources/billing/reports.ts">ReportListResponse</a></code>
- <code><a href="./src/resources/billing/reports.ts">ReportFilterResponse</a></code>

Methods:

- <code title="post /billing/reports">client.billing.reports.<a href="./src/resources/billing/reports.ts">create</a>({ ...params }) -> ReportCreateResponse</code>
- <code title="get /billing/reports/{id}">client.billing.reports.<a href="./src/resources/billing/reports.ts">retrieve</a>(id, { ...params }) -> ReportRetrieveResponse</code>
- <code title="get /billing/reports">client.billing.reports.<a href="./src/resources/billing/reports.ts">list</a>({ ...params }) -> ReportListResponse</code>
- <code title="delete /billing/reports/{id}">client.billing.reports.<a href="./src/resources/billing/reports.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /billing/reports/delete-many">client.billing.reports.<a href="./src/resources/billing/reports.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /billing/reports/filter">client.billing.reports.<a href="./src/resources/billing/reports.ts">filter</a>({ ...params }) -> ReportFilterResponse</code>

## Minimums

Types:

- <code><a href="./src/resources/billing/minimums.ts">Minimums</a></code>
- <code><a href="./src/resources/billing/minimums.ts">MinimumsMany</a></code>
- <code><a href="./src/resources/billing/minimums.ts">MinimumCreateResponse</a></code>
- <code><a href="./src/resources/billing/minimums.ts">MinimumRetrieveResponse</a></code>
- <code><a href="./src/resources/billing/minimums.ts">MinimumUpdateResponse</a></code>
- <code><a href="./src/resources/billing/minimums.ts">MinimumListResponse</a></code>
- <code><a href="./src/resources/billing/minimums.ts">MinimumCreateManyResponse</a></code>
- <code><a href="./src/resources/billing/minimums.ts">MinimumFilterResponse</a></code>

Methods:

- <code title="post /billing/minimums">client.billing.minimums.<a href="./src/resources/billing/minimums.ts">create</a>({ ...params }) -> MinimumCreateResponse</code>
- <code title="get /billing/minimums/{id}">client.billing.minimums.<a href="./src/resources/billing/minimums.ts">retrieve</a>(id, { ...params }) -> MinimumRetrieveResponse</code>
- <code title="put /billing/minimums/{id}">client.billing.minimums.<a href="./src/resources/billing/minimums.ts">update</a>({ ...params }) -> MinimumUpdateResponse</code>
- <code title="get /billing/minimums">client.billing.minimums.<a href="./src/resources/billing/minimums.ts">list</a>({ ...params }) -> MinimumListResponse</code>
- <code title="delete /billing/minimums/{id}">client.billing.minimums.<a href="./src/resources/billing/minimums.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /billing/minimums/create-many">client.billing.minimums.<a href="./src/resources/billing/minimums.ts">createMany</a>([ ...body ]) -> MinimumCreateManyResponse</code>
- <code title="post /billing/minimums/delete-many">client.billing.minimums.<a href="./src/resources/billing/minimums.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /billing/minimums/filter">client.billing.minimums.<a href="./src/resources/billing/minimums.ts">filter</a>({ ...params }) -> MinimumFilterResponse</code>

## Splits

Types:

- <code><a href="./src/resources/billing/splits.ts">Split</a></code>
- <code><a href="./src/resources/billing/splits.ts">SplitCreateResponse</a></code>
- <code><a href="./src/resources/billing/splits.ts">SplitRetrieveResponse</a></code>
- <code><a href="./src/resources/billing/splits.ts">SplitUpdateResponse</a></code>
- <code><a href="./src/resources/billing/splits.ts">SplitListResponse</a></code>

Methods:

- <code title="post /billing/splits">client.billing.splits.<a href="./src/resources/billing/splits.ts">create</a>({ ...params }) -> SplitCreateResponse</code>
- <code title="get /billing/splits/{id}">client.billing.splits.<a href="./src/resources/billing/splits.ts">retrieve</a>(id, { ...params }) -> SplitRetrieveResponse</code>
- <code title="put /billing/splits">client.billing.splits.<a href="./src/resources/billing/splits.ts">update</a>([ ...split ]) -> SplitUpdateResponse</code>
- <code title="get /billing/splits">client.billing.splits.<a href="./src/resources/billing/splits.ts">list</a>({ ...params }) -> SplitListResponse</code>

## Groups

Types:

- <code><a href="./src/resources/billing/groups.ts">BillingGroup</a></code>
- <code><a href="./src/resources/billing/groups.ts">BillingGroups</a></code>

# AssetAdjustments

Types:

- <code><a href="./src/resources/asset-adjustments.ts">AssetAdjustmentCreateManyResponse</a></code>
- <code><a href="./src/resources/asset-adjustments.ts">AssetAdjustmentFilterResponse</a></code>

Methods:

- <code title="post /billing/asset-adjustments/create-many">client.assetAdjustments.<a href="./src/resources/asset-adjustments.ts">createMany</a>([ ...body ]) -> AssetAdjustmentCreateManyResponse</code>
- <code title="post /billing/asset-adjustments/delete-many">client.assetAdjustments.<a href="./src/resources/asset-adjustments.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /billing/asset-adjustments/filter">client.assetAdjustments.<a href="./src/resources/asset-adjustments.ts">filter</a>({ ...params }) -> AssetAdjustmentFilterResponse</code>

# FeeUploadFiles

Types:

- <code><a href="./src/resources/fee-upload-files.ts">FeeUpload</a></code>
- <code><a href="./src/resources/fee-upload-files.ts">FeeUploads</a></code>
- <code><a href="./src/resources/fee-upload-files.ts">FeeUploadFileRetrieveResponse</a></code>
- <code><a href="./src/resources/fee-upload-files.ts">FeeUploadFileListResponse</a></code>
- <code><a href="./src/resources/fee-upload-files.ts">FeeUploadFileFilterResponse</a></code>

Methods:

- <code title="get /billing/fee-upload-files/{id}">client.feeUploadFiles.<a href="./src/resources/fee-upload-files.ts">retrieve</a>(id, { ...params }) -> FeeUploadFileRetrieveResponse</code>
- <code title="get /billing/fee-upload-files">client.feeUploadFiles.<a href="./src/resources/fee-upload-files.ts">list</a>({ ...params }) -> FeeUploadFileListResponse</code>
- <code title="post /billing/fee-upload-files/download/{id}">client.feeUploadFiles.<a href="./src/resources/fee-upload-files.ts">download</a>(id, { ...params }) -> Response</code>
- <code title="post /billing/fee-upload-files/filter">client.feeUploadFiles.<a href="./src/resources/fee-upload-files.ts">filter</a>({ ...params }) -> FeeUploadFileFilterResponse</code>

# FeeStructures

Types:

- <code><a href="./src/resources/fee-structures.ts">FeeStructureCreateResponse</a></code>
- <code><a href="./src/resources/fee-structures.ts">FeeStructureUpdateResponse</a></code>
- <code><a href="./src/resources/fee-structures.ts">FeeStructureListResponse</a></code>

Methods:

- <code title="post /billing/fee-structures">client.feeStructures.<a href="./src/resources/fee-structures.ts">create</a>({ ...params }) -> FeeStructureCreateResponse</code>
- <code title="put /billing/fee-structures">client.feeStructures.<a href="./src/resources/fee-structures.ts">update</a>([ ...fee_structures ]) -> FeeStructureUpdateResponse</code>
- <code title="get /billing/fee-structures">client.feeStructures.<a href="./src/resources/fee-structures.ts">list</a>({ ...params }) -> FeeStructureListResponse</code>

# BillingFeeStructures

Types:

- <code><a href="./src/resources/billing-fee-structures.ts">BillingFeeStructureRetrieveResponse</a></code>
- <code><a href="./src/resources/billing-fee-structures.ts">BillingFeeStructureUpdateResponse</a></code>
- <code><a href="./src/resources/billing-fee-structures.ts">BillingFeeStructureCreateManyResponse</a></code>
- <code><a href="./src/resources/billing-fee-structures.ts">BillingFeeStructureFilterResponse</a></code>

Methods:

- <code title="get /billing/fee-structures/{id}">client.billingFeeStructures.<a href="./src/resources/billing-fee-structures.ts">retrieve</a>(id, { ...params }) -> BillingFeeStructureRetrieveResponse</code>
- <code title="put /billing/fee-structures/{id}">client.billingFeeStructures.<a href="./src/resources/billing-fee-structures.ts">update</a>({ ...params }) -> BillingFeeStructureUpdateResponse</code>
- <code title="delete /billing/fee-structures/{id}">client.billingFeeStructures.<a href="./src/resources/billing-fee-structures.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /billing/fee-structures/create-many">client.billingFeeStructures.<a href="./src/resources/billing-fee-structures.ts">createMany</a>([ ...body ]) -> BillingFeeStructureCreateManyResponse</code>
- <code title="post /billing/fee-structures/delete-many">client.billingFeeStructures.<a href="./src/resources/billing-fee-structures.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /billing/fee-structures/filter">client.billingFeeStructures.<a href="./src/resources/billing-fee-structures.ts">filter</a>({ ...params }) -> BillingFeeStructureFilterResponse</code>

# BillingInvoices

Types:

- <code><a href="./src/resources/billing-invoices.ts">Invoice</a></code>
- <code><a href="./src/resources/billing-invoices.ts">Invoices</a></code>
- <code><a href="./src/resources/billing-invoices.ts">BillingInvoiceRetrieveResponse</a></code>
- <code><a href="./src/resources/billing-invoices.ts">BillingInvoiceListResponse</a></code>
- <code><a href="./src/resources/billing-invoices.ts">BillingInvoiceFilterResponse</a></code>

Methods:

- <code title="get /billing/invoices/{id}">client.billingInvoices.<a href="./src/resources/billing-invoices.ts">retrieve</a>(id, { ...params }) -> BillingInvoiceRetrieveResponse</code>
- <code title="get /billing/invoices">client.billingInvoices.<a href="./src/resources/billing-invoices.ts">list</a>({ ...params }) -> BillingInvoiceListResponse</code>
- <code title="post /billing/invoices/download/{id}">client.billingInvoices.<a href="./src/resources/billing-invoices.ts">download</a>(id, { ...params }) -> Response</code>
- <code title="post /billing/invoices/filter">client.billingInvoices.<a href="./src/resources/billing-invoices.ts">filter</a>({ ...params }) -> BillingInvoiceFilterResponse</code>

# BillingSplits

Types:

- <code><a href="./src/resources/billing-splits.ts">BillingSplitUpdateResponse</a></code>
- <code><a href="./src/resources/billing-splits.ts">BillingSplitCreateManyResponse</a></code>
- <code><a href="./src/resources/billing-splits.ts">BillingSplitFilterResponse</a></code>

Methods:

- <code title="put /billing/splits/{id}">client.billingSplits.<a href="./src/resources/billing-splits.ts">update</a>({ ...params }) -> BillingSplitUpdateResponse</code>
- <code title="delete /billing/splits/{id}">client.billingSplits.<a href="./src/resources/billing-splits.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /billing/splits/create-many">client.billingSplits.<a href="./src/resources/billing-splits.ts">createMany</a>([ ...body ]) -> BillingSplitCreateManyResponse</code>
- <code title="post /billing/splits/delete-many">client.billingSplits.<a href="./src/resources/billing-splits.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /billing/splits/filter">client.billingSplits.<a href="./src/resources/billing-splits.ts">filter</a>({ ...params }) -> BillingSplitFilterResponse</code>

# Reporting

## Households

Types:

- <code><a href="./src/resources/reporting/households.ts">Household</a></code>
- <code><a href="./src/resources/reporting/households.ts">Households</a></code>
- <code><a href="./src/resources/reporting/households.ts">HouseholdCreateResponse</a></code>
- <code><a href="./src/resources/reporting/households.ts">HouseholdRetrieveResponse</a></code>
- <code><a href="./src/resources/reporting/households.ts">HouseholdUpdateResponse</a></code>
- <code><a href="./src/resources/reporting/households.ts">HouseholdListResponse</a></code>

Methods:

- <code title="post /reporting/households">client.reporting.households.<a href="./src/resources/reporting/households.ts">create</a>({ ...params }) -> HouseholdCreateResponse</code>
- <code title="get /reporting/households/{id}">client.reporting.households.<a href="./src/resources/reporting/households.ts">retrieve</a>(id, { ...params }) -> HouseholdRetrieveResponse</code>
- <code title="put /reporting/households/{id}">client.reporting.households.<a href="./src/resources/reporting/households.ts">update</a>({ ...params }) -> HouseholdUpdateResponse</code>
- <code title="get /reporting/households">client.reporting.households.<a href="./src/resources/reporting/households.ts">list</a>({ ...params }) -> HouseholdListResponse</code>

## TargetAllocations

Types:

- <code><a href="./src/resources/reporting/target-allocations.ts">TargetAllocation</a></code>
- <code><a href="./src/resources/reporting/target-allocations.ts">TargetAllocations</a></code>
- <code><a href="./src/resources/reporting/target-allocations.ts">TargetAllocationCreateResponse</a></code>
- <code><a href="./src/resources/reporting/target-allocations.ts">TargetAllocationRetrieveResponse</a></code>
- <code><a href="./src/resources/reporting/target-allocations.ts">TargetAllocationUpdateResponse</a></code>
- <code><a href="./src/resources/reporting/target-allocations.ts">TargetAllocationListResponse</a></code>
- <code><a href="./src/resources/reporting/target-allocations.ts">TargetAllocationCreateManyResponse</a></code>
- <code><a href="./src/resources/reporting/target-allocations.ts">TargetAllocationFilterResponse</a></code>

Methods:

- <code title="post /reporting/target-allocations">client.reporting.targetAllocations.<a href="./src/resources/reporting/target-allocations.ts">create</a>({ ...params }) -> TargetAllocationCreateResponse</code>
- <code title="get /reporting/target-allocations/{id}">client.reporting.targetAllocations.<a href="./src/resources/reporting/target-allocations.ts">retrieve</a>(id, { ...params }) -> TargetAllocationRetrieveResponse</code>
- <code title="put /reporting/target-allocations/{id}">client.reporting.targetAllocations.<a href="./src/resources/reporting/target-allocations.ts">update</a>({ ...params }) -> TargetAllocationUpdateResponse</code>
- <code title="get /reporting/target-allocations">client.reporting.targetAllocations.<a href="./src/resources/reporting/target-allocations.ts">list</a>({ ...params }) -> TargetAllocationListResponse</code>
- <code title="delete /reporting/target-allocations/{id}">client.reporting.targetAllocations.<a href="./src/resources/reporting/target-allocations.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /reporting/target-allocations/create-many">client.reporting.targetAllocations.<a href="./src/resources/reporting/target-allocations.ts">createMany</a>([ ...body ]) -> TargetAllocationCreateManyResponse</code>
- <code title="post /reporting/target-allocations/delete-many">client.reporting.targetAllocations.<a href="./src/resources/reporting/target-allocations.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /reporting/target-allocations/filter">client.reporting.targetAllocations.<a href="./src/resources/reporting/target-allocations.ts">filter</a>({ ...params }) -> TargetAllocationFilterResponse</code>

## PrintableReports

Types:

- <code><a href="./src/resources/reporting/printable-reports.ts">PrintableReport</a></code>
- <code><a href="./src/resources/reporting/printable-reports.ts">PrintableReports</a></code>
- <code><a href="./src/resources/reporting/printable-reports.ts">PrintableReportListResponse</a></code>

Methods:

- <code title="get /reporting/printable-reports">client.reporting.printableReports.<a href="./src/resources/reporting/printable-reports.ts">list</a>({ ...params }) -> PrintableReportListResponse</code>

# Households

Types:

- <code><a href="./src/resources/households.ts">HouseholdCreateManyResponse</a></code>
- <code><a href="./src/resources/households.ts">HouseholdFilterResponse</a></code>
- <code><a href="./src/resources/households.ts">HouseholdRemapResponse</a></code>

Methods:

- <code title="post /reporting/households/create-many">client.households.<a href="./src/resources/households.ts">createMany</a>([ ...body ]) -> HouseholdCreateManyResponse</code>
- <code title="post /reporting/households/filter">client.households.<a href="./src/resources/households.ts">filter</a>({ ...params }) -> HouseholdFilterResponse</code>
- <code title="post /reporting/households/remap">client.households.<a href="./src/resources/households.ts">remap</a>({ ...params }) -> unknown</code>

# AssetClassifications

Types:

- <code><a href="./src/resources/asset-classifications.ts">AssetClassification</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassifications</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassifications</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassificationCreateResponse</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassificationRetrieveResponse</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassificationUpdateResponse</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassificationListResponse</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassificationCreateManyResponse</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassificationFilterResponse</a></code>
- <code><a href="./src/resources/asset-classifications.ts">AssetClassificationUpdateSingleResponse</a></code>

Methods:

- <code title="post /reporting/asset-classifications">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">create</a>({ ...params }) -> AssetClassificationCreateResponse</code>
- <code title="get /reporting/asset-classifications/{id}">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">retrieve</a>(id, { ...params }) -> AssetClassificationRetrieveResponse</code>
- <code title="put /reporting/asset-classifications">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">update</a>([ ...asset_classifications ]) -> AssetClassificationUpdateResponse</code>
- <code title="get /reporting/asset-classifications">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">list</a>({ ...params }) -> AssetClassificationListResponse</code>
- <code title="delete /reporting/asset-classifications/{id}">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /reporting/asset-classifications/create-many">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">createMany</a>([ ...body ]) -> AssetClassificationCreateManyResponse</code>
- <code title="post /reporting/asset-classifications/delete-many">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /reporting/asset-classifications/filter">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">filter</a>({ ...params }) -> AssetClassificationFilterResponse</code>
- <code title="put /reporting/asset-classifications/{id}">client.assetClassifications.<a href="./src/resources/asset-classifications.ts">updateSingle</a>({ ...params }) -> AssetClassificationUpdateSingleResponse</code>

# ClassificationTags

Types:

- <code><a href="./src/resources/classification-tags.ts">ClassificationTag</a></code>
- <code><a href="./src/resources/classification-tags.ts">ClassificationTags</a></code>
- <code><a href="./src/resources/classification-tags.ts">ClassificationTagCreateResponse</a></code>
- <code><a href="./src/resources/classification-tags.ts">ClassificationTagRetrieveResponse</a></code>
- <code><a href="./src/resources/classification-tags.ts">ClassificationTagUpdateResponse</a></code>
- <code><a href="./src/resources/classification-tags.ts">ClassificationTagListResponse</a></code>
- <code><a href="./src/resources/classification-tags.ts">ClassificationTagCreateManyResponse</a></code>
- <code><a href="./src/resources/classification-tags.ts">ClassificationTagFilterResponse</a></code>

Methods:

- <code title="post /reporting/class-tags">client.classificationTags.<a href="./src/resources/classification-tags.ts">create</a>({ ...params }) -> ClassificationTagCreateResponse</code>
- <code title="get /reporting/class-tags/{id}">client.classificationTags.<a href="./src/resources/classification-tags.ts">retrieve</a>(id, { ...params }) -> ClassificationTagRetrieveResponse</code>
- <code title="put /reporting/class-tags/{id}">client.classificationTags.<a href="./src/resources/classification-tags.ts">update</a>({ ...params }) -> ClassificationTagUpdateResponse</code>
- <code title="get /reporting/class-tags">client.classificationTags.<a href="./src/resources/classification-tags.ts">list</a>({ ...params }) -> ClassificationTagListResponse</code>
- <code title="delete /reporting/class-tags/{id}">client.classificationTags.<a href="./src/resources/classification-tags.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /reporting/class-tags/create-many">client.classificationTags.<a href="./src/resources/classification-tags.ts">createMany</a>([ ...body ]) -> ClassificationTagCreateManyResponse</code>
- <code title="post /reporting/class-tags/delete-many">client.classificationTags.<a href="./src/resources/classification-tags.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /reporting/class-tags/filter">client.classificationTags.<a href="./src/resources/classification-tags.ts">filter</a>({ ...params }) -> ClassificationTagFilterResponse</code>

# Benchmarks

Types:

- <code><a href="./src/resources/benchmarks.ts">Benchmark</a></code>
- <code><a href="./src/resources/benchmarks.ts">Benchmarks</a></code>
- <code><a href="./src/resources/benchmarks.ts">BenchmarkCreateResponse</a></code>
- <code><a href="./src/resources/benchmarks.ts">BenchmarkRetrieveResponse</a></code>
- <code><a href="./src/resources/benchmarks.ts">BenchmarkUpdateResponse</a></code>
- <code><a href="./src/resources/benchmarks.ts">BenchmarkListResponse</a></code>
- <code><a href="./src/resources/benchmarks.ts">BenchmarkCreateManyResponse</a></code>
- <code><a href="./src/resources/benchmarks.ts">BenchmarkFilterResponse</a></code>

Methods:

- <code title="post /reporting/benchmarks">client.benchmarks.<a href="./src/resources/benchmarks.ts">create</a>({ ...params }) -> BenchmarkCreateResponse</code>
- <code title="get /reporting/benchmarks/{id}">client.benchmarks.<a href="./src/resources/benchmarks.ts">retrieve</a>(id, { ...params }) -> BenchmarkRetrieveResponse</code>
- <code title="put /reporting/benchmarks/{id}">client.benchmarks.<a href="./src/resources/benchmarks.ts">update</a>({ ...params }) -> BenchmarkUpdateResponse</code>
- <code title="get /reporting/benchmarks">client.benchmarks.<a href="./src/resources/benchmarks.ts">list</a>({ ...params }) -> BenchmarkListResponse</code>
- <code title="delete /reporting/benchmarks/{id}">client.benchmarks.<a href="./src/resources/benchmarks.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /reporting/benchmarks/create-many">client.benchmarks.<a href="./src/resources/benchmarks.ts">createMany</a>([ ...body ]) -> BenchmarkCreateManyResponse</code>
- <code title="post /reporting/benchmarks/delete-many">client.benchmarks.<a href="./src/resources/benchmarks.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /reporting/benchmarks/filter">client.benchmarks.<a href="./src/resources/benchmarks.ts">filter</a>({ ...params }) -> BenchmarkFilterResponse</code>

# PrintableReports

Types:

- <code><a href="./src/resources/printable-reports.ts">PrintableReportCreateResponse</a></code>
- <code><a href="./src/resources/printable-reports.ts">PrintableReportRetrieveResponse</a></code>
- <code><a href="./src/resources/printable-reports.ts">PrintableReportBulkDownloadResponse</a></code>
- <code><a href="./src/resources/printable-reports.ts">PrintableReportFilterResponse</a></code>

Methods:

- <code title="post /reporting/printable-reports/create">client.printableReports.<a href="./src/resources/printable-reports.ts">create</a>({ ...params }) -> PrintableReportCreateResponse</code>
- <code title="get /reporting/printable-reports/{id}">client.printableReports.<a href="./src/resources/printable-reports.ts">retrieve</a>(id, { ...params }) -> PrintableReportRetrieveResponse</code>
- <code title="delete /reporting/printable-reports/{id}">client.printableReports.<a href="./src/resources/printable-reports.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /reporting/printable-reports/download">client.printableReports.<a href="./src/resources/printable-reports.ts">bulkDownload</a>({ ...params }) -> PrintableReportBulkDownloadResponse</code>
- <code title="post /reporting/printable-reports/delete-many">client.printableReports.<a href="./src/resources/printable-reports.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /reporting/printable-reports/download/{id}">client.printableReports.<a href="./src/resources/printable-reports.ts">download</a>(id, { ...params }) -> Response</code>
- <code title="post /reporting/printable-reports/filter">client.printableReports.<a href="./src/resources/printable-reports.ts">filter</a>({ ...params }) -> PrintableReportFilterResponse</code>

# ReportSettings

Types:

- <code><a href="./src/resources/report-settings.ts">ReportSetting</a></code>
- <code><a href="./src/resources/report-settings.ts">ReportSettings</a></code>
- <code><a href="./src/resources/report-settings.ts">ReportSettingRetrieveResponse</a></code>
- <code><a href="./src/resources/report-settings.ts">ReportSettingUpdateResponse</a></code>
- <code><a href="./src/resources/report-settings.ts">ReportSettingListResponse</a></code>
- <code><a href="./src/resources/report-settings.ts">ReportSettingFilterResponse</a></code>

Methods:

- <code title="get /reporting/report-settings/{id}">client.reportSettings.<a href="./src/resources/report-settings.ts">retrieve</a>(id, { ...params }) -> ReportSettingRetrieveResponse</code>
- <code title="put /reporting/report-settings/{id}">client.reportSettings.<a href="./src/resources/report-settings.ts">update</a>(id, { ...params }) -> ReportSettingUpdateResponse</code>
- <code title="get /reporting/report-settings">client.reportSettings.<a href="./src/resources/report-settings.ts">list</a>({ ...params }) -> ReportSettingListResponse</code>
- <code title="post /reporting/report-settings/filter">client.reportSettings.<a href="./src/resources/report-settings.ts">filter</a>({ ...params }) -> ReportSettingFilterResponse</code>

# WebReports

Types:

- <code><a href="./src/resources/web-reports.ts">WebReportRunResponse</a></code>

Methods:

- <code title="post /reporting/web-reports">client.webReports.<a href="./src/resources/web-reports.ts">run</a>({ ...params }) -> WebReportRunResponse</code>

# Analytics

Types:

- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsBenchmarkPerformanceResponse</a></code>
- <code><a href="./src/resources/analytics/analytics.ts">AnalyticsHouseholdPerformanceResponse</a></code>

Methods:

- <code title="post /analytics/benchmark-performance">client.analytics.<a href="./src/resources/analytics/analytics.ts">benchmarkPerformance</a>({ ...params }) -> AnalyticsBenchmarkPerformanceResponse</code>
- <code title="post /analytics/household-performance">client.analytics.<a href="./src/resources/analytics/analytics.ts">householdPerformance</a>({ ...params }) -> AnalyticsHouseholdPerformanceResponse</code>

## Aum

Types:

- <code><a href="./src/resources/analytics/aum.ts">Aum</a></code>
- <code><a href="./src/resources/analytics/aum.ts">Aums</a></code>
- <code><a href="./src/resources/analytics/aum.ts">AumRetrieveResponse</a></code>
- <code><a href="./src/resources/analytics/aum.ts">AumListResponse</a></code>
- <code><a href="./src/resources/analytics/aum.ts">AumByAccountResponse</a></code>
- <code><a href="./src/resources/analytics/aum.ts">AumByHouseholdResponse</a></code>
- <code><a href="./src/resources/analytics/aum.ts">AumFilterResponse</a></code>
- <code><a href="./src/resources/analytics/aum.ts">AumGetAumResponse</a></code>

Methods:

- <code title="get /analytics/aum/{id}">client.analytics.aum.<a href="./src/resources/analytics/aum.ts">retrieve</a>(id, { ...params }) -> AumRetrieveResponse</code>
- <code title="get /analytics/aum">client.analytics.aum.<a href="./src/resources/analytics/aum.ts">list</a>({ ...params }) -> AumListResponse</code>
- <code title="post /analytics/aum/by-account">client.analytics.aum.<a href="./src/resources/analytics/aum.ts">byAccount</a>({ ...params }) -> AumByAccountResponse</code>
- <code title="post /analytics/aum/by-household">client.analytics.aum.<a href="./src/resources/analytics/aum.ts">byHousehold</a>({ ...params }) -> AumByHouseholdResponse</code>
- <code title="post /analytics/aum/filter">client.analytics.aum.<a href="./src/resources/analytics/aum.ts">filter</a>({ ...params }) -> AumFilterResponse</code>
- <code title="post /analytics/aum/get-aum">client.analytics.aum.<a href="./src/resources/analytics/aum.ts">getAum</a>({ ...params }) -> AumGetAumResponse</code>

# AccountPerformance

Types:

- <code><a href="./src/resources/account-performance.ts">AccountPerformanceFetchResponse</a></code>

Methods:

- <code title="post /analytics/account-performance">client.accountPerformance.<a href="./src/resources/account-performance.ts">fetch</a>({ ...params }) -> AccountPerformanceFetchResponse</code>

# Jobs

Types:

- <code><a href="./src/resources/jobs.ts">Delete</a></code>
- <code><a href="./src/resources/jobs.ts">Jobs</a></code>
- <code><a href="./src/resources/jobs.ts">JobRetrieveResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobListResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobClearResponse</a></code>
- <code><a href="./src/resources/jobs.ts">JobFilterResponse</a></code>

Methods:

- <code title="get /jobs/{id}">client.jobs.<a href="./src/resources/jobs.ts">retrieve</a>(id, { ...params }) -> JobRetrieveResponse</code>
- <code title="get /jobs/">client.jobs.<a href="./src/resources/jobs.ts">list</a>({ ...params }) -> JobListResponse</code>
- <code title="post /jobs/clear">client.jobs.<a href="./src/resources/jobs.ts">clear</a>({ ...params }) -> JobClearResponse</code>
- <code title="post /jobs/filter">client.jobs.<a href="./src/resources/jobs.ts">filter</a>({ ...params }) -> JobFilterResponse</code>

# Data

## SourceLots

Types:

- <code><a href="./src/resources/data/source-lots.ts">Sourcelot</a></code>
- <code><a href="./src/resources/data/source-lots.ts">Sourcelots</a></code>
- <code><a href="./src/resources/data/source-lots.ts">SourceLotRetrieveResponse</a></code>
- <code><a href="./src/resources/data/source-lots.ts">SourceLotListResponse</a></code>
- <code><a href="./src/resources/data/source-lots.ts">SourceLotFilterResponse</a></code>
- <code><a href="./src/resources/data/source-lots.ts">SourceLotLatestResponse</a></code>

Methods:

- <code title="get /data/source/lots/{id}">client.data.sourceLots.<a href="./src/resources/data/source-lots.ts">retrieve</a>(id, { ...params }) -> SourceLotRetrieveResponse</code>
- <code title="get /data/source/lots">client.data.sourceLots.<a href="./src/resources/data/source-lots.ts">list</a>({ ...params }) -> SourceLotListResponse</code>
- <code title="post /data/source/lots/filter">client.data.sourceLots.<a href="./src/resources/data/source-lots.ts">filter</a>({ ...params }) -> SourceLotFilterResponse</code>
- <code title="get /data/source/lots/latest">client.data.sourceLots.<a href="./src/resources/data/source-lots.ts">latest</a>({ ...params }) -> SourceLotLatestResponse</code>

## Custodian

### Securities

Types:

- <code><a href="./src/resources/data/custodian/securities.ts">Securities</a></code>
- <code><a href="./src/resources/data/custodian/securities.ts">Security</a></code>
- <code><a href="./src/resources/data/custodian/securities.ts">SecurityGetCompressedResponse</a></code>
- <code><a href="./src/resources/data/custodian/securities.ts">SecurityManagedResponse</a></code>
- <code><a href="./src/resources/data/custodian/securities.ts">SecurityReferenceResponse</a></code>
- <code><a href="./src/resources/data/custodian/securities.ts">SecuritySearchResponse</a></code>

Methods:

- <code title="post /data/custodian/securities/fetch">client.data.custodian.securities.<a href="./src/resources/data/custodian/securities.ts">fetch</a>({ ...params }) -> Securities</code>
- <code title="get /data/custodian/securities/get-compressed">client.data.custodian.securities.<a href="./src/resources/data/custodian/securities.ts">getCompressed</a>({ ...params }) -> string</code>
- <code title="get /data/custodian/securities/managed">client.data.custodian.securities.<a href="./src/resources/data/custodian/securities.ts">managed</a>({ ...params }) -> SecurityManagedResponse</code>
- <code title="post /data/custodian/securities/reference">client.data.custodian.securities.<a href="./src/resources/data/custodian/securities.ts">reference</a>({ ...params }) -> SecurityReferenceResponse</code>
- <code title="get /data/custodian/securities/search/{q}">client.data.custodian.securities.<a href="./src/resources/data/custodian/securities.ts">search</a>(q, { ...params }) -> SecuritySearchResponse</code>

## Idc

### Indexes

Types:

- <code><a href="./src/resources/data/idc/indexes.ts">Index</a></code>
- <code><a href="./src/resources/data/idc/indexes.ts">Indexes</a></code>
- <code><a href="./src/resources/data/idc/indexes.ts">IndexRetrieveResponse</a></code>
- <code><a href="./src/resources/data/idc/indexes.ts">IndexListResponse</a></code>
- <code><a href="./src/resources/data/idc/indexes.ts">IndexFilterResponse</a></code>

Methods:

- <code title="get /data/idc/indexes/{id}">client.data.idc.indexes.<a href="./src/resources/data/idc/indexes.ts">retrieve</a>(id, { ...params }) -> IndexRetrieveResponse</code>
- <code title="get /data/idc/indexes">client.data.idc.indexes.<a href="./src/resources/data/idc/indexes.ts">list</a>({ ...params }) -> IndexListResponse</code>
- <code title="post /data/idc/indexes/filter">client.data.idc.indexes.<a href="./src/resources/data/idc/indexes.ts">filter</a>({ ...params }) -> IndexFilterResponse</code>

## SourcePositions

Types:

- <code><a href="./src/resources/data/source-positions.ts">Sourceposition</a></code>
- <code><a href="./src/resources/data/source-positions.ts">Sourcepositions</a></code>

## SourceRealizedGainLoss

Types:

- <code><a href="./src/resources/data/source-realized-gain-loss.ts">Sourcerealizedgainloss</a></code>
- <code><a href="./src/resources/data/source-realized-gain-loss.ts">Sourcerealizedgainlosses</a></code>

## SourceAccountBalances

Types:

- <code><a href="./src/resources/data/source-account-balances.ts">Sourceaccountbalance</a></code>
- <code><a href="./src/resources/data/source-account-balances.ts">Sourceaccountbalances</a></code>

## SourceTransactions

Types:

- <code><a href="./src/resources/data/source-transactions.ts">Sourcetransaction</a></code>
- <code><a href="./src/resources/data/source-transactions.ts">Sourcetransactions</a></code>

# SourcePositions

Types:

- <code><a href="./src/resources/source-positions.ts">SourcePositionRetrieveResponse</a></code>
- <code><a href="./src/resources/source-positions.ts">SourcePositionListResponse</a></code>
- <code><a href="./src/resources/source-positions.ts">SourcePositionFilterResponse</a></code>
- <code><a href="./src/resources/source-positions.ts">SourcePositionLatestResponse</a></code>

Methods:

- <code title="get /data/source/positions/{id}">client.sourcePositions.<a href="./src/resources/source-positions.ts">retrieve</a>(id, { ...params }) -> SourcePositionRetrieveResponse</code>
- <code title="get /data/source/positions">client.sourcePositions.<a href="./src/resources/source-positions.ts">list</a>({ ...params }) -> SourcePositionListResponse</code>
- <code title="post /data/source/positions/filter">client.sourcePositions.<a href="./src/resources/source-positions.ts">filter</a>({ ...params }) -> SourcePositionFilterResponse</code>
- <code title="get /data/source/positions/latest">client.sourcePositions.<a href="./src/resources/source-positions.ts">latest</a>({ ...params }) -> SourcePositionLatestResponse</code>

# SourceRealizedGainLoss

Types:

- <code><a href="./src/resources/source-realized-gain-loss.ts">SourceRealizedGainLossRetrieveResponse</a></code>
- <code><a href="./src/resources/source-realized-gain-loss.ts">SourceRealizedGainLossListResponse</a></code>
- <code><a href="./src/resources/source-realized-gain-loss.ts">SourceRealizedGainLossFilterResponse</a></code>
- <code><a href="./src/resources/source-realized-gain-loss.ts">SourceRealizedGainLossLatestResponse</a></code>

Methods:

- <code title="get /data/source/realized-gain-loss/{id}">client.sourceRealizedGainLoss.<a href="./src/resources/source-realized-gain-loss.ts">retrieve</a>(id, { ...params }) -> SourceRealizedGainLossRetrieveResponse</code>
- <code title="get /data/source/realized-gain-loss">client.sourceRealizedGainLoss.<a href="./src/resources/source-realized-gain-loss.ts">list</a>({ ...params }) -> SourceRealizedGainLossListResponse</code>
- <code title="post /data/source/realized-gain-loss/filter">client.sourceRealizedGainLoss.<a href="./src/resources/source-realized-gain-loss.ts">filter</a>({ ...params }) -> SourceRealizedGainLossFilterResponse</code>
- <code title="get /data/source/realized-gain-loss/latest">client.sourceRealizedGainLoss.<a href="./src/resources/source-realized-gain-loss.ts">latest</a>({ ...params }) -> SourceRealizedGainLossLatestResponse</code>

# SourceAccountBalances

Types:

- <code><a href="./src/resources/source-account-balances.ts">SourceAccountBalanceRetrieveResponse</a></code>
- <code><a href="./src/resources/source-account-balances.ts">SourceAccountBalanceListResponse</a></code>
- <code><a href="./src/resources/source-account-balances.ts">SourceAccountBalanceFilterResponse</a></code>
- <code><a href="./src/resources/source-account-balances.ts">SourceAccountBalanceLatestResponse</a></code>

Methods:

- <code title="get /data/source/account-balances/{id}">client.sourceAccountBalances.<a href="./src/resources/source-account-balances.ts">retrieve</a>(id, { ...params }) -> SourceAccountBalanceRetrieveResponse</code>
- <code title="get /data/source/account-balances">client.sourceAccountBalances.<a href="./src/resources/source-account-balances.ts">list</a>({ ...params }) -> SourceAccountBalanceListResponse</code>
- <code title="post /data/source/account-balances/filter">client.sourceAccountBalances.<a href="./src/resources/source-account-balances.ts">filter</a>({ ...params }) -> SourceAccountBalanceFilterResponse</code>
- <code title="get /data/source/account-balances/latest">client.sourceAccountBalances.<a href="./src/resources/source-account-balances.ts">latest</a>({ ...params }) -> SourceAccountBalanceLatestResponse</code>

# SourceTransactions

Types:

- <code><a href="./src/resources/source-transactions.ts">SourceTransactionRetrieveResponse</a></code>
- <code><a href="./src/resources/source-transactions.ts">SourceTransactionListResponse</a></code>
- <code><a href="./src/resources/source-transactions.ts">SourceTransactionFilterResponse</a></code>
- <code><a href="./src/resources/source-transactions.ts">SourceTransactionLatestResponse</a></code>

Methods:

- <code title="get /data/source/transactions/{id}">client.sourceTransactions.<a href="./src/resources/source-transactions.ts">retrieve</a>(id, { ...params }) -> SourceTransactionRetrieveResponse</code>
- <code title="get /data/source/transactions">client.sourceTransactions.<a href="./src/resources/source-transactions.ts">list</a>({ ...params }) -> SourceTransactionListResponse</code>
- <code title="post /data/source/transactions/filter">client.sourceTransactions.<a href="./src/resources/source-transactions.ts">filter</a>({ ...params }) -> SourceTransactionFilterResponse</code>
- <code title="get /data/source/transactions/latest">client.sourceTransactions.<a href="./src/resources/source-transactions.ts">latest</a>({ ...params }) -> SourceTransactionLatestResponse</code>

# CustodianSecurities

Types:

- <code><a href="./src/resources/custodian-securities.ts">CustodianSecurityRetrieveResponse</a></code>
- <code><a href="./src/resources/custodian-securities.ts">CustodianSecurityListResponse</a></code>
- <code><a href="./src/resources/custodian-securities.ts">CustodianSecurityFilterResponse</a></code>
- <code><a href="./src/resources/custodian-securities.ts">CustodianSecurityGetUsdResponse</a></code>

Methods:

- <code title="get /data/custodian/securities/{id}">client.custodianSecurities.<a href="./src/resources/custodian-securities.ts">retrieve</a>(id, { ...params }) -> CustodianSecurityRetrieveResponse</code>
- <code title="get /data/custodian/securities">client.custodianSecurities.<a href="./src/resources/custodian-securities.ts">list</a>({ ...params }) -> CustodianSecurityListResponse</code>
- <code title="post /data/custodian/securities/filter">client.custodianSecurities.<a href="./src/resources/custodian-securities.ts">filter</a>({ ...params }) -> CustodianSecurityFilterResponse</code>
- <code title="get /data/custodian/securities/get-usd">client.custodianSecurities.<a href="./src/resources/custodian-securities.ts">getUsd</a>({ ...params }) -> CustodianSecurityGetUsdResponse</code>

# Oauth2

Types:

- <code><a href="./src/resources/oauth2.ts">OAuth</a></code>

Methods:

- <code title="post /oauth2/token">client.oauth2.<a href="./src/resources/oauth2.ts">exchange</a>({ ...params }) -> OAuth</code>

# InvestmentManagement

## Models

Types:

- <code><a href="./src/resources/investment-management/models.ts">Model</a></code>
- <code><a href="./src/resources/investment-management/models.ts">Models</a></code>
- <code><a href="./src/resources/investment-management/models.ts">ModelCreateResponse</a></code>
- <code><a href="./src/resources/investment-management/models.ts">ModelRetrieveResponse</a></code>
- <code><a href="./src/resources/investment-management/models.ts">ModelUpdateResponse</a></code>
- <code><a href="./src/resources/investment-management/models.ts">ModelListResponse</a></code>
- <code><a href="./src/resources/investment-management/models.ts">ModelFilterResponse</a></code>

Methods:

- <code title="post /investment-management/models">client.investmentManagement.models.<a href="./src/resources/investment-management/models.ts">create</a>({ ...params }) -> ModelCreateResponse</code>
- <code title="get /investment-management/models/{id}">client.investmentManagement.models.<a href="./src/resources/investment-management/models.ts">retrieve</a>(id, { ...params }) -> ModelRetrieveResponse</code>
- <code title="put /investment-management/models/{id}">client.investmentManagement.models.<a href="./src/resources/investment-management/models.ts">update</a>({ ...params }) -> ModelUpdateResponse</code>
- <code title="get /investment-management/models">client.investmentManagement.models.<a href="./src/resources/investment-management/models.ts">list</a>({ ...params }) -> ModelListResponse</code>
- <code title="delete /investment-management/models/{id}">client.investmentManagement.models.<a href="./src/resources/investment-management/models.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /investment-management/models/delete-many">client.investmentManagement.models.<a href="./src/resources/investment-management/models.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /investment-management/models/filter">client.investmentManagement.models.<a href="./src/resources/investment-management/models.ts">filter</a>({ ...params }) -> ModelFilterResponse</code>

## Strategies

Types:

- <code><a href="./src/resources/investment-management/strategies.ts">StrategyCreateResponse</a></code>
- <code><a href="./src/resources/investment-management/strategies.ts">StrategyRetrieveResponse</a></code>
- <code><a href="./src/resources/investment-management/strategies.ts">StrategyUpdateResponse</a></code>
- <code><a href="./src/resources/investment-management/strategies.ts">StrategyListResponse</a></code>
- <code><a href="./src/resources/investment-management/strategies.ts">StrategyCreateManyResponse</a></code>
- <code><a href="./src/resources/investment-management/strategies.ts">StrategyFilterResponse</a></code>

Methods:

- <code title="post /investment-management/strategies">client.investmentManagement.strategies.<a href="./src/resources/investment-management/strategies.ts">create</a>({ ...params }) -> StrategyCreateResponse</code>
- <code title="get /investment-management/strategies/{id}">client.investmentManagement.strategies.<a href="./src/resources/investment-management/strategies.ts">retrieve</a>(id, { ...params }) -> StrategyRetrieveResponse</code>
- <code title="put /investment-management/strategies/{id}">client.investmentManagement.strategies.<a href="./src/resources/investment-management/strategies.ts">update</a>({ ...params }) -> StrategyUpdateResponse</code>
- <code title="get /investment-management/strategies">client.investmentManagement.strategies.<a href="./src/resources/investment-management/strategies.ts">list</a>({ ...params }) -> StrategyListResponse</code>
- <code title="delete /investment-management/strategies/{id}">client.investmentManagement.strategies.<a href="./src/resources/investment-management/strategies.ts">delete</a>(id, { ...params }) -> void</code>
- <code title="post /investment-management/strategies/create-many">client.investmentManagement.strategies.<a href="./src/resources/investment-management/strategies.ts">createMany</a>([ ...body ]) -> StrategyCreateManyResponse</code>
- <code title="post /investment-management/strategies/delete-many">client.investmentManagement.strategies.<a href="./src/resources/investment-management/strategies.ts">deleteMany</a>({ ...params }) -> void</code>
- <code title="post /investment-management/strategies/filter">client.investmentManagement.strategies.<a href="./src/resources/investment-management/strategies.ts">filter</a>({ ...params }) -> StrategyFilterResponse</code>

# Status

## AccountSummary

Types:

- <code><a href="./src/resources/status/account-summary.ts">AccountSummary</a></code>

Methods:

- <code title="get /status/account-summary">client.status.accountSummary.<a href="./src/resources/status/account-summary.ts">list</a>({ ...params }) -> AccountSummary</code>

## SourceData

Types:

- <code><a href="./src/resources/status/source-data.ts">SourceDataCreateResponse</a></code>

Methods:

- <code title="post /status/source-data">client.status.sourceData.<a href="./src/resources/status/source-data.ts">create</a>({ ...params }) -> SourceDataCreateResponse</code>

# MarketData

## Intrinio

Types:

- <code><a href="./src/resources/market-data/intrinio.ts">IntrinioRetrieveResponse</a></code>

Methods:

- <code title="get /market-data/intrinio/{intrinioEndpoint}">client.marketData.intrinio.<a href="./src/resources/market-data/intrinio.ts">retrieve</a>(intrinioEndpoint, { ...params }) -> unknown</code>

# BillingReports

Types:

- <code><a href="./src/resources/billing-reports.ts">BillingReport</a></code>
- <code><a href="./src/resources/billing-reports.ts">BillingReports</a></code>
