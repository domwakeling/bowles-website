// NOTE: MONTHS ARE INDEX-1, SO JANUARY = 1

const calendarData = [

    // 2021 tri-regional - TBC
    // { year: 2021, month: 10, date: 25, label: 'Tri-regional, CANCELLED', type: 'race' },

    // 2021 'other' - TBC
    // { year: 2021, month: 10, date: 17, label: 'Southern England Champs, Chatham\nCANCELLED', type: 'race' },

    // 2021 school & ESSKIA races
    { year: 2021, month: 10, date: 3, label: 'Kent Schools', type: 'race' },

    // 2021 CN & GBR races
    { year: 2021, month: 5, date: 23, label: 'Club National, Chatham', type: 'race' },
    { year: 2021, month: 5, date: 22, label: 'Club National, Bromley (@ Chatham)', type: 'race' },

    // 2021 LSERSA races
    { year: 2021, month: 10, date: 1, label: 'LSERSA 5, Chatham', type: 'race' },
    { year: 2021, month: 9, date: 18, label: 'LSERSA 4, TBC', type: 'race' },
    { year: 2021, month: 9, date: 4, label: 'LSERSA 3, TBC', type: 'race' },
    { year: 2021, month: 6, date: 19, label: 'LSERSA 2, TBC', type: 'race' },
    { year: 2021, month: 5, date: 15, label: 'LSERSA 1, Chatham', type: 'race' },

    // 2021 SRSA races
    { year: 2021, month: 9, date: 25, label: 'SRSA 6, Snowtrax', type: 'race' },
    { year: 2021, month: 9, date: 5, label: 'SRSA 5, Aldershot', type: 'race' },
    { year: 2021, month: 8, date: 7, label: 'SRSA 4,  TBC', type: 'race' },
    { year: 2021, month: 7, date: 17, label: 'SRSA 3, Chatham', type: 'race' },
    { year: 2021, month: 6, date: 20, label: 'SRSA 2, Southampton', type: 'race' },
    { year: 2021, month: 8, date: 21, label: 'SRSA 1, Southampton', type: 'race' },

    // 2020 tri-regional
    { year: 2020, month: 10, date: 25, label: 'Tri-regional, CANCELLED', type: 'race' },

    // 2020 'other'
    { year: 2020, month: 10, date: 17, label: 'Southern England Champs\nCANCELLED', type: 'race' },

    // 2020 school & ESSKIA races
    { year: 2020, month: 5, date: 3, label: 'Kent Schools CANCELLED', type: 'race' },

    // 2020 CN & GBR races
    { year: 2020, month: 7, date: 4, label: 'Club National, Chatham\nCANCELLED', type: 'race' },
    { year: 2020, month: 7, date: 5, label: 'Club National, Bromley (@ Chatham)\nCANCELLED', type: 'race' },

    // 2020 LSERSA races
    { year: 2020, month: 10, date: 11, label: 'LSERSA 5 CANCELLED', type: 'race' },
    { year: 2020, month: 9, date: 26, label: 'LSERSA 4 CANCELLED', type: 'race' },
    { year: 2020, month: 9, date: 6, label: 'LSERSA 3 CANCELLED', type: 'race' },
    { year: 2020, month: 7, date: 18, label: 'LSERSA 2 CANCELLED', type: 'race' },
    { year: 2020, month: 5, date: 10, label: 'LSERSA 1 CANCELLED', type: 'race' },

    // 2020 SRSA races
    { year: 2020, month: 9, date: 19, label: 'SRSA 6 CANCELLED', type: 'race' },
    { year: 2020, month: 9, date: 5, label: 'SRSA 5 CANCELLED', type: 'race' },
    { year: 2020, month: 8, date: 22, label: 'SRSA 4 CANCELLED', type: 'race' },
    { year: 2020, month: 7, date: 19, label: 'SRSA 3 CANCELLED', type: 'race' },
    { year: 2020, month: 5, date: 30, label: 'SRSA 2 CANCELLED', type: 'race' },
    { year: 2020, month: 5, date: 9, label: 'SRSA 1 CANCELLED', type: 'race' },

    // 2020 ERSA races
    { year: 2020, month: 9, date: 20, label: 'ERSA Champs CANCELLED', type: 'race' },
    { year: 2020, month: 9, date: 5, label: 'ERSA 6 CANCELLED', type: 'race' },
    { year: 2020, month: 7, date: 19, label: 'ERSA 5 CANCELLED', type: 'race' },
    { year: 2020, month: 6, date: 27, label: 'ERSA 4 CANCELLED', type: 'race' },
    { year: 2020, month: 6, date: 13, label: 'ERSA 3 CANCELLED', type: 'race' },
    { year: 2020, month: 5, date: 10, label: 'ERSA 2 CANCELLED', type: 'race' },
    { year: 2020, month: 4, date: 26, label: 'ERSA 1 CANCELLED', type: 'race' },
    
    // 2020 club fun races
    //{ year: 2020, month: 3, date: 20, label: 'Club Fun Race', type: 'race' },
    { year: 2020, month: 9, date: 18, label: 'Club Fun Race (11-and-under)', type: 'race' },
    { year: 2020, month: 9, date: 25, label: 'Club Fun Race (12-and-over)', type: 'race' },

    // 2019 'other'
    { year: 2019, month: 10, date: 12, label: 'Southern England Champs, Chatham', typoe: 'race' },

    // 2019 tri-regional
    { year: 2019, month: 10, date: 13, label: 'Tri-regional, Chatham', type: 'race' },

    // 2019 school & ESSKIA races
    { year: 2019, month: 5, date: 12, label: 'Kent Schools, Chatham', type: 'race' },

    // 2019 CN & GBR races
    { year: 2019, month: 6, date: 22, label: 'Club National, Welwyn', type: 'race' },
    { year: 2019, month: 6, date: 16, label: 'Club National, Chatham', type: 'race' },
    { year: 2019, month: 6, date: 15, label: 'Club National, Bromley (@ Chatham)', type: 'race' },
    { year: 2019, month: 6, date: 2, label: 'Club National, Vikings (@ Ipswich)', type: 'race' },
    { year: 2019, month: 6, date: 1, label: 'Club National, Norfolk (@ Norwich)', type: 'race' },
    { year: 2019, month: 5, date: 4, label: 'Club National, ERSA (@ Milton Keynes)', type: 'race' },

    // 2019 LSERSA races
    { year: 2019, month: 9, date: 29, label: 'LSERSA 5, Chatham', type: 'race' },
    { year: 2019, month: 9, date: 8, label: 'LSERSA 4, Aldershot', type: 'race' },
    { year: 2019, month: 7, date: 20, label: 'LSERSA 3, Brentwood', type: 'race' },
    { year: 2019, month: 6, date: 8, label: 'LSERSA 2, Welwyn', type: 'race' },
    { year: 2019, month: 4, date: 27, label: 'LSERSA 1, Chatham', type: 'race' },

    // 2019 SRSA races
    { year: 2019, month: 10, date: 5, label: 'SRSA 6, Snowtrax', type: 'race' },
    { year: 2019, month: 9, date: 14, label: 'SRSA 5, Southampton', type: 'race' },
    { year: 2019, month: 8, date: 17, label: 'SRSA 4, Bowles', type: 'race' },
    { year: 2019, month: 6, date: 23, label: 'SRSA 3, Aldershot', type: 'race' },
    { year: 2019, month: 5, date: 11, label: 'SRSA 2, Aldershot', type: 'race' },
    { year: 2019, month: 4, date: 20, label: 'SRSA 1, Snowtrax', type: 'race' },

    //2019 ERSA races
    { year: 2019, month: 9, date: 7, label: 'ERSA 6, Brentwood', type: 'race' },
    { year: 2019, month: 7, date: 6, label: 'ERSA 5, Hemel (2pm)', type: 'race' },
    { year: 2019, month: 6, date: 30, label: 'ERSA 4, Ipswich', type: 'race' },
    { year: 2019, month: 6, date: 16, label: 'ERSA 3, Brentwood', type: 'race' },
    { year: 2019, month: 5, date: 19, label: 'ERSA 2, Norwich', type: 'race' },
    { year: 2019, month: 4, date: 28, label: 'ERSA 1, Welwyn', type: 'race' },

    // 2019 club fun races
    { year: 2019, month: 9, date: 20, label: 'Club Fun Race', type: 'race' },
    { year: 2019, month: 4, date: 26, label: 'Club Fun Race', type: 'race' },

    // 2018 schools training
    { year: 2018, month: 12, date: 16, label: 'Kent Schools training, 5-7', type: 'training'},
    { year: 2018, month: 12, date: 2, label: 'Kent Schools training, 5-7', type: 'training'},
    { year: 2018, month: 11, date: 18, label: 'Kent Schools training, 5-7', type: 'training' },
    { year: 2018, month: 10, date: 24, label: 'Kent Schools training, 5-7', type: 'training' },
    { year: 2018, month: 10, date: 9, label: 'Kent Schools training, 5-7', type: 'training' },
    { year: 2018, month: 9, date: 26, label: 'Kent Schools training, 5-7', type: 'training' },
    { year: 2018, month: 9, date: 9, label: 'ESSKIA training @ Bowles, 5-7', type: 'training' },
    { year: 2018, month: 8, date: 29, label: 'ESSKIA training @ Bowles, 5-7', type: 'training' },
    { year: 2018, month: 6, date: 27, label: 'ESSKIA training @ Bowles, 5-7', type: 'training'},
    { year: 2018, month: 6, date: 30, label: 'Esskia Training, Chatham', type: 'training' },

    // 2018 tri-regional
    { year: 2018, month: 10, date: 14, label: 'Tri-regional, Chatham', type: 'race'},

    // 2018 school & ESSKIA races
    { year: 2018, month: 5, date: 6, label: 'Kent Schools, Chatham', type: 'race' },
    { year: 2018, month: 9, date: 16, label: 'Esskia Qualifier, Chatham', type: 'race'},

    // 2018 CN & GBR races
    { year: 2018, month: 7, date: 8, label: 'GBR, Chatham', type: 'race' },
    { year: 2018, month: 7, date: 7, label: 'Club National, Chatham', type: 'race'},
    { year: 2018, month: 6, date: 9, label: 'Club National, Hemel', type: 'race'},
    
    // 2018 LSERSA races
    { year: 2018, month: 10, date: 13, label: 'LSERSA 5, Chatham', type: 'race' },
    { year: 2018, month: 9, date: 2, label: 'LSERSA 4, Aldershot', type: 'race' },
    { year: 2018, month: 6, date: 10, label: 'LSERSA 3, Welwyn', type: 'race' },
    { year: 2018, month: 6, date: 2, label: 'LSERSA 2, Brentwood', type: 'race'},
    { year: 2018, month: 4, date: 29, label: 'LSERSA 1, Chatham', type: 'race'},

    // 2018 SRSA races
    { year: 2018, month: 9, date: 29, label: 'SRSA 6, Snowtrax', type: 'race'},
    { year: 2018, month: 8, date: 18, label: 'SRSA 5, Bowles', type: 'race'},
    { year: 2018, month: 7, date: 14, label: 'SRSA 4, Southampton', type: 'race'},
    { year: 2018, month: 6, date: 16, label: 'SRSA 3, Aldershot', type: 'race'},
    { year: 2018, month: 5, date: 26, label: 'SRSA 2, Chatham', type: 'race'},
    { year: 2018, month: 5, date: 12, label: 'SRSA 1, Snowtrax', type: 'race'},

    // 2018 club fun races
    { year: 2018, month: 10, date: 5, label: 'Club Fun Race & AGM', type: 'race' },
    { year: 2018, month: 4, date: 20, label: 'Club Fun Race', type: 'race'}
];

export default calendarData;