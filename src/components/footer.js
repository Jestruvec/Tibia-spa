import { useEffect, useState } from "react";
import axios from "axios";

export default function Footer() {
  const [data, setData] = useState({
    social: {},
  });

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/global")
      .then((resp) => setData(resp.data));
  }, []);

  return (
    <div>
      <label>
        Email:
        <p>{data.email}</p>
      </label>
      <label>SocialMedia:</label>
      <br />
      <a href={data.social.facebook}>facebook</a>
      <br />
      <a href={data.social.instagram}>instagram</a>
    </div>
  );
}
