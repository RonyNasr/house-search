import Ember from 'ember';
import config from '../config/environment';
// import Zillow from 'node-zillow';

export default Ember.Route.extend({

  model: function() {
    // var key = config.zillowApiKey;
    var key = "X1-ZWz19ldhyjtgqz_22g4o";
    var url = 'http://www.zillow.com/webservice/GetDeepSearchResults.htm?citystatezip=Portland%2C+OR&address=2889+SE+Sherman&zws-id='+ key;
    //var url = 'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=' +key+ '&zpid=48749425';
    return Ember.$.get(url).then(function(response) {
      debugger;
      console.log(response);
      return response;
    });
  }
});
