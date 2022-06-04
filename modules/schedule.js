var request = require('request');

function doScheduleRequest() {
  return new Promise(function (resolve, reject) {
    var options = {
      'method': 'GET',
      'url': 'http://ergast.com/api/f1/current'
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      data = JSON.parse(response.body);
      var arr = data.MRData;
      resolve(arr);
    });
  });
}

async function getSchedule(){
  let data = await doScheduleRequest();
  return data;
}

module.exports = {
  getSchedule: function(){
    return getSchedule()
  }
};