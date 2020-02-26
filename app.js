$(function() {
  var app = new Vue({
    el: '#app',
    data: {
      elections: [],
      shownElections: [],
      years: ['2019', '2018', '2017', '2016', '2015', '2014', '2013', '2012', '2011', '2010', '2009', '2008', '2007', '2006', '2005', '2004', '2003', '2002', '2001', '2000'],
      selected_years: [],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      selected_months: [],
      types: ['general', 'primary', 'general-recall', 'primary-recall'],
      selected_types: [],
      special: [true, false],
      selected_special: [],
      offices: ['President', 'Senate', 'House', 'Governor'],
      selected_offices: []
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
          app.shownElections = elections
          app.checkLinks()
        })
    },
    mounted: function() {
      this.mountPicker('years')
      this.mountPicker('months')
      this.mountPicker('types')
      this.mountPicker('special')
      this.mountPicker('offices')
    },
    methods: {
      mountPicker: function(id) {
        $('#' + id).selectpicker({
          actionsBox: true,
          countSelectedText: function(count){ 
            return id + " (" + count + ")" 
          },
          selectedTextFormat: 'count',
          noneSelectedText: id,
          deselectAllText: 'reset',
          selectAllText: 'all',
          width: (id.length + 2) + 'em'
        })
      },
      checkLinks: function() {
        this.elections.forEach(function(election){
          $.ajax(election.fullPath(), { method: 'HEAD' })
            .fail(function(){
              election.convertedData = false
            })
        })
      },
      filterBy: function(id) {
        var selections = $('#' + id).val()
        app['selected_' + id] = selections
        app.filterElections()
      },
      toggleYear: function() {
        app.filterBy('years')
      },
      toggleMonth: function() {
        app.filterBy('months')
      },
      toggleType: function() {
        app.filterBy('types')
      },
      toggleSpecial: function() {
        app.filterBy('special')
      },
      toggleOffice: function() {
        app.filterBy('offices')
      },
      filterElections: function() {
        var elections = []
        app.elections.forEach(function(election){
          if (app.selected_years.length > 0 && app.selected_years.indexOf(election.year()) == -1) {
            return
          }
          if (app.selected_months.length > 0 && app.selected_months.indexOf(election.month()) == -1) {
            return
          }
          if (app.selected_types.length > 0 && app.selected_types.indexOf(election.race_type) == -1) {
            return
          }
          if (app.selected_special.length == 1 && election.special != app.selected_special[0]) {
            return
          }
          var filteredByOffice = (app.selected_offices.length > 0)
          var electionHasOffices = app.selected_offices.some(function(office){
            return (election.officeList().indexOf(office) != -1) 
          })
          if (filteredByOffice && !electionHasOffices) {
            return
          }
          elections.push(election)
        })
        app.shownElections = elections
      }
    }
  })
})
