import { useEffect, useState } from "react";
import "./App.css";
import Quote from "./Quote";

function App() {
  const [color, setColor] = useState("");

  useEffect(() => {
    generateColor();
  }, []);

  const generateColor = () => {
    setColor(
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  };

  return (
    <div className="App" style={{ background: "#" + color }}>
      <div className="container">
        {/* Pass the function generateColor to Quote so that every new quote can generate a new random color. Pass the color so that the first generated quote can have a color. */}
        <Quote handleColor={generateColor} color={color} />
      </div>
    </div>
  );
}

export default App;
