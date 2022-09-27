import { useGetinput } from "../contexts/Getinputcontext";
import { useGetQuestion } from "../contexts/Questioncontext";
import { useForm } from "react-hook-form";
import axios from "axios";
import { countriesarray } from "../data/countries";

export function Summaryofinputs() {
  const { questionstate } = useGetQuestion();
  const { cars } = useGetinput();
  const { register, handleSubmit } = useForm();
  const newobj = {
    shortflights: questionstate?.shortflights,
    longflights: questionstate?.longflights,
    bustravel: questionstate?.bustravel,
    railwaytravel: questionstate?.railwaytravel,
    furniturecost: questionstate?.furniturecost,
    clothescost: questionstate?.clothescost,
    suppliescost: questionstate?.suppliescost,
    electricityconsumtion: questionstate?.electricityconsumtion,
    gasconsumption: questionstate?.gasconsumption,
    cars,
  };
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://lossoo.bleedblue.repl.co/injectdata",
        {
          mail: data.mail,
          countrycode: data.countrycode,
          recordcode: Date.now(),
          ...newobj,
        }
      );
      console.log(response.status, response.statusText, response);
      localStorage.setItem("clientcodeval", data.mail);
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <div>
      <form className="submit__form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input__custom"
          type="email"
          placeholder="enter your mail"
          {...register("mail", { required: true })}
        />
        <select
          {...register("countrycode", { required: true })}
          name="countries"
          className="input__custom--dropdown"
        >
          {countriesarray.map((item) => (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
        <button className="submit__formbtn" type="submit">
          Get the report
        </button>
      </form>
      <div className="summary__record">
        <p className="summary__statement">short flights taken</p>
        <p className="summary__statementvalue">{questionstate?.shortflights}</p>
      </div>
      <div className="summary__record">
        <p className="summary__statement">long flights taken</p>
        <p className="summary__statementvalue">{questionstate?.longflights}</p>
      </div>
      <div className="summary__record">
        <p className="summary__statement">bustravel taken</p>
        <p className="summary__statementvalue">{questionstate?.bustravel}</p>
      </div>
      <div className="summary__record">
        <p className="summary__statement">railwaytravel taken</p>
        <p className="summary__statementvalue">
          {questionstate?.railwaytravel}
        </p>
      </div>
      <div className="summary__record">
        <p className="summary__statement">furniturecost taken</p>
        <p className="summary__statementvalue">
          {questionstate?.furniturecost}
        </p>
      </div>
      <div className="summary__record">
        <p className="summary__statement">clothescost taken</p>
        <p className="summary__statementvalue">{questionstate?.clothescost}</p>
      </div>
      <div className="summary__record">
        <p className="summary__statement">suppliescost taken</p>
        <p className="summary__statementvalue">{questionstate?.suppliescost}</p>
      </div>
      <div className="summary__record">
        <p className="summary__statement">electricityconsumtion taken</p>
        <p className="summary__statementvalue">
          {questionstate?.electricityconsumtion}
        </p>
      </div>
      <div className="summary__record">
        <p className="summary__statement">gasconsumption taken</p>
        <p className="summary__statementvalue">
          {questionstate?.gasconsumption}
        </p>
      </div>
      {[...cars].map((car) => {
        return (
          <div className="carsummary__record" key={car.carnumber}>
            <p className="carsummary__statement">
              car no :&nbsp;
              <span className="carsummary__statementvalue">
                {car.carnumber}
              </span>
            </p>
            <p className="carsummary__statement">
              Car type :&nbsp;
              <span className="carsummary__statementvalue">{car.cartype}</span>
            </p>
            <p className="carsummary__statement">
              Drives each week :&nbsp;
              <span className="carsummary__statementvalue">
                {car.driveeachweek}
              </span>
            </p>
            <p className="carsummary__statement">
              kilometers per liter :&nbsp;
              <span className="carsummary__statementvalue">
                {car.kilometersperliter}
              </span>
            </p>
          </div>
        );
      })}
    </div>
  );
}
