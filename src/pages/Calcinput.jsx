import { useState } from "react";
import { Carsform } from "../components/Carsform";
import { Navigationcomp } from "../components/Navigationcomp";
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
} from "../components/Questions";
import { Summaryofinputs } from "../components/Summaryofinputs";

export const Calcinput = () => {
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
    <>
      <Navigationcomp
        lengthkeys={lengthkeys}
        gotoPrev={gotoPrev}
        gotoNext={gotoNext}
        state={state}
      />
      <div className="question__component">
        {Currentcomp !== undefined && <Currentcomp />}
      </div>
    </>
  );
};
