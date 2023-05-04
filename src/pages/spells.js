import { useState, useEffect } from "react";
import axios from "axios";
import Layout from "jestruvec/layout/layout";
export default function Home() {
  const [spells, setSpells] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/spells")
      .then((resp) => setSpells(resp.data));
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
          {spells &&
            spells.map((spell, index) => (
              <div
                style={{ border: "solid thin white", padding: "16px" }}
                key={index}
              >
                <h1>{spell.name && spell.name}</h1>
                <label>
                  Formula:
                  <p>{spell.formula && spell.formula}</p>
                </label>
                <label>
                  Mana cost:
                  <p>{spell.mana && spell.mana}</p>
                </label>
                <label>
                  Price:
                  <p>{spell.price && spell.price}</p>
                </label>
                <label>
                  Level:
                  <p>{spell.level && spell.level}</p>
                </label>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}
