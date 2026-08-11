import { NavLink } from "react-router-dom";

function Navigation1() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        padding: "20px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
          fontWeight: "bold",
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/about"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
          fontWeight: "bold",
        })}
      >
        About
      </NavLink>

      <NavLink
        to="/crazy/route/223311"
        style={({ isActive }) => ({
          color: isActive ? "red" : "black",
          textDecoration: "none",
          fontWeight: "bold",
        })}
      >
        Crazy route
      </NavLink>
    </div>
  );
}

export default Navigation1;
