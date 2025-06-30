import React from "react";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

import Container from "@/layouts/Container";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import warehouses from "@/data/warehouses.json";
import { useState } from "react";

const MapController = ({ position }) => {
  const map = useMap();
  if (position) map.setView(position, 10);
  return null;
};

const Coverage = () => {
  const bangladeshCenter = [23.685, 90.3563];
  const [search, setSearch] = useState("");
  const [selectedPosition, setSelectedPosition] = useState(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const matched = warehouses.find((d) =>
      d.district.toLowerCase().includes(query)
    );

    if (matched) {
      setSelectedPosition([matched.latitude, matched.longitude]);
    } else {
      setSelectedPosition(null);
    }
  };

  return (
    <section className="py-[40px]">
      <Container>
        <div className="bg-white p-10 rounded-xl">
          <div>
            <h2 className="text-4xl text-start text-secondary font-bold">
              We are available in 64 districts
            </h2>
            <div className="mt-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <fieldset className="fieldset w-md p-4">
                  <div className="join">
                    <input
                      type="text"
                      className="input join-item"
                      placeholder="Search here..."
                      value={search}
                      onChange={handleSearch}
                    />
                    <button className="btn btn-primary rounded-pill text-secondary join-item">
                      save
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="divider"></div>
          </div>
          <div>
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-secondary">
                We deliver almost all over Bangladesh
              </h3>
            </div>
            <div>
              <MapContainer
                center={bangladeshCenter}
                zoom={8}
                style={{ height: "500px", width: "100%" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MapController position={selectedPosition} />
                {warehouses.map((warehouse, i) => (
                  <Marker
                    key={i}
                    position={[
                      warehouse.latitude,
                      warehouse.longitude,
                    ]}
                  >
                    <Popup>
                      <strong>{warehouse.district}</strong>
                      <br />
                      {warehouse.region} Region
                      <br />
                      Areas: {warehouse.covered_area.join(", ")}
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Coverage;
