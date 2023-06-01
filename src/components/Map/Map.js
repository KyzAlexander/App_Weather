// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import style from "./Map.module.scss";
import { API_KEY_MAP } from "../../constants/urls";
import { Placemark, Map, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

const MapYandex = ({ lat, lon }) => {
  //---------------------------**---google maps ----
  // const containerStyle = {
  //   width: "400px",
  //   height: "400px",
  // };
  // const { isLoaded } = useLoadScript({
  //   googleMapsApiKey: API_KEY_GOOGLE_MAPS,
  //   language: "ru",
  // });
  // if (!isLoaded) return <div>Loading...</div>;
  // return (
  //   <div className={style.map}>
  //     <GoogleMap
  //       center={{ lat: 44, lng: -80 }}
  //       zoom={8}
  //       mapContainerStyle={containerStyle}
  //     >
  //       <Marker position={{ lat: 44, lng: -80 }}></Marker>
  //     </GoogleMap>
  //   </div>
  // );
  //-------------------------------------***------------

  // const mapOptions = {
  //   // Здесь указываем тему карты
  //   options: {
  //     yandexMapDisablePoiInteractivity: true,
  //     yandexMapAutoSwitchToNightMode: true,
  //   },
  // };

  const [mapLoaded, setMapLoaded] = useState(false);
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    setCoordinates([lat, lon]);
    setMapLoaded(false);
    if (lat && lon) {
      setMapLoaded(true);
    }
  }, [lat, lon]);

  return (
    <>
      {mapLoaded && (
        <YMaps query={{ apikey: API_KEY_MAP, lang: "ru_RU" }}>
          <div className={style.mapYandex}>
            <Map
              defaultState={{ center: coordinates, zoom: 9 }}
              width="100%"
              height="300px"
            >
              <Placemark geometry={coordinates} />
              <ZoomControl options={{ float: "right" }} />
            </Map>
          </div>
        </YMaps>
      )}
      {!mapLoaded && <div>Loading...</div>}
    </>
  );
};

export default MapYandex;
