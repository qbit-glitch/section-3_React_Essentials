
import Header from "./components/Header"
import CoreConcept from "./components/CoreConcept";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx";

function App() {




  return (
    <div>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
      
    </div>
  );
}

export default App;
