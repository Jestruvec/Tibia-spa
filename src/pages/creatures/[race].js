import axios from "axios";
import { useState, useEffect } from "react";

export default function CreatureDetail(race) {
  const [creature, setCreature] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/creatures/detail/${race}`)
      .then((resp) => setCreature(resp.data));
  });
  return <div>esto no funciona</div>;
}
