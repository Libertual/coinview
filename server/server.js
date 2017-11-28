var CronJob = require('cron').CronJob;
var timeZone = 'Europe/Madrid';

// Connection url
// var url = 'mongodb://dga:vrXhgEtbGTmJIHGy@localhost/DGADB';
// var url = 'mongodb://tecnual:tcnl100@tecnual-shard-00-00-wx4wl.mongodb.net:27017,tecnual-shard-00-01-wx4wl.mongodb.net:27017,tecnual-shard-00-02-wx4wl.mongodb.net:27017/test?ssl=true&replicaSet=tecnual-shard-0&authSource=admin';
var url = 'mongodb://bc:crypto100@localhost:27018/crypto';
// Connect using Mongoose
var mongoose = require('mongoose');
mongoose.connect(url, {
  useMongoClient: true
});

//Get the default connection
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('conectado');
});

var job = new CronJob('*/5 * * * * *', function() {
  /*
   * Runs every five seconds
   */
   console.log("Esto se ejecuta cada cinco segundos")
  }, function () {
    /* This function is executed when the job stops */
  },
  true, /* Start the job right now */
  timeZone /* Time zone of this job. */
);
