import { Component } from "react";
import LetterGrid from "./LetterGrid";

class Puzzle extends Component {
  state = {
    question:
      "... when all conditions, or acceptance criteria, that a software product must satisfy are met and ready to be accepted by a user, customer, team, or consuming system",
    puzzle: "DEFINITION OF DONE",
    guesses: "",
    selection: null,
  };

  render() {
    const { locked } = this.props;
    const { question, puzzle, guesses } = this.state;

    const no_spaces = puzzle.replaceAll(" ", "").trim();

    return (
      <div>
        <h2>{!!locked ? "" : "Guess the Puzzle"}</h2>

        <h3 style={{ paddingLeft: "2rem", paddingRight: "2rem" }}>
          {question}
        </h3>
        <div>
          {puzzle.split("").map((letter, i) => {
            const cssClass =
              letter === " "
                ? "space"
                : guesses.includes(letter)
                ? "open"
                : "closed";
            return (
              <div key={i} className={`${cssClass} puzzle-letter`}>
                {letter}
              </div>
            );
          })}
        </div>
        <div style={{ marginTop: "50px" }}>
          <LetterGrid
            locked={locked}
            guesses={guesses}
            onChange={(val) => {
              const new_guesses = guesses + val;
              this.setState({ guesses: new_guesses });

              const remaining = no_spaces.replace(
                new RegExp("[" + new_guesses + "]", "g"),
                ""
              );
              if (remaining.length == 0) {
                this.props.onComplete();
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Puzzle;
