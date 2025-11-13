import { useState, useEffect } from "react";

function Calculator() {
  const [screen, setScreen] = useState("0");
  const [state, setState] = useState("s0");
  const [lastOperator, setLastOperator] = useState("?");

  const numberClick = (number) => {
    if (state === "s0") {
      setScreen(number.toString());
      setState("s1");
    } else if (state === "s1") {
      setScreen((prev) => (prev.length < 9 ? prev + number.toString() : prev));
    }
  };

  const operatorClick = (operator) => {
    if (state === "s1" || state === "s2") {
      setLastOperator(operator);
      setState("s2");
    }
  };

  const equalClick = () => {
    console.log("=");
  };

  const ceClick = () => {
    setScreen("0");
    setState("s0");
    setLastOperator("?");
  };

  useEffect(() => {
    const handleKey = (event) => {
      if (event.key >= "0" && event.key <= "9") {
        numberClick(Number(event.key));
      } else if (event.key === "+") {
        operatorClick("+");
      } else if (event.key === "-") {
        operatorClick("-");
      } else if (event.key === "Enter") {
        equalClick();
      } else if (event.key === "Escape") {
        ceClick();
      }
    };

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [state, screen, lastOperator]);

  const getBtnClass = (id) => {
    if (lastOperator === id) return "btn btn-warning m-1 px-3";
    if (id === "+" || id === "-") return "btn btn-success m-1 px-3";
    return "btn btn-outline-primary m-1 px-3";
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-5">
      <div className="card shadow-lg p-4" style={{ maxWidth: "500px" }}>
        <h5 className="text-center mb-3 text-secondary">Calculator</h5>

        {/* จอแสดงผล */}
        <div className="border rounded bg-light text-end p-3 mb-3 fs-4 fw-semibold">
          {screen}
        </div>

        {/* แถวที่ 1 */}
        <div
          className="d-grid"
          style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "0.4rem" }}
        >
          <button className="btn btn-secondary m-1" disabled>
            MC
          </button>
          <button className="btn btn-secondary m-1" disabled>
            MR
          </button>
          <button className="btn btn-secondary m-1" disabled>
            M+
          </button>
          <button className="btn btn-secondary m-1" disabled>
            M-
          </button>
          <button className="btn btn-danger m-1" onClick={ceClick}>
            CE
          </button>
        </div>

        {/* แถวที่ 2 */}
        <div
          className="d-grid"
          style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "0.4rem" }}
        >
          {[7, 8, 9].map((n) => (
            <button
              key={n}
              className="btn btn-outline-primary m-1"
              onClick={() => numberClick(n)}
            >
              {n}
            </button>
          ))}
          <button className="btn btn-secondary m-1" disabled>
            ÷
          </button>
          <button className="btn btn-secondary m-1" disabled>
            √
          </button>
        </div>

        {/* แถวที่ 3 */}
        <div
          className="d-grid"
          style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "0.4rem" }}
        >
          {[4, 5, 6].map((n) => (
            <button
              key={n}
              className="btn btn-outline-primary m-1"
              onClick={() => numberClick(n)}
            >
              {n}
            </button>
          ))}
          <button className="btn btn-secondary m-1" disabled>
            ×
          </button>
          <button className="btn btn-secondary m-1" disabled>
            %
          </button>
        </div>

        {/* แถวที่ 4 */}
        <div
          className="d-grid"
          style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "0.4rem" }}
        >
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className="btn btn-outline-primary m-1"
              onClick={() => numberClick(n)}
            >
              {n}
            </button>
          ))}
          <button
            id="minus"
            className={getBtnClass("-")}
            onClick={() => operatorClick("-")}
          >
            &minus;
          </button>
          <button className="btn btn-secondary m-1" disabled>
            1/x
          </button>
        </div>

        {/* แถวที่ 5 */}
        <div
          className="d-grid"
          style={{ gridTemplateColumns: "repeat(5, 1fr)", gap: "0.4rem" }}
        >
          <button
            className="btn btn-outline-primary m-1"
            onClick={() => numberClick(0)}
          >
            0
          </button>
          <button className="btn btn-secondary m-1" disabled>
            .
          </button>
          <button className="btn btn-secondary m-1" disabled>
            +/−
          </button>
          <button
            id="plus"
            className={getBtnClass("+")}
            onClick={() => operatorClick("+")}
          >
            +
          </button>
          <button className="btn btn-success m-1" onClick={equalClick}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
