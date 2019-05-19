# Contributing

*The site was updated from Gatsby v1 to v2 in May 2019; please check instructions below, since
some of them have changed to reflect this update.*

## Index
**[What you need to know](#what-you-need-to-know)**
* [Make a change](#make-a-change)
* [I just want to add a news article](#i-just-want-to-add-a-news-article)
* [Starting a new year](#starting-a-new-year)

**[News Items](#news-items)**
* [Adding News Articles](#adding-news-articles)
* [Adding Monthly News Summaries](#adding-monthly-news-summaries)
* [Updating the News Archive list](#updating-the-news-archive-list)

**[The Calendar](#the-calendar)**

**[Race Results](#race-results)**
* [Adding a new Race Results javascript page](#adding-a-new-race-results-javascript-page)
* [Moving a Race Results javascript page](#moving-a-race-results-javascript-page)               
* [Adding a new Race Results data file](#adding-a-new-race-results-data-file)
* [Updating the Race Results dropdown list](#updating-the-race-results-dropdown-list)

**[Galleries](#galleries)**
* [Adding images for a gallery page](#adding-images-for-a-gallery-page)
* [Adding a new Gallery javascript page](#adding-a-new-gallery-javascript-page)
* [Updating the Galleries Page](#updating-the-galleries-page)

## What You Need To Know

There's a lot of detail and complexity in the guides below - but don't be put off! Here's what
you need to know ...

### Make A Change

The guide below tells you how to make changes to the various files that make up the site. You can
do this either **on GitHub** by forking the project and editing using their web interface, or on a
**local copy** of the site.

Whenever a change is made on the `master` branch of the GitHub repo it is **automatically** deployed
to the live site (we're using [Netlify](https://www.netlify.com) to make this work).

If you have been 'invited' to the repo you will have the ability to make **breaking changes** by
working on the `master` branch, so **beware**!

For safety, or if you are working on a fork, it is best to
* start a new branch
* make your changes
* send a Pull Request for your changes to be reviewed and merged to `master`

### I Just Want To Add A News Article

Adding a news article is as simple as writing a text file in what's known as 'markdown' format. The
[full guide is here](#adding-news-articles), and here's an [introduction to markdown basics](https://daringfireball.net/projects/markdown/basics)
from John Gruber, who originally invented the format.

If this is a new month but there are already articles in the year, you'll need to:
* make a new folder under `src/news/{year}/` for the month (use the full month name in lower case)
* add [your article](#adding-news-articles) to that new folder
* add a new entry to the `src/data/race-data.js` file [as set out here](#updating-the-news-archive-list)

### Starting A New Year

At the start of every year the following need to happen:

**News**
* [ ] set up a folder for the new {year} as `src/news/{year}`
* [ ] set up a news entry in the [news archive](#updating-the-news-archive-list)

**Races**
* [ ] copy the contents of `src/pages/race.js` into a new file `src/pages/races/{year}.js`; don't
forget to [change the relative links](#moving-a-race-results-javascript-page)
* [ ] make a new [race data file](#adding-a-new-race-results-data-file) at `src/data/races-{year}-data.js`
* [ ] edit `src/pages/race.js` to link to the new data file and show the correct year

**Galleries**
* [ ] set up a new folder for photos as `src/images/gallery/{year}
* [ ] set up a new folder for gallery pages as `src/pages/gallery/{year}

⥣ [back to index](#index)

## The Calendar

The calendar in the sidebar is entirely generated in code - it's no longer linked to a Google
calendar.

Friday training sessions are automatically added unless they fall on Christmas Day or Boxing Day.
At the moment there's no ability to **remove** a Friday session ...

Other training sessions (for instance school training on Sundays) and races are added using the
`src/data/calendar-data.js` file. This is one large array containing an object for each entry. The
typical format of each entry is:

```javascript
    { year: 2018, month: 10, date: 13, label: 'LSERSA 5, Chatham', type: 'race' },
```

This is for a race on the **13**th of **October** **2018** - the month is entered by number using
normal convention (January = 1, December = 12). The `label` should be relatively short, and `type`
can be either `race` or `training`.

⥣ [back to index](#index)

## News Items

To add a news article:
* [ ] add a new `index.md` file in the appropriate filepath - `src/news/{year}/{month}/{article-name}/index.md`
* [ ] if it's a new month, add an entry to `src/data/news-data.js`

News articles are added as markdown files. Every month should have an entry in the 'news archive
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

Since the update to Gatsby v2 we don't need to write these any more (they're automatically
generated) - just make sure that you've [update the news archive list](#updating-the-news-archive-list).

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

At the start of each year:
* [ ] move the content of `src/pages/races.js` to a new page in `src/pages/races/{last-year}.js`
* [ ] change links in the copied content so that they reflect revised filepath
* [ ] add a new data file in `src/data/races-{year}-data.js` and use base structure
* [ ] update entries in `src/data/race-data`

To add results for a new race:
* [ ] add information to the relevant `src/data/races-{year}-data.js` file

### Adding a new Race Results javascript page

The javascript file's only task is to get a reference to a data object and pass it to a `<RacePage>`
component. The content of the file for 2013 is:

```javascript
import React from 'react';
import PropTypes from 'prop-types';
import RacePage from '../../components/RacePage.jsx';

import raceData2013 from '../../data/races-2013-data';

const ThisPage = ({ location }) => (
    <RacePage location={location} data={raceData2013} title="2013 Race Results" />
);

export default ThisPage;

ThisPage.propTypes = {
    location: PropTypes.object
}
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

To make a new gallery you need to:
* [ ] process images and add them to the site
* [ ] add a new gallery page (written in Javascript)
* [ ] update the 'galleries' page (by adding information to a JSON data file)

### Adding images for a gallery page

Images for galleries are stored in the `src/images/gallery` folder. Inside this file there are
individual folders for each year, and within **that** folder you should add a new folder named to
reflect the content of the gallery. Recommended format is `yymmdd_brief_description` although this
is not required.

For example, the images for the September 2012 handicap race are stored in
`src/images/gallery/2012/120928_handicap`.

Image naming convention is optional, but should at least be consistent in each individual gallery -
either provide a short description (eg `under-14.jpg`) or use a numbering system.

*NB: There should be **no** spaces in file paths at any point - use either a dash or an underscore
to aid legibility instead if required.*

Images should ideally be landscape and should ideally all be the same size/proportion/orientation in
an individual gallery - however this is not a strict requirement and there are examples on the site
already where a mixture of landscape and portrait images are used in the same gallery.

Images to this point have been saved as JPG at resolution 600x350; ***this may change***.

### Adding a new Gallery javascript page

Gallery javascript pages are stored in the `src/pages/gallery` folder; again there will be a
sub-folder for years, in which the individual javascript pages are stored. It is recommended that
the name of the javascript file matches the name of the folder where images are stored - so the
file for the September 2012 handicap is at `src/pages/gallery/2012/120928_handicap.js`.

An example of a gallery page is:

```javascript
import React from "react";
import PropTypes from 'prop-types';
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
const link = '/news/2012/september/agm-race/';
// a link to the news article that relates to the gallery; if not relevant, delete the line

const Fade = ({ location }) => {
    const data = {
        images,
        alts,
        title,
        link
    }
    return (
        <div>
            <GalleryPage location={location} data={data} />
        </div>
    );
}

export default Fade;

Fade.propTypes = {
    location: PropTypes.object
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
of date order when the page is rendered.

*Also note that the date is entered with the full, 4-digit, year*

⥣ [back to index](#index)
