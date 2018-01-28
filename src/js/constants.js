const MAP_OPTS = {
    zoom: 5,
    center: { lat: 38.2586, lng: 137.6850 },
    styles: [
        {
            featureType: 'administrative',
            elementType: 'labels.text.fill',
            stylers: [
                {
                    color: '#444444'
                }
            ]
        },
        {
            featureType: 'landscape',
            elementType: 'all',
            stylers: [
                {
                    color: '#f2f2f2'
                }
            ]
        },
        {
            featureType: 'poi',
            elementType: 'all',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'all',
            stylers: [
                {
                    saturation: -100
                },
                {
                    lightness: 45
                }
            ]
        },
        {
            featureType: 'road.highway',
            elementType: 'all',
            stylers: [
                {
                    visibility: 'simplified'
                }
            ]
        },
        {
            featureType: 'road.arterial',
            elementType: 'labels.icon',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'transit',
            elementType: 'all',
            stylers: [
                {
                    visibility: 'off'
                }
            ]
        },
        {
            featureType: 'water',
            elementType: 'all',
            stylers: [
                {
                    color: '#46bcec'
                },
                {
                    visibility: 'on'
                }
            ]
        }
    ]
};
const DATA_URL = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.SHEETS_ID}/values/data!A:D?key=${process.env.API_KEY}`;

export default class Constants {
    static get MAP_OPTS() {
        return MAP_OPTS;
    }
    static get DATA_URL() {
        return DATA_URL;
    }
}
