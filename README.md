# openelections-website-wi
Front-end UI for openelections metadata and links to CSVs

## Goal
To be a template for a state-specific section of the OpenElections project's website. The idea is to use HTML, CSS, and Javascript to create a user-friendly presentation layer for the resources available in various repos on Github.

The current approach, [deployed on my personal site](http://www.ndavies.org/openelections-website-wi/), uses Vue.js to retrieve a JSON file of Wisconsin elections metadata (currently sourced from @openelections/openelections-data-wi, and Bootstrap to make it interactive and responsive.

## Next steps

* Clicking on a link to a raw CSV file hosted on Github should initiate a download. But without any control over what Content-Disposition header Github includes in the response, the CSV file displays in-browser. Downloading the browser tab's contents changes the file extension to txt by default. Yuck! There's got to be a better way.
* Turn the collapsed list of elections into a table, with columns for date, election type, special.
* Add options to sort/filter by year, month, election type.
* Post this mock-up to the openelections.github.io issue discussion.
