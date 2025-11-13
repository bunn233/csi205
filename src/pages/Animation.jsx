import { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// นำเข้าภาพทั้งหมดจาก src/assets/
import basketball from "../assets/basketball.jpg";
import football from "../assets/football.jpg";
import volleyball from "../assets/valleyball.jpg";
import me from "../assets/me.jpg";
import cartoon from "../assets/cartoon.png";
import bg from "../assets/bg.jpg";

function Animation() {
  const fieldWidth = 700;
  const fieldHeight = 400;
  const ballDiameter = 200;

  const maxX = fieldWidth - ballDiameter - 2;
  const maxY = fieldHeight - ballDiameter - 2;

  const [running, setRunning] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [direction, setDirection] = useState({ right: true, down: true });
  const [selected, setSelected] = useState("none");
  const intervalRef = useRef(null);

  //  อัปเดตตำแหน่งการเคลื่อนไหว
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setPosition((prev) => {
          let { x, y } = prev;
          let { right, down } = direction;
          const vx = 10;
          const vy = 5;

          // การเคลื่อนที่แนวนอน
          if (right) x += vx;
          else x -= vx;
          if (x >= maxX) right = false;
          if (x <= 0) right = true;

          // การเคลื่อนที่แนวตั้ง
          if (down) y += vy;
          else y -= vy;
          if (y >= maxY) down = false;
          if (y <= 0) down = true;

          setDirection({ right, down });
          return { x, y };
        });
      }, 25);
    } else {
      clearInterval(intervalRef.current);
    }
    return () => clearInterval(intervalRef.current);
  }, [running, direction]);

  // เลือกรูปภาพ
  const handleSelect = (type) => setSelected(type);

  // เริ่ม/หยุด
  const toggleRun = () => setRunning((prev) => !prev);

  // คีย์บอร์ดควบคุม
  useEffect(() => {
    const handleKey = (event) => {
      switch (event.key) {
        case " ":
          toggleRun();
          break;
        case "0":
          handleSelect("none");
          break;
        case "1":
          handleSelect("basketball");
          break;
        case "2":
          handleSelect("football");
          break;
        case "3":
          handleSelect("volleyball");
          break;
        case "4":
          handleSelect("human");
          break;
        case "5":
          handleSelect("cartoon");
          break;
        default:
          break;
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  // กำหนดภาพพื้นหลังของลูกบอล
  const getBackground = () => {
    switch (selected) {
      case "basketball":
        return `url(${basketball})`;
      case "football":
        return `url(${football})`;
      case "volleyball":
        return `url(${volleyball})`;
      case "human":
        return `url(${me})`;
      case "cartoon":
        return `url(${cartoon})`;
      default:
        return "none";
    }
  };

  return (
    <div className="anim-container text-center p-3">
      {/* สนาม */}
      <div
        className="anim-field position-relative border rounded overflow-hidden mx-auto"
        style={{
          width: fieldWidth,
          height: fieldHeight,
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* ลูกบอล */}
        <div
          className="anim-ball position-absolute rounded-circle shadow"
          style={{
            left: position.x,
            top: position.y,
            width: ballDiameter,
            height: ballDiameter,
            backgroundImage: getBackground(),
            backgroundColor: selected === "none" ? "lightgrey" : "transparent",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      {/* ปุ่มควบคุม */}
      <div className="anim-control d-flex flex-column align-items-center mt-3">
        <button
          className={`btn ${running ? "btn-warning" : "btn-success"} mb-3`}
          onClick={toggleRun}
        >
          <i className={`bi ${running ? "bi-pause" : "bi-play"}`}></i>{" "}
          {running ? "PAUSE" : "RUN"}
        </button>

        <div className="d-flex flex-wrap justify-content-center">
          {[
            { id: "none", label: "None", variant: "secondary" },
            { id: "basketball", label: "Basketball" },
            { id: "football", label: "Football" },
            { id: "volleyball", label: "Volleyball" },
            { id: "human", label: "Human" },
            { id: "cartoon", label: "Cartoon" },
          ].map((btn) => (
            <button
              key={btn.id}
              onClick={() => handleSelect(btn.id)}
              className={`btn m-1 ${
                selected === btn.id
                  ? btn.variant === "secondary"
                    ? "btn-secondary"
                    : "btn-primary"
                  : btn.variant === "secondary"
                  ? "btn-outline-secondary"
                  : "btn-outline-primary"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Animation;
