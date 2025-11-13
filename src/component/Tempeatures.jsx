import { useState } from "react";

const Temperatures = () => {
  const [celsius, setCelsius] = useState(25.0);

  // แปลงหน่วย
  const toFahrenheit = (c) => c * 9 / 5 + 32;
  const toKelvin = (c) => c + 273.15;

  // เมื่อปรับค่าด้วยปุ่ม +/-
  const updateTemp = (type, delta) => {
    if (type === "C") setCelsius((prev) => prev + delta);
    else if (type === "F") {
      // แปลง Fahrenheit → Celsius ก่อนคำนวณ
      const c = (toFahrenheit(celsius) + delta - 32) * 5 / 9;
      setCelsius(c);
    } else if (type === "K") {
      const c = celsius + delta; // delta ของ K = delta ของ C
      setCelsius(c);
    }
  };

  return (
    <div className="border border-2 border-black rounded-3 p-3 m-auto"
      style={{ width: "800px" }}>
      <h5 className="text-center fw-bold fs-4">TEMPERATURES</h5>

      <div className="d-flex justify-content-around mt-3">

        {/* Celsius */}
        <div>
          <div className="text-primary fw-bold mb-1 d-flex justify-content-around">CELSIUS</div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <button className="btn btn-danger btn-sm" onClick={() => updateTemp("C", -1)}>–</button>
            <div className="border rounded px-3 py-2 bg-light fw-bold">
              {celsius.toFixed(2)}
            </div>
            <button className="btn btn-success btn-sm" onClick={() => updateTemp("C", +1)}>+</button>
          </div>
          <small className="text-muted d-flex justify-content-around">°C</small>
        </div>

        {/* Fahrenheit */}
        <div>
          <div className="text-primary fw-bold mb-1 d-flex justify-content-around">FAHRENHEIT</div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <button className="btn btn-danger btn-sm" onClick={() => updateTemp("F", -1)}>–</button>
            <div className="border rounded px-3 py-2 bg-light fw-bold">
              {toFahrenheit(celsius).toFixed(2)}
            </div>
            <button className="btn btn-success btn-sm" onClick={() => updateTemp("F", +1)}>+</button>
          </div>
          <small className="text-muted d-flex justify-content-around">°F</small>
        </div>

        {/* Kelvin */}
        <div>
          <div className="text-primary fw-bold mb-1 d-flex justify-content-around">KELVIN</div>
          <div className="d-flex align-items-center justify-content-center gap-2">
            <button className="btn btn-danger btn-sm" onClick={() => updateTemp("K", -1)}>–</button>
            <div className="border rounded px-3 py-2 bg-light fw-bold">
              {toKelvin(celsius).toFixed(2)}
            </div>
            <button className="btn btn-success btn-sm" onClick={() => updateTemp("K", +1)}>+</button>
          </div>
          <small className="text-muted d-flex justify-content-around">K</small>
        </div>

      </div>
    </div>
  );
};

export default Temperatures;
