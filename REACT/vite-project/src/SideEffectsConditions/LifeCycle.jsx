import { useEffect, useState } from "react";
function LifeCycle() {
  const [n, setN] = useState(0);
  // initial when gets born(rendered)
  // // when n changes/ [n,x,l]
  useEffect(() => {
    console.log("N has changed");
  }, [n]);
  return (
    <div>
      {" "}
      <div>
        {" "}
        <button onClick={() => setN(n - 1)}>-</button> <b>{n}</b>{" "}
        <button onClick={() => setN(n + 1)}>+</button>{" "}
      </div>{" "}
      <EvenOrOdd n={n} />{" "}
    </div>
  );
}
function EvenOrOdd(props) {
  const { n } = props;
  if (n % 2 === 0) {
    return <EvenComponent />;
  }
  return <OddComponet />;
}
function EvenComponent() {
  useEffect(() => {
    // Born
    console.log("Even component rendered");
  }, []);
  return (
    <div>
      {" "}
      <h1>Even</h1>{" "}
    </div>
  );
}
function OddComponet() {
  //empty dependency array means it will only run once when the component is mounted and not on subsequent renders. This is useful for performing cleanup or side effects that should only happen once during the component's lifecycle.0
  useEffect(() => {
    console.log("Odd component died");
    //called when component dies/unmounted
  }, []);
  return (
    <div>
      {" "}
      <h1>Odd</h1>{" "}
    </div>
  );
}
export default LifeCycle;
