var request = require('request');

function doChampionsRequest() {
  return new Promise(function (resolve, reject) {
    var options = {
      'method': 'GET',
      'url': 'http://ergast.com/api/f1/driverStandings/1.json?limit=500'
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      data = JSON.parse(response.body);
      var arr = data.MRData.StandingsTable;
      resolve(arr);
    });
  });
}

async function getChampions(){
  let data = await doChampionsRequest();
  return data;
}

module.exports = {
  getChampions: function(){
    return getChampions()
  }
};