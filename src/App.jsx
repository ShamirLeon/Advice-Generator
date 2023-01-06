import React, { useState, Component } from "react";
import axios from "axios";
import DividerMobile from "./assets/icons/DividerMobile";
import DividerDesktop from "./assets/icons/DividerDesktop";
import IconDice from "./assets/icons/IconDice";

const baseURL = "https://api.adviceslip.com/advice";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      advice: "Click to custom advice"
    };
    console.log(this.state);

    this.id = {
      id: 0,
    };
  }

  render() {
    // const [id, setId] = useState();
    const getAdvice = () => {
      axios.get(baseURL).then((response) => {
        this.setState(response.data.slip);
        this.id = (response.data.slip.id)
        console.log(this.state);
      });
    };
    return (
      <main className="h-[100vh] flex items-center justify-center px-6 bg-dark-600">
        <div className="relative text-center bg-dark-500 rounded-xl px-3">
          <h3 className="font-manrope uppercase text-neon-300 my-5 tracking-wider text-sm">
            Advice #{this.state.id}
          </h3>
          <p className="text-cyanC-300 text-2xl font-extrabold mb-5 lg:mb-12 ">
            "{this.state.advice}"
          </p>
          <DividerMobile className="mx-auto lg:hidden mb-16"></DividerMobile>
          <DividerDesktop className="hidden mx-auto"></DividerDesktop>

          <button
            className="absolute p-5 bg-neon-300 rounded-[50%] left-0 right-0 w-fit -bottom-8 mx-auto"
            onClick={getAdvice}
          >
            <IconDice></IconDice>
          </button>
        </div>
      </main>
    );
  }
}
