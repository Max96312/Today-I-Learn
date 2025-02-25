// 리엑트가 리렌더링 되는 3가지 경우
// 1. state의 값이 변경될 경우
// 2. props의 값이 변경될 경우
// 3. 부모컴포넌트가 리렌더링될 경우

import { useState } from "react";

export const Bulb = () => {
  const [light, setLight] = useState("OFF");

  console.log(light);
  return (
    <div>
      <div>
        {light === "ON" ? (
          <h1 style={{ backgroundColor: "orange" }}>ON</h1>
        ) : (
          <h1 style={{ backgroundColor: "gray" }}>OFF</h1>
        )}
      </div>
      <button
        onClick={() => {
          setLight(light === "ON" ? "OFF" : "ON");
        }}
      >
        {light === "ON" ? "끄거" : "켜기"}
      </button>
    </div>
  );
};
