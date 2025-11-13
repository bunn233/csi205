import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="border border-2 border-black rounded-3 p-3 m-auto"
      style={{ width: "400px" }}>
      <div className="text-center fw-bold fs-4">COUNTER</div>
      <div className="d-flex justify-content-center align-items-center gap-3 mt-2">
        <button className="btn btn-danger" onClick={() => setCount(count - 1)}>
          &minus;
        </button>
        <span className="text-center fw-bold fs-4">{count}</span>
        <button className="btn btn-success" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
};

export default Counter;
