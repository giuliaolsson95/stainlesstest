// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TaxIDAPI from './tax-id';
import { TaxID, TaxIDExchangeParams, TaxIDExchangeResponse } from './tax-id';
import * as TdaToSwbMigrationsAPI from './tda-to-swb-migrations';
import {
  TdaToSwbMigrationFilterParams,
  TdaToSwbMigrationFilterResponse,
  TdaToSwbMigrationListParams,
  TdaToSwbMigrationListResponse,
  TdaToSwbMigrations,
} from './tda-to-swb-migrations';

export class AccountManagement extends APIResource {
  taxId: TaxIDAPI.TaxID = new TaxIDAPI.TaxID(this._client);
  tdaToSwbMigrations: TdaToSwbMigrationsAPI.TdaToSwbMigrations = new TdaToSwbMigrationsAPI.TdaToSwbMigrations(
    this._client,
  );
}

AccountManagement.TaxID = TaxID;
AccountManagement.TdaToSwbMigrations = TdaToSwbMigrations;

export declare namespace AccountManagement {
  export {
    TaxID as TaxID,
    type TaxIDExchangeResponse as TaxIDExchangeResponse,
    type TaxIDExchangeParams as TaxIDExchangeParams,
  };

  export {
    TdaToSwbMigrations as TdaToSwbMigrations,
    type TdaToSwbMigrationListResponse as TdaToSwbMigrationListResponse,
    type TdaToSwbMigrationFilterResponse as TdaToSwbMigrationFilterResponse,
    type TdaToSwbMigrationListParams as TdaToSwbMigrationListParams,
    type TdaToSwbMigrationFilterParams as TdaToSwbMigrationFilterParams,
  };
}
