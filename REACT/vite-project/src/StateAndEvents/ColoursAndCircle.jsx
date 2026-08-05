import { useState } from "react";
/* how to pass state to other components.
  update the state if they. 
  props and state. 
  */
function ColorsCircles() {
  const [colors, setColors] = useState([]);
  console.log("ColorsCircles render", new Date());
  return (
    <div>
      {" "}
      <ColorForm setColors={setColors} />{" "}
      <ColorList colors={colors} setColors={setColors} />{" "}
    </div>
  );
}
function ColorForm(props) {
  const { setColors } = props; // moved state here
  const [color, setColor] = useState("");
  const [radius, setRadius] = useState(""); // kept from your code
  console.log("ColorForm render", new Date());
  const onSubmit = () => {
    if (color.trim() === "") return;
    setColors((prevColors) => [...prevColors, color]);
    setColor("");
  };
  return (
    <div>
      {" "}
      <label>Enter Color</label>{" "}
      <input
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="red, blue, #ff0000"
      />{" "}
      <button onClick={onSubmit}>Save</button>{" "}
    </div>
  );
}
function ColorList(props) {
  const { colors, setColors } = props;
  console.log("ColorList render", new Date());
  const removeColor = (indexToRemove) => {
    setColors((prevColors) =>
      prevColors.filter((_, index) => index !== indexToRemove),
    );
  };
  return (
    <div style={{ marginTop: "30px" }}>
      {" "}
      {colors.map((color, index) => (
        <div
          key={index}
          style={{
            margin: "10px",
            width: "100%",
            height: "40px",
            backgroundColor: color,
            color: "white",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "6px",
          }}
        >
          {" "}
          <span>{color}</span>{" "}
          <button
            onClick={() => removeColor(index)}
            style={{
              background: "white",
              color: "black",
              border: "none",
              padding: "5px 10px",
              cursor: "pointer",
              borderRadius: "4px",
            }}
          >
            {" "}
            Remove{" "}
          </button>{" "}
        </div>
      ))}{" "}
    </div>
  );
}
export default ColorsCircles;
