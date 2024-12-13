// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ModelsAPI from './models';
import {
  Model,
  ModelCreateParams,
  ModelCreateResponse,
  ModelDeleteManyParams,
  ModelDeleteParams,
  ModelFilterParams,
  ModelFilterResponse,
  ModelListParams,
  ModelListResponse,
  ModelRetrieveParams,
  ModelRetrieveResponse,
  ModelUpdateParams,
  ModelUpdateResponse,
  Models,
} from './models';
import * as StrategiesAPI from './strategies';
import {
  Strategies,
  StrategyCreateManyParams,
  StrategyCreateManyResponse,
  StrategyCreateParams,
  StrategyCreateResponse,
  StrategyDeleteManyParams,
  StrategyDeleteParams,
  StrategyFilterParams,
  StrategyFilterResponse,
  StrategyListParams,
  StrategyListResponse,
  StrategyRetrieveParams,
  StrategyRetrieveResponse,
  StrategyUpdateParams,
  StrategyUpdateResponse,
} from './strategies';

export class InvestmentManagement extends APIResource {
  models: ModelsAPI.Models = new ModelsAPI.Models(this._client);
  strategies: StrategiesAPI.Strategies = new StrategiesAPI.Strategies(this._client);
}

InvestmentManagement.Strategies = Strategies;

export declare namespace InvestmentManagement {
  export {
    type Models as Models,
    type Model as Model,
    type ModelCreateResponse as ModelCreateResponse,
    type ModelRetrieveResponse as ModelRetrieveResponse,
    type ModelUpdateResponse as ModelUpdateResponse,
    type ModelListResponse as ModelListResponse,
    type ModelFilterResponse as ModelFilterResponse,
    type ModelCreateParams as ModelCreateParams,
    type ModelRetrieveParams as ModelRetrieveParams,
    type ModelUpdateParams as ModelUpdateParams,
    type ModelListParams as ModelListParams,
    type ModelDeleteParams as ModelDeleteParams,
    type ModelDeleteManyParams as ModelDeleteManyParams,
    type ModelFilterParams as ModelFilterParams,
  };

  export {
    Strategies as Strategies,
    type StrategyCreateResponse as StrategyCreateResponse,
    type StrategyRetrieveResponse as StrategyRetrieveResponse,
    type StrategyUpdateResponse as StrategyUpdateResponse,
    type StrategyListResponse as StrategyListResponse,
    type StrategyCreateManyResponse as StrategyCreateManyResponse,
    type StrategyFilterResponse as StrategyFilterResponse,
    type StrategyCreateParams as StrategyCreateParams,
    type StrategyRetrieveParams as StrategyRetrieveParams,
    type StrategyUpdateParams as StrategyUpdateParams,
    type StrategyListParams as StrategyListParams,
    type StrategyDeleteParams as StrategyDeleteParams,
    type StrategyCreateManyParams as StrategyCreateManyParams,
    type StrategyDeleteManyParams as StrategyDeleteManyParams,
    type StrategyFilterParams as StrategyFilterParams,
  };
}
