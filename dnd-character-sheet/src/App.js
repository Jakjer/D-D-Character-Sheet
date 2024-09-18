import { useState, useEffect, React} from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST, MAXIMUM_ATTRIBUTE_TOTAL, DEFAULT_ATTRIBUTE_VALUE, MINIMUM_ATTRIBUTE_VALUE } from './consts.js';
import { CharacterSheet } from './component/CharacterSheet.js';
import { PartySkillCheck } from './component/PartySkillCheck.js';
import { Button } from './component/Button.js';

function App() {
  const [characterList, setCharacterList] = useState([{
    attributes: ATTRIBUTE_LIST.map(attributes => [attributes, DEFAULT_ATTRIBUTE_VALUE]),
    skills: SKILL_LIST.map(skills => [skills, DEFAULT_ATTRIBUTE_VALUE]),
    class: null,
    character_name: "Kiryu",
  }]);

  function handleAddNew(){
    setCharacterList(prev => [...prev, {
      attributes: ATTRIBUTE_LIST.map(attributes => [attributes, DEFAULT_ATTRIBUTE_VALUE]),
      skills: SKILL_LIST.map(skills => [skills, DEFAULT_ATTRIBUTE_VALUE]),
      class: null,
      character_name: "Majima",
    }]);
  }

  function handleSaveCharacter(){
    console.log("Save");
  }

  function handleResetCharacters(){
    console.log("Reset");
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Sheet</h1>
      </header>

      <section className="App-section">
        <div>
        <Button
          text="Add New Character"
          onClick={() => handleAddNew}
        />

        <Button text="Save Character" onClick={handleSaveCharacter}/>
        <Button text="Reset Characters" onClick={handleResetCharacters}/>
        </div>  
   
        {/* Party Check */}
        <div>
          <PartySkillCheck/>
        </div>

        {/* Character Sheet */}
        <div>
          <CharacterSheet characterList={characterList} classList={CLASS_LIST}/>
        </div>
      </section>

    </div>
  );
}

export default App;