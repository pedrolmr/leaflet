import React, { useState, useEffect } from 'react'
import { Map , TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

import Markers from './Markers';
import {places} from '../assets/data.json';

import { useLocation } from 'react-router-dom';

const MapView = () => {
    const [state, setState] = useState({
        currentLocation: { lat: '52.52437', lng: '13.41053'}
    });

    const location = useLocation();
    
    useEffect(() => {
        if(location.state.latitude && location.state.longitude){
            const currentLocation = {
                lat: location.state.latitude,
                lng: location.state.longitude
            }
            setState({...state, currentLocation})
        }
    }, [])
    return (
        <Map center={state.currentLocation} zoom={13}>
            <TileLayer 
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' 
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Markers places={places} mylocation={state.currentLocation}/>
        </Map>
    )
}
export default MapView;