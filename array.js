'use strict';

// define a dataset as array in a var
const data = [
  {firstname: 'joe', lastname: 'smith', imagepath:'IMG_6082.jpg'},
  {firstname: 'joey', lastname: 'smith', imagepath:'IMG_6082.jpg'},
  {firstname: 'joan', lastname: 'smith', imagepath:'IMG_6082.jpg'},
  {firstname: 'jill', lastname: 'smith', imagepath:'IMG_6082.jpg'}
];
// define a react page component using traditional pure JS
function ProjectList(props) {
  // return some output for the component using JSX
  return <div>
<h1>{props.message1}</h1>
<p>{props.message2}</p>
<ol>
{
   // use map() to loop thru array passed in props.list, creating new element for each array value
   props.list.map(
     (item,index) => ( 
     <li key={index}>
     {item.firstname} {item.lastname}<br />
     <img src={item.imagepath} alt="flower" />
     </li>
     )
   )
}
</ol>
  </div>;
}
 // render componet to page
 ReactDOM.render(
   // for tag take function name
   <ProjectList list={data} message1="hello" message2="and welcome" />,
   document.getElementById('myApp')
 );