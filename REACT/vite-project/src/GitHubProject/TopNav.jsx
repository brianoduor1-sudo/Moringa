import { useState } from "react";
function TopNav() {
  const [search, setSearch] = useState("");
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {" "}
      <img
        style={{ width: "40px" }}
        src="https://toppng.com/uploads/preview/github-logo-png-photo-11659780047rlwsegmg72.png"
      />{" "}
      <input
        style={{ width: "50vw", marginLeft: "1em" }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
      <button>Search</button>{" "}
    </div>
  );
}
export default TopNav;
