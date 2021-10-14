import { render } from "@testing-library/react";
import React from "react";
import CardList from "../components/cardList";
import Scroll from "../components/scroll";
import robots from "../components/robots";
import SearchField from "../components/searchField";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchBox: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchBox: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(this.state.searchBox.toLowerCase());
    });

    return (
      <div className="tc">
        <h1 className="f1 ma2">Searching and component react technique</h1>

        <SearchField searchChange={this.onSearchChange} />

        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
