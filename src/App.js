import React from "react";
import { ThemeProvider } from "./context/ThemeContex";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
