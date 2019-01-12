import React from "react";
import ReactDOM from "react-dom";
import Pet from "Pet";

class App extends React.Component {
  handleTitleClick() {
    alert("You clicked the title");
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="dog" breed="poodle" />
        <Pet name="Luna" animal="dog" breed="poodle" />
        <Pet name="Luna" animal="dog" breed="poodle" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
