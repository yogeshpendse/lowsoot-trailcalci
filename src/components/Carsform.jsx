import { useGetinput } from "../contexts/Getinputcontext";
import { Multiinputs } from "./Multiinputs";

export function Carsform() {
  const { addnewcar, newcarsarry, removenewcar, cars, setCars } = useGetinput();
  return (
    <div>
      <h1>sdfsf</h1>
      <h2 className="">{JSON.stringify(cars)}</h2>
      <button
        className="btn__move"
        onClick={() => {
          addnewcar(newcarsarry);
        }}
      >
        create car
      </button>
      <button
        className="btn__remove"
        onClick={removenewcar}
        disabled={cars.length > 0 ? false : true}
      >
        remove car
      </button>
      {cars.map((item) => (
        <Multiinputs
          key={item.carnumber}
          mainitem={item}
          carno={item.carnumber}
          setCars={setCars}
          cars={cars}
        />
      ))}
    </div>
  );
}
