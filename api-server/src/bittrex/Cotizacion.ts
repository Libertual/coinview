import * as bittrex from 'node-bittrex-api';
import { Config } from '../config/config'



export default class Cotizacion {
  constructor(){}

  public getCurrency(market, cb){
    let result;
    bittrex.options(Config);
    bittrex.sendCustomRequest( 'https://bittrex.com/api/v1.1/public/getmarketsummary?market=' + market, function( data ) {
      //console.log( data );
      cb(data);
    }, true);
  }
}
