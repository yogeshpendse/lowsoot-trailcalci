import { useGetinput } from "../contexts/Getinputcontext";
import { useGetQuestion } from "../contexts/Questioncontext";
import { useForm } from "react-hook-form";
import axios from "axios";

export function Summaryofinputs() {
  const { questionstate } = useGetQuestion();
  const { cars } = useGetinput();
  const { register, handleSubmit } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await axios.post(
        "https://lossoo.bleedblue.repl.co/injectdata",
        {
          mail: data.mail,
          ...newobj,
        }
      );
      console.log({ status: response.status });
      console.log(response.data.postdata);
    } catch (error) {
      console.log({ error });
    }
  };
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
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="enter your mail"
          {...register("mail", { required: true })}
        />
        <button type="submit">Submit</button>
      </form>
      <p>short flights taken {questionstate?.shortflights}</p>
      <p>long flights taken {questionstate?.longflights}</p>
      <p>bustravel taken {questionstate?.bustravel}</p>
      <p>railwaytravel taken {questionstate?.railwaytravel}</p>
      <p>furniturecost taken {questionstate?.furniturecost}</p>
      <p>clothescost taken {questionstate?.clothescost}</p>
      <p>suppliescost taken {questionstate?.suppliescost}</p>
      <p>electricityconsumtion taken {questionstate?.electricityconsumtion}</p>
      <p>gasconsumption taken {questionstate?.gasconsumption}</p>
      <p>Cars</p>
      {[...cars].map((car) => {
        return (
          <div key={car.carnumber}>
            <p>car no : {car.carnumber}</p>
            <p>Car type : {car.cartype}</p>
            <p>Drives each week : {car.driveeachweek}</p>
            <p>kilometers per liter : {car.kilometersperliter}</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          // console.log(newobj);
        }}
      >
        console &uarr;&darr;&rarr;&larr;
      </button>
    </div>
  );
}
