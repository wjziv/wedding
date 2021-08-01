export interface Location {
    venue: string;
    address: string;
    gmaps: string,
    latitude: number,
    longitude: number
}

export interface Event {
    name: string;
    description: string;
    start_datetime: string;
    end_datetime: string;
    dresscode: string;
    location: JSON;
    background: string;
    stays: string;
    gifts: string;
    things: string;
}

export const engagementParty = {
    name: 'Engagement Party',
    description: "Open bar & Snacks! It's hosted in a real speakeasy!\r\nDon't miss the entrance, shown above. Just head down the alley and the stairs to the door are straight ahead!",
    background: 'https://nthp-savingplaces.s3.amazonaws.com/2015/11/24/15/28/22/951/backroom_LES-sign_Troy-Hahn.jpg',
    start_datetime: '2021-09-25T14:00:00-04:00',
    end_datetime: '2021-09-25T17:00:00-04:00',
    location: {
        venue: 'The Back Room',
        address: '102 Norfolk St, New York, NY 10002',
        gmaps: 'https://goo.gl/maps/QLFV9ZnjwwmJyjXb7',
        latitude: 40.718763,
        longitude: -73.987004
    },
    stays: [
        {
            name: 'Fairfield Inn and Suites - (Columbus Circle)',
            link: 'https://www.marriott.com/hotels/travel/nycft-fairfield-inn-and-suites-new-york-manhattan-central-park/'
        },
        {
            name: 'The Radisson Hotel - (Midtown)',
            link: 'https://www.radissonhotelsamericas.com/en-us/hotels/radisson-new-york-midtown'
        },
        {
            name: 'Hilton Garden Inn - (Midtown-West)',
            link: 'https://www.hilton.com/en/hotels/nycwfgi-hilton-garden-inn-new-york-central-park-south-midtown-west/'
        },
        {
            name: 'The Standard - (East Village)',
            link: 'https://www.standardhotels.com/new-york/properties/east-village'
        },
        {
            name: 'Stewart Hotel - (Midtown)',
            link: 'https://www.stewarthotelnyc.com/'
        }
    ],
    dresscode: 'Dress for Joy! Whatever you\'re most comfortable in works, but we suggest semi-formal or cocktail attire.',
    gifts: 'Gifts are not expected, but if you\'d like to get the couple anything, they suggest something small like a cookbook or a bottle to stock their bar.',
    things: [
        'Grab delicious pudding at Magnolia Bakery',
        'Check out views on the High Line',
        'Walk through Chelesa Market and pick up a snack',
        'Catch a comedy show at UCB'
    ]
}