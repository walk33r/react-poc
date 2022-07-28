
// Here we create an App Component consist of 1 nested div component which in turn consist of one h1 component.
// This is just a blue-print of App component, just like a class in java.
const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me")
  );
}

// On doing React.createElement App, we are creating an instance of App component 
// and passing it to ReactDOM to render.
ReactDOM.render(React.createElement(App), document.getElementById('root'));