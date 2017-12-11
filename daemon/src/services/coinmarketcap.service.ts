import { Config } from '../config/config';
import * as Request from 'request'

export class CoinmarketcapService {
  constructor() {}

  public getTicker(cb) {
    Request('https://api.coinmarketcap.com/v1/ticker/?convert=EUR&limit=0', { json: true }, (err, res, body) => {
        console.log(res.body);
        console.log(res.body.length);
        cb(body, err);
      });
  }
}
