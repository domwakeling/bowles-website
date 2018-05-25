import React from 'react';
import PropTypes from 'prop-types';

import RacesLSERSA from './RacesLSERSA.jsx';
import RacesSRSA from './RacesSRSA.jsx';
import RacesClubNational from './RacesClubNational';
import Race from './Race.jsx';
import RaceYearPicker from './RaceYearPicker.jsx';

const RacePage = (props) => {
    const { data, title } = props;
    return (
        <div>
            <RaceYearPicker title={title.substr(0, 4)} />
            <h2 className="raceYearDisplay">{title}</h2>
            {
                data.LSERSA ? (
                    <RacesLSERSA data={data.LSERSA} />
                ) : ''
            }
            {
                data.SRSA ? (
                    <RacesSRSA data={data.SRSA} />
                ) : ''
            }
            {
                data.ClubNational ? (
                    <RacesClubNational data={data.ClubNational} />
                ) : ''
            }
            {
                data.Kent ? (
                    <div>
                        <Race data={data.Kent} />
                        <hr />
                    </div>
                ) : ''
            }
            {
                data.SPS ? (
                    <div>
                        <Race data={data.SPS} />
                        <hr />
                    </div>
                ) : ''
            }
            {
                data.TriRegion ? (
                    <div>
                        <Race data={data.TriRegion} />
                        <hr />
                    </div>
                ) : ''
            }
            {
                data.Season ? (
                    <div>
                        <h3>Season Results</h3>
                        {
                            data.Season.image ? (
                                <img src={data.Season.image.url} alt={data.Season.image.alt} />
                            ) : ''
                        }
                    </div>
                ) : ''
            }
        </div>
    )
};

RacePage.propTypes = {
    data: PropTypes.shape(),
    title: PropTypes.string
}

export default RacePage;
