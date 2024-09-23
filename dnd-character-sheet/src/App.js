import { useState, useEffect, React} from 'react';
import './App.css';
import { ATTRIBUTE_LIST, CLASS_LIST, SKILL_LIST, MAXIMUM_ATTRIBUTE_TOTAL, DEFAULT_ATTRIBUTE_VALUE, MINIMUM_ATTRIBUTE_VALUE } from './consts.js';
import { CharacterSheet } from './component/CharacterSheet/CharacterSheet.js';
import { PartySkillCheck } from './component/PartySkillCheck/PartySkillCheck.js';
import { Button } from './component/Button/Button.js';
import { TabButton } from './component/TabButton/TabButton.jsx';

function App() {

  const [selectedCharacterIndex, setSelectedCharacterIndex] = useState(0);
  console.log("Selected Character Index", selectedCharacterIndex);
  const [characterList, setCharacterList] = useState([{
    attributes: ATTRIBUTE_LIST.map(attributes => [attributes, DEFAULT_ATTRIBUTE_VALUE]),
    skills: SKILL_LIST.map(skills => [skills, DEFAULT_ATTRIBUTE_VALUE]),
    class: null,
    character_name: "Kiryu",
  }]);

  function handleAddNew(index){
    setCharacterList(prev => [...prev, {
      attributes: ATTRIBUTE_LIST.map(attributes => [attributes, DEFAULT_ATTRIBUTE_VALUE]),
      skills: SKILL_LIST.map(skills => [skills, DEFAULT_ATTRIBUTE_VALUE]),
      class: null,
      character_name: "Majima" + index,
    }]);
  }

  function handleSaveCharacter(){
    console.log("Save");
  }

  function handleResetCharacters(){
    console.log("Reset");
  }

  function handleSelectIndex(index){
    console.log("index", index);
    setSelectedCharacterIndex(index);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Character Sheet</h1>
      </header>

      <section className="App-section">
        <div>
        <Button 
          onClick={() => handleAddNew(characterList.length + 1)}
        > Add New Character </Button> 

        <Button 
          onClick={() => handleSaveCharacter()}
        > Save Character</Button> 
        <Button 
          text="Reset Characters" 
          onClick={() => handleResetCharacters()}
        > Reset Characters </Button>
        </div>  

        {/* Party Check */}
        <div>
          <PartySkillCheck/>
        </div>

        {/* Player Tab */}
        <section id="player_tabs">
          <h1> Players </h1>
          <menu>
            {characterList.map((character, characterIndex) => {
              return (
                <TabButton key={characterIndex} onClick={() => handleSelectIndex(characterIndex)} >{character.character_name}</TabButton>
              )
            })}
          </menu>
        </section>
        
        {/* Character Sheet */}
        <CharacterSheet character={characterList[selectedCharacterIndex]} classList={CLASS_LIST} class="character-sheet"/>
      </section>

    </div>
  );
}

export default App;