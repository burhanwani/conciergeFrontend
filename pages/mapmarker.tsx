import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useRecoilValue } from "recoil";
import { placeState } from "@/atoms/placeAtom";

export default function Mapmarker() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!,
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}

function Map() {
  const place = useRecoilValue(placeState);
  //console.log(place);
  let latlong = place[0]
  //console.log(typeof(latlong))
  var pos = latlong.split(",");
  console.log(typeof(pos[0]))
  const center = useMemo(() => ({ lat: Number(pos[0]), lng: Number(pos[1]) }), []);

  return (
    <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
      <Marker position={center} />
    </GoogleMap>
  );
}
