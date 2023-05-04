import axios from "axios";

//GET API SPELLS

export const getAllSpells = async () => {
  const allApiCreatures = (await axios("https://api.tibiadata.com/v3/spells"))
    .data.spells.spell_list;
  return allApiCreatures;
};
