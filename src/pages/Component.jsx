import { useState } from "react";

import RadixCounter from "../component/RadixCounter";
import Counter from "../component/Counter";
import Timer from "../component/timer";
import Add from "../component/adder";
import Temperatures from "../component/Tempeatures";

const Components = () => {
  const [couter, setCouter] = useState(0);

  return (
    <div className="mt-3">
      <div className="mt-2">
        <RadixCounter />
      </div>
      <div className="mt-2">
        <Counter />
      </div>
      <div className="mt-2">
        <Timer />
      </div>
      <div className="mt-2">
        <Add />
      </div>
      <div className="mt-2">
        <Temperatures />
      </div>
    </div>
  );
};

export default Components;
