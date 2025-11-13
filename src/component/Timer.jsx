import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  const formatTime = (s) => {
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}m ${sec < 10 ? "0" : ""}${sec}s`;
  };

  return (
    <div className="border border-2 border-black rounded-3 p-3 m-auto"
      style={{ width: "400px" }}>
      <div className="text-center fw-bold fs-4">TIMER</div>
      <h4 className="text-center fw-bold fs-4">{formatTime(seconds)}</h4>
      <div className="d-flex justify-content-center gap-2 mt-2">
        <button className="btn btn-danger" onClick={() => { setRunning(false); setSeconds(0); }}>
          Reset
        </button>
        <button
          className={`btn ${running ? "btn-warning" : "btn-success"}`}
          onClick={() => setRunning(!running)}
        >
          {running ? "Pause" : "Run"}
        </button>
      </div>
    </div>
  );
};

export default Timer;
