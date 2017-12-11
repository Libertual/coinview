import { BittrexService } from './services/bittrex.service'
import { CoinmarketcapService } from './services/coinmarketcap.service'

class Daemon {
  bs = new BittrexService;
  cmcs = new CoinmarketcapService;
  constructor() {
    console.log('Demonio iniciado...');
    this.getTicker();
  }

  private getStatus() {
    this.bs.getStatus((data, err) => {
      console.log(data.result.length);
      let result = new Array();
      data.result.forEach((c) => {
        if (c.Available > 0) {
          result.push(c);
        }
      });
      console.log(result);
      return data;
    });
  }

  private getTicker() {
    this.cmcs.getTicker((data, err) => {
      console.log('hecho!');
    });
  }
}
export default new Daemon();
