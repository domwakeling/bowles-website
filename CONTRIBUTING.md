# Contributing

## Index
* [News Items](#news-items)
  * [Adding News Articles](#adding-news-articles)
  * [Adding Monthly News Summaries](#adding-monthly-news-summaries)
  * [Updating the News Archive list](#updating-the-news-archive-list)
* [Race Results](#race-results)
  * [Adding a new Race Results javascript page](#adding-a-new-race-results-javascript-page)
  * [Moving a Race Results javascript page](#moving-a-race-results-javascript-page)                                             
  * [Adding a new Race Results data file](#adding-a-new-race-results-data-file)
  * [Updating the Race Results Archive list](#updating-the-race-results-archive-list)
  
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

Each data file exports an object with the naming convention `raceData{year}`, which has keys for
each standard race series (`LSERSA`, `SRSA`, `Kent`, `TriRegion`) and for the overall season
(`Season`). Keys do not need to be created until such time as there is data to populate.

If there are any other race series to enter (eg ESSKIA or club nationals) ***TODO***.

The `LSERSA` and `SRSA` objects - which represent multiple races - each have a key `title` for the
name of the race series, and then a key `races` for an array of race objects. The `Kent` and
`TriRegion` objects are individual races.

A `race` object has a `descriptor`, used to describe the race location/date, a series of keys for
results (see the example) which are each arrays of strings, and a `link` for the full race results.

*The keys used need to be maintained, they are specifically looked for in the React components that
render these pages.*

```javascript
import season{year}image from '../images/races/season_{year}.jpg';
// if any images are being passed, import them at the head of the file

const raceData{year} = {
    LSERSA: {
        title: 'LSERSA {year} Summer Race Series',
        races: [
            {
                descriptor: 'Race 1 - {Location} - {Date}',
                individual: [
                    'Jack Hilliard - 2nd in group 5M',
                    'Mark Oliver - 2nd in group 9M'
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
    },
    SRSA: {
        title: 'SRSA {year] Summer Race Series',
        races: [
            // all as for LSERSA
        ]
    },
    Kent: {
        descriptor: 'Kent School Ski Championship - {locateion} - {date}',
        individual: [
            // any individiual medals
        ]
        primary_teams: [
            // any primary team medals
        ],
        secondary_teams: [
            // any secondary team medals
        ],
        fun_teams: [
            // any fun team medals
        ],
        link: 'http://www.xyz.com'
    },
    TriRegion: {
        descriptor: 'Tri-Regional - {Location} - {Date}',
        tri_teams: [
            // any resulsts -  individuals, place and which competition
        ]
    },
    Season: {
            // this is the only place at present where images may be required
        image: {
            url: season{year}image,
            alt: "{year} Season Overall Results"
        }
    }
};

export default raceData{year};
```

### Updating the Race Results Archive list

***TODO***
