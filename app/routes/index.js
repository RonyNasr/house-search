import Ember from 'ember';
import config from '../config/environment';

export default Ember.Route.extend({
  model: function() {
    var key = config.zillowApiKey;
    // var qdlKey = config.quandlKey;
    var url = 'http://www.zillow.com/webservice/GetUpdatedPropertyDetails.htm?zws-id=' +key+ '&zpid=48749425';
    // var url = 'http://www.quandl.com/api/v3/datasets/ZILL/Z90210_A.json?api_key=UqoADriMdaicfBtMmP2r';
    return Ember.$.get(url).then(function(response) {
      console.log(response);
      // console.log(responseJSON.results); no results in xml only in JSON
      return response;
    });
  }
});
