import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Place } from "../../interfaces/Place";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";

interface MapViewProps {
  places: Place[];
}

export default function MapView({ places }: MapViewProps) {
  const defaultCenter: LatLngExpression = [48.8566, 2.3522]; // Paris
  const firstCoord = places[0]?.adressesOperateurs?.[0];
  const center: LatLngExpression = firstCoord?.lat
    ? [firstCoord.lat, firstCoord.long]
    : defaultCenter;

  return (
    <MapContainer center={center} zoom={12} className="w-full h-full z-0">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((place, idx) =>
        place.adressesOperateurs.map((addr, i) =>
          addr.lat && addr.long ? (
            <Marker key={`${idx}-${i}`} position={[addr.lat, addr.long]}>
              <Popup>
                <p className="font-bold">{place.raisonSociale}</p>
                <p>
                  {addr.ville} ({addr.codePostal})
                </p>
              </Popup>
            </Marker>
          ) : null
        )
      )}
    </MapContainer>
  );
}
