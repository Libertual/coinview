var CronJob = require('cron').CronJob;
var timeZone = 'Europe/Madrid';

var MongoClient = require('mongodb').MongoClient,
  test = require('assert');
// Connection url
var url = 'mongodb://dga:vrXhgEtbGTmJIHGy@localhost/DGADB';
// Connect using MongoClient
MongoClient.connect(url, function(err, db) {
  // Use the admin database for the operation
  if (err) console.log(`Error de conexión ${err}`);
  else console.log('conectado');
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
