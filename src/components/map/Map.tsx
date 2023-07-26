import { useContext } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useUserContext } from "../../context/UserContext";

type LatLngTuple = [number, number];

function Map() {
  const { user } = useUserContext(); // Access the user data from the UserContext
  console.log(user)

  const position: LatLngTuple = user?.location || [-1.2921, 36.8219]; // Use the user's location if available, or use the default location
  const zoomLevel = 15;

  return (
    <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>User Info! {/**TODO: ADD */}</Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map;
