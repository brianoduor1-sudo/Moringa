import { useState } from "react";
function Form2() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleSubmit = () => {
    console.log("Form submitted");
    console.log("Name:", input.name);
    console.log("Email:", input.email);
    console.log("Phone:", input.phone);
    console.log("Password:", input.password);
  };
  return (
    <div>
      {" "}
      <h2>Registration Form</h2>{" "}
      <div>
        {" "}
        <label>Name</label> <br />{" "}
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
        />{" "}
      </div>{" "}
      <br />{" "}
      <div>
        {" "}
        <label>Email</label> <br />{" "}
        <input
          type="email"
          name="email"
          value={input.email}
          onChange={handleChange}
        />{" "}
      </div>{" "}
      <br />{" "}
      <div>
        {" "}
        <label>Phone</label> <br />{" "}
        <input
          type="tel"
          name="phone"
          value={input.phone}
          onChange={handleChange}
        />{" "}
      </div>{" "}
      <br />{" "}
      <div>
        {" "}
        <label>Password</label> <br />{" "}
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />{" "}
      </div>{" "}
      <br /> <button onClick={handleSubmit}>Submit</button>{" "}
      <h3>Live State Changes</h3>{" "}
      <ul>
        {" "}
        <li>Name: {input.name}</li> <li>Email: {input.email}</li>{" "}
        <li>Phone: {input.phone}</li> <li>Password: {input.password}</li>{" "}
      </ul>{" "}
    </div>
  );
}
export default Form2;
