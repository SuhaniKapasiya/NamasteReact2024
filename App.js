import React from "react";
import ReactDOM from "react-dom/client"; // Make sure to use ReactDOM with proper capitalization

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am inside Namaste React 🚀"),
    React.createElement("h2", {}, "I am inside h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am inside h1 tag"),
    React.createElement("h2", {}, "I am inside h2 tag"),
  ]),
]);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
