$(function() {
  var app = new Vue({
    el: '#app',
    data: {
      elections: []
    },
    created: function () {
      var metadata_url = 'https://raw.githubusercontent.com/openelections/openelections-data-wi/master/local_data_cache/elections_metadata.json'
      $.get(metadata_url)
        .done(function(response){
          var objects = JSON.parse(response).objects
          var elections = objects.map(function(object){
            return new Election(object)
          })
          app.elections = elections
        })
    }
  })
})
