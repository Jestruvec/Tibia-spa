import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "jestruvec/layout/layout";

export default function Home() {
  const [creatures, setCreatures] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/creatures")
      .then((resp) => setCreatures(resp.data));
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
          {creatures &&
            creatures.map((creature, index) => (
              <div
                style={{ border: "solid thin white", padding: "16px" }}
                key={index}
              >
                <h3>{creature.name && creature.name}</h3>
                <img
                  src={creature.image_url && creature.image_url}
                  alt={creature.name}
                />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
