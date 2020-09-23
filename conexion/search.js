
const knex = require('./db');
// function busqueda() {
  var Twit = require('twit');
  var config = require('./config');
  var T = new Twit(config);
  var numero = 8;
  var params = {
    q: ('#emprendimiento', '#webinar'),
    count: numero
  }

  T.get('search/tweets', params, searchedData);

  function searchedData(err, data, response) {
    console.log(data);
    var con = 0;
    for (con = 0; con < numero; con++) {
      knex('eventos').insert([{
        id_tw: data.statuses[con].id,
        texto: data.statuses[con].text,
        fecha: data.statuses[con].created_at
      }
      ]).then(data => { console.log(data) }).catch(err => { console.log(err) });

      //  console.log("numero",con+1,data.statuses[con].id,"texto", data.statuses[con].text,"fecha",data.statuses[con].created_at );

    }

  }

  function consel() {
    knex.select('texto').table('eventos').then(function (consul) {
       console.log(consul);
      //document.getElementById("texto").innerHTML = consul;

    });

  }
  consel();
 //}
 //setInterval(busqueda, 40000);





