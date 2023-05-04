import Link from "next/link";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "50px",
        marginBottom: "1rem",
        backgroundColor: "#666",
      }}
    >
      <Link href="/creatures">Creatures</Link>
      <Link href="/bosses">Bosses</Link>
      <Link href="/worlds">Worlds</Link>
      <Link href="/spells">Spells</Link>
    </div>
  );
}
