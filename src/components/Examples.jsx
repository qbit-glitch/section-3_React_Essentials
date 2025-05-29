import { EXAMPLES } from "../data.js"
import { useState } from "react"
import TabButton from "./TabButton.jsx"
import Section from "./Section.jsx"
import Tabs from "./Tabs.jsx"

export default function Examples(){

    const [selectedTopic, setSelectedTopic] = useState('')

    function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    console.log(selectedTopic)
    }

    console.log("App component is rendering")
    
    let tabContent = <p>Please Select a Topic</p>
    if(selectedTopic){
      tabContent = <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>
                  {EXAMPLES[selectedTopic].code}
                </code>
              </pre>
            </div>
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs buttons={
              <>
                <TabButton selectedButton={selectedTopic === 'components'}  onSelect={() => handleSelect('components')}>Components</TabButton>
                <TabButton selectedButton={selectedTopic === 'jsx'} onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                <TabButton selectedButton={selectedTopic === 'props'} onSelect={() => handleSelect('props')}>Props</TabButton>
                <TabButton selectedButton={selectedTopic === 'state'} onSelect={() => handleSelect('state')}>State</TabButton>
              
              </>
            }>{tabContent}</Tabs>
            

        </Section>
    )
}