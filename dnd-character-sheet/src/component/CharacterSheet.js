
function increaseValue(e, character, characterIndex, valueToIncrease, valueIndex){
  console.log("Hi");
    let charList = character;
    console.log("Inv CL", charList[valueToIncrease][valueIndex]);
    // let attributeValue = characterList[characterIndex][valueToIncrease][valueIndex][1]++;
    // charList[characterIndex][valueToIncrease][valueIndex][1] = attributeValue;
  }

  function decreaseValue(e, characterList, characterIndex, valueToDecrease, valueIndex){
    console.log("Bye");
    const charList = characterList;
    console.log("Dec CL", charList[valueToDecrease][valueIndex]);
    // const selectedCharacterValues = characterList[characterIndex][valueToDecrease][0];
  }

  
export function CharacterSheet(props){
  let {characterList, classList} = props;
  console.log("Character List", characterList);
    return (
      characterList.map((character, characterIndex) => {
        return (
          <div key={characterIndex} className='character_sheet'>
          <div>
            <h1>Character # {characterIndex + 1}</h1>
            <div className='checks'>
              <h1>Ability Checks</h1>
              <h1>Skill Checks</h1>
            </div>
          </div>

          
          <div className='class_stats'>

            {/* Attributes */}
            <div className="character_attributes">
            {character.attributes.map((attribute, attributeIndex) => {
              return (
                <div key={attributeIndex} >
                  {attribute[0]}
                  <button
                    name={attribute[0]}
                    value={attribute[1]}
                    onClick={(e) => increaseValue(e, character, characterIndex, "attributes", attributeIndex)}
                    >+

                    </button>
                  <button name={attribute[0]} value={attribute[1]} onClick={(e) => decreaseValue(e, character, characterIndex, "attributes", attributeIndex)}>-</button>
                  {attribute[1]}
                </div>
              )
            })}
            </div>

            {/* Classes */}
            <div className="character_class">
              {Object.keys(classList).map((characterClass, index) => (
                <p key={index}>
                  {characterClass}
                </p>
              ))}
            </div>

            {/* Skills */}
            <div className="character_skills">
              {character.skills.map((skill, skillIndex) => {
                return (
                  <div key={skillIndex} name={skill[0]}>
                    {skill[0].name}
                    <button>+</button>
                    <button>-</button>
                    {skill[1]}
                  </div>
                )
              })}
            </div>
          </div>

        </div>
        )
      })
    )
  }