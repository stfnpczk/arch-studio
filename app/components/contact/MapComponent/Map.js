import { React, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const customIcon = L.icon({
  iconUrl: "/marker.svg",
  iconSize: [40, 48],
  iconAnchor: [20, 48],
  popupAnchor: [0, -48],
});

const FitBounds = ({ bounds }) => {
  const map = useMap();

  useEffect(() => {
    if (map) {
      map.fitBounds(bounds, { padding: [100, 100], maxZoom: 5 });
    }
  }, [map, bounds]);

  return null;
};

const ScrollZoomControl = () => {
  const map = useMap();

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        if (e.deltaY > 0) {
          map.zoomOut();
        } else {
          map.zoomIn();
        }
      }
    };

    map.getContainer().addEventListener("wheel", handleScroll);

    return () => {
      map.getContainer().removeEventListener("wheel", handleScroll);
    };
  }, [map]);

  return null;
};

export default function Map() {
  const bounds = [
    [35.5175, -86.5804],
    [31.9686, -99.9018],
  ];

  return (
    <MapContainer
      className="h-[clamp(22.9375rem,97.867vw,97.867vw)] w-full scroll-smooth md:h-[clamp(35rem,72.917vw,72.917vw)] lg:h-[clamp(35rem,38.889vw,37.875rem)]"
      zoomControl={true}
      scrollWheelZoom={false}
      id="map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <FitBounds bounds={bounds} />
      <ScrollZoomControl />
      <Marker position={[35.5175, -86.5804]} icon={customIcon}>
        <Popup>1892 Chenoweth Drive, TN</Popup>
      </Marker>
      <Marker position={[31.9686, -99.9018]} icon={customIcon}>
        <Popup>3399 Wines Lane, TX</Popup>
      </Marker>
    </MapContainer>
  );
}
