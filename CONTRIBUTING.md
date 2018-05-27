# Contributing

## Index
**[News Items](#news-items)**
* [Adding News Articles](#adding-news-articles)
* [Adding Monthly News Summaries](#adding-monthly-news-summaries)
* [Updating the News Archive list](#updating-the-news-archive-list)

**[Race Results](#race-results)**
* [Adding a new Race Results javascript page](#adding-a-new-race-results-javascript-page)
* [Moving a Race Results javascript page](#moving-a-race-results-javascript-page)               
* [Adding a new Race Results data file](#adding-a-new-race-results-data-file)
* [Updating the Race Results dropdown list](#updating-the-race-results-dropdown-list)

**[Galleries](#galleries)**
* [Adding images for a gallery page](#adding-images-for-a-gallery-page)
* [Adding a new Gallery javascript page](#adding-a-new-gallery-javascript-page)
* [Updating the Galleries Page](#updating-the-galleries-page)
  
## News Items

News articles are added as markdown files. Every month (for which articles exist) should have a
'monthly news summary' (added as javascript) and have an equivalent entry in the 'news archive
list'.

### Adding News Articles

News articles are contained in an `index.md` file in the appropriate sub-folders (year and month)
within `src/news/` and are written in markdown. They should contain a header block with the title,
contentType (`news`) and date (eg `20180522T13:40` for 13:40 on the 22nd of May 2018) properties.

Example header block in the `index.md` file:

```markdown
---
title: "My News"
contentType: news
date: "2018-05-22T13:40"
---
```

The file will automatically be attributed with the appropriate path - so, for instance, a file at
`src/news/2018/may/my-news/index.md` will be generated with the path `/news/2018/may/my-news`. This
approach allows for the [monthly summaries](#adding-monthly-news-summaries) (see below) to have
consistent paths with the articles.

Images to be included in the article should be placed in the same folder as the `index.md` file and
be linked in markdown. So, for instance, to include an image `logo.jpg` in our `my-news` article,
you would have a copy of the jpg image in the `src/news/2018/may/my-news/` folder, and then link to
it in markdown with `![Alt text for the logo](logo.jpg)`.

### Adding Monthly News Summaries

In addition to individual news articles, there are monthly summary pages that need to be generated.
**At the moment** these need to be added individually (still looking for a way to fully or partly
automate this process).

Please ensure:
* whenever you add a news article and start a new month, add the appropriate monthly news summary
* **only** add a monthly summary for months where one or more articles have been added (otherwise
errors will occur)

Monthly summaries are added in the `src/pages/news/` folder, under an appropriate year folder, and
should be named `whichever_month.js`. For the `my-news` article above, we would need to ensure there
is a `src/pages/news/2018/may.js` file.

The code in each monthly summary should look like this:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import MonthPage from '../../../components/MonthPage.jsx';

const Page = ({ data }) => (
    <MonthPage data={data} title="May 2018" />
);

Page.propTypes = {
    data: PropTypes.func
}

export default Page;

export const query = graphql`
    query NewsMay2018 {
        allMarkdownRemark (
            filter: { fields: { slug: { regex: "^/news/2018/may/"} } }
            sort: { order: DESC, fields: [frontmatter___date] }
        ) {
            edges {
                node {
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        contentType
                        date(formatString: "D MMMM YYYY, HH:mm")
                    }
                    html
                }
            }
        }
    }
`;
```

Once the individual monthly page is built, the following changes need to be made in it's source
code:
* change the title prop in the `<MonthPage>` to match the month name & year
* change the name of the graphql query to reflect the month & year (in the above example this is
`query NewsMay2018`)
* change the regex filter to reflect the month & year (in the above example this
is `/^/news/2018/may/`)

Finally, having added a new month you will need to [update the news archive list]
(#updating-the-news-archive-list).

### Updating the News Archive list

When on any page in the `/news` path of the website, an archive list of news articles by year and
month is shown in the right-hand menu (this is only visible on larger screens). This list is
generated from data in `src/data/news-data.js`.

Whenever a [monthly news summary](#adding-monthly-news-summaries) is added, it is important that a
new entry is added to this data source to match.

There is a summary of the API at the top of the file, but essentially it exports an array of
objects, one for each year, which contain two keys:
* `year` (a string representation of the year)
* `months` (an array of strings, in lowercase, of the months in that year for which there are
news summary pages)

All entries should be in reverse chronological order - that is, the most recent year should be the
first object in the exported array, and the most recent month should be the first item in that
year's `months` array.

⥣ [back to index](#index)

## Race Results

Race result pages are driven by two components:
* a javascript file,  `src/pages/races/{year}.js` for past years or `src/pages/race/js` for the
current year; and
* a data file, `src/data/races-{year}-data.js` whcih contains all the data that is rendered

### Adding a new Race Results javascript page

The javascript file's only task is to get a reference to a data object and pass it to a `<RacePage>`
component. The content of the file for 2013 is:

```javascript
import React from 'react';
import RacePage from '../../components/RacePage.jsx';

import raceData2013 from '../../data/races-2013-data';

export default () => (
    <RacePage data={raceData2013} title="2013 Race Results" />
);
``` 
To make a new year's results page, use this code and change the references to the appropriate year.
You will also need to make sure that the equivalent [data file](#adding-a-new-race-results-data-file)
is created.

### Moving a Race Results javascript page

The file above makes the assumption that it is a file in the `src/pages/races` folder - specifically
the 2013 file is `src/pages/races/2013.js`.

The code contains relative links in two of it's import statement; if a javascript race-results page
is placed in a different location you will need to ensure that these relative links are changed
accordingly.

Specifically, you need to be aware that the **current year's** results page, `src/pages/races.js`,
is in a different path. Moving that file (or copying it's code into a new file) at the end of the
year will necessitate changing those paths - in this specific case, `../components` and
`../data` will become `../../components` and `../../data`.

### Adding a new Race Results data file

The data for each year is contained in a file in `src/data` - for instance, the 2012 race-season
data is in `/src/data/races-2012-data.js`.

Each data file exports an object with the naming convention `raceData{year}`, which has typically
will have keys for `LSERSA`, `SRSA`, `ClubNational`, `Kent`, and `TriRegion`. The earlier
entries also have an overall record for the season (`Season`) whereas more recent years record
the overall season result for multi-race series within the relevant object.

*If a key is not relevant to a particular year, it should be omitted (not inserted and left empty)*

The multi-race series (`LSERSA`, `SRSA` and `ClubNational`) each have keys as follows:
* `title` containing the name of the series, including the year
* 'races' which is an array of the indiviual race objects (see below) in chronoloical order
* optionally a `season` key which contains end-of-season results

Race objects may contain the following keys:
* `descriptor` with a string 'title'
* for SRSA and LSERSA races, `indiviual`, `club_teams`, `fun_teams` and `honorable` each being an
array of strings, one for each person/team that is mentioned; omit any keys not relevant to the race
* for Club National races, only the `individual` and `honorable` keys are used
* for Kent Schools, `individual`, `primary_teams`, `secondary_teams`, `fun_teams` and `honorable`
can be used
* for TriRegion, `tri_teams` and `honorable` can be used
* additionally any race may have a `link` key containing a URL for full race results

The `season` object within a race series can contain `individual`, `special` (for non-race cups
such as best newcomer) and `link`.

The `Season` object (where used) should contain a key `image` which contains `url` and `alt` keys -
see `/src/data/races-2012-data.js` for an example of how this works.

**An example:**

```javascript
const raceData{year} = {
    LSERSA: {
        title: 'LSERSA {year} Summer Race Series',
        races: [
            {
                descriptor: 'Race 1 - {Location} - {Date}',
                individual: [
                    // strings in an array representing each individual result
                ],
                club_teams: [
                    // any club team results as array of strings
                ],
                fun_teams: [
                    // any fun team results as array of strings
                ],
                honorable: [
                    // any honorable mentions as array of strings
                ]
                link: 'http://www.xyz.org' // link to the results
            },
                // ... add another object in the races array for each race
        ],
        season: [
                // available key are: individual, special, link
        ]
    },
    SRSA: {
        title: 'SRSA {year] Summer Race Series',
        races: [
                // all as for LSERSA
        ],
        season: [

        ]
    },
    ClubNational: {
                // title, races with {descriptor, individual, honorable, link }
    }
    Kent: {
        descriptor: 'Kent Schools Ski Championship - {Location} - {Date}',
                // individual, primary_teams, secondary_teams, fun_teams, honorable, link
    },
    TriRegion: {
        descriptor: 'Tri-Regional - {Location} - {Date}',
                // tri_teams, link
    }
};

export default raceData{year};
```

### Updating the Race Results dropdown list

The dropdown menu's data-source is in `src/data/race-data`. This is an array of objects, each of
which has a `title` (the year as a string) and a `link` (path of the race page).

⥣ [back to index](#index)

## Galleries

### Adding images for a gallery page

Images for galleries are stored in the `src/images/gallery` folder. Inside this file there are
individual folders for each year, and within **that** folder you should add a new folder named to
reflect the content of the gallery. Recommended format is `yymmdd_brief_description` although this
is not required.

For example, the images for the September 2012 handicap race are stored in
`src/images/gallery/2012/120928_handicap`.

Image naming convention is optional, but should be consistent - either provide a short description
(eg `under-14.jpg`) or use a numbering system.

*NB: There should be **no** spaces in file paths at any point - use either a dash or an underscore
to aid legibility instead if required.*

Images should ideally be landscape and should ideally all be the same size/proportion/orientation in
an individual gallery - however this is not a strict requirement.

Images to this point have been saved as JPG at resolution 600x350; ***this may change***.

### Adding a new Gallery javascript page

Gallery javascript pages are stored in the `src/pages/gallery` folder; again there will be a
sub-folder for years, in which the individual javascript pages are stored. It is recommended that
the name of the javascript file matches the name of the folder where images are stored - so the
file for the September 2012 handicap is at `src/pages/gallery/2012/120928_handicap.js`.

An example of a gallery page is:

```javascript
import React from "react";
import GalleryPage from '../../components/GalleryPage.jsx'

import img01 from '../../images/gallery/2012/120928_handicap/Under_10_Sept12.jpg';
import img02 from '../../images/gallery/2012/120928_handicap/Under_14_Sept12.jpg';
// add an import statement for each image in the individual gallery

const images = [img01, img02];
// add references in this array so that every imported image is included
const alts = [
    'Under-10s',
    'Under-14s',
    // add text to describe each photo - this will be used to generate alt tags
    // NOTE: you need to ensure there are the same number of alt tags as images, and that they
    // are in the correct order
]
const title = 'Pictures from the medal ceremony for the Handicap Fun Race on 11th May 2012';
// the title will be rendered at the head of the page
const link = '../../../news/2012/september/agm-race/';
// a link to the news article that relates to the gallery; if not relevant, delete the line

export default class Fade extends React.Component {
    render() {
        const data = {
            images,
            alts,
            title,
            link
        }
        return (
            <div>
                <GalleryPage data={data}/>
            </div>
        );
    }
}
```

### Updating the Galleries Page
The 'galleries' page (served at `/gallery` and stored at `src/pages/gallery.js`) is driven by data
held in `src/data/gallery-data`.

Every time a new gallery is added, you will need to add a new entry in the data-set. This requires
* adding an image import at the top of the file
* adding an object in the exported array, with `img`, `title`, `date` and `link` keys

Note that the array is in reverse chronological order (newest entries at the top) and the date is
**only** used for display purposes - if you add an entry out of date order, it will also appear out
of data order when the page is rendered.

*Also note that the date is entered with the full, 4-digit, year*

⥣ [back to index](#index)