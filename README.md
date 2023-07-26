# gis-portfolio-site
GIS-themed portfolio.


## Introduction
This repository contains the code for a GIS-themed portfolio web application developed using React. The app serves as a centralized platform for users to showcase their portfolios, including personal information, contact details, and geographic location on a map.


## Get started with Installation:
> Note: Reproduce your own git branches locally

To run the app locally, follow these steps:

1. Clone the repo
`git clone https://github.com/Qodestackr/gis-portfolio-site`

2. Install dependencies:

```bash
cd gis-portfolio-site
yarn # install the app
```

3. Start the development server:
```bash
yarn dev
```

The app will be accessible at http://localhost:5173/(Vite default)


## End User Features/ Product features

The gis-portfolio-site offers the following features:

**User Profile:**

Users can view their portfolio profiles, including details such as username, email, home address, phone number, and location on the map.
**Edit Profile Page**:
- Users can edit their profile information on a dedicated edit page, enabling them to update their personal details and geographic location.

**Full-Screen Map**:
- The app displays a full-screen map showcasing the geographic locations of all registered users.
**User Info Popup**:
- Clicking on a user's marker on the map opens a popup displaying the user's profile information.

## Dev Features: My Todo

### State Management
- React Context: The app utilizes React Context for state management, allowing for efficient data sharing and updates across components.

### Data Fetching 

- Axios: Data fetching is handled with Axios, a popular JavaScript library for making HTTP requests.

### Web Mapping
- **Leaflet and React Leaflet**: The app leverages the Leaflet library along with React Leaflet for web mapping functionality. It displays a map with markers representing users' locations on OpenStreetMap.


## Mapping example:
We create a React function component (from `MapContainer`) using tile layers from OpenStreetMap, define zoom level and expected position of the default marker. 

<!--
TODO: Handle GeoJSON response object, for simplicity, we will query from user model(location point) with axios and 
State context
-->

```tsx
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
} from "react-leaflet";


type LatLngTuple = [number, number];

function Map() {
  const position: LatLngTuple = [-1.2921, 36.8219];
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
```