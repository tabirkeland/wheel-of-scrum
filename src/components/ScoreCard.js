import { Component } from "react";

class ScoreCard extends Component {
  render() {
    const { players } = this.props;

    const rows = players.map((player) => {
      return (
        <tr>
          <td>{player.name}</td>
          <td>{player.points}</td>
          <td>{player.totalPoints}</td>
        </tr>
      );
    });

    return (
      <>
        <table class="scorecard" border="1">
          <tr>
            <td>Player</td>
            <td>Points</td>
            <td>Total Points</td>
          </tr>
          {rows}
        </table>
      </>
    );
  }
}

export default ScoreCard;
