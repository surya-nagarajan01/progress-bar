import { useEffect, useState } from "react";
import "./App.css";
import ProgressBar from "./components/progress-bar.component";

function App() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 100);
  }, []);
  return (
    <>
      <ProgressBar value={value} />
    </>
  );
}

export default App;
