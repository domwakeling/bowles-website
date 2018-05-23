# Contributing

## Index
* News Items
  * [Adding News Articles](#adding-news-articles)
  * [Adding Monthly News Summaries](#adding-monthly-news-summaries)
  * [Updating the News Archive list](#updating-the-news-archive-list)

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
import NewsItem from '../../../components/NewsItem.jsx';
import MonthPage from '../../../components/MonthPage.jsx';

export default ({ data }) => (
    <MonthPage data={data} title="May 2018" />
);

export default MonthPage;

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
* change the regex filter to reflect the month & year (in the above example this is `/^/news/2018/may/`)

Finally, having added a new month you will need to [update the news archive list]
(#updating-the-news-archive-list).

### Updating the News Archive List

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
