import ReactDOM from "react-dom";

import Pet from "./Pet";

// Here we create an App Component consist of 1 nested div component
// which in turn consist of one h1 component and 3 Pet component.
// This is just a blue-print of App component, just like a class in java.
const App = () => {
  
  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Adopt Me"),
  //   React.createElement(Pet, {
  //     name: "Luna",
  //     animal: "Dog",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Pepper",
  //     animal: "Bird",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Doink",
  //     animal: "Cat",
  //     breed: "Mix",
  //   }),
  // ]);

  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name='Luna' animal='Dog' breed='Havanese'/>
      <Pet name='Pepper' animal='Bird' breed='Cockatiel'/>
      <Pet name='Doink' animal='Cat' breed='Mix'/>
    </div>
  )

};

// On doing React.createElement App, we are creating an instance of App component
// and passing it to ReactDOM to render.
// ReactDOM.render(React.createElement(App), document.getElementById("root"));

ReactDOM.render(<App/>, document.getElementById("root"));
