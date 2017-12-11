import * as bittrex from 'node-bittrex-api';
import { Config } from '../config/config';

export class BittrexService {
  constructor(){}

  public getMarketSummary(market, cb){
    bittrex.options(Config);
    bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=' + market, function( data ) {
      //console.log( data );
      cb(data);
    }, true);
  }
  public getStatus(cb){
    bittrex.options(Config);
    bittrex.sendCustomRequest('https://bittrex.com/api/v1.1/account/getbalances', function(data, err) {
      cb(data, err);

    }, true);
  }
  public getCurrencies(cb){
    bittrex.options(Config);
    bittrex.sendCustomRequest('https://bittrex.com/api/v1.1/public/getcurrencies', function(data, err) {
      cb(data, err);

    }, true);
  }
}
