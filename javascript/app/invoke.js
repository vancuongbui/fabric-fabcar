
'use strict';

const _ledgerApi = require('../api/ledgerApi');

const _user = 'user2';
const _channel = 'mychannel';
const _contractName = 'fabcar';
const _ctx = 'createCar';
const _args = ['CAR12', 'Honda', 'Accord', 'Black', 'Tom'];


//1. _user: user who has credential to invoke the ledger
//2. _channel: which channel user want to access, in this case, mychannel
//3. _contract: which contract user want to invokce, in this case, fabcar
//4. _function name, _ctx, for example 'createCar'
//5. _args: list of arguments, for example: ['CAR12', 'Honda', 'Accord', 'Black', 'Tom']
// invoke(_user, _channel, _contractName, _ctx, _args)
_ledgerApi.invoke(_user, _channel, _contractName, _ctx, _args);
// _ledgerApi.queryAllCars(_user, _channel, _contractName);