export function Multiinputs(params) {
  const { carno, setCars, mainitem } = params;
  function setdriveEachweek(carno, driveeachweekno) {
    const driveeachweeknum = driveeachweekno.length > 0 ? driveeachweekno : "0";
    setCars((prevstate) => {
      const newstaete = [...prevstate].map((item) => {
        if (item.carnumber === carno) {
          return { ...item, driveeachweek: driveeachweeknum };
        }
        return item;
      });
      return newstaete;
    });
  }
  function setcarType(carno, carstring) {
    setCars((prevstate) => {
      const newstaete = [...prevstate].map((item) => {
        if (item.carnumber === carno) {
          return { ...item, cartype: carstring };
        }
        return item;
      });
      return newstaete;
    });
  }
  function kilometersperliter(carno, kmsperliter) {
    const kmsperltr = kmsperliter.length > 0 ? kmsperliter : "0";
    setCars((prevstate) => {
      const newstaete = [...prevstate].map((item) => {
        if (item.carnumber === carno) {
          return { ...item, kilometersperliter: kmsperltr };
        }
        return item;
      });
      return newstaete;
    });
  }
  //   btn__option--select
  return (
    <>
      {/* <h1>--{carno}--</h1> */}
      <p className="question__text">What type of car is car{carno}?</p>
      <div>
        <button
          className={
            mainitem.cartype === "gasoline"
              ? "btn__option btn__option--select"
              : "btn__option"
          }
          onClick={() => setcarType(carno, "gasoline")}
        >
          Gasoline
        </button>
        <button
          className={
            mainitem.cartype === "hybrid"
              ? "btn__option btn__option--select"
              : "btn__option"
          }
          onClick={() => setcarType(carno, "hybrid")}
        >
          Hybrid
        </button>
        <button
          className={
            mainitem.cartype === "electric"
              ? "btn__option btn__option--select"
              : "btn__option"
          }
          onClick={() => setcarType(carno, "electric")}
        >
          Electric
        </button>
      </div>
      <p className="car__question">
        How many km do you drive each week in Car {carno}?
      </p>
      <input
        className="input__custom"
        value={mainitem.driveeachweek}
        onChange={(event) => setdriveEachweek(carno, event.target.value)}
        type="number"
        min="0"
      />
      {mainitem.cartype !== "electric" && (
        <>
          <p className="car__question">
            How many kilometers per liter does Car {carno} get?
          </p>
          <input
            className="input__custom"
            value={mainitem.kilometersperliter}
            type="number"
            min="1"
            onChange={(event) => kilometersperliter(carno, event.target.value)}
          />
        </>
      )}
    </>
  );
}
