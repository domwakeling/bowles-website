const raceData2021 = {
    LSERSA: {
        title: 'LSERSA 2021 Summer Race Series',
        message: 'All dates are provisional and subject to change or cancellation.',
        races: [
            {
                descriptor: 'Race 1 - Chatham - 22nd May 2021',
                individual: [
                    'Charlotte Currie - 2nd in Ladies U10',
                    'Rufus Wontner - 2nd in Mens U12',
                    'Stella Pople - 3rd in Ladies U14',
                    'Ben Wontner - 1st in Mens U14',
                    'Darcy Caheny - 2nd in Ladies U16',
                    'Seb Turner-Moore - 1st in Mens U21',
                    'Mark Oliver - 1st in Mens Masters 2',
                    'Anthony Forte - 3rd in Mens Masters 2'
                    
                ],
                honorable: [
                    'Nigel Hilliard - 4th in Mens Masters 2',
                    `Bowles (Gus Caheny, Charlotte Currie and Rufus Wontner) were fourth in the
                        junior club teams competition`
                ],
                club_teams: [
                    `Bowles (Darcy Caheny, Mark Oliver, Ollie Turner-Moore, Seb Turner-Moore and Ben
                        Wontner) were first in the club teams competition`
                ],
                link: 'https://skiresults.co.uk/events/1134'
            },
            {
                descriptor: 'Race 2 - Chatham - 19th June 2021'
            },
            {
                descriptor: 'Race 3 - Aldershot - 4th September 2021'
            },
            {
                descriptor: 'Race 4 - Brentwood - 18th September 2021'
            },
            {
                descriptor: 'Race 5 - Chatham - 9th October 2021'
            }

        ]
    },
    SRSA: {
        title: 'SRSA 2021 Summer Race Series',
        message: 'All dates are provisional and subject to change or cancellation.',
        races: [
            {
                descriptor: 'Race 2 - Southampton - 20th June 2021'
            },
            {
                descriptor: 'Race 3 - Chatham - 17th July 2021'
            },
            {
                descriptor: 'Race 4 - TBC - 7th August 2021'
            },
            {
                descriptor: 'Race 1 - Southampton - 21st August 2021',
                note: '(rescheduled)'
            },
            {
                descriptor: 'Race 5 - Aldershot - 5th September 2021'
            },
            {
                descriptor: 'Race 6 - Snowtrax - 25th September 2021'
            }
        ]
    },
    ClubNational: {
        title: 'SSE Club National Series 2021',
        message: 'All dates are provisional and subject to change or cancellation.',
        races: [
            {
                descriptor: 'Chatham - 18th July 2021'
            },
            {
                descriptor: 'Bromley (@ Chatham) - postponed, date tbc'
            }
        ]
        // title, races with {descriptor, individual, honorable, link }
    },
    Kent: {
        descriptor: 'Kent Schools Ski Championship - Chatham - 3rd October 2021',
        note: 'There is no race for the 2020/21 school year'
        // individual, primary_teams, secondary_teams, fun_teams, honorable, link
    },
    TriRegion: {
        descriptor: 'Tri-Regional - TBC'
        // tri_teams, link
    },
    // SouthernChamps: {
    //     descriptor: 'Southern England Championships - Welwyn - 17th October 2021',
    //     note: 'CANCELLED'
    // }
};

export default raceData2021;