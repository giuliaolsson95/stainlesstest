// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as SourceAccountBalancesAPI from './source-account-balances';
import {
  SourceAccountBalances,
  Sourceaccountbalance,
  Sourceaccountbalances,
} from './source-account-balances';
import * as SourceLotsAPI from './source-lots';
import {
  SourceLotFilterParams,
  SourceLotFilterResponse,
  SourceLotLatestParams,
  SourceLotLatestResponse,
  SourceLotListParams,
  SourceLotListResponse,
  SourceLotRetrieveParams,
  SourceLotRetrieveResponse,
  SourceLots,
  Sourcelot,
  Sourcelots,
} from './source-lots';
import * as SourcePositionsAPI from './source-positions';
import { SourcePositions, Sourceposition, Sourcepositions } from './source-positions';
import * as SourceRealizedGainLossAPI from './source-realized-gain-loss';
import {
  SourceRealizedGainLoss,
  Sourcerealizedgainloss,
  Sourcerealizedgainlosses,
} from './source-realized-gain-loss';
import * as SourceTransactionsAPI from './source-transactions';
import { SourceTransactions, Sourcetransaction, Sourcetransactions } from './source-transactions';
import * as CustodianAPI from './custodian/custodian';
import { Custodian } from './custodian/custodian';
import * as IdcAPI from './idc/idc';
import { Idc } from './idc/idc';

export class Data extends APIResource {
  sourceLots: SourceLotsAPI.SourceLots = new SourceLotsAPI.SourceLots(this._client);
  custodian: CustodianAPI.Custodian = new CustodianAPI.Custodian(this._client);
  idc: IdcAPI.Idc = new IdcAPI.Idc(this._client);
  sourcePositions: SourcePositionsAPI.SourcePositions = new SourcePositionsAPI.SourcePositions(this._client);
  sourceRealizedGainLoss: SourceRealizedGainLossAPI.SourceRealizedGainLoss =
    new SourceRealizedGainLossAPI.SourceRealizedGainLoss(this._client);
  sourceAccountBalances: SourceAccountBalancesAPI.SourceAccountBalances =
    new SourceAccountBalancesAPI.SourceAccountBalances(this._client);
  sourceTransactions: SourceTransactionsAPI.SourceTransactions = new SourceTransactionsAPI.SourceTransactions(
    this._client,
  );
}

Data.SourceLots = SourceLots;
Data.Custodian = Custodian;
Data.Idc = Idc;
Data.SourcePositions = SourcePositions;
Data.SourceRealizedGainLoss = SourceRealizedGainLoss;
Data.SourceAccountBalances = SourceAccountBalances;
Data.SourceTransactions = SourceTransactions;

export declare namespace Data {
  export {
    SourceLots as SourceLots,
    type Sourcelot as Sourcelot,
    type Sourcelots as Sourcelots,
    type SourceLotRetrieveResponse as SourceLotRetrieveResponse,
    type SourceLotListResponse as SourceLotListResponse,
    type SourceLotFilterResponse as SourceLotFilterResponse,
    type SourceLotLatestResponse as SourceLotLatestResponse,
    type SourceLotRetrieveParams as SourceLotRetrieveParams,
    type SourceLotListParams as SourceLotListParams,
    type SourceLotFilterParams as SourceLotFilterParams,
    type SourceLotLatestParams as SourceLotLatestParams,
  };

  export { Custodian as Custodian };

  export { Idc as Idc };

  export {
    SourcePositions as SourcePositions,
    type Sourceposition as Sourceposition,
    type Sourcepositions as Sourcepositions,
  };

  export {
    SourceRealizedGainLoss as SourceRealizedGainLoss,
    type Sourcerealizedgainloss as Sourcerealizedgainloss,
    type Sourcerealizedgainlosses as Sourcerealizedgainlosses,
  };

  export {
    SourceAccountBalances as SourceAccountBalances,
    type Sourceaccountbalance as Sourceaccountbalance,
    type Sourceaccountbalances as Sourceaccountbalances,
  };

  export {
    SourceTransactions as SourceTransactions,
    type Sourcetransaction as Sourcetransaction,
    type Sourcetransactions as Sourcetransactions,
  };
}
