import React from "react";
import ReactDOM from "react-dom/client"; 

//class 2 and 1

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am inside Namaste React 🚀"),
//     React.createElement("h2", {}, "I am inside h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am inside h1 tag"),
//     React.createElement("h2", {}, "I am inside h2 tag"),
//   ]),
// ]);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

//class 3 code

// React.createElement => ReactElement-js object =>HTMLElement(render)
const heading = React.createElement("h1", {}, "Namaste React 🚀");
console.log(heading);

//JSX - HTML-like or XML-like syntax
//JSX => Babel transpile it to  React.createElement => ReactElement-js object =>HTMLElement(render)
//Ract Element => jsx is a react elemet
const elem = <span>React Element</span>;
const title =  (
  <h1 className="heading" tabIndex="1">
    {elem}
    {" "}
    Namaste React using JSX 🚀
  </h1>
);



//React Componet
//Class Based componet => OLD
//funtional componet => NEW

// React Funtional Componet  belwo both are same
const HeadComponet = () => {
  return <h1>Namaste React Funtional Componet 1 </h1>; //this syntax is better for industry
};

// componet  composition you have put another componet inside aother 
const HeadComponet2 = () => (
  <div id="container">
   {title}
    <HeadComponet/>
    {HeadComponet()}
    <HeadComponet></HeadComponet>
    <h1 className="heading">Namaste React Funtional Componet 2</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadComponet2 />);
