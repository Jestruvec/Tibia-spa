import axios from "axios";
import { useState, useEffect } from "react";
import Layout from "jestruvec/layout/layout";

export default function Home() {
  const [bosses, setBosses] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/bosses")
      .then((resp) => setBosses(resp.data));
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
          {bosses &&
            bosses.map((boss, index) => (
              <div
                style={{ border: "solid thin white", padding: "16px" }}
                key={index}
              >
                <h3>{boss.name && boss.name}</h3>
                <img
                  src={boss.image_url && boss.image_url}
                  alt={boss.name && boss.name}
                />
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
