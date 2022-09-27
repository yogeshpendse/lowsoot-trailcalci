import axios from "axios";
import { useEffect, useState } from "react";
import { useProtectioncontext } from "../contexts/Protectioncontext";

export const Report = () => {
  const [loader, setLoader] = useState();
  const [footprint, setFootprint] = useState(0);
  const { codeval } = useProtectioncontext();
  const url = `https://lossoo.bleedblue.repl.co/getfootprint/${codeval}`;
  useEffect(() => {
    setLoader(true);
    let controller = new AbortController();
    const signal = controller.signal;
    (async function () {
      try {
        const response = await axios.get(url, { signal: signal });
        const data = response.data.footprintvalue;
        setFootprint(data);
        setLoader(false);
      } catch (error) {
        setLoader(false);
        if (axios.isCancel(error)) {
          // console.log("Request canceled", error.message);
        } else {
          console.log(error);
        }
      }
    })();
    return () => {
      setLoader(false);
      controller.abort();
    };
  }, [url]);
  if (loader) {
    return (
      <center>
        <h1>Loading....</h1>
      </center>
    );
  }
  return (
    <div>
      <h1 className="report__text">
        Your carbon footprint is {footprint} tons of CO₂. Here's what that
        means!
      </h1>
    </div>
  );
};
