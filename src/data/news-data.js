/*  export an array of objects (years in reverse order, most recent first)
 *  each object contains @year and @months keys
 *  @year: the year as a string
 *  @months is an array (reverse order) of the months which have news pages
 */

const newsData = [
    {
        year: '2019',
        months: ['february']
    },
    {
        year: '2018',
        months: ['october', 'september', 'august', 'july', 'june', 'may', 'april']
    },
    {
        year: '2017',
        months: ['october', 'september', 'august', 'july', 'june', 'may', 'april']
    },
    {   year: '2016',
        months: ['october', 'september', 'august', 'july', 'june', 'may', 'april', 'march',
                 'january']
    },
    {
        year: '2015',
        months: ['october', 'september',  'july', 'june', 'may', 'april', 'march']
    },
    {
        year: '2014',
        months: ['october', 'september', 'july', 'june', 'may', 'april', 'march', 'february',
                 'january']
    },
    {
        year: '2013',
        months: ['october', 'september', 'july', 'june', 'may', 'april', 'march', 'february']
    },
    {
        year: '2012',
        months: ['november', 'september', 'july', 'june', 'may']
    }
];

export default newsData;
