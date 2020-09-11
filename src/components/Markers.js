import React from 'react';
import { Marker } from 'react-leaflet';
import {IconLocation} from './IconLocation';

const Markers = ({places, mylocation}) => {
    const markers = places.map((place, i) => (
        <Marker key={i} position={place.coordinates && mylocation}icon={IconLocation}/>
    ))
    return markers;
}

export default Markers
