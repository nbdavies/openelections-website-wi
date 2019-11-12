class Election {
  constructor(json) {
    this.start_date = json.start_date
    this.portal_link = json.portal_link
    this.direct_links = json.direct_links
    this.race_type = json.race_type
    this.special = json.special
    this.organizationName = json.organization.name
    this.id = json.id
  }
  year() {
    return this.start_date.substring(0, 4)
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
  download() {
    browser.downloads.download({ url: this.fullPath() })
  }
}
