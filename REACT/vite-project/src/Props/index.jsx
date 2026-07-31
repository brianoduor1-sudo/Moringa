function Parent() {
  // Primitive datatypes
  const str = "Hello World";
  const amount = 3000;
  const isOk = true;
  const notSet = null;

  // Object
  const car = {
    model: "Renault Truck",
    manufacture: "Renault",
    engine: {
      cc: 2500,
    },
  };

  Array;
  const colors = ["blue", "green", "yellow"];

  // Another object
  const obj = {
    name: "Brian",
    value: "React Props",
  };

  return (
    <div>
      <h1>I am the parent component</h1>

      <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />

      <Child2
        str={str}
        amountInNumber={amount}
        isOk={isOk}
        notSet={notSet}
        car={car}
        colors={colors}
        obj={obj}
      />

      <Child3 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}

// Child 1 - using props keyword
function Child1(props) {
  return (
    <div>
      <h2>I am Child 1</h2>
      <ul>
        <li>
          Favourite String: <b>{props.str}</b>
        </li>
        <li>
          Amount: <b>{props.amountInNumber}</b>
        </li>
        <li>
          isOk: <b>{String(props.isOk)}</b>
        </li>
        <li>
          notSet: <b>{String(props.notSet)}</b>
        </li>
      </ul>
    </div>
  );
}

// Child 2 - destructuring
function Child2({ str, amountInNumber, isOk, notSet, car, colors, obj }) {
  return (
    <div>
      <h2>I am Child 2</h2>

      <ul>
        <li>
          Favourite String: <b>{str}</b>
        </li>
        <li>
          Amount: <b>{amountInNumber}</b>
        </li>
        <li>
          isOk: <b>{String(isOk)}</b>
        </li>
        <li>
          notSet: <b>{String(notSet)}</b>
        </li>
      </ul>

      <h3>Car Object</h3>
      <ul>
        <li>
          Model: <b>{car.model}</b>
        </li>
        <li>
          Manufacturer: <b>{car.manufacture}</b>
        </li>
        <li>
          Engine CC: <b>{car.engine.cc}</b>
        </li>
      </ul>

      <h3>Colors Array</h3>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>

      <h3>Object Prop</h3>
      <ul>
        <li>
          Name: <b>{obj.name}</b>
        </li>
        <li>
          Value: <b>{obj.value}</b>
        </li>
      </ul>
    </div>
  );
}

// Child 3 - direct destructuring
function Child3({ str, amountInNumber, isOk, notSet }) {
  return (
    <div>
      <h2>I am Child 3</h2>

      <ul>
        <li>
          Favourite String: <b>{str}</b>
        </li>
        <li>
          Amount: <b>{amountInNumber}</b>
        </li>
        <li>
          isOk: <b>{String(isOk)}</b>
        </li>
        <li>
          notSet: <b>{String(notSet)}</b>
        </li>
      </ul>
    </div>
  );
}

export default Parent;
