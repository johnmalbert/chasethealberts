import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default icon issue
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const MapPage = ({ coordinates }) => {
    return (
        <MapContainer 
            center={[47.6062, -122.3321]} 
            scrollWheelZoom={false} 
            zoom={7} 
            style={{ height: "500px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {coordinates.map((coord) => (
                <Marker key={coord.id} position={[coord.lat, coord.lng]}>
                    <Popup>{coord.name}</Popup>
                </Marker>
            ))}
        </MapContainer>
    );
};

export default MapPage;
