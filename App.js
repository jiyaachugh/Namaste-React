import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div",{id: "parent"},
    React.createElement("div",{id: "child"},
        React.createElement("h1",{}, "I'm an h1 tag"
    )
));

// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc" 
// }, "hello world from React!");

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

// React.createElement => Object 
// when we render this onto the DOM, it becomes the HTMLElement

// React Element

const heading = React.createElement("h1",
     {id: "heading"},
      "Namaste React");

console.log(heading)

// JSX - HTML-like or XML-like syntax
// JSX code is transpiled before it reaches the JS Engine
// Transpiled means the code is converted to the code that browsers can understand
// The code is transpiled before it reaches, Parcel is like manager, parcel gives responsibility to babel

// const jsxHeading = <h1 id="heading">Namaste React using JSX</h1>

const jsxHeading = <h1 className="">Namaste React using JSX</h1>

// for attributes in JSX -> use camelCase 
// HW - explore various attributes in JSX
// If writing JSX code in multiple lines - use brackets
// React Components - two types - class based component(OLD) & Functional component(New) 

// React Functional Component 
const HeadingComponent = () => {
    <div id="container">
    return <h1>Namaste React Functional Component</h1>
    </div>
}

const HeadingComponent2 = () => <h1>Namaste React Functional Component</h1>


const root = ReactDOM.createRoot(document.getElementById);

root.render(jsxHeading);
root.render(<HeadingComponent/>)