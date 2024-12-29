import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import TextInput from "./TextInput.jsx";
import VideoPlayer from "./VideoPlayer.jsx";
import FieldNotes from "./FieldNotes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    ##############################
    <TextInput />
    <VideoPlayer />
    <FieldNotes />
  </StrictMode>
);
