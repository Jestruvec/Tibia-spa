import axios from "axios";

//GET API CREATURES

export const getAllApiCreatures = async () => {
  const allApiCreatures = (
    await axios("https://api.tibiadata.com/v3/creatures")
  ).data.creatures.creature_list;
  return allApiCreatures;
};

export const getCreatureByRace = async (race) => {
  const creature = (
    await axios(`https://api.tibiadata.com/v3/creature/${race}`)
  ).data.creature;
  return creature;
};
