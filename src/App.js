import { useState } from "react";
import { Carsform } from "./components/Carsform";
import {
  Bustravel,
  Clothescost,
  Electricityconsumtion,
  Furniturecost,
  Gasconsumtion,
  Longflights,
  Railtravel,
  Shortflights,
  Suppliescost,
} from "./components/Questions";
import { Summaryofinputs } from "./components/Summaryofinputs";
import { Calcinput } from "./pages/exports";
function App() {
  const [state, setState] = useState(0);
  const comps = {
    carcomponent: Carsform,
    shortflights: Shortflights,
    longflights: Longflights,
    bustravel: Bustravel,
    railtravel: Railtravel,
    furniturecost: Furniturecost,
    clothescost: Clothescost,
    suppliescost: Suppliescost,
    electricityconsumtion: Electricityconsumtion,
    gasconsumtion: Gasconsumtion,
    summaryofinputs: Summaryofinputs,
  };
  const keys = Object.keys(comps);
  const lengthkeys = keys.length;
  const currentkey = keys[state];
  const Currentcomp = comps?.[currentkey];
  const gotoNext = () => {
    setState((prevstate) => prevstate + 1);
  };
  const gotoPrev = () => {
    setState((prevstate) => prevstate - 1);
  };
  return (
    <div className="App">
      <button disabled={state < 1 ? true : false} onClick={gotoPrev}>
        previous
      </button>
      <button
        disabled={state < lengthkeys - 1 ? false : true}
        onClick={gotoNext}
      >
        next
      </button>
      <Calcinput />
      {Currentcomp !== undefined && <Currentcomp />}
    </div>
  );
}

export default App;
