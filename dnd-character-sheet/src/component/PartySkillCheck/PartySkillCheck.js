import { Dropdown } from "../Dropdown/Dropdown"
import { SKILL_LIST } from "../../consts"
export function PartySkillCheck(){
  return (
    <div>
    <h1>Party Skill Check</h1>
    <Dropdown options={SKILL_LIST}></Dropdown>
  </div>
  )
}