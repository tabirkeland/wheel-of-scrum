import { Component } from "react";

class LetterGrid extends Component {
  render() {
    const { guesses, locked } = this.props;

    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    return (
      <div style={{ width: "60%", margin: "0 auto" }}>
        {alphabet.map((elm, i) => {
          if (guesses.includes(elm)) {
            return (
              <button
                key={i}
                style={{
                  marginRight: "10px",
                  marginBottom: "15px",
                  backgroundColor: "#000",
                }}
              >
                {elm}
              </button>
            );
          }

          return (
            <button
              key={i}
              disabled={!!locked}
              onClick={() => this.props.onChange(elm)}
              style={{ marginRight: "10px", marginBottom: "15px" }}
            >
              {elm}
            </button>
          );
        })}

        <br />
        <br />
        <br />
      </div>
    );
  }
}

export default LetterGrid;
