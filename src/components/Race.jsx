import React from 'react';
import PropTypes from 'prop-types';

import RaceEvent from './RaceEvent.jsx';

const Race = (props) => {
    const { data } = props;
    return (
        <div className="race">
            <h4>{data.descriptor}</h4>
            {
                data.individual ? (
                    <RaceEvent title="Individual Event" data={data.individual} />
                ) : ''
            }
            {
                data.club_teams ? (
                    <RaceEvent title="Club Team Event" data={data.club_teams} />
                ) : ''
            }
            {
                data.primary_teams ? (
                    <RaceEvent title="Primary Teams" data={data.primary_teams} />
                ) : ''
            }
            {
                data.secondary_teams ? (
                    <RaceEvent title="Secondary Team Event" data={data.secondary_teams} />
                ) : ''
            }
            {
                data.esskia_teams ? (
                    <RaceEvent title="Team Event" data={data.esskia_teams} />
                ) : ''
            }
            {
                data.fun_teams ? (
                    <RaceEvent title="Fun Team Event" data={data.fun_teams} />
                ) : ''
            }
            {
                data.honorable ? (
                    <RaceEvent title="Honorable Mention" data={data.honorable} />
                ) : ''
            }
            {
                data.tri_teams ? (
                    <RaceEvent title="" data={data.tri_teams} />
                ) : ''
            }
            {
                data.link ? (
                    <p><a href={data.link} target="_blank">Full results</a>.</p>
                ) : ''
            }
        </div>
    )
};

Race.propTypes = {
    data: PropTypes.shape(),
}

export default Race;