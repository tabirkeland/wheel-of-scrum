import { Component } from "react";
import "./App.css";

import Wheel from "./components/Wheel";
import Puzzle from "./components/Puzzle";
import ScoreCard from "./components/ScoreCard";

class App extends Component {
  state = {
    wheel_lock: false,
    letter_lock: true,
    wheel_value: null,
    puzzle_value: null,

    active_player: null,
    players: [
      {
        name: "Player 1",
        points: 0,
        totalPoints: 0,
      },
      {
        name: "Player 2",
        points: 0,
        totalPoints: 0,
      },
    ],
  };

  componentDidMount() {
    const { players } = this.state;
    this.setState({ active_player: players[0] });
  }

  render() {
    const { wheel_value, letter_lock, wheel_lock, players, active_player } =
      this.state;

    return (
      <div className="App">
        <h1>Wheel of scrum</h1>
        <h2>Current Player: {!!active_player ? active_player.name : " - "}</h2>
        <div className="grid-container">
          <div style={{ textAlign: "center" }}>
            <Wheel
              locked={!!wheel_lock}
              onChange={(value) => {
                const { players } = this.state;

                if (value === "BANKRUPT") {
                  players[0].points = 0;
                  players[0].totalPoints = 0;
                }

                this.setState({
                  players: [...players],
                  wheel_value: value,
                  letter_lock: false,
                  wheel_lock: true,
                });
              }}
            />
          </div>
          <div style={{ textAlign: "center" }}>
            <Puzzle
              locked={!!letter_lock}
              onComplete={() => {
                const { players } = this.state;

                if (wheel_value !== "BANKRUPT") {
                  players[0].points += parseInt(wheel_value);
                  players[0].totalPoints += parseInt(wheel_value);
                }

                this.setState({
                  letter_lock: true,
                  wheel_lock: false,
                  players: [...players],
                });
              }}
              onChange={(value) =>
                this.setState({
                  puzzle_value: value,
                })
              }
            />
            <ScoreCard players={players} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
