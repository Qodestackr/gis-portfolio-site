import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
 
function Map() {
  const position = [-1.2921, 36.8219];
  const zoomLevel = 15;

  return (
    <MapContainer zoom={zoomLevel} center={position} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      <Marker position={position}>
        <Popup>
          User Info! {/**TODO: ADD */}
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map