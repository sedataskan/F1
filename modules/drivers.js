var request = require('request');

function doDriverRequest() {
  return new Promise(function (resolve, reject) {
    var options = {
      'method': 'GET',
      'url': 'http://ergast.com/api/f1/current/driverStandings.json'
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      data = JSON.parse(response.body);
      var arr = data.MRData.StandingsTable;
      resolve(arr);
    });
  });
}

async function getDrivers(){
  let data = await doDriverRequest();
  return data;
}

module.exports = {
  getDrivers: function(){
    return getDrivers()
  }
};