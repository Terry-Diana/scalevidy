import React from "react";
import "./App.css";
import { AppContent } from "./Components/AppContent";
import { VideoProvider } from "./Context/VideoContext";

function App() {
  return (
    <VideoProvider>
      <AppContent />
    </VideoProvider>
  );
}

export default App;
