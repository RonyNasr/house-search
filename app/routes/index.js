import Ember from 'ember';
import config from '../config/environment';
// import Zillow from 'node-zillow';

export default Ember.Route.extend({
  // var Zillow = require('node-zillow');
  model: function() {
    var key = config.zillowApiKey;
    // var zillow = new Zillow(key);
    // var parameters = {
    //   zpid: 48749425
    // };
    // zillow.GetUpdatedPropertyDetails(parameters)
    //   .then(function(results){
    //     console.log(results);
    //     return(results);
    // });




    var url = 'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=' +key+ '&zpid=48749425';
    return Ember.$.get(url).then(function(response) {
      console.log(response);
      return response;
    });
  }
});
