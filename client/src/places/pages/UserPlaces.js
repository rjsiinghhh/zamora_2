import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Road 13 Pistachio Ranch',
    description: '100 + acres',
    imageUrl:
      'https://i.imgur.com/rj6SHlO.jpg',
    address: 'Zamora, CA',
    location: {
      lat: 38.789725,
      lng: -121.797411
    },
    creator: 'u1'
  }
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
