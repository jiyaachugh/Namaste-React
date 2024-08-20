const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {}, "I'm an h1 tag")));
// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc" 
// }, "hello world from React!");
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
