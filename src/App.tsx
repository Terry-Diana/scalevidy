import React from "react";
import "./App.css";
import { AppContent } from "./Components/AppContent";
import { VideoStateProvider } from "./Utils/VideoStateContext";
import { VideoProvider } from "./Context/VideoContext";

function App() {
  return (
    <VideoProvider>
      <VideoStateProvider>
        <AppContent />
      </VideoStateProvider>
    </VideoProvider>
  );
}

export default App;
