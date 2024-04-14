import React from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/Layout.jsx';

import RacesLSERSA from './races/RacesLSERSA.jsx';
import RacesSRSA from './races/RacesSRSA.jsx';
import RacesERSA from './races/RacesERSA.jsx';
import RacesClubNational from './races/RacesClubNational';
import Race from './races/Race.jsx';
import Races from './races/Races.jsx';
import RaceYearPicker from './races/RaceYearPicker.jsx';

const RacePage = ({ location, data, title }) => {
    return (
        <Layout location={location}>
            <div>
                <h2 className="raceYearDisplay">{title}</h2>
                <RaceYearPicker className="pickerWrapper" title={title.substr(0, 4)} />
            </div>
            {
                data.LSERSA ? (
                    <RacesLSERSA data={data.LSERSA}/>
                ) : ''
            }
            {
                data.SRSA ? (
                    <RacesSRSA data={data.SRSA} />
                ) : ''
            }
            {
                data.ERSA ? (
                    <RacesERSA data={data.ERSA} />
                ) : ''
            }
            {
                data.ClubNational ? (
                    <RacesClubNational data={data.ClubNational} />
                ) : ''
            }
            {
                data.Kent ? (
                    <div style={{ clear: "both" }}>
                        <hr />
                        <Race data={data.Kent} />
                    </div>
                ) : ''
            }
            {
                data.ESSKIA ? (
                    <div>
                        <hr />
                        <Races data={data.ESSKIA} />
                    </div>
                ) : ''
            }
            {
                data.SPS ? (
                    <div>
                        <hr />
                        <Race data={data.SPS} />
                    </div>
                ) : ''
            }
            {
                data.TriRegion ? (
                    <div style={{ clear: "both"}}>
                        <hr />
                        <Race data={data.TriRegion} />
                    </div>
                ) : ''
            }
            {
                data.Season ? (
                    <div>
                        <h3 />
                        <h3>Season Results</h3>
                        {
                            data.Season.image ? (
                                <img src={data.Season.image.url} alt={data.Season.image.alt} />
                            ) : ''
                        }
                    </div>
                ) : ''
            }
        </Layout>
    );
};

RacePage.propTypes = {
    data: PropTypes.shape(),
    title: PropTypes.string,
    location: PropTypes.object
};

export default RacePage;
