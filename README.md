# openelections-website-wi
Front-end UI for openelections metadata and links to CSVs

## Goal
To be a template for a state-specific section of the OpenElections project's website. The idea is to use HTML, CSS, and Javascript to create a user-friendly presentation layer for the resources available in various repos on Github.

The current approach, [deployed on my personal site](http://www.ndavies.org/openelections-website-wi/), uses Vue.js to retrieve a JSON file of Wisconsin elections metadata (currently sourced from @openelections/openelections-data-wi, and Bootstrap to make it interactive and responsive.

## Next steps
* Add download links to results repo and differentiate them somehow.
* Add a "download all" link for maximum chaos? Checkboxes for selecting multiple?
* Make CSV filename visible in the download button/link
* Figure out how to include county/etc. level CSV links for a state that produces CSV files at those other levels
* Add a table column for CSV availability
* Put date column under both month + year selectors
* Figure out how to incorporate this into openelections.github.io--use similar approach on map graphic?
* Look into some way to run a task periodically to check the completeness of states' data repos and store the results for more efficient display (so the browser ideally wouldn't have to check for the CSV files' existence via requesting one by one).
