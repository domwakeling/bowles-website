/*  export an array of objects (years in reverse order, most recent first)
 *  each object contains @year and @months keys
 *  @year: the year as a string
 *  @months is an array (reverse order) of the months which have news pages
 */

const newsData = [
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
