import { useState } from "react";
import { useGetQuestion } from "../contexts/Questioncontext";
export function Shortflights() {
  const { questionstate, questiondispatch } = useGetQuestion();

  const [selected, setSelected] = useState(questionstate.shortflights);
  const [showcusti, setShowcusti] = useState(false);
  const optionsarray = [
    { id: 1, text: "None", value: "0" },
    { id: 2, text: "4 roundtrips (8 one ways)", value: "8" },
    { id: 3, text: "12 roundtrips (24 one ways)", value: "24" },
    { id: 4, text: "custom", value: "1", isCustom: true },
  ];
  return (
    <>
      <h1>How many short flights do you take each year?</h1>
      <p>shortflights -&gt; {questionstate.shortflights}</p>
      <p>
        Count any flights shorter than 3 hours or around 1000km, like flying
        from San Francisco to Los Angeles.
      </p>
      {[...optionsarray].map((item) => (
        <p
          onClick={() => {
            setSelected(Number(item.value));
            questiondispatch({
              type: "SET_SHORT_FLIGHT",
              payload: { shortflights: item.value },
            });
            if (item?.isCustom) {
              setShowcusti(true);
            } else {
              setShowcusti(false);
            }
          }}
          key={item.id}
          className={
            Number(questionstate.shortflights) === Number(item.value)
              ? "seleopt"
              : "onononono"
          }
        >
          {item.text}
        </p>
      ))}
      {showcusti && (
        <input
          value={questionstate.shortflights}
          type="number"
          onChange={(event) =>
            questiondispatch({
              type: "SET_SHORT_FLIGHT",
              payload: {
                shortflights:
                  event.target.value.length > 0 ? event.target.value : "0",
              },
            })
          }
          min="0"
        />
      )}
    </>
  );
}
export function Longflights() {
  const { questionstate, questiondispatch } = useGetQuestion();
  const [selected, setSelected] = useState(Number(questionstate.longflights));
  const [showcusti, setShowcusti] = useState(false);
  const optionsarray = [
    { id: 1, text: "None", value: "0" },
    { id: 2, text: "2 roundtrips  (4 one ways)", value: "4" },
    { id: 3, text: "4 roundtrips (8 one ways)", value: "8" },
    { id: 4, text: "custom", value: "1", isCustom: true },
  ];
  return (
    <>
      <h1>How many long flights do you take each year?</h1>
      <p>longflights -&gt; {questionstate.longflights}</p>
      <p>
        Count any flights longer than 3 hours or much greater than 1000km, like
        flying from Los Angeles to New York.
      </p>
      {[...optionsarray].map((item) => (
        <p
          onClick={() => {
            setSelected(Number(item.value));
            questiondispatch({
              type: "SET_LONG_FLIGHT",
              payload: { longflights: item.value },
            });
            if (item?.isCustom) {
              setShowcusti(true);
            } else {
              setShowcusti(false);
            }
          }}
          key={item.id}
          className={selected === Number(item.value) ? "seleopt" : "onononono"}
        >
          {item.text}
        </p>
      ))}
      {showcusti && (
        <input
          value={questionstate.longflights}
          type="number"
          onChange={(event) =>
            questiondispatch({
              type: "SET_LONG_FLIGHT",
              payload: {
                longflights:
                  event.target.value.length > 0 ? event.target.value : "0",
              },
            })
          }
          min="0"
        />
      )}
    </>
  );
}
export function Bustravel() {
  const { questionstate, questiondispatch } = useGetQuestion();
  return (
    <>
      <h1>How much do you travel by bus each week?</h1>
      <p>bus travel -&gt; {questionstate.bustravel} </p>
      <p>
        Buses are pretty efficient, so it's no big deal if your estimate is a
        little off.
      </p>
      <input
        type="number"
        min="0"
        value={questionstate.bustravel}
        onChange={(event) => {
          questiondispatch({
            type: "SET_BUS_TRAVEL",
            payload: {
              bustravel:
                event.target.value.length > 0 ? event.target.value : "0",
            },
          });
        }}
      />
    </>
  );
}
export function Railtravel() {
  const { questionstate, questiondispatch } = useGetQuestion();
  return (
    <>
      <h1>How much do you travel by rail each week?</h1>
      <p>rail travel -&gt; {questionstate.railwaytravel} </p>
      <p>
        Rail is pretty efficient, so it's no big deal if your estimate is a
        little off.
      </p>
      <input
        type="number"
        min="0"
        value={questionstate.railwaytravel}
        onChange={(event) => {
          questiondispatch({
            type: "SET_RAIL_TRAVEL",
            payload: {
              railwaytravel:
                event.target.value.length > 0 ? event.target.value : "0",
            },
          });
        }}
      />
    </>
  );
}
export function Furniturecost() {
  const { questionstate, questiondispatch } = useGetQuestion();
  const [selected, setSelected] = useState(Number(questionstate.furniturecost));
  const [showcusti, setShowcusti] = useState(false);
  const optionsarray = [
    { id: 1, text: "A little ($33 USD)", value: "33" },
    { id: 2, text: "Average ($66 USD)", value: "66" },
    { id: 3, text: "A lot ($132 USD)", value: "132" },
    {
      id: 4,
      text: "custom",
      value: "30",
      isCustom: true,
    },
  ];
  return (
    <>
      <h1>How much do you spend on furniture and appliances per month?</h1>
      <p>furniturecost -&gt; {questionstate.furniturecost}</p>
      <p>Divide your total purchases this year by 12.</p>
      {[...optionsarray].map((item) => (
        <p
          onClick={() => {
            setSelected(Number(item.value));
            questiondispatch({
              type: "SET_FURNITURE_COST",
              payload: { furniturecost: item.value },
            });
            if (item?.isCustom) {
              setShowcusti(true);
            } else {
              setShowcusti(false);
            }
          }}
          key={item.id}
          className={selected === Number(item.value) ? "seleopt" : "onononono"}
        >
          {item.text}
        </p>
      ))}
      {showcusti && (
        <input
          value={questionstate.furniturecost}
          type="number"
          onChange={(event) =>
            questiondispatch({
              type: "SET_FURNITURE_COST",
              payload: {
                furniturecost:
                  event.target.value.length > 0 ? event.target.value : "0",
              },
            })
          }
          min="0"
        />
      )}
    </>
  );
}
export function Clothescost() {
  const { questionstate, questiondispatch } = useGetQuestion();
  const [selected, setSelected] = useState(Number(questionstate.clothescost));
  const [showcusti, setShowcusti] = useState(false);
  const optionsarray = [
    { id: 1, text: "A little ($24 USD)", value: "24" },
    { id: 2, text: "Average ($71 USD)", value: "71" },
    { id: 3, text: "A lot ($214 USD)", value: "214" },
    {
      id: 4,
      text: "custom",
      value: "10",
      isCustom: true,
    },
  ];
  return (
    <>
      <h1>How much do you spend on clothes each month?</h1>
      <p>clothescost -&gt; {questionstate.clothescost}</p>
      <p>Think online shopping and trips to the mall.</p>
      {[...optionsarray].map((item) => (
        <p
          onClick={() => {
            setSelected(Number(item.value));
            questiondispatch({
              type: "SET_CLOTHES_COST",
              payload: { clothescost: item.value },
            });
            if (item?.isCustom) {
              setShowcusti(true);
            } else {
              setShowcusti(false);
            }
          }}
          key={item.id}
          className={selected === Number(item.value) ? "seleopt" : "onononono"}
        >
          {item.text}
        </p>
      ))}
      {showcusti && (
        <input
          value={questionstate.clothescost}
          type="number"
          onChange={(event) =>
            questiondispatch({
              type: "SET_CLOTHES_COST",
              payload: {
                clothescost:
                  event.target.value.length > 0 ? event.target.value : "0",
              },
            })
          }
          min="0"
        />
      )}
    </>
  );
}
export function Suppliescost() {
  const { questionstate, questiondispatch } = useGetQuestion();
  const [selected, setSelected] = useState(Number(questionstate.suppliescost));
  const [showcusti, setShowcusti] = useState(false);
  const optionsarray = [
    { id: 1, text: "A little ($34 USD)", value: "34" },
    { id: 2, text: "Average ($102 USD)", value: "102" },
    { id: 3, text: "A lot ($305 USD)", value: "305" },
    {
      id: 4,
      text: "custom",
      value: "10",
      isCustom: true,
    },
  ];
  return (
    <>
      <h1>How much do you spend on services per month?</h1>
      <p>suppliescost -&gt; {questionstate.suppliescost}</p>
      <p>
        Services include health insurance, phone bills, subscriptions, hiring an
        accountant, etc. Paying a company or someone to do something for you
        falls under this category..
      </p>
      {[...optionsarray].map((item) => (
        <p
          onClick={() => {
            setSelected(Number(item.value));
            questiondispatch({
              type: "SET_SUPPLIES_COST",
              payload: { suppliescost: item.value },
            });
            if (item?.isCustom) {
              setShowcusti(true);
            } else {
              setShowcusti(false);
            }
          }}
          key={item.id}
          className={selected === Number(item.value) ? "seleopt" : "onononono"}
        >
          {item.text}
        </p>
      ))}
      {showcusti && (
        <input
          value={questionstate.suppliescost}
          type="number"
          onChange={(event) =>
            questiondispatch({
              type: "SET_SUPPLIES_COST",
              payload: {
                suppliescost:
                  event.target.value.length > 0 ? event.target.value : "0",
              },
            })
          }
          min="0"
        />
      )}
    </>
  );
}
export function Electricityconsumtion() {
  const { questionstate, questiondispatch } = useGetQuestion();
  const [selected, setSelected] = useState(
    Number(questionstate.electricityconsumtion)
  );
  const [showcusti, setShowcusti] = useState(false);
  const optionsarray = [
    { id: 1, text: "A little (23 kWh/month)", value: "23" },
    { id: 2, text: "Average (69 kWh/month)", value: "69" },
    { id: 3, text: "A lot (208 kWh/month)", value: "208" },
    {
      id: 4,
      text: "custom",
      value: "10",
      isCustom: true,
    },
  ];
  return (
    <>
      <h1>How much electricity do you use?</h1>
      <p>electricity consumtion -&gt; {questionstate.electricityconsumtion}</p>
      <p>Your electrical bill should tell you how many kWh you used.</p>
      {[...optionsarray].map((item) => (
        <p
          onClick={() => {
            setSelected(Number(item.value));
            questiondispatch({
              type: "SET_ELECTRICITY_CONSUMPTION",
              payload: { electricityconsumtion: item.value },
            });
            if (item?.isCustom) {
              setShowcusti(true);
            } else {
              setShowcusti(false);
            }
          }}
          key={item.id}
          className={selected === Number(item.value) ? "seleopt" : "onononono"}
        >
          {item.text}
        </p>
      ))}
      {showcusti && (
        <input
          value={questionstate.electricityconsumtion}
          type="number"
          onChange={(event) =>
            questiondispatch({
              type: "SET_ELECTRICITY_CONSUMPTION",
              payload: {
                electricityconsumtion:
                  event.target.value.length > 0 ? event.target.value : "0",
              },
            })
          }
          min="0"
        />
      )}
    </>
  );
}
export function Gasconsumtion() {
  const { questionstate, questiondispatch } = useGetQuestion();
  const [selected, setSelected] = useState(
    Number(questionstate.gasconsumption)
  );
  const [showcusti, setShowcusti] = useState(false);
  const optionsarray = [
    { id: 1, text: "None (0 m^3)", value: "0" },
    { id: 2, text: "Average (7 m^3)", value: "7" },
    { id: 3, text: "A lot (20 m^3)", value: "20" },
    {
      id: 4,
      text: "custom",
      value: "10",
      isCustom: true,
    },
  ];
  return (
    <>
      <h1>How much natural gas do you use?</h1>
      <p>Gas consumtion -&gt; {questionstate.gasconsumption}</p>
      <p>
        Most bills for natural gas should include the amount you used that
        month. You can divide the total by the number of people who share that
        bill.
      </p>
      {[...optionsarray].map((item) => (
        <p
          onClick={() => {
            setSelected(Number(item.value));
            questiondispatch({
              type: "SET_GAS_CONSUMPTION",
              payload: { gasconsumption: item.value },
            });
            if (item?.isCustom) {
              setShowcusti(true);
            } else {
              setShowcusti(false);
            }
          }}
          key={item.id}
          className={selected === Number(item.value) ? "seleopt" : "onononono"}
        >
          {item.text}
        </p>
      ))}
      {showcusti && (
        <input
          value={questionstate.gasconsumption}
          type="number"
          onChange={(event) =>
            questiondispatch({
              type: "SET_GAS_CONSUMPTION",
              payload: {
                gasconsumption:
                  event.target.value.length > 0 ? event.target.value : "0",
              },
            })
          }
          min="0"
        />
      )}
    </>
  );
}
