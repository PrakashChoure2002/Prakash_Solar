import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import ContactForm from './ContactForm';

const containerStyle = {
  width: '100%',
  height: '500px',
  maxWidth: '1500px',
  margin: '0 auto'
};

const center = {
  lat: 21.65045119645301, // default latitude
  lng: 78.79767642458775, // default longitude
};

const ContactUs = () => {



  const { isLoaded } = useJsApiLoader({
    id: `google-map-script`,
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_API
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div style={{ padding: '0 15px' }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <MarkerF position={center}></MarkerF>
        </GoogleMap>
      ) : (
        <div style={containerStyle}>
          <Skeleton height="100%" />
        </div>
      )}
      <ContactForm />
    </div>
  );
}

export default ContactUs;
