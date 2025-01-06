import React from "react";
import { useVideoContext } from "../Context/VideoContext";
import "../Styles/ResolutionPicker.css";

export const ResolutionPicker: React.FC = () => {
  const { resolution, setResolution } = useVideoContext();
  const resolutions = ["1080p", "4k", "8k"];

  return (
    <div className="resolution-picker">
      <h3>Select Resolution</h3>
      <ul>
        {resolutions.map((res) => (
          <li
            key={res}
            onClick={() => setResolution(res)}
            className={res === resolution ? "selected" : ""}
          >
            {res}
          </li>
        ))}
      </ul>
    </div>
  );
};
