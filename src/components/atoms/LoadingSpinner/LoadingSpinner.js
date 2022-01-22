import { useState, useEffect } from "react";
import spinner from "../../../assets/loader.svg";
import "./LoadingSpinner.css";

function LoadingSpinner() {
  const [loadingDot, setLoadingDot] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingDot.length < 5) {
        setLoadingDot((prev) => prev + " .");
      } else {
        setLoadingDot("");
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [loadingDot]);

  return (
    <div className="loading-spinner-container">
      <img width={100} height={100} src={spinner} alt="loading spinner" />
      <span className="loading-text">Loading{loadingDot}</span>
    </div>
  );
}

export default LoadingSpinner;
