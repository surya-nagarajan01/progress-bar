import React, { useEffect, useState } from "react";

const ProgressBar = ({ value = 0 }) => {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    const check_value = Math.min(100, Math.max(value, 0));
    setProgress(check_value);
  }, [value]);

  return (
    <>
      <div className="container">
        <div className="progress-bar-container">
          <span className="progress-label">{progress}%</span>
          <div className="progress-bar" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
