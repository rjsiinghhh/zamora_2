import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [{
    id: 'p1',
    title: 'George Washington Ranch',
    description: '100 + acres of Walnuts',
    imageUrl: 'https://i.imgur.com/rj6SHlO.jpg',
    address: 'CA',
    location: {
        lat: 39.017184,
        lng: -121.673517
    },
    creator: 'u1'
}];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items = { loadedPlaces }
    />;
};

export default UserPlaces;