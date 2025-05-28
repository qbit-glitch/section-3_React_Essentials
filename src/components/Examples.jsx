import { EXAMPLES } from "../data.js"
import { useState } from "react"
import TabButton from "./TabButton.jsx"

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState('')

    function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
    }

    console.log("App component is rendering")
    
    return (
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
    )
}