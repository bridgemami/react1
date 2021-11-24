'use strict';
// 1. define a react page component using a traditional JS function
// note that react will pass an object value to my function's props variable
function FirstComponent (props) {
  // let's use JSX to make a virtual html element with embedded expressions
  return <div>
  <h1>{props.message1}</h1>
  <p>{props.message2}</p>
  </div>;
}
// 2. let's use our new component and call react to render it into the html page
// note that we pass properties to the component function as html attributes
// the render() method takes two arguments:
// 1st argument is the component we want to render using JSX
// 2nd argument is the html element to render into
ReactDOM.render(
  //first argument
  <FirstComponent message1="Hello there" message2="Welcome to React" />,
  //second argument
  document.getElementById('myApp')
);