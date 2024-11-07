/**
 * <div id = "parent">
 *    <div id = "child">
 *        <h1>I am inside h1 tag</h1>
 *        <h1>I am inside h1 tag</h1>
 * 
 *    </div>
 *   <div id = "child">
 *        <h1>I am inside h1 tag</h1>
 *        <h1>I am inside h1 tag</h1>
 * 
 *    </div>
 * </div>
 * 
 * ReactElement(Object)=>HTML(Browser Understand)
 * 
 */

const parent = React.createElement(
  "div",
  {id : "parent"},
 [
   React.createElement(
    "div",
    {id :"child"},
    [ 
      React.createElement("h1",{},"I am inside h1 tag"),
       React.createElement("h2",{},"I am inside h2 tag"),
    ]
  ),

   React.createElement(
    "div",
    {id :"child"},
    [ 
      React.createElement("h1",{},"I am inside h1 tag"),
       React.createElement("h2",{},"I am inside h2 tag"),
    ]
  

  )
 ]
);


console.log(parent);

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello world from React!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
