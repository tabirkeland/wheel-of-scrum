import { Component } from "react";

import * as WinWheel from "winwheeljs";

/*
    Docs:
        - repo: https://github.com/zarocknz/javascript-winwheel
        - http://dougtesting.net/winwheel/docs
*/

class Wheel extends Component {
  wheel = null;

  state = {
    selected: null,
  };

  onWheelFinished = (seg) => {
    // set the local state
    this.setState({ selected: seg.text ?? null });
    // propagate up to main component
    this.props.onChange(seg.text);
  };

  componentDidMount() {
    this.wheel = new WinWheel({
      numSegments: 8, // Specify number of segments.
      outerRadius: 212, // Set outer radius so wheel fits inside the background.
      textFontSize: 28, // Set font size as desired.
      segments: [
        { fillStyle: "#ee1c24", text: "300" },
        { fillStyle: "#3cb878", text: "450" },
        { fillStyle: "#f6989d", text: "600" },
        { fillStyle: "#00aef0", text: "750" },
        { fillStyle: "#f26522", text: "500" },
        {
          fillStyle: "#000000",
          text: "BANKRUPT",
          textFontSize: 16,
          textFillStyle: "#ffffff",
        },
        { fillStyle: "#e70697", text: "3000" },
        { fillStyle: "#fff200", text: "600" },
        { fillStyle: "#f6989d", text: "700" },
        { fillStyle: "#ee1c24", text: "350" },
        { fillStyle: "#3cb878", text: "500" },
        { fillStyle: "#f26522", text: "800" },
        { fillStyle: "#a186be", text: "300" },
        { fillStyle: "#fff200", text: "400" },
        { fillStyle: "#00aef0", text: "650" },
        { fillStyle: "#ee1c24", text: "1000" },
        { fillStyle: "#f6989d", text: "500" },
        { fillStyle: "#f26522", text: "400" },
        { fillStyle: "#3cb878", text: "900" },
        {
          fillStyle: "#000000",
          text: "BANKRUPT",
          textFontSize: 16,
          textFillStyle: "#ffffff",
        },
        { fillStyle: "#a186be", text: "600" },
        { fillStyle: "#fff200", text: "700" },
        { fillStyle: "#00aef0", text: "800" },
        { fillStyle: "#ffffff", text: "LOOSE TURN", textFontSize: 12 },
      ],

      // Specify the animation to use.
      animation: {
        spins: 3, // Default number of complete spins.
        duration: 5, // Duration in seconds.
        type: "spinToStop",
        callbackFinished: this.onWheelFinished,
      },
      // Turn pins on.
      pins: {
        number: 24,
        fillStyle: "silver",
        outerRadius: 4,
      },
    });
  }

  render() {
    const { locked } = this.props;
    const { selected } = this.state;

    return (
      <>
        <h2>{!!locked ? "" : "Spin the Wheel"}</h2>
        <div className="wheel-container">
          <canvas
            id="canvas"
            width="434"
            height="434"
            align="center"
            valign="center"
            style={{ paddingTop: "100px" }}
          ></canvas>
        </div>
        <div>
          <button
            disabled={locked}
            className="spin-button"
            onClick={() => this.wheel.startAnimation()}
          >
            Spin
          </button>
        </div>
        {!!selected && (
          <>
            <p>Result: {selected}</p>
          </>
        )}
      </>
    );
  }
}

export default Wheel;
