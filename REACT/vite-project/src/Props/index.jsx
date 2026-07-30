/*
1.Components are functions.
   input->output
   input<data>->output is ui
2.Create reusable components you need an
   understanding of props.
   properties.
3.Each component you create in react
   will always have props
4.Props are passed from parent to child
-> all data types can be passed into props
   including other components
*/

function Parent() {
  //primitive data type
  const str = "Hello World";
  const amount = 3000;
  const isOk = true;
  const notSet = null;
  return (
    <div>
      <h1> I am the parent component</h1>
      <Child str={str} amount={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}

function Child(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the child component</h1>
      <ul>
        <li>Favourite String {props.str}</li>
        <li>Amount {props.amount}</li>
        <li>isOk {props.isOk.toString()}</li>
        <li>notSet {props.notSet}</li>
      </ul>
    </div>
  );
}

export default Parent;
