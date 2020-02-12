class Election {
  constructor(json) {
    this.start_date = json.start_date
    this.portal_link = json.portal_link
    this.direct_links = json.direct_links
    this.race_type = json.race_type
    this.special = json.special
    this.organizationName = json.organization.name
    this.id = json.id
    this.gov = json.gov // presence of certain offices...
    this.house = json.house
    this.prez = json.prez
    this.senate = json.senate
    this.convertedData = true
  }
  description() {
    var terms = [this.start_date]
    if (this.special) { terms.push('special') }
    terms.push(this.race_type)
    terms.push('election')
    return terms.join(' ')
  }
  offices() {
    return this.officeList().join(', ')
  }
  officeList() {
    var officeList = []
    if (this.prez) { officeList.push('President') }
    if (this.senate) { officeList.push('Senate') }
    if (this.house) { officeList.push('House') }
    if (this.gov) { officeList.push('Governor') }
    return officeList
  }
  year() {
    return this.start_date.substring(0, 4)
  }
  month() {
    var monthNum = this.start_date.substring(5, 7)
    switch (monthNum) {
      case '01': return 'January';
      case '02': return 'February';
      case '03': return 'March';
      case '04': return 'April';
      case '05': return 'May';
      case '06': return 'June';
      case '07': return 'July';
      case '08': return 'August';
      case '09': return 'September';
      case '10': return 'October';
      case '11': return 'November';
      case '12': return 'December';
    }
  }
  fileName() {
    var shortDate = this.start_date.replace(/-/g, '')
    var specialIndicator = (this.special ? 'special__' : '')
    return shortDate + '__wi__' + specialIndicator + this.race_type + '__ward.csv'
  }
  fullPath() {
    var repoPath = 'https://raw.githubusercontent.com/openelections/openelections-data-wi/master/'
    var path = repoPath + this.year() + '/'
    return path + this.fileName()
  }
  download(event) {
    event.preventDefault()
    var clickedLink = event.target
    var blobLink = $(clickedLink).closest('.election').find('.blob-ingester')[0]
    $(clickedLink).find('.i-download').addClass('d-none')
    $(clickedLink).find('.spinner-border').removeClass('d-none')
    // Change link text to a spinner
    $.get(this.fullPath(), function(response){
      var csv_contents = response
      var blobUrl = window.URL.createObjectURL(new Blob([csv_contents]), { type: "text/plain" })
      blobLink.href = blobUrl
      blobLink.click()
      $(clickedLink).find('.i-download').removeClass('d-none')
      $(clickedLink).find('.spinner-border').addClass('d-none')
      // Set the target link's URL back to original value
    }.bind(this))
  }
}
