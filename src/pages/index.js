/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage: 'url("/background.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Link href="/creatures">
          <img src="/Ferumbras.gif" alt="Ferumbras" />
          <p>Go to home page</p>
        </Link>
      </div>
    </div>
  );
}
