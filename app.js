$(function() {
  var app = new Vue({
    el: '#app',
    data: {
      metadata: []
    },
    created: function () {
      var metadata_url = 'https://raw.githubusercontent.com/openelections/openelections-data-wi/master/local_data_cache/elections_metadata.json'
      $.get(metadata_url)
        .done(function(response){
          app.metadata = JSON.parse(response).objects
        })
    }
  })
})
