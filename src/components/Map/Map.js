import style from "./Map.module.scss";
import { API_KEY_MAP } from "../../constants/urls";
import { Placemark, Map, YMaps, ZoomControl } from "@pbe/react-yandex-maps";
import { useEffect, useState } from "react";

const MapYandex = ({ lat, lon }) => {
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
              state={{ center: coordinates, zoom: 9 }}
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
