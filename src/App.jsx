
import Header from "./components/Header"
import CoreConcept from "./components/CoreConcept";

import { CORE_CONCEPTS, EXAMPLES } from "./data.js"
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";


function App() {

  const [selectedTopic, setSelectedTopic] = useState('')

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
  }

  console.log("App component is rendering")


  return (
    <div>
      <Header />
      <main>
        {/* <h2>Time to get started!</h2> */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => <CoreConcept key={item.title} {...item}/>)}
            
          </ul>
        </section>

        <section id="examples">
            <h2>Examples</h2>
            <menu>
              <TabButton selectedButton={selectedTopic === 'components'}  onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton selectedButton={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton selectedButton={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton selectedButton={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {!selectedTopic ? <p>Please select a topic</p> : null}
            {selectedTopic && <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>}

        </section>

      </main>
      
    </div>
  );
}

export default App;
