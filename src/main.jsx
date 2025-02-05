import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import ClickOutside from "./ClickOutside.jsx";
import ExpandingTextarea from "./ExpandingTextArea.jsx";
import FieldNotes from "./FieldNotes.jsx";
import FollowTheLeader from "./FollowTheLeader.jsx";
import ContextApp from "./Context/ContextApp.jsx";
import LanguageChange from "./translation/LanguageChange.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    ##############################
    <LanguageChange />
  </StrictMode>
);
