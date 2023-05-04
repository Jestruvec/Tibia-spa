import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "jestruvec/layout/layout";

export default function Home() {
  const [worlds, setWorlds] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/worlds")
      .then((resp) => setWorlds(resp.data));
  });
  return (
    <Layout>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gridGap: "10px",
          }}
        >
          {worlds &&
            worlds.map((world, index) => (
              <div
                style={{ border: "solid thin white", padding: "16px" }}
                key={index}
              >
                <h3>{world.name && world.name}</h3>
                <p>{world.location && world.location}</p>
                <p>{world.pvp_type && world.pvp_type}</p>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
