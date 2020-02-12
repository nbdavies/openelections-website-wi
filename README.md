# openelections-website-wi
Front-end UI for openelections metadata and links to CSVs

## Goal
To be a template for a state-specific section of the OpenElections project's website. The idea is to use HTML, CSS, and Javascript to create a user-friendly presentation layer for the resources available in various repos on Github.

The current approach, [deployed on my personal site](http://www.ndavies.org/openelections-website-wi/), uses Vue.js to retrieve a JSON file of Wisconsin elections metadata (currently sourced from @openelections/openelections-data-wi, and Bootstrap to make it interactive and responsive.

## Next steps
* Add subtle label to filter dropdowns for when displayed text = selected value?
* Add download links to results repo and differentiate them somehow.
* Add a "download all" link for maximum chaos? Checkboxes for selecting multiple?
