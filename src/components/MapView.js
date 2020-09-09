import React, { useState } from 'react'
import { Map , TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import Markers from './Markers';
import {places} from '../assets/data.json';

const MapView = () => {
    const [state, setState] = useState({
        currentLocation: { lat: '52.52437', lng: '13.41053'}
    });

    return (
        <Map center={state.currentLocation} zoom={13}>
            <TileLayer 
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers places={places}/>
        </Map>
    )
}
export default MapView;