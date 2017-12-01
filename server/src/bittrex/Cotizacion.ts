import * as bittrex from 'node-bittrex-api';
import { Config } from '../config/config'



export default class Cotizacion {
  constructor(){}

  public getCurrency(base, target){
    bittrex.options(Config);
    bittrex.getmarketsummaries( function( data, err ) {
      if (err) {
        return console.error(err);
      }
        console.log(data);
        return data;
    });
  }
}
