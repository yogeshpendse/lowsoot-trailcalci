import { useGetinput } from "../contexts/Getinputcontext";
import { Multiinputs } from "./Multiinputs";

export function Carsform() {
  const { addnewcar, newcarsarry, removenewcar, cars, setCars } = useGetinput();
  return (
    <div>
      <div className="container__mainbuttons">
        <button
          className="btn__move"
          onClick={() => {
            addnewcar(newcarsarry);
          }}
        >
          <i className="bi bi-plus" /> vehicle
        </button>
        <button
          className="btn__remove"
          onClick={removenewcar}
          disabled={cars.length > 0 ? false : true}
        >
          <i className="bi bi-dash" /> vehicle
        </button>
      </div>
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
